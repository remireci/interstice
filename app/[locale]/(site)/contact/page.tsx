import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    title: "Contact",
    body: "For submissions, questions, or correspondence: contact@interstice.info",
  },
  nl: {
    title: "Contact",
    body: "Voor bijdragen, vragen of correspondentie: contact@interstice.info",
  },
  fr: {
    title: "Contact",
    body: "Pour les contributions, les questions ou la correspondance : contact@interstice.info",
  },
} as const;

export default async function ContactPage({
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
        <p>{t.body}</p>
      </div>
    </article>
  );
}
