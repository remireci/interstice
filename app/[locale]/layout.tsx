import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <div className="site-frame">
      <SiteHeader locale={locale} />
      <main className="site-main">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
