// app/api/newsletter/subscribe/route.ts

import { NextResponse } from "next/server";

import type { Locale } from "@/lib/i18n";
import { newsletterSupabase } from "@/lib/supabase/newsletter";

const locales: Locale[] = ["en", "nl", "fr"];

const CONSENT_VERSION = "2026-09";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const source = body.source === "outreach" ? "outreach" : "website";

    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    const locale: Locale = locales.includes(body.locale) ? body.locale : "en";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const now = new Date().toISOString();

    const { data: existing, error: readError } = await newsletterSupabase
      .from("newsletter_subscribers")
      .select("id, status")
      .eq("email", email)
      .maybeSingle();

    if (readError) {
      console.error("Newsletter lookup failed:", readError);

      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    /*
     * Do not reveal whether an address already exists.
     *
     * A bounced/complained address remains suppressed even if
     * someone submits it through the public form.
     */
    if (existing?.status === "bounced" || existing?.status === "complained") {
      return NextResponse.json({ success: true });
    }

    /*
     * Already subscribed:
     * keep the subscription, but update the preferred locale.
     */
    if (existing?.status === "subscribed") {
      const { error } = await newsletterSupabase
        .from("newsletter_subscribers")
        .update({
          locale,
          updated_at: now,
        })
        .eq("id", existing.id);

      if (error) {
        throw error;
      }

      return NextResponse.json({ success: true });
    }

    let subscriberId: string;

    /*
     * Existing pending or unsubscribed subscriber.
     *
     * Submitting the form again is a new explicit subscription,
     * so an unsubscribed person may legitimately resubscribe.
     */
    if (existing) {
      const { data, error } = await newsletterSupabase
        .from("newsletter_subscribers")
        .update({
          locale,
          status: "subscribed",
          subscribed_at: now,
          updated_at: now,
          unsubscribed_at: null,

          // Old double-opt-in data is no longer needed.
          confirmation_token_hash: null,
          confirmation_expires_at: null,
          last_confirmation_sent_at: null,

          source: source,
          consent_version: CONSENT_VERSION,
        })
        .eq("id", existing.id)
        .select("id")
        .single();

      if (error) {
        throw error;
      }

      subscriberId = data.id;
    } else {
      /*
       * New subscriber.
       */
      const { data, error } = await newsletterSupabase
        .from("newsletter_subscribers")
        .insert({
          email,
          locale,
          status: "subscribed",
          subscribed_at: now,
          source: "website",
          consent_version: CONSENT_VERSION,
        })
        .select("id")
        .single();

      if (error) {
        throw error;
      }

      subscriberId = data.id;
    }

    /*
     * Keep an audit event showing when explicit subscription
     * took place and under which consent wording/version.
     */
    const { error: eventError } = await newsletterSupabase
      .from("newsletter_events")
      .insert({
        subscriber_id: subscriberId,
        event_type: "subscribed",
        metadata: {
          locale,
          source: "website",
          consent_version: CONSENT_VERSION,
        },
      });

    if (source === "outreach") {
      const { error: outreachError } = await newsletterSupabase
        .from("newsletter_outreach_contacts")
        .update({
          subscribed_at: now,
          updated_at: now,
        })
        .eq("email", email);

      if (outreachError) {
        console.error("Outreach subscription update failed:", outreachError);
      }
    }

    if (eventError) {
      console.error("Newsletter event insert failed:", eventError);
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);

    return NextResponse.json(
      { error: "Newsletter subscription failed" },
      { status: 500 },
    );
  }
}
