import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const labels = {
  en: {
    contact: "contact",
    privacy: "privacy",
    manifesto: "manifesto",
    interventions: "interventions",
    noCookies: "No cookies. No analytics.",
  },
  nl: {
    contact: "contact",
    privacy: "privacy",
    manifesto: "manifest",
    interventions: "interventies",
    noCookies: "Geen cookies. Geen analytics.",
  },
  fr: {
    contact: "contact",
    privacy: "confidentialité",
    manifesto: "manifeste",
    interventions: "interventions",
    noCookies: "Pas de cookies. Pas d’analytics.",
  },
} as const;

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = labels[locale];

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <nav className="site-footer__nav" aria-label="Footer">
          <Link href={`/${locale}/manifesto`}>{t.manifesto}</Link>
          <Link href={`/${locale}/interventions`}>{t.interventions}</Link>
          <Link href={`/${locale}/contact`}>{t.contact}</Link>
          <Link href={`/${locale}/privacy`}>{t.privacy}</Link>
        </nav>

        <p className="site-footer__note">{t.noCookies}</p>
      </div>
    </footer>
  );
}
