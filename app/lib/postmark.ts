type SendMailArgs = {
  to: string;
  subject: string;
  htmlBody: string;
  textBody: string;
  metadata?: Record<string, string>;
};

export async function sendWithPostmark({
  to,
  subject,
  htmlBody,
  textBody,
  metadata = {},
}: SendMailArgs) {
  const response = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": process.env.POSTMARK_SERVER_TOKEN!,
    },
    body: JSON.stringify({
      From: process.env.POSTMARK_FROM_EMAIL,
      To: to,
      Subject: subject,
      HtmlBody: htmlBody,
      TextBody: textBody,
      MessageStream: "outbound",
      Metadata: metadata,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Postmark error ${response.status}: ${text}`);
  }

  return response.json();
}
