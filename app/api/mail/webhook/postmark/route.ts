import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

type PostmarkWebhookPayload = {
  RecordType?: string;
  SuppressSending?: unknown;
  Origin?: unknown;
  Email?: string;
  MessageID?: string;
  Description?: string;
};

export async function POST(req: NextRequest) {
  const payload = (await req.json()) as PostmarkWebhookPayload;

  await pool.query(
    `
    insert into webhook_events (provider, event_type, payload)
    values ($1, $2, $3)
    `,
    ["postmark", detectEventType(payload), payload],
  );

  const eventType = detectEventType(payload);
  const email = payload.Email ? String(payload.Email).toLowerCase() : null;
  const messageId = payload.MessageID ? String(payload.MessageID) : null;

  if (eventType === "bounce" && email) {
    await pool.query(
      `
      update contacts
      set status = 'bounced',
          bounced_at = now(),
          updated_at = now()
      where email = $1
      `,
      [email],
    );

    if (messageId) {
      await pool.query(
        `
        update deliveries
        set status = 'bounced',
            bounced_at = now(),
            failure_reason = $1,
            updated_at = now()
        where provider_message_id = $2
        `,
        [payload.Description ?? null, messageId],
      );
    }
  }

  if (eventType === "subscription_change" && email) {
    await pool.query(
      `
      update contacts
      set status = 'unsubscribed',
          unsubscribed_at = now(),
          updated_at = now()
      where email = $1
      `,
      [email],
    );
  }

  return NextResponse.json({ ok: true });
}

function detectEventType(payload: PostmarkWebhookPayload): string {
  if (payload.RecordType === "Bounce") return "bounce";
  if (payload.SuppressSending !== undefined || payload.Origin !== undefined) {
    return "subscription_change";
  }
  return "unknown";
}
