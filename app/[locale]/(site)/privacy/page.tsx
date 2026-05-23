import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    title: "Privacy",
    paragraphs: [
      "This website does not use cookies.",
      "We use privacy-friendly analytics (Umami) and search optimization tools (Google Search Console) to monitor site performance. These tools do not collect personal data and do not track individual visitors.",
      "If you contact Interstice by email, your message and contact details are used only for correspondence and editorial communication.",
      "Interstice also occasionally contacts individuals whose publicly available contact information, or contact information previously circulated within cultural and editorial contexts, suggests a possible interest in topics related to criticism, contemporary art, publishing, or theory.",
      "We do not sell or share contact data. Recipients can request removal from our records at any time through the unsubscribe link or by direct email contact.",
    ],
  },

  nl: {
    title: "Privacy",
    paragraphs: [
      "Deze website gebruikt geen cookies.",
      "Wij maken gebruik van privacyvriendelijke analyse (Umami) en zoekoptimalisatietools (Google Search Console) om de prestaties van de site te controleren. Deze tools verzamelen geen persoonlijke gegevens en volgen geen individuele bezoekers.",
      "Als je Interstice per e-mail contacteert, worden je bericht en contactgegevens uitsluitend gebruikt voor correspondentie en redactionele communicatie.",
      "Interstice contacteert occasioneel ook personen van wie publiek beschikbare contactinformatie, of contactinformatie die eerder circuleerde binnen culturele en redactionele contexten, kan wijzen op een mogelijke interesse in thema’s rond kritiek, hedendaagse kunst, publicatie en theorie.",
      "Wij verkopen of delen geen contactgegevens. Ontvangers kunnen op elk moment verzoeken om uit onze bestanden verwijderd te worden via de unsubscribe-link of via direct e-mailcontact.",
    ],
  },

  fr: {
    title: "Confidentialité",
    paragraphs: [
      "Ce site n’utilise pas de cookies.",
      "Nous utilisons des outils d'analyse respectueux de la vie privée (Umami) et d'optimisation de recherche (Google Search Console) pour suivre les performances du site. Ces outils ne collectent pas de données personnelles et ne tracent pas les visiteurs individuels.",
      "Si vous contactez Interstice par e-mail, votre message et vos coordonnées sont utilisés uniquement pour la correspondance et la communication éditoriale.",
      "Interstice contacte également occasionnellement des personnes dont les coordonnées publiquement accessibles, ou des coordonnées ayant circulé auparavant dans des contextes culturels et éditoriaux, peuvent indiquer un intérêt potentiel pour des questions liées à la critique, à l’art contemporain, à l’édition ou à la théorie.",
      "Nous ne vendons ni ne partageons aucune donnée de contact. Les destinataires peuvent demander à tout moment la suppression de leurs coordonnées de nos fichiers via le lien de désinscription ou par contact direct par e-mail.",
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
