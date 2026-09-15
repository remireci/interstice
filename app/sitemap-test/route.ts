import { locales } from "@/lib/i18n";
import { interventions } from "@/lib/content/interventions";

const baseUrl = "https://www.interstice.info";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatDate(date: string | Date | undefined) {
  if (!date) return null;

  const parsed = new Date(date);

  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
}

export async function GET() {
  const staticPaths = [
    "",
    "/manifesto",
    "/interventions",
    "/contact",
    "/privacy",
  ];

  const staticEntries = locales.flatMap((locale) =>
    staticPaths.map((path) => {
      const url = `${baseUrl}/${locale}${path}`;

      const alternates = locales
        .map(
          (alternateLocale) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(
              alternateLocale,
            )}" href="${escapeXml(`${baseUrl}/${alternateLocale}${path}`)}" />`,
        )
        .join("\n");

      return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>2026-04-29T09:36:02.670Z</lastmod>
${alternates}
  </url>`;
    }),
  );

  const interventionEntries = locales.flatMap((locale) =>
    interventions.map((item) => {
      const url = `${baseUrl}/${locale}/interventions/${item.slug}`;

      const lastModified = formatDate(item.updatedAt || item.publishedAt);

      const alternates = locales
        .map(
          (alternateLocale) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(
              alternateLocale,
            )}" href="${escapeXml(
              `${baseUrl}/${alternateLocale}/interventions/${item.slug}`,
            )}" />`,
        )
        .join("\n");

      return `  <url>
    <loc>${escapeXml(url)}</loc>${
      lastModified ? `\n    <lastmod>${lastModified}</lastmod>` : ""
    }
${alternates}
  </url>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${[...staticEntries, ...interventionEntries].join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
