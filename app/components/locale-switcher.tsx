"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  nl: "NL",
  fr: "FR",
};

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  // This function swaps the locale segment in the current URL
  const getTransformedPath = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;

    // Split the path: e.g., "/en/manifesto" -> ["", "en", "manifesto"]
    const segments = pathname.split("/");
    // Replace the locale segment
    segments[1] = targetLocale;

    return segments.join("/");
  };

  return (
    <nav className="locale-switcher" aria-label="Language selector">
      {(["en", "nl", "fr"] as const).map((targetLocale) => (
        <Link
          key={targetLocale}
          href={getTransformedPath(targetLocale)}
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
