import crypto from "node:crypto";
import { pool } from "@/lib/db";

export async function createUnsubscribeToken(contactId: string) {
  const rawToken = crypto.randomBytes(24).toString("hex");
  const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");

  await pool.query(
    `
      insert into unsubscribe_tokens (contact_id, token_hash)
      values ($1, $2)
    `,
    [contactId, tokenHash],
  );

  return rawToken;
}

export function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}
