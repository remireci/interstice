import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    title: "Privacy",
    paragraphs: [
      "This website does not use cookies.",
      "We use privacy-friendly analytics (Umami) and search optimization tools (Google Search Console) to monitor site performance. These tools do not collect personal data and do not track individual visitors.",
      "If you contact Interstice by email, your message and contact details are used only for correspondence and editorial communication.",
    ],
  },
  nl: {
    title: "Privacy",
    paragraphs: [
      "Deze website gebruikt geen cookies.",
      "Wij maken gebruik van privacyvriendelijke analyse (Umami) en zoekoptimalisatietools (Google Search Console) om de prestaties van de site te controleren. Deze tools verzamelen geen persoonlijke gegevens en volgen geen individuele bezoekers.",
      "Als je Interstice per e-mail contacteert, worden je bericht en contactgegevens uitsluitend gebruikt voor correspondentie en redactionele communicatie.",
    ],
  },
  fr: {
    title: "Confidentialité",
    paragraphs: [
      "Ce site n’utilise pas de cookies.",
      "Nous utilisons des outils d'analyse respectueux de la vie privée (Umami) et d'optimisation de recherche (Google Search Console) pour suivre les performances du site. Ces outils ne collectent pas de données personnelles et ne tracent pas les visiteurs individuels.",
      "Si vous contactez Interstice par e-mail, votre message et vos coordonnées sont utilisés uniquement pour la correspondance et la communication éditoriale.",
    ],
  },
} as const;

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <article className="article-shell">
      <header className="article-header">
        <h1 className="article-title">{t.title}</h1>
      </header>
      <div className="article-main prose">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
