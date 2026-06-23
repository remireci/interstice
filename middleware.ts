import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return new NextResponse("Site is under maintenance.", {
    status: 503,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export const config = {
  // This regex catches the absolute root, localized roots (e.g., /en, /fr),
  // and all sub-paths, while ignoring system files like favicon or _next assets.
  matcher: ["/", "/((?!_next/static|_next/image|favicon.ico).*)"],
};
