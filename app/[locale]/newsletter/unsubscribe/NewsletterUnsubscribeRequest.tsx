"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    placeholder: "Email address",
    button: "Send unsubscribe link",
    success:
      "If this address is subscribed, an unsubscribe link has been sent.",
    error: "Something went wrong. Please try again.",
  },

  nl: {
    placeholder: "E-mailadres",
    button: "Stuur uitschrijflink",
    success:
      "Als dit adres ingeschreven is, werd een uitschrijflink verstuurd.",
    error: "Er ging iets mis. Probeer het opnieuw.",
  },

  fr: {
    placeholder: "Adresse e-mail",
    button: "Envoyer le lien de désabonnement",
    success:
      "Si cette adresse est inscrite, un lien de désabonnement a été envoyé.",
    error: "Une erreur s’est produite. Veuillez réessayer.",
  },
} as const;

export function NewsletterUnsubscribeRequest({ locale }: { locale: Locale }) {
  const t = copy[locale];

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function requestUnsubscribe() {
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter/unsubscribe-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          locale,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

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
        await requestUnsubscribe();
      }}
    >
      <div className="newsletter-signup__fields">
        <input
          type="email"
          required
          autoComplete="email"
          placeholder={t.placeholder}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button
          type="submit"
          className="newsletter-signup__submit"
          disabled={status === "loading"}
        >
          {t.button}
        </button>
      </div>

      {status === "success" && (
        <p className="newsletter-signup__message">{t.success}</p>
      )}

      {status === "error" && (
        <p className="newsletter-signup__message">{t.error}</p>
      )}
    </form>
  );
}
