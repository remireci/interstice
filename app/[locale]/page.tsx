import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { interventions } from "@/lib/content/interventions";

const copy = {
  en: {
    eyebrow: "Collective",
    title: "INTERSTICE",
    subtitle:
      "An international collective of artists and writers working across immanent critique, system critique, texts, and interventions.",
    primaryCta: "Enter interventions",
    currentLabel: "Current focus",
    previousLabel: "Earlier intervention",
  },

  nl: {
    eyebrow: "Collectief",
    title: "INTERSTICE",
    subtitle:
      "Een internationaal collectief van kunstenaars en schrijvers, werkzaam op het snijvlak van immanente kritiek, systeemkritiek, teksten en interventies.",
    primaryCta: "Ga naar interventies",
    currentLabel: "Huidige focus",
    previousLabel: "Eerdere interventie",
  },

  fr: {
    eyebrow: "Collectif",
    title: "INTERSTICE",
    subtitle:
      "Un collectif international d’artistes et d’écrivains travaillant au croisement de la critique immanente, de la critique du système, des textes et des interventions.",
    primaryCta: "Entrer dans les interventions",
    currentLabel: "Point actuel",
    previousLabel: "Intervention précédente",
  },
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];

  const sortedInterventions = [...interventions].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const currentIntervention = sortedInterventions[0];
  const previousIntervention = sortedInterventions[1];

  return (
    <div className="home-shell">
      <section className="home-hero">
        <p className="eyebrow">{t.eyebrow}</p>

        <h1 className="home-title">{t.title}</h1>

        <p className="home-subtitle">{t.subtitle}</p>

        <div className="home-actions">
          <Link href={`/${locale}/interventions`} className="home-cta">
            {t.primaryCta}
          </Link>
        </div>
      </section>

      {currentIntervention ? (
        <section className="home-focus">
          <p className="section-label">{t.currentLabel}</p>

          <Link
            href={`/${locale}/interventions/${currentIntervention.slug}`}
            className="home-focus__link"
          >
            <h2 className="home-focus__title">
              {currentIntervention.title[locale]}
            </h2>

            <p className="home-focus__intro">
              {currentIntervention.listingIntro?.[locale] ??
                currentIntervention.intro[locale]}
            </p>
          </Link>
        </section>
      ) : null}

      {previousIntervention ? (
        <section className="home-previous">
          <p className="section-label">{t.previousLabel}</p>

          <Link
            href={`/${locale}/interventions/${previousIntervention.slug}`}
            className="home-focus__link"
          >
            <h2 className="home-focus__title">
              {previousIntervention.title[locale]}
            </h2>

            <p className="home-focus__intro">
              {previousIntervention.listingIntro?.[locale] ??
                previousIntervention.intro[locale]}
            </p>
          </Link>
        </section>
      ) : null}
    </div>
  );
}
