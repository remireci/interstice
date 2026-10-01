// lib/email/ses.ts

import { SESClient } from "@aws-sdk/client-ses";

export const ses = new SESClient({
  region: process.env.AWS_REGION,
});
