// @deprecated

// lib/email/sendNewsletterConfirmation.ts

import { SendEmailCommand } from "@aws-sdk/client-ses";
import { ses } from "./ses";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    subject: "Confirm your Interstice subscription",
    title: "Confirm your subscription",
    text: "You asked to receive new Interstice interventions by email.",
    button: "Confirm subscription",
    ignore: "If you did not request this, you can ignore this email.",
  },

  nl: {
    subject: "Bevestig je inschrijving op Interstice",
    title: "Bevestig je inschrijving",
    text: "Je vroeg om nieuwe Interstice-interventies per e-mail te ontvangen.",
    button: "Inschrijving bevestigen",
    ignore: "Als je dit niet hebt aangevraagd, hoef je niets te doen.",
  },

  fr: {
    subject: "Confirmez votre inscription à Interstice",
    title: "Confirmez votre inscription",
    text: "Vous avez demandé à recevoir les nouvelles interventions d’Interstice par e-mail.",
    button: "Confirmer l’inscription",
    ignore:
      "Si vous n’avez pas effectué cette demande, vous pouvez ignorer cet e-mail.",
  },
} as const;

export async function sendNewsletterConfirmation({
  email,
  locale,
  token,
}: {
  email: string;
  locale: Locale;
  token: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const from = process.env.NEWSLETTER_FROM_EMAIL;

  if (!siteUrl || !from) {
    throw new Error("Missing newsletter email configuration");
  }

  const t = copy[locale];

  const confirmUrl =
    `${siteUrl}/${locale}/newsletter/confirm?token=` +
    encodeURIComponent(token);

  const command = new SendEmailCommand({
    Source: from,

    Destination: {
      ToAddresses: [email],
    },

    Message: {
      Subject: {
        Data: t.subject,
        Charset: "UTF-8",
      },

      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `${t.title}

${t.text}

${confirmUrl}

${t.ignore}`,
        },

        Html: {
          Charset: "UTF-8",
          Data: `
            <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
              <h1 style="font-size:22px">${t.title}</h1>

              <p>${t.text}</p>

              <p>
                <a
                  href="${confirmUrl}"
                  style="
                    display:inline-block;
                    padding:10px 16px;
                    background:#222;
                    color:#fff;
                    text-decoration:none;
                  "
                >
                  ${t.button}
                </a>
              </p>

              <p style="font-size:13px;color:#666">
                ${t.ignore}
              </p>
            </div>
          `,
        },
      },
    },
  });

  await ses.send(command);
}
