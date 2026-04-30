import { locales } from "@/lib/i18n";
import { interventions } from "@/lib/content/interventions";
import { NextResponse } from "next/server";

const baseUrl = "https://www.interstice.info";

export async function GET() {
  const staticPaths = [
    "",
    "/manifesto",
    "/interventions",
    "/contact",
    "/privacy",
  ];

  // Build the XML string manually
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static Entries
  locales.forEach((locale) => {
    staticPaths.forEach((path) => {
      const fullPath = path === "" ? "/" : path;
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}/${locale}${fullPath}</loc>\n`;
      xml += `    <lastmod>2026-04-29T09:36:02.670Z</lastmod>\n`;
      xml += `    <changefreq>${path === "" ? "weekly" : "monthly"}</changefreq>\n`;
      xml += `    <priority>${path === "" ? "1.0" : "0.8"}</priority>\n`;
      xml += `  </url>\n`;
    });
  });

  // Intervention Entries
  locales.forEach((locale) => {
    interventions.forEach((item) => {
      const date = new Date(item.updatedAt ?? item.publishedAt).toISOString();
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}/${locale}/interventions/${item.slug}</loc>\n`;
      xml += `    <lastmod>${date}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.9</priority>\n`;
      xml += `  </url>\n`;
    });
  });

  xml += `</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}
