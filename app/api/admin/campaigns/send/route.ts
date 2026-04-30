import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import crypto from "node:crypto";

const CAMPAIGN_SLUG = "dwr-response-2";
const FROM_EMAIL = "contact@interstice.info";

// Safety limit. Raise later if needed.
const MAX_SEND = 100;

export async function GET() {
  return POST();
}

export async function POST() {
  const campaignResult = await pool.query(
    `select * from campaigns where slug = $1 limit 1`,
    [CAMPAIGN_SLUG],
  );

  if (campaignResult.rows.length === 0) {
    return NextResponse.json(
      { error: `Campaign not found: ${CAMPAIGN_SLUG}` },
      { status: 404 },
    );
  }

  const campaign = campaignResult.rows[0];

  const recipientsResult = await pool.query(
    `
    select c.*
    from contacts c
    where c.status = 'active'      
      and not exists (
        select 1
        from deliveries d
        where d.contact_id = c.id
          and d.campaign_id = $1
      )
    order by c.created_at asc
    limit $2
    `,
    [campaign.id, MAX_SEND],
  );

  const results: Array<{
    email: string;
    status: "sent" | "failed";
    messageId?: string;
    error?: string;
  }> = [];

  for (const contact of recipientsResult.rows) {
    const deliveryResult = await pool.query(
      `
      insert into deliveries (campaign_id, contact_id, status)
      values ($1, $2, 'queued')
      on conflict (campaign_id, contact_id) do nothing
      returning id
      `,
      [campaign.id, contact.id],
    );

    if (deliveryResult.rows.length === 0) {
      continue;
    }

    const deliveryId = deliveryResult.rows[0].id;

    try {
      const rawToken = crypto.randomBytes(24).toString("hex");
      const tokenHash = crypto
        .createHash("sha256")
        .update(rawToken)
        .digest("hex");

      await pool.query(
        `
        insert into unsubscribe_tokens (contact_id, token_hash)
        values ($1, $2)
        `,
        [contact.id, tokenHash],
      );

      const unsubscribeUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe/${rawToken}`;

      // const language = normalizeLanguage(contact.language) ?? "en";

      // const subject =
      //   language === "fr"
      //     ? campaign.subject_en
      //     : language === "nl"
      //       ? campaign.subject_en
      //       : campaign.subject_en;

      // const htmlTemplate =
      //   language === "fr"
      //     ? campaign.body_fr_html
      //     : language === "nl"
      //       ? campaign.body_nl_html
      //       : campaign.body_en_html;

      const subject = campaign.subject_en;
      const htmlTemplate = campaign.body_en_html;

      const htmlBody = wrapHtml(
        htmlTemplate.replaceAll("{{unsubscribe}}", unsubscribeUrl),
      );

      const textBody = `
${stripHtml(htmlTemplate)}

Unsubscribe:
${unsubscribeUrl}
      `.trim();

      const response = await fetch("https://api.postmarkapp.com/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Postmark-Server-Token": process.env.POSTMARK_SERVER_TOKEN!,
        },
        body: JSON.stringify({
          From: FROM_EMAIL,
          To: contact.email,
          Subject: subject,
          HtmlBody: htmlBody,
          TextBody: textBody,
          MessageStream: "outbound",
          Metadata: {
            campaign_id: campaign.id,
            contact_id: contact.id,
            delivery_id: deliveryId,
          },
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

        results.push({
          email: contact.email,
          status: "failed",
          error: errorText,
        });

        continue;
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

      await pool.query(
        `
        update contacts
        set last_sent_at = now(),
            updated_at = now()
        where id = $1
        `,
        [contact.id],
      );

      results.push({
        email: contact.email,
        status: "sent",
        messageId: postmarkResult.MessageID,
      });
    } catch (error) {
      await pool.query(
        `
        update deliveries
        set status = 'skipped',
            failure_reason = $1,
            updated_at = now()
        where id = $2
        `,
        [String(error), deliveryId],
      );

      results.push({
        email: contact.email,
        status: "failed",
        error: String(error),
      });
    }
  }

  return NextResponse.json({
    ok: true,
    campaign: CAMPAIGN_SLUG,
    attempted: recipientsResult.rows.length,
    results,
  });
}

function normalizeLanguage(language: unknown): "en" | "nl" | "fr" {
  if (language === "nl" || language === "fr" || language === "en") {
    return language;
  }

  return "en";
}

function wrapHtml(html: string) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.55;max-width:680px;">
      ${html}
    </div>
  `;
}

function stripHtml(html: string) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<[^>]+>/g, "")
    .replace(/{{unsubscribe}}/g, "")
    .trim();
}
