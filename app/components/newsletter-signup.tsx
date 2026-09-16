"use client";

import { useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    link: "subscribe",
    title: "Follow Interstice",
    text: "Receive new Interstice interventions by email.",
    placeholder: "Email address",
    submit: "Subscribe",
    close: "Close",
    consent:
      "By subscribing, you agree to receive new Interstice interventions by email. You can unsubscribe at any time.",
    success: "Check your inbox to confirm your subscription.",
    error: "Something went wrong. Please try again.",
  },

  nl: {
    link: "inschrijven",
    title: "Volg Interstice",
    text: "Ontvang nieuwe Interstice-interventies per e-mail.",
    placeholder: "E-mailadres",
    submit: "Inschrijven",
    close: "Sluiten",
    consent:
      "Door je in te schrijven ontvang je nieuwe Interstice-interventies per e-mail. Uitschrijven kan op elk moment.",
    success: "Controleer je inbox om je inschrijving te bevestigen.",
    error: "Er ging iets mis. Probeer het opnieuw.",
  },

  fr: {
    link: "s’abonner",
    title: "Suivre Interstice",
    text: "Recevez les nouvelles interventions d’Interstice par e-mail.",
    placeholder: "Adresse e-mail",
    submit: "S’inscrire",
    close: "Fermer",
    consent:
      "En vous inscrivant, vous acceptez de recevoir les nouvelles interventions d’Interstice par e-mail. Désinscription à tout moment.",
    success: "Consultez votre boîte mail pour confirmer votre inscription.",
    error: "Une erreur s’est produite. Veuillez réessayer.",
  },
} as const;

export function NewsletterModal({ locale }: { locale: Locale }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const t = copy[locale];

  async function subscribe() {
    setStatus("loading");

    const response = await fetch("/api/newsletter/subscribe", {
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
  }

  return (
    <>
      <button
        type="button"
        className="site-footer__link-button"
        onClick={() => dialogRef.current?.showModal()}
      >
        {t.link}
      </button>

      <dialog ref={dialogRef} className="newsletter-dialog">
        <button
          type="button"
          className="newsletter-dialog__close"
          aria-label={t.close}
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>

        <h2>{t.title}</h2>
        <p>{t.text}</p>

        <form
          onSubmit={async (event) => {
            event.preventDefault();
            await subscribe();
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            {t.placeholder}
          </label>

          <input
            id="newsletter-email"
            type="email"
            value={email}
            placeholder={t.placeholder}
            autoComplete="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />

          <button
            type="submit"
            className="newsletter-dialog__submit"
            disabled={status === "loading"}
          >
            {t.submit}
          </button>

          <p className="newsletter-dialog__consent">{t.consent}</p>

          {status === "success" && (
            <p className="newsletter-dialog__message">{t.success}</p>
          )}

          {status === "error" && (
            <p className="newsletter-dialog__message">{t.error}</p>
          )}
        </form>
      </dialog>
    </>
  );
}
