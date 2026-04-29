import { Pool } from "pg";

const globalForDb = globalThis as unknown as {
  pool?: Pool;
};

// export const pool =
//   globalForDb.pool ??
//   new Pool({
//     connectionString: process.env.POSTGRES_URL,
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForDb.pool = pool;
// }

// dev only
export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL?.replace(/\?sslmode=.*$/, ""),
  ssl:
    process.env.NODE_ENV === "development"
      ? { rejectUnauthorized: false }
      : { ca: process.env.PG_CA_CERT, rejectUnauthorized: true },
});
