import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Collective",
    title: "INTERSTICE",
    subtitle:
      "An international collective of artists and writers working across immanent critique, system critique, texts, and interventions.",
    primaryCta: "Enter interventions",
    primaryHref: "interventions",
    secondaryLabel: "Current focus",
    secondaryTitle: "Response to Christophe Van Gerrewey in De Witte Raaf",
    secondaryIntro:
      "A response submitted as a readers’ letter and republished here with context.",
  },
  nl: {
    eyebrow: "Collectief",
    title: "INTERSTICE",
    subtitle:
      "Een internationaal collectief van kunstenaars en schrijvers, werkzaam op het snijvlak van immanente kritiek, systeemkritiek, teksten en interventies.",
    primaryCta: "Ga naar interventies",
    primaryHref: "interventions",
    secondaryLabel: "Huidige focus",
    secondaryTitle: "Reactie op Christophe Van Gerrewey in De Witte Raaf",
    secondaryIntro:
      "Een als lezersreactie ingestuurde tekst, hier opnieuw gepubliceerd met context.",
  },
  fr: {
    eyebrow: "Collectif",
    title: "INTERSTICE",
    subtitle:
      "Un collectif international d’artistes et d’écrivains travaillant au croisement de la critique immanente, de la critique du système, des textes et des interventions.",
    primaryCta: "Entrer dans les interventions",
    primaryHref: "interventions",
    secondaryLabel: "Point actuel",
    secondaryTitle: "Réponse à Christophe Van Gerrewey dans De Witte Raaf",
    secondaryIntro:
      "Un texte envoyé comme réaction de lecteur, republié ici avec contexte.",
  },
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <div className="home-shell">
      <section className="home-hero">
        <p className="eyebrow">{t?.eyebrow || ""}</p>
        <h1 className="home-title">{t?.title || ""}</h1>
        <p className="home-subtitle">{t?.subtitle || ""}</p>

        <div className="home-actions">
          <Link
            href={`/${locale}/${t?.primaryHref || ""}`}
            className="home-cta"
          >
            {t?.primaryCta || ""}
          </Link>
        </div>
      </section>

      <section className="home-focus">
        <p className="section-label">{t?.secondaryLabel || ""}</p>
        <Link
          href={`/${locale}/interventions/christophe-van-gerrewey-de-witte-raaf-response`}
          className="home-focus__link"
        >
          <h2>{t?.secondaryTitle || ""}</h2>
          <p>{t?.secondaryIntro || ""}</p>
        </Link>
      </section>
    </div>
  );
}
