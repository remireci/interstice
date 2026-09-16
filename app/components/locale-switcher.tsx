"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

const locales = ["en", "nl", "fr"] as const;

const localeLabels: Record<Locale, string> = {
  en: "EN",
  nl: "NL",
  fr: "FR",
};

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  const getLocalizedPath = (targetLocale: Locale) => {
    if (!pathname) {
      return `/${targetLocale}`;
    }

    const segments = pathname.split("/").filter(Boolean);

    if (locales.includes(segments[0] as Locale)) {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }

    return `/${segments.join("/")}`;
  };

  console.log("pathname:", pathname);
  console.log("EN:", getLocalizedPath("en"));
  console.log("NL:", getLocalizedPath("nl"));
  console.log("FR:", getLocalizedPath("fr"));

  return (
    <nav className="locale-switcher" aria-label="Language selector">
      {locales.map((targetLocale) => (
        <Link
          key={targetLocale}
          href={getLocalizedPath(targetLocale)}
          className={
            targetLocale === currentLocale
              ? "locale-switcher__link is-active"
              : "locale-switcher__link"
          }
          lang={targetLocale}
        >
          {localeLabels[targetLocale]}
        </Link>
      ))}
    </nav>
  );
}
