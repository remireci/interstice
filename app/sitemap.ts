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
  ] as const;

  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      // Use .toISOString() if you want to provide a string,
      // or just a Date object.
      lastModified: new Date("2026-04-29T09:36:02.670Z"),
      changeFrequency: (path === "" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: path === "" ? 1 : 0.8,
    })),
  );

  const interventionEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    interventions.map((item) => ({
      url: `${baseUrl}/${locale}/interventions/${item.slug}`,
      lastModified: new Date(item.updatedAt ?? item.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  );

  return [...staticEntries, ...interventionEntries];
}
