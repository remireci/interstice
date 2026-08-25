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

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date("2026-04-29T09:36:02.670Z"),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${path}`]),
        ),
      },
    })),
  );

  const interventionEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    interventions.map((item) => {
      const rawDate = item.updatedAt || item.publishedAt;
      const validDate = rawDate ? new Date(rawDate) : new Date();

      return {
        url: `${baseUrl}/${locale}/interventions/${item.slug}`,
        lastModified: isNaN(validDate.getTime()) ? new Date() : validDate,
        changeFrequency: "monthly",
        priority: 0.9,
      };
    }),
  );

  return [...staticEntries, ...interventionEntries];
}
