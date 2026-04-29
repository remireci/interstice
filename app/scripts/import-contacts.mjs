import "dotenv/config";
import fs from "node:fs";
import pkg from "pg";
import { parse } from "csv-parse/sync";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const filePath = process.argv[2];

if (!filePath) {
  console.error(
    "Usage: node scripts/import-contacts.mjs /home/reciproque/Downloads/Collected Addresses_csv-utf8.csv",
  );
  process.exit(1);
}

const csv = fs.readFileSync(filePath, "utf8");

const rows = parse(csv, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

for (const row of rows) {
  const email = String(row["Primary Email"] || "")
    .trim()
    .toLowerCase();
  const firstName = String(row["First Name"] || "").trim();
  const lastName = String(row["Last Name"] || "").trim();
  const displayName = String(row["Display Name"] || "").trim();

  if (!email || !email.includes("@")) continue;

  await pool.query(
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
      on conflict (email) do update
      set
        first_name = excluded.first_name,
        last_name = excluded.last_name,
        display_name = excluded.display_name,
        updated_at = now()
    `,
    [
      email,
      firstName || null,
      lastName || null,
      displayName || null,
      "nl",
      "thunderbird-csv",
    ],
  );
}

await pool.end();
console.log(`Imported ${rows.length} rows`);

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
