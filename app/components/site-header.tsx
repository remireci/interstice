import Link from "next/link";
import type { Locale } from "@/lib/i18n";

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

const localeLabels: Record<Locale, string> = {
  en: "EN",
  nl: "NL",
  fr: "FR",
};

export function SiteHeader({
  locale,
  currentPath = "",
}: {
  locale: Locale;
  currentPath?: string;
}) {
  const t = labels[locale];

  const pathWithoutLocale = currentPath.replace(/^\/(en|nl|fr)/, "") || "";

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

        <nav className="locale-switcher" aria-label="Language selector">
          {(["en", "nl", "fr"] as const).map((targetLocale) => (
            <Link
              key={targetLocale}
              href={`/${targetLocale}${pathWithoutLocale}`}
              className={
                targetLocale === locale
                  ? "locale-switcher__link is-active"
                  : "locale-switcher__link"
              }
              lang={targetLocale}
            >
              {localeLabels[targetLocale]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
