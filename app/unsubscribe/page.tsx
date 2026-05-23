// app/unsubscribe/page.tsx

import { pool } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function unsubscribe(formData: FormData) {
  "use server";

  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase();

  if (!email || !email.includes("@")) {
    return;
  }

  await pool.query(
    `
    update contacts
    set status = 'unsubscribed',
        unsubscribed_at = coalesce(unsubscribed_at, now()),
        updated_at = now()
    where lower(email) = $1
    `,
    [email],
  );
}

export default function UnsubscribeFormPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "40rem" }}>
      <h1>Unsubscribe</h1>

      <p>
        Enter your email address below if you no longer wish to receive messages
        from Interstice.
      </p>

      <form action={unsubscribe}>
        <label htmlFor="email">Email address</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          required
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem",
            width: "100%",
            border: "1px solid #888",
            borderRadius: "4px",
            background: "transparent",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "1rem",
            padding: "0.6rem 1rem",
            border: "1px solid currentColor",
            borderRadius: "4px",
            background: "transparent",
            cursor: "pointer",
            font: "inherit",
          }}
        >
          Unsubscribe
        </button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        If the address is present in our records, it will be removed from future
        mailings.
      </p>
    </main>
  );
}
