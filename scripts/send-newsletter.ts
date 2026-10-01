import type { Locale } from "../app/lib/i18n";
import { newsletterSupabase } from "../app/lib/supabase/newsletter";
import { sendInterventionNewsletter } from "../app/lib/email/sendInterventionNewsletter";
import { interventions } from "../app/lib/content/interventions";

async function main() {
  const slug = process.argv[2];
  const requestedLimit = Number(process.argv[3] ?? "1");

  if (!slug) {
    throw new Error("Usage: send-newsletter.ts INTERVENTION_SLUG [LIMIT]");
  }

  const limit =
    Number.isFinite(requestedLimit) && requestedLimit > 0
      ? Math.min(requestedLimit, 100)
      : 1;

  const intervention = interventions.find((item) => item.slug === slug);

  if (!intervention) {
    throw new Error(`Unknown intervention: ${slug}`);
  }

  console.log(`Newsletter: ${slug}`);
  console.log(`Maximum sends this run: ${limit}`);

  const { data: subscribers, error } = await newsletterSupabase
    .from("newsletter_subscribers")
    .select(
      `
        id,
        email,
        locale
      `,
    )
    .eq("status", "subscribed")
    .order("created_at", {
      ascending: true,
    });

  if (error) {
    throw error;
  }

  if (!subscribers?.length) {
    console.log("No subscribed readers.");
    return;
  }

  let sentCount = 0;

  for (const subscriber of subscribers) {
    if (sentCount >= limit) {
      break;
    }

    const locale = subscriber.locale as Locale;

    /*
     * Already sent?
     */
    const { data: sentEvent, error: sentLookupError } = await newsletterSupabase
      .from("newsletter_events")
      .select("id")
      .eq("subscriber_id", subscriber.id)
      .eq("event_type", "newsletter_sent")
      .eq("metadata->>intervention_slug", slug)
      .maybeSingle();

    if (sentLookupError) {
      console.error(
        `SEND HISTORY LOOKUP FAILED: ${subscriber.email}`,
        sentLookupError,
      );
      continue;
    }

    if (sentEvent) {
      console.log(`SKIP already sent: ${subscriber.email}`);
      continue;
    }

    /*
     * Was a send previously started but never resolved?
     *
     * We deliberately do NOT send again. SES may already
     * have accepted the first email before the process died.
     */
    const { data: startedEvent, error: startedLookupError } =
      await newsletterSupabase
        .from("newsletter_events")
        .select("id, metadata")
        .eq("subscriber_id", subscriber.id)
        .eq("event_type", "newsletter_send_started")
        .eq("metadata->>intervention_slug", slug)
        .maybeSingle();

    if (startedLookupError) {
      console.error(
        `START HISTORY LOOKUP FAILED: ${subscriber.email}`,
        startedLookupError,
      );
      continue;
    }

    if (startedEvent) {
      console.log(`SKIP unresolved previous send: ${subscriber.email}`);
      continue;
    }

    const title = intervention.title[locale];

    const intro =
      intervention.listingIntro?.[locale] ?? intervention.intro[locale];

    /*
     * Reserve this subscriber/intervention combination
     * before contacting SES.
     */
    const { data: sendEvent, error: startError } = await newsletterSupabase
      .from("newsletter_events")
      .insert({
        subscriber_id: subscriber.id,
        event_type: "newsletter_send_started",
        metadata: {
          intervention_slug: slug,
          locale,
          started_at: new Date().toISOString(),
        },
      })
      .select("id")
      .single();

    if (startError || !sendEvent) {
      console.error(`COULD NOT START SEND: ${subscriber.email}`, startError);
      continue;
    }

    try {
      const result = await sendInterventionNewsletter({
        subscriberId: subscriber.id,
        email: subscriber.email,
        locale,
        slug,
        title,
        intro,
      });

      const now = new Date().toISOString();

      /*
       * Turn the "started" event into the final "sent"
       * event. created_at still tells us when the attempt began.
       */
      const { error: sentUpdateError } = await newsletterSupabase
        .from("newsletter_events")
        .update({
          event_type: "newsletter_sent",
          metadata: {
            intervention_slug: slug,
            locale,
            ses_message_id: result.MessageId ?? null,
            sent_at: now,
          },
        })
        .eq("id", sendEvent.id);

      if (sentUpdateError) {
        /*
         * Important:
         * SES has already accepted the message.
         *
         * Do not resend automatically.
         * The row remains newsletter_send_started.
         */
        console.error(
          `SES ACCEPTED BUT EVENT UPDATE FAILED: ${subscriber.email}`,
          sentUpdateError,
        );
        continue;
      }

      sentCount++;

      console.log(`SENT ${sentCount}/${limit}: ${subscriber.email}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);

      /*
       * SES explicitly failed, so this attempt may safely
       * become newsletter_failed. A later run can retry it.
       */
      const { error: failedUpdateError } = await newsletterSupabase
        .from("newsletter_events")
        .update({
          event_type: "newsletter_failed",
          metadata: {
            intervention_slug: slug,
            locale,
            failed_at: new Date().toISOString(),
            error: message,
          },
        })
        .eq("id", sendEvent.id);

      if (failedUpdateError) {
        console.error(
          `FAILED TO RECORD ERROR: ${subscriber.email}`,
          failedUpdateError,
        );
      }

      console.error(`FAILED: ${subscriber.email}`, error);
    }
  }

  console.log(`Finished. Sent: ${sentCount}`);
}

main().catch((error) => {
  console.error("Newsletter send failed:", error);
  process.exitCode = 1;
});
