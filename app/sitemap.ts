import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { interventions } from "@/lib/content/interventions";

const baseUrl = "https://www.interstice.info";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/manifesto",
    "/interventions",
    "/contact",
    "/privacy",
  ];

  // 1. Static Entries with Alternates
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}/${locales[0]}${path}`, // Primary locale
    lastModified: "2026-04-29T09:36:02.670Z", // Use a fixed string or build date
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `${baseUrl}/${locale}${path}`]),
      ),
    },
  }));

  // 2. Intervention Entries with Alternates
  const interventionEntries: MetadataRoute.Sitemap = interventions.map(
    (item) => ({
      url: `${baseUrl}/${locales[0]}/interventions/${item.slug}`,
      lastModified: new Date(item.updatedAt ?? item.publishedAt),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [
            locale,
            `${baseUrl}/${locale}/interventions/${item.slug}`,
          ]),
        ),
      },
    }),
  );

  return [...staticEntries, ...interventionEntries];
}
