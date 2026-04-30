import type { Metadata } from "next";
import Link from "next/link";
import { interventions } from "@/lib/content/interventions";
import { forthcomingInterventions } from "@/lib/content/forthcoming-interventions";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    title: "Interventions",
    description: "Texts, responses, and interventions published by Interstice.",
    intro: "Texts, responses, and interventions published by Interstice.",
    eyebrow: "Editorial",
    forthcomingTitle: "In preparation",
    forthcomingIntro:
      "These interventions are announced and will be published in due course.",
    expectedLabel: "Expected",
  },
  nl: {
    title: "Interventies",
    description:
      "Teksten, reacties en interventies gepubliceerd door Interstice.",
    intro: "Teksten, reacties en interventies gepubliceerd door Interstice.",
    eyebrow: "Redactioneel",
    forthcomingTitle: "In voorbereiding",
    forthcomingIntro:
      "Deze interventies zijn aangekondigd en worden op een later moment gepubliceerd.",
    expectedLabel: "Verwacht",
  },
  fr: {
    title: "Interventions",
    description: "Textes, réactions et interventions publiés par Interstice.",
    intro: "Textes, réactions et interventions publiés par Interstice.",
    eyebrow: "Editorial",
    forthcomingTitle: "En préparation",
    forthcomingIntro:
      "Ces interventions sont annoncées et seront publiées ultérieurement.",
    expectedLabel: "Prévu",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = copy[locale];

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `https://www.interstice.be/${locale}/interventions`,
      languages: {
        en: "https://www.interstice.be/en/interventions",
        nl: "https://www.interstice.be/nl/interventions",
        fr: "https://www.interstice.be/fr/interventions",
        "x-default": "https://www.interstice.be/en/interventions",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://www.interstice.be/${locale}/interventions`,
      siteName: "Interstice",
      type: "website",
    },
  };
}

export default async function InterventionsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <div className="listing-shell">
      <header className="listing-header">
        <p className="eyebrow">{t?.eyebrow || ""}</p>
        <h1 className="listing-title">{t.title}</h1>
        <p className="listing-intro">{t.intro}</p>
      </header>

      <section className="listing-section" aria-labelledby="published-heading">
        <h2 id="published-heading" className="sr-only">
          {t.title}
        </h2>

        <div className="listing-items">
          {interventions.map((item) => (
            <article key={item.slug} className="listing-item">
              <p className="listing-date">{item.publishedAt}</p>
              <Link
                href={`/${locale}/interventions/${item.slug}`}
                className="listing-link"
              >
                <h3>{item.title[locale]}</h3>
                <p>{item.intro[locale]}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {forthcomingInterventions.length > 0 ? (
        <section
          className="forthcoming-block"
          aria-labelledby="forthcoming-heading"
        >
          <div className="forthcoming-block__header">
            <h2 className="section-label">{t.forthcomingTitle}</h2>
            {/* <h2 id="forthcoming-heading" className="forthcoming-block__title">
              {t.forthcomingTitle}
            </h2> */}
            <p className="forthcoming-block__intro">{t.forthcomingIntro}</p>
          </div>

          <div className="forthcoming-items">
            {forthcomingInterventions.map((item) => (
              <article key={item.slug} className="forthcoming-item">
                {item.expectedAt ? (
                  <p className="forthcoming-meta">
                    <span>{t.expectedLabel}</span> {item.expectedAt}
                  </p>
                ) : null}
                <h3 className="forthcoming-item__title">
                  {item.title[locale]}
                </h3>
                <p className="forthcoming-item__intro">{item.intro[locale]}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
