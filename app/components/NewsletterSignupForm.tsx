"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    placeholder: "Email address",
    submit: "Subscribe",
    loading: "Subscribing…",
    consent:
      "By subscribing, you agree to receive new Interstice interventions by email. You can unsubscribe at any time.",
    success: "You are subscribed to the Interstice newsletter.",
    error: "Something went wrong. Please try again.",
  },

  nl: {
    placeholder: "E-mailadres",
    submit: "Inschrijven",
    loading: "Bezig…",
    consent:
      "Door je in te schrijven ontvang je nieuwe Interstice-interventies per e-mail. Uitschrijven kan op elk moment.",
    success: "Je bent ingeschreven op de Interstice-nieuwsbrief.",
    error: "Er ging iets mis. Probeer het opnieuw.",
  },

  fr: {
    placeholder: "Adresse e-mail",
    submit: "S’inscrire",
    loading: "Inscription…",
    consent:
      "En vous inscrivant, vous acceptez de recevoir les nouvelles interventions d’Interstice par e-mail. Vous pouvez vous désabonner à tout moment.",
    success: "Vous êtes inscrit·e à la newsletter d’Interstice.",
    error: "Une erreur s’est produite. Veuillez réessayer.",
  },
} as const;

export function NewsletterSignupForm({
  locale,
  idPrefix = "newsletter",
  source = "website",
}: {
  locale: Locale;
  idPrefix?: string;
  source?: "website" | "outreach";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const t = copy[locale];
  const inputId = `${idPrefix}-email`;

  async function subscribe() {
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          locale,
          source,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      localStorage.setItem("interstice_newsletter_subscribed", "true");

      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="newsletter-signup"
      onSubmit={async (event) => {
        event.preventDefault();
        await subscribe();
      }}
    >
      <label htmlFor={inputId} className="sr-only">
        {t.placeholder}
      </label>

      <div className="newsletter-signup__fields">
        <input
          id={inputId}
          type="email"
          value={email}
          placeholder={t.placeholder}
          autoComplete="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />

        <button
          type="submit"
          className="newsletter-signup__submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? t.loading : t.submit}
        </button>
      </div>

      <p className="newsletter-signup__consent">{t.consent}</p>

      {status === "success" && (
        <p className="newsletter-signup__message">{t.success}</p>
      )}

      {status === "error" && (
        <p className="newsletter-signup__message">{t.error}</p>
      )}
    </form>
  );
}
