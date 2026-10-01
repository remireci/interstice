import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { interventions } from "@/lib/content/interventions";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";

const copy = {
  en: {
    eyebrow: "Interstice newsletter",
    title: "Follow new Interstice interventions",
    intro:
      "Receive new Interstice publications by email. No regular newsletter or promotional mail. You can unsubscribe at any time.",
    current: "Current intervention",
    earlier: "Earlier intervention",
    read: "Read the intervention",
  },

  nl: {
    eyebrow: "Interstice-nieuwsbrief",
    title: "Volg nieuwe Interstice-interventies",
    intro:
      "Ontvang nieuwe Interstice-publicaties per e-mail. Geen periodieke nieuwsbrief of promotionele mail. Uitschrijven kan op elk moment.",
    current: "Huidige interventie",
    earlier: "Eerdere interventie",
    read: "Lees de interventie",
  },

  fr: {
    eyebrow: "Newsletter d’Interstice",
    title: "Suivre les nouvelles interventions d’Interstice",
    intro:
      "Recevez les nouvelles publications d’Interstice par e-mail. Pas de newsletter périodique ni de messages promotionnels. Vous pouvez vous désabonner à tout moment.",
    current: "Intervention actuelle",
    earlier: "Intervention précédente",
    read: "Lire l’intervention",
  },
} as const;

export default async function NewsletterPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ source?: string }>;
}) {
  const { locale } = await params;
  const { source } = await searchParams;
  const t = copy[locale];

  const signupSource = source === "outreach" ? "outreach" : "website";

  const sortedInterventions = [...interventions].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const current = sortedInterventions[0];
  const previous = sortedInterventions[1];

  return (
    <main className="newsletter-page">
      <section className="newsletter-page__signup">
        <p className="newsletter-page__eyebrow">{t.eyebrow}</p>

        <h1>{t.title}</h1>

        <p className="newsletter-page__intro">{t.intro}</p>

        <NewsletterSignupForm
          locale={locale}
          idPrefix="newsletter-page"
          source={signupSource}
        />
      </section>

      {current && (
        <section className="newsletter-page__current">
          <p className="newsletter-page__label">{t.current}</p>

          <Link
            href={`/${locale}/interventions/${current.slug}`}
            className="newsletter-page__intervention"
          >
            <h2>{current.title[locale]}</h2>

            <p>{current.listingIntro?.[locale] ?? current.intro[locale]}</p>

            <span>{t.read} →</span>
          </Link>
        </section>
      )}

      {previous && (
        <section className="newsletter-page__previous">
          <p className="newsletter-page__label">{t.earlier}</p>

          <Link href={`/${locale}/interventions/${previous.slug}`}>
            {previous.title[locale]} →
          </Link>
        </section>
      )}
    </main>
  );
}
