import { SendEmailCommand } from "@aws-sdk/client-ses";

import type { Locale } from "@/lib/i18n";
import { ses } from "@/lib/email/ses";

const copy = {
  en: {
    subject: "Interstice — may we keep you informed?",
    intro: "You received an email from Interstice earlier this year.",
    explanation:
      "We have since revised our mailing practice. From now on, we will send new Interstice publications by email only to readers who have explicitly chosen to receive them.",
    invitation:
      "If you would like us to keep you informed when a new intervention is published, you can subscribe here:",
    link: "Subscribe to Interstice",
    ending:
      "If you do not subscribe, we will not contact you again by email for this purpose.",
  },

  nl: {
    subject: "Interstice — mogen we je op de hoogte houden?",
    intro: "Je ontving eerder dit jaar een e-mail van Interstice.",
    explanation:
      "Sindsdien hebben we onze werkwijze voor mailings aangepast. Nieuwe Interstice-publicaties sturen we voortaan alleen per e-mail aan lezers die daar uitdrukkelijk voor kiezen.",
    invitation:
      "Als je op de hoogte wilt blijven wanneer een nieuwe interventie verschijnt, kun je je hier inschrijven:",
    link: "Inschrijven bij Interstice",
    ending:
      "Als je je niet inschrijft, zullen we je hiervoor niet opnieuw per e-mail contacteren.",
  },

  fr: {
    subject: "Interstice — pouvons-nous vous tenir informé·e ?",
    intro: "Vous avez reçu un e-mail d’Interstice plus tôt cette année.",
    explanation:
      "Depuis, nous avons revu notre pratique en matière d’envoi d’e-mails. Désormais, nous n’enverrons les nouvelles publications d’Interstice qu’aux personnes qui ont explicitement choisi de les recevoir.",
    invitation:
      "Si vous souhaitez être informé·e de la publication d’une nouvelle intervention, vous pouvez vous inscrire ici :",
    link: "S’abonner à Interstice",
    ending:
      "Si vous ne vous inscrivez pas, nous ne vous recontacterons pas par e-mail à cette fin.",
  },
} as const;

export async function sendNewsletterOutreach({
  email,
  locale,
}: {
  email: string;
  locale: Locale;
}) {
  const t = copy[locale];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL;

  if (!siteUrl || !fromEmail) {
    throw new Error("Missing NEXT_PUBLIC_SITE_URL or NEWSLETTER_FROM_EMAIL");
  }

  const subscribeUrl = `${siteUrl}/${locale}/newsletter?source=outreach`;

  const text = `${t.intro}

${t.explanation}

${t.invitation}

${t.link}: ${subscribeUrl}

${t.ending}

Interstice`;

  const html = `
    <p>${t.intro}</p>

    <p>${t.explanation}</p>

    <p>${t.invitation}</p>

    <p>
      <a href="${subscribeUrl}">
        ${t.link}
      </a>
    </p>

    <p>${t.ending}</p>

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
          Data: t.subject,
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
