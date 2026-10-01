import { NextResponse } from "next/server";

import { newsletterSupabase } from "@/lib/supabase/newsletter";
import { verifyUnsubscribeToken } from "@/lib/newsletter/unsubscribeToken";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const subscriberId = typeof body.id === "string" ? body.id.trim() : "";

    const token = typeof body.token === "string" ? body.token.trim() : "";

    if (
      !subscriberId ||
      !token ||
      !verifyUnsubscribeToken(subscriberId, token)
    ) {
      return NextResponse.json(
        { error: "Invalid unsubscribe link" },
        { status: 400 },
      );
    }

    const { data: subscriber, error: readError } = await newsletterSupabase
      .from("newsletter_subscribers")
      .select("id, status")
      .eq("id", subscriberId)
      .maybeSingle();

    if (readError) {
      console.error("Newsletter unsubscribe lookup failed:", readError);

      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    /*
     * Treat an already inactive address as successfully
     * unsubscribed. This keeps the operation idempotent.
     */
    if (!subscriber || subscriber.status !== "subscribed") {
      return NextResponse.json({
        success: true,
      });
    }

    const now = new Date().toISOString();

    const { error: updateError } = await newsletterSupabase
      .from("newsletter_subscribers")
      .update({
        status: "unsubscribed",
        unsubscribed_at: now,
        updated_at: now,
      })
      .eq("id", subscriber.id);

    if (updateError) {
      throw updateError;
    }

    const { error: eventError } = await newsletterSupabase
      .from("newsletter_events")
      .insert({
        subscriber_id: subscriber.id,
        event_type: "unsubscribed",
        metadata: {
          unsubscribed_at: now,
        },
      });

    if (eventError) {
      console.error("Newsletter unsubscribe event failed:", eventError);
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Newsletter unsubscribe error:", error);

    return NextResponse.json(
      { error: "Newsletter unsubscribe failed" },
      { status: 500 },
    );
  }
}
