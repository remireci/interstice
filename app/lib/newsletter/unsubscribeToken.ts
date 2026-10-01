import crypto from "node:crypto";

function getSecret() {
  const secret = process.env.NEWSLETTER_UNSUBSCRIBE_SECRET;

  if (!secret) {
    throw new Error("Missing NEWSLETTER_UNSUBSCRIBE_SECRET");
  }

  return secret;
}

export function createUnsubscribeToken(subscriberId: string) {
  return crypto
    .createHmac("sha256", getSecret())
    .update(subscriberId)
    .digest("hex");
}

export function verifyUnsubscribeToken(subscriberId: string, token: string) {
  if (!/^[a-f0-9]{64}$/i.test(token)) {
    return false;
  }

  const expected = Buffer.from(createUnsubscribeToken(subscriberId), "hex");

  const received = Buffer.from(token, "hex");

  return crypto.timingSafeEqual(expected, received);
}
