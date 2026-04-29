import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import crypto from "node:crypto";

const TEST_EMAIL = "contact@interstice.info";
const CAMPAIGN_SLUG = "dwr-response";

export async function GET() {
  // 1. Zorg dat contact@interstice.info bestaat en active is voor test
  const contactResult = await pool.query(
    `
    insert into contacts (email, status, language, source)
    values ($1, 'active', 'nl', 'test')
    on conflict (email) do update
    set status = 'active',
        language = 'nl',
        updated_at = now()
    returning *
    `,
    [TEST_EMAIL],
  );

  const contact = contactResult.rows[0];

  // 2. Haal campaign op
  const campaignResult = await pool.query(
    `
    select *
    from campaigns
    where slug = $1
    limit 1
    `,
    [CAMPAIGN_SLUG],
  );

  if (campaignResult.rowCount === 0) {
    return NextResponse.json(
      { error: `Campaign not found: ${CAMPAIGN_SLUG}` },
      { status: 404 },
    );
  }

  const campaign = campaignResult.rows[0];

  // 3. Maak unsubscribe token
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

  // 4. Kies taal/body
  const subject = campaign.subject_nl;
  const htmlBody = campaign.body_nl_html.replace(
    "{{unsubscribe}}",
    unsubscribeUrl,
  );

  const textBody = `
Interstice

Lees de tekst:
https://interstice.info/nl/interventions/christophe-van-gerrewey-de-witte-raaf-response

Uitschrijven:
${unsubscribeUrl}
`;

  // 5. Verstuur via Postmark
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
      Subject: subject,
      HtmlBody: htmlBody,
      TextBody: textBody,
      MessageStream: "outbound",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json({ error: errorText }, { status: 500 });
  }

  const postmarkResult = await response.json();

  return NextResponse.json({
    ok: true,
    sentTo: TEST_EMAIL,
    campaign: CAMPAIGN_SLUG,
    messageId: postmarkResult.MessageID,
    unsubscribeUrl,
  });
}
