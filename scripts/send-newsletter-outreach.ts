// scripts/send-newsletter-outreach.ts

import type { Locale } from "../app/lib/i18n";
import { newsletterSupabase } from "../app/lib/supabase/newsletter";
import { sendNewsletterOutreach } from "../app/lib/email/sendNewsletterOutreach";

async function main() {
  console.log({
    region: process.env.AWS_REGION,
    accessKeyPresent: Boolean(process.env.AWS_ACCESS_KEY_ID),
    secretKeyPresent: Boolean(process.env.AWS_SECRET_ACCESS_KEY),
    from: process.env.NEWSLETTER_FROM_EMAIL,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  });

  const requestedLimit = Number(process.argv[2] ?? "1");

  const limit =
    Number.isFinite(requestedLimit) && requestedLimit > 0
      ? Math.min(requestedLimit, 100)
      : 1;

  const { data: contacts, error } = await newsletterSupabase
    .from("newsletter_outreach_contacts")
    .select(
      `
      id,
      email,
      locale
    `,
    )
    .is("contacted_at", null)
    .eq("do_not_contact", false)
    .order("created_at", {
      ascending: true,
    })
    .limit(limit);

  if (error) {
    throw error;
  }

  if (!contacts?.length) {
    console.log("No outreach contacts to send.");
    return;
  }

  for (const contact of contacts) {
    const { data: subscriber, error: subscriberError } =
      await newsletterSupabase
        .from("newsletter_subscribers")
        .select("id, status")
        .eq("email", contact.email)
        .maybeSingle();

    if (subscriberError) {
      console.error(`LOOKUP FAILED: ${contact.email}`, subscriberError);
      continue;
    }

    /*
     * Someone who already subscribed no longer needs
     * the one-time permission request.
     */
    if (subscriber?.status === "subscribed") {
      console.log(`SKIP already subscribed: ${contact.email}`);

      const now = new Date().toISOString();

      const { error: updateError } = await newsletterSupabase
        .from("newsletter_outreach_contacts")
        .update({
          subscribed_at: now,
          updated_at: now,
        })
        .eq("id", contact.id);

      if (updateError) {
        console.error(
          `Could not update outreach row for ${contact.email}`,
          updateError,
        );
      }

      continue;
    }

    try {
      const result = await sendNewsletterOutreach({
        email: contact.email,
        locale: contact.locale as Locale,
      });

      /*
       * Only mark as contacted after SES has
       * successfully accepted the message.
       */
      const now = new Date().toISOString();

      const { error: updateError } = await newsletterSupabase
        .from("newsletter_outreach_contacts")
        .update({
          contacted_at: now,
          updated_at: now,
        })
        .eq("id", contact.id);

      if (updateError) {
        throw updateError;
      }

      console.log(`SENT: ${contact.email} ${result.MessageId ?? ""}`);
    } catch (error) {
      /*
       * contacted_at stays NULL, so this address
       * can be retried after fixing the problem.
       */
      console.error(`FAILED: ${contact.email}`, error);
    }
  }
}

main().catch((error) => {
  console.error("Outreach script failed:", error);

  process.exitCode = 1;
});
