import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { NewsletterModal } from "./newsletter-signup";

const labels = {
  en: {
    contact: "contact",
    privacy: "privacy",
    unsubscribe: "unsubscribe",
    manifesto: "manifesto",
    interventions: "interventions",
    noCookies: "No cookies. Privacy-friendly analytics.",
  },
  nl: {
    contact: "contact",
    privacy: "privacy",
    unsubscribe: "uitschrijven",
    manifesto: "manifest",
    interventions: "interventies",
    noCookies: "Geen cookies. Privacyvriendelijke analytics.",
  },
  fr: {
    contact: "contact",
    privacy: "confidentialité",
    unsubscribe: "se désinscrire",
    manifesto: "manifeste",
    interventions: "interventions",
    noCookies: "Pas de cookies. Analytique respectueuse de la vie privée.",
  },
} as const;

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = labels[locale];

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <nav className="site-footer__nav" aria-label="Footer">
          <Link href={`/${locale}/contact`}>{t.contact}</Link>
          <Link href={`/${locale}/privacy`}>{t.privacy}</Link>

          <NewsletterModal locale={locale} />
        </nav>

        <p className="site-footer__note">{t.noCookies}</p>
      </div>
    </footer>
  );
}
