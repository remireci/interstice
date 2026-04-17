import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { interventions } from "@/lib/content/interventions";

const baseUrl = "https://www.interstice.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/manifesto",
    "/interventions",
    "/contact",
    "/privacy",
  ] as const;

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
    })),
  );

  const interventionEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    interventions.map((item) => ({
      url: `${baseUrl}/${locale}/interventions/${item.slug}`,
      lastModified: new Date(item.updatedAt ?? item.publishedAt),
      changeFrequency: "monthly",
      priority: 0.9,
    })),
  );

  return [...staticEntries, ...interventionEntries];
}
