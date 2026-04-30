import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  // Store the current URL in a header so Server Components can read it
  requestHeaders.set("x-url", request.nextUrl.pathname);

  const { pathname } = request.nextUrl;

  // Laat technische/public routes met rust
  if (
    pathname.startsWith("/unsubscribe") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/icon.png") ||
    pathname.startsWith("/apple-icon.png")
  ) {
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*sitemap.*|robots.txt|.*\\.png$).*)",
  ],
};
