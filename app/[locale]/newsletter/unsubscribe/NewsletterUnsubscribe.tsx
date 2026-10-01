"use client";

import { useState } from "react";
import Link from "next/link";

import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    button: "Unsubscribe",
    success: "You have been unsubscribed.",
    error: "This unsubscribe link is invalid or could not be processed.",
    back: "Return to Interstice",
  },

  nl: {
    button: "Uitschrijven",
    success: "Je bent uitgeschreven.",
    error: "Deze uitschrijflink is ongeldig of kon niet worden verwerkt.",
    back: "Terug naar Interstice",
  },

  fr: {
    button: "Se désabonner",
    success: "Vous êtes désabonné·e.",
    error: "Ce lien de désabonnement est invalide ou n’a pas pu être traité.",
    back: "Retour à Interstice",
  },
} as const;

export function NewsletterUnsubscribe({
  locale,
  subscriberId,
  token,
}: {
  locale: Locale;
  subscriberId: string;
  token: string;
}) {
  const t = copy[locale];

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function unsubscribe() {
    if (!subscriberId || !token) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: subscriberId,
          token,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      localStorage.removeItem("interstice_newsletter_subscribed");

      localStorage.setItem("interstice_newsletter_unsubscribed", "true");

      localStorage.removeItem("interstice_newsletter_dismissed_until");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <>
        <p>{t.success}</p>

        <Link href={`/${locale}`}>{t.back}</Link>
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        className="newsletter-signup__submit"
        onClick={unsubscribe}
        disabled={status === "loading" || !subscriberId || !token}
      >
        {t.button}
      </button>

      {status === "error" && (
        <p className="newsletter-signup__message">{t.error}</p>
      )}
    </>
  );
}
