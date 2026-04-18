import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { headers } from "next/headers";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // 1. Await the params to get the locale string
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <div className="site-frame">
      {/* 3. Pass the string 'locale', not the Promise 'params.locale' */}
      <SiteHeader locale={locale as Locale} />
      <main className="site-main">{children}</main>
      <SiteFooter locale={locale as Locale} />
    </div>
  );
}
