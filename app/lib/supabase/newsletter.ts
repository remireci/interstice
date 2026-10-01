// lib/supabase/newsletter.ts

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error("Missing Supabase newsletter configuration");
}

console.log("[newsletter supabase]", {
  url: supabaseUrl,
  keyType: supabaseSecretKey.startsWith("sb_secret_")
    ? "secret"
    : supabaseSecretKey.startsWith("sb_publishable_")
      ? "publishable"
      : supabaseSecretKey.startsWith("eyJ")
        ? "legacy-jwt"
        : "unknown",
});

export const newsletterSupabase = createClient(supabaseUrl, supabaseSecretKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
