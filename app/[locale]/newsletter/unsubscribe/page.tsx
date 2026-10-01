import type { Locale } from "@/lib/i18n";
import { NewsletterUnsubscribe } from "./NewsletterUnsubscribe";

const copy = {
  en: {
    title: "Unsubscribe from Interstice",
    text: "You will no longer receive new Interstice interventions by email.",
  },

  nl: {
    title: "Uitschrijven bij Interstice",
    text: "Je ontvangt voortaan geen nieuwe Interstice-interventies meer per e-mail.",
  },

  fr: {
    title: "Se désabonner d’Interstice",
    text: "Vous ne recevrez plus les nouvelles interventions d’Interstice par e-mail.",
  },
} as const;

export default async function UnsubscribePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{
    id?: string;
    token?: string;
  }>;
}) {
  const { locale } = await params;
  const { id = "", token = "" } = await searchParams;

  const t = copy[locale];

  return (
    <main className="newsletter-page">
      <section className="newsletter-page__signup">
        <h1>{t.title}</h1>

        <p className="newsletter-page__intro">{t.text}</p>

        <NewsletterUnsubscribe
          locale={locale}
          subscriberId={id}
          token={token}
        />
      </section>
    </main>
  );
}
