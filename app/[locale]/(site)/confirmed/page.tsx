import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    title: "Subscription confirmed",
    text: "You are now subscribed to new Interstice interventions.",
    back: "Return to Interstice",
  },

  nl: {
    title: "Inschrijving bevestigd",
    text: "Je bent nu ingeschreven voor nieuwe Interstice-interventies.",
    back: "Terug naar Interstice",
  },

  fr: {
    title: "Inscription confirmée",
    text: "Vous êtes désormais inscrit aux nouvelles interventions d’Interstice.",
    back: "Retour à Interstice",
  },
} as const;

export default async function NewsletterConfirmedPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <main className="newsletter-confirmed">
      <h1>{t.title}</h1>

      <p>{t.text}</p>

      <Link href={`/${locale}`}>{t.back}</Link>
    </main>
  );
}
