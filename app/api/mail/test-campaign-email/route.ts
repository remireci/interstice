import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import crypto from "node:crypto";

const TEST_EMAIL = "reci.reciproque@gmail.com";
const CAMPAIGN_SLUG = "dwr-response-2";

export async function GET() {
  const contactResult = await pool.query(
    `
  insert into contacts (email, status, language, source)
  values ($1, 'active', 'en', 'test')
  on conflict (email) do update
  set updated_at = now()
  returning *
  `,
    [TEST_EMAIL],
  );

  const contact = contactResult.rows[0];

  if (contact.status !== "active") {
    return NextResponse.json({
      ok: false,
      skipped: true,
      reason: `Contact status is '${contact.status}', not active.`,
      email: contact.email,
    });
  }

  const campaignResult = await pool.query(
    `select * from campaigns where slug = $1 limit 1`,
    [CAMPAIGN_SLUG],
  );

  if (campaignResult.rowCount === 0) {
    return NextResponse.json(
      { error: `Campaign not found: ${CAMPAIGN_SLUG}` },
      { status: 404 },
    );
  }

  const campaign = campaignResult.rows[0];

  const existingDelivery = await pool.query(
    `
  select id, status, sent_at, provider_message_id
  from deliveries
  where campaign_id = $1
    and contact_id = $2
  limit 1
  `,
    [campaign.id, contact.id],
  );

  if (existingDelivery.rows.length > 0) {
    return NextResponse.json({
      ok: false,
      skipped: true,
      reason: "This campaign was already sent or queued for this contact.",
      delivery: existingDelivery.rows[0],
    });
  }

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

  const htmlBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.55;max-width:680px;">
      <h2 style="font-size:16px;margin:0 0 12px;">EN</h2>
      ${campaign.body_en_html.replaceAll("{{unsubscribe}}", unsubscribeUrl)}

      <hr style="margin:32px 0;border:none;border-top:1px solid #ddd;">

      <h2 style="font-size:16px;margin:0 0 12px;">NL</h2>
      ${campaign.body_nl_html.replaceAll("{{unsubscribe}}", unsubscribeUrl)}

      <hr style="margin:32px 0;border:none;border-top:1px solid #ddd;">

      <h2 style="font-size:16px;margin:0 0 12px;">FR</h2>
      ${campaign.body_fr_html.replaceAll("{{unsubscribe}}", unsubscribeUrl)}
    </div>
  `;

  const textBody = `
EN:
${stripHtml(campaign.body_en_html)}

NL:
${stripHtml(campaign.body_nl_html)}

FR:
${stripHtml(campaign.body_fr_html)}


Unsubscribe:
${unsubscribeUrl}
  `;
  const deliveryResult = await pool.query(
    `
  insert into deliveries (campaign_id, contact_id, status)
  values ($1, $2, 'queued')
  returning id
  `,
    [campaign.id, contact.id],
  );

  const deliveryId = deliveryResult.rows[0].id;

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
      Subject: campaign.subject_en,
      HtmlBody: htmlBody,
      TextBody: textBody,
      MessageStream: "outbound",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    await pool.query(
      `
    update deliveries
    set status = 'skipped',
        failure_reason = $1,
        updated_at = now()
    where id = $2
    `,
      [errorText, deliveryId],
    );

    return NextResponse.json({ error: errorText }, { status: 500 });
  }

  const postmarkResult = await response.json();

  await pool.query(
    `
  update deliveries
  set status = 'sent',
      sent_at = now(),
      provider_message_id = $1,
      updated_at = now()
  where id = $2
  `,
    [postmarkResult.MessageID, deliveryId],
  );

  return NextResponse.json({
    ok: true,
    sentTo: TEST_EMAIL,
    campaign: CAMPAIGN_SLUG,
    subject: campaign.subject_en,
    messageId: postmarkResult.MessageID,
  });
}

function stripHtml(html: string) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/{{unsubscribe}}/g, "")
    .trim();
}
