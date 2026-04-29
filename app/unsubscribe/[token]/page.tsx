import { pool } from "@/lib/db";
import { hashToken } from "@/lib/unsubscribe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function UnsubscribePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const tokenHash = hashToken(token);

  const tokenResult = await pool.query(
    `
    select ut.id, ut.contact_id, c.email
    from unsubscribe_tokens ut
    join contacts c on c.id = ut.contact_id
    where ut.token_hash = $1
    limit 1
    `,
    [tokenHash],
  );

  console.log("Rows found:", tokenResult.rowCount);

  if (tokenResult.rowCount === 0) {
    return <main style={{ padding: "2rem" }}>Invalid unsubscribe link.</main>;
  }

  const record = tokenResult.rows[0];

  await pool.query(
    `
    update contacts
    set status = 'unsubscribed',
        unsubscribed_at = now(),
        updated_at = now()
    where id = $1
    `,
    [record.contact_id],
  );

  await pool.query(
    `
    update unsubscribe_tokens
    set used_at = now()
    where id = $1 and used_at is null
    `,
    [record.id],
  );

  return (
    <main style={{ padding: "2rem" }}>
      <h1>You have been unsubscribed.</h1>
      <p>{record.email}</p>
    </main>
  );
}
