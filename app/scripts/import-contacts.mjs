import "dotenv/config";
import fs from "node:fs";
import pkg from "pg";
import { parse } from "csv-parse/sync";

const { Pool } = pkg;

const dbUrl = new URL(process.env.POSTGRES_URL);

dbUrl.searchParams.delete("sslmode");

console.log(
  "Connecting to database at",
  dbUrl.toString().replace(/:[^:@]+@/, ":...@"),
);

const pool = new Pool({
  connectionString: dbUrl.toString(),
  ssl: {
    rejectUnauthorized: false,
  },
});

const filePath = process.argv[2];

if (!filePath) {
  console.error(
    "Usage: node scripts/import-contacts.mjs /home/reciproque/Documents/tijdelijk/Untitled 3.csv",
  );
  process.exit(1);
}

const csv = fs.readFileSync(filePath, "utf8");

const rows = parse(csv, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

let imported = 0;
let skippedInvalid = 0;

for (const row of rows) {
  const email = String(row["Primary Email"] || "")
    .trim()
    .toLowerCase();
  const firstName = String(row["First Name"] || "").trim();
  const lastName = String(row["Last Name"] || "").trim();
  const displayName = String(row["Display Name"] || "").trim();

  if (!email || !email.includes("@")) {
    skippedInvalid++;
    continue;
  }

  const result = await pool.query(
    `
      insert into contacts (
        email,
        first_name,
        last_name,
        display_name,
        language,
        source,
        status
      )
      values ($1, $2, $3, $4, $5, $6, 'active')
      on conflict (email) do nothing
    `,
    [
      email,
      firstName || null,
      lastName || null,
      displayName || null,
      "nl",
      "manually-imported",
    ],
  );

  imported += result.rowCount;
}

await pool.end();

console.log(`CSV rows: ${rows.length}`);
console.log(`Imported new contacts: ${imported}`);
console.log(
  `Skipped existing/duplicates: ${rows.length - imported - skippedInvalid}`,
);
console.log(`Skipped invalid emails: ${skippedInvalid}`);

// import fs from "node:fs";
// import pkg from "pg";
// import { parse } from "csv-parse/sync";

// const { Pool } = pkg;

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: { rejectUnauthorized: false },
// });

// const filePath = process.argv[2];

// if (!filePath) {
//   console.error(
//     "Usage: node scripts/import-contacts.mjs /home/reciproque/Downloads/Collected Addresses.csv",
//   );
//   process.exit(1);
// }

// const csv = fs.readFileSync(filePath, "utf8");
// const rows = parse(csv, {
//   columns: true,
//   skip_empty_lines: true,
//   trim: true,
// });

// for (const row of rows) {
//   const email = String(row.email || "")
//     .trim()
//     .toLowerCase();
//   const language = String(row.language || "nl")
//     .trim()
//     .toLowerCase();
//   const source = String(row.source || "csv-import").trim();

//   if (!email || !email.includes("@")) continue;

//   await pool.query(
//     `
//       insert into contacts (email, language, source, status)
//       values ($1, $2, $3, 'active')
//       on conflict (email) do update
//       set
//         language = excluded.language,
//         source = excluded.source,
//         updated_at = now()
//     `,
//     [email, language, source],
//   );
// }

// await pool.end();
// console.log(`Imported ${rows.length} rows`);
