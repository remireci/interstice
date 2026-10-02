import { NextResponse } from "next/server";

import type { Locale } from "@/lib/i18n";
import { newsletterSupabase } from "@/lib/supabase/newsletter";
import { sendUnsubscribeLink } from "@/lib/email/sendUnsubscribeLink";

const locales: Locale[] = ["en", "nl", "fr"];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    const locale: Locale = locales.includes(body.locale) ? body.locale : "en";

    if (!email) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const { data: subscriber, error } = await newsletterSupabase
      .from("newsletter_subscribers")
      .select("id, email, status")
      .eq("email", email)
      .maybeSingle();

    console.log("[unsubscribe request]", {
      email,
      subscriberFound: Boolean(subscriber),
      subscriberStatus: subscriber?.status ?? null,
      subscriberId: subscriber?.id ?? null,
    });

    if (error) {
      console.error("Unsubscribe request lookup failed:", error);

      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    /*
     * Do not reveal whether the email address
     * exists in our subscriber database.
     */
    if (!subscriber || subscriber.status !== "subscribed") {
      return NextResponse.json({
        success: true,
      });
    }

    console.log("[unsubscribe request] sending email to:", subscriber.email);

    const result = await sendUnsubscribeLink({
      subscriberId: subscriber.id,
      email: subscriber.email,
      locale,
    });

    console.log("[unsubscribe request] email sent:", result.messageId);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Unsubscribe request failed:", error);

    return NextResponse.json({ error: "Request failed" }, { status: 500 });
  }
}
