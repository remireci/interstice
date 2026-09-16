import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { LocaleSwitcher } from "@/components/locale-switcher";

const labels = {
  en: {
    manifesto: "manifesto",
    interventions: "interventions",
  },
  nl: {
    manifesto: "manifest",
    interventions: "interventies",
  },
  fr: {
    manifesto: "manifeste",
    interventions: "interventions",
  },
} as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = labels[locale];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__left">
          <Link href={`/${locale}`} className="site-logo">
            INTERSTICE
          </Link>

          <nav className="site-nav" aria-label="Main navigation">
            <Link href={`/${locale}/manifesto`}>{t.manifesto}</Link>
            <Link href={`/${locale}/interventions`}>{t.interventions}</Link>
          </nav>
        </div>

        <LocaleSwitcher currentLocale={locale} />
      </div>
    </header>
  );
}
