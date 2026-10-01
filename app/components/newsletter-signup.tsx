"use client";
import { NewsletterSignupForm } from "./NewsletterSignupForm";
import { useRef, useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { usePathname } from "next/navigation";

const copy = {
  en: {
    link: "newsletter",
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
    link: "nieuwsbrief",
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
    link: "newsletter",
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

const DISMISS_DAYS = 21;
// const PENDING_DAYS = 7;
const AUTO_OPEN_DELAY = 8000;

const STORAGE_KEYS = {
  subscribed: "interstice_newsletter_subscribed",
  unsubscribed: "interstice_newsletter_unsubscribed",
  dismissedUntil: "interstice_newsletter_dismissed_until",
};

export function NewsletterModal({ locale }: { locale: Locale }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const pathname = usePathname();

  const isNewsletterPage = pathname.includes("/newsletter");

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const t = copy[locale];

  useEffect(() => {
    if (isNewsletterPage) {
      return;
    }

    const subscribed = localStorage.getItem(STORAGE_KEYS.subscribed) === "true";

    const unsubscribed =
      localStorage.getItem(STORAGE_KEYS.unsubscribed) === "true";

    if (subscribed || unsubscribed) {
      return;
    }

    const dismissedUntil = Number(
      localStorage.getItem(STORAGE_KEYS.dismissedUntil) || 0,
    );

    if (Date.now() < dismissedUntil) {
      return;
    }

    const timer = window.setTimeout(() => {
      /*
       * Check again after 8 seconds.
       * The user may meanwhile have subscribed.
       */
      const subscribed =
        localStorage.getItem(STORAGE_KEYS.subscribed) === "true";

      const unsubscribed =
        localStorage.getItem(STORAGE_KEYS.unsubscribed) === "true";

      if (!subscribed && !unsubscribed && !dialogRef.current?.open) {
        dialogRef.current?.showModal();
      }
    }, AUTO_OPEN_DELAY);

    return () => window.clearTimeout(timer);
  }, [isNewsletterPage]);

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

    // const pendingUntil = Date.now() + PENDING_DAYS * 24 * 60 * 60 * 1000;

    // localStorage.setItem(STORAGE_KEYS.pendingUntil, String(pendingUntil));

    setEmail("");
    setStatus("success");
  }

  function closeDialog() {
    const dismissedUntil = Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;

    localStorage.setItem(STORAGE_KEYS.dismissedUntil, String(dismissedUntil));

    dialogRef.current?.close();
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

      <dialog
        ref={dialogRef}
        className="newsletter-dialog"
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
      >
        <button
          type="button"
          className="newsletter-dialog__close"
          aria-label={t.close}
          onClick={closeDialog}
        >
          ×
        </button>

        <h2>{t.title}</h2>
        <p>{t.text}</p>

        <NewsletterSignupForm locale={locale} idPrefix="newsletter-modal" />
      </dialog>
    </>
  );
}
