import { SendEmailCommand } from "@aws-sdk/client-ses";

import type { Locale } from "@/lib/i18n";
import { ses } from "@/lib/email/ses";
import { createUnsubscribeToken } from "@/lib/newsletter/unsubscribeToken";

const copy = {
  en: {
    subject: "New Interstice intervention",
    published: "A new Interstice intervention has been published.",
    read: "Read the intervention",
    reason:
      "You are receiving this email because you subscribed to Interstice.",
    unsubscribe: "Unsubscribe",
  },

  nl: {
    subject: "Nieuwe Interstice-interventie",
    published: "Er is een nieuwe Interstice-interventie gepubliceerd.",
    read: "Lees de interventie",
    reason:
      "Je ontvangt deze e-mail omdat je je hebt ingeschreven bij Interstice.",
    unsubscribe: "Uitschrijven",
  },

  fr: {
    subject: "Nouvelle intervention d’Interstice",
    published: "Une nouvelle intervention d’Interstice vient d’être publiée.",
    read: "Lire l’intervention",
    reason:
      "Vous recevez cet e-mail parce que vous vous êtes inscrit·e à Interstice.",
    unsubscribe: "Se désabonner",
  },
} as const;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendInterventionNewsletter({
  subscriberId,
  email,
  locale,
  slug,
  title,
  intro,
}: {
  subscriberId: string;
  email: string;
  locale: Locale;
  slug: string;
  title: string;
  intro: string;
}) {
  const t = copy[locale];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL;

  if (!siteUrl || !fromEmail) {
    throw new Error("Missing NEXT_PUBLIC_SITE_URL or NEWSLETTER_FROM_EMAIL");
  }

  const interventionUrl = `${siteUrl}/${locale}/interventions/${slug}`;

  const unsubscribeToken = createUnsubscribeToken(subscriberId);

  const unsubscribeUrl =
    `${siteUrl}/${locale}/newsletter/unsubscribe` +
    `?id=${encodeURIComponent(subscriberId)}` +
    `&token=${encodeURIComponent(unsubscribeToken)}`;

  const subject = `${t.subject}: ${title}`;

  const text = `${t.published}

${title}

${intro}

${t.read}: ${interventionUrl}


${t.reason}
${t.unsubscribe}: ${unsubscribeUrl}

Interstice`;

  const html = `
    <p>${escapeHtml(t.published)}</p>

    <h2>${escapeHtml(title)}</h2>

    <p>${escapeHtml(intro)}</p>

    <p>
      <a href="${interventionUrl}">
        ${escapeHtml(t.read)} →
      </a>
    </p>

    <hr
      style="margin:32px 0;border:0;border-top:1px solid #ddd"
    />

    <p style="font-size:12px;line-height:1.5">
      ${escapeHtml(t.reason)}
      <br />
      <a href="${unsubscribeUrl}">
        ${escapeHtml(t.unsubscribe)}
      </a>
    </p>

    <p>Interstice</p>
  `;

  return ses.send(
    new SendEmailCommand({
      Source: fromEmail,

      Destination: {
        ToAddresses: [email],
      },

      Message: {
        Subject: {
          Data: subject,
          Charset: "UTF-8",
        },

        Body: {
          Text: {
            Data: text,
            Charset: "UTF-8",
          },

          Html: {
            Data: html,
            Charset: "UTF-8",
          },
        },
      },
    }),
  );
}
