import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    title: "Privacy",
    paragraphs: [
      "This website does not use cookies.",
      "This website does not use analytics tools.",
      "If you contact Interstice by email, your message and contact details are used only for correspondence and editorial communication.",
    ],
  },
  nl: {
    title: "Privacy",
    paragraphs: [
      "Deze website gebruikt geen cookies.",
      "Deze website gebruikt geen analysetools.",
      "Als je Interstice per e-mail contacteert, worden je bericht en contactgegevens uitsluitend gebruikt voor correspondentie en redactionele communicatie.",
    ],
  },
  fr: {
    title: "Confidentialité",
    paragraphs: [
      "Ce site n’utilise pas de cookies.",
      "Ce site n’utilise pas d’outils d’analyse.",
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
