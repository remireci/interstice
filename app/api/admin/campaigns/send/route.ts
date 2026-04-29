import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { sendWithPostmark } from "@/lib/postmark";
import { createUnsubscribeToken } from "@/lib/unsubscribe";

export async function POST() {
  const campaignSlug = "launch-001";

  const campaignResult = await pool.query(
    `select * from campaigns where slug = $1 limit 1`,
    [campaignSlug],
  );

  if (campaignResult.rowCount === 0) {
    return NextResponse.json({ error: "Campaign not found" }, { status: 404 });
  }

  const campaign = campaignResult.rows[0];

  const contactsResult = await pool.query(
    `select * from contacts where status = 'active' order by id asc`,
  );

  let sent = 0;

  for (const contact of contactsResult.rows) {
    const token = await createUnsubscribeToken(contact.id);
    const unsubscribeUrl = `${process.env.APP_BASE_URL}/unsubscribe/${token}`;

    const subject =
      contact.language === "fr"
        ? campaign.subject_fr
        : contact.language === "en"
          ? campaign.subject_en
          : campaign.subject_nl;

    const htmlBody =
      (contact.language === "fr"
        ? campaign.body_fr_html
        : contact.language === "en"
          ? campaign.body_en_html
          : campaign.body_nl_html) +
      `<p style="margin-top:24px;font-size:12px;opacity:.75;">
        <a href="${unsubscribeUrl}">Unsubscribe</a>
      </p>`;

    const textBody = `Visit: ${process.env.APP_BASE_URL}\nUnsubscribe: ${unsubscribeUrl}`;

    const deliveryResult = await pool.query(
      `
      insert into deliveries (campaign_id, contact_id, status)
      values ($1, $2, 'queued')
      returning id
      `,
      [campaign.id, contact.id],
    );

    const deliveryId = deliveryResult.rows[0].id;

    try {
      const result = await sendWithPostmark({
        to: contact.email,
        subject,
        htmlBody,
        textBody,
        metadata: {
          campaign_id: campaign.id,
          contact_id: contact.id,
          delivery_id: deliveryId,
        },
      });

      await pool.query(
        `
        update deliveries
        set status = 'sent',
            sent_at = now(),
            provider_message_id = $1,
            updated_at = now()
        where id = $2
        `,
        [result.MessageID, deliveryId],
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

      sent += 1;
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
    }
  }

  await pool.query(
    `
    update campaigns
    set status = 'sent',
        sent_at = now(),
        updated_at = now()
    where id = $1
    `,
    [campaign.id],
  );

  return NextResponse.json({ ok: true, sent });
}
