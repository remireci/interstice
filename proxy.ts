import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_INACTIVE = true;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const allowed =
    pathname.includes("/unavailable") ||
    pathname.includes("/unsubscribe") ||
    pathname.includes("/privacy") ||
    pathname.includes("/contact") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.startsWith("/sitemaps/") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".ico");

  if (SITE_INACTIVE && !allowed) {
    const url = request.nextUrl.clone();

    const parts = pathname.split("/").filter(Boolean);
    const locale = parts[0] || "en";
    const site = parts[1] || ""; // pas "main" aan als jullie site-param anders heet

    url.pathname = `/${locale}/${site}/unavailable`;

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
