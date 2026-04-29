import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import crypto from "node:crypto";

export async function GET() {
  // 👉 vervang door jouw email
  const TEST_EMAIL = "contact@interstice.info";

  // 1. haal contact op
  const contactRes = await pool.query(
    `select * from contacts where email = $1 limit 1`,
    [TEST_EMAIL.toLowerCase()],
  );

  if (contactRes.rowCount === 0) {
    return NextResponse.json(
      { error: "Contact not found in DB" },
      { status: 404 },
    );
  }

  const contact = contactRes.rows[0];

  // 2. unsubscribe token maken
  const rawToken = crypto.randomBytes(24).toString("hex");
  const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");

  await pool.query(
    `
    insert into unsubscribe_tokens (contact_id, token_hash)
    values ($1, $2)
  `,
    [contact.id, tokenHash],
  );

  const unsubscribeUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe/${rawToken}`;

  // 3. mail sturen via Postmark
  const response = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": process.env.POSTMARK_SERVER_TOKEN!,
    },
    body: JSON.stringify({
      From: "contact@interstice.info",
      To: TEST_EMAIL,
      Subject: "Interstice",

      HtmlBody: `
        <p>Interstice is online.</p>

        <p>
          A response that was not published has been made public.
        </p>

        <p>
          <a href="https://interstice.info/en/interventions/christophe-van-gerrewey-de-witte-raaf-response">
            Read the text
          </a>
        </p>

        <hr style="margin-top:24px"/>

        <p style="font-size:12px;opacity:.7;">
          <a href="${unsubscribeUrl}">Unsubscribe</a>
        </p>
      `,

      TextBody: `
Interstice is online.

Read:
https://interstice.info/en/interventions/christophe-van-gerrewey-de-witte-raaf-response

Unsubscribe:
${unsubscribeUrl}
      `,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    return NextResponse.json({ error: text }, { status: 500 });
  }

  const data = await response.json();

  return NextResponse.json({
    ok: true,
    messageId: data.MessageID,
  });
}
