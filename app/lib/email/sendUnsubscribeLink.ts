// app/lib/email/sendUnsubscribeLink.ts

import "server-only";

import type { Locale } from "@/lib/i18n";
import { mailTransport } from "./mailTransport";
import { createUnsubscribeToken } from "@/lib/newsletter/unsubscribeToken";

const copy = {
  en: {
    subject: "Unsubscribe from Interstice",
    text: "You requested to unsubscribe from Interstice. Use the link below to confirm.",
    link: "Unsubscribe",
  },

  nl: {
    subject: "Uitschrijven bij Interstice",
    text: "Je hebt gevraagd om je uit te schrijven bij Interstice. Gebruik onderstaande link om dit te bevestigen.",
    link: "Uitschrijven",
  },

  fr: {
    subject: "Se désabonner d’Interstice",
    text: "Vous avez demandé à vous désabonner d’Interstice. Utilisez le lien ci-dessous pour confirmer.",
    link: "Se désabonner",
  },
} as const;

export async function sendUnsubscribeLink({
  subscriberId,
  email,
  locale,
}: {
  subscriberId: string;
  email: string;
  locale: Locale;
}) {
  const t = copy[locale];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const fromEmail = process.env.SMTP_FROM ?? process.env.SMTP_USER;

  if (!siteUrl || !fromEmail) {
    throw new Error("Missing SITE URL or SMTP sender configuration");
  }

  const token = createUnsubscribeToken(subscriberId);

  const unsubscribeUrl =
    `${siteUrl}/${locale}/newsletter/unsubscribe` +
    `?id=${encodeURIComponent(subscriberId)}` +
    `&token=${encodeURIComponent(token)}`;

  return mailTransport.sendMail({
    from: `Interstice <${fromEmail}>`,
    to: email,
    subject: t.subject,

    text: `${t.text}

${t.link}:
${unsubscribeUrl}

Interstice`,

    html: `
      <p>${t.text}</p>

      <p>
        <a href="${unsubscribeUrl}">
          ${t.link}
        </a>
      </p>

      <p>Interstice</p>
    `,
  });
}
