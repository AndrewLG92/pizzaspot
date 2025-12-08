import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Only protect API routes
  if (!pathname.startsWith("/api/")) return NextResponse.next();

  const secFetchMode = req.headers.get("sec-fetch-mode");
  const accept = req.headers.get("accept") || "";

  const isBrowserNavigation =
    secFetchMode === "navigate" || accept.includes("text/html");

  if (isBrowserNavigation) {
    return NextResponse.json(
      { error: "Direct access to API routes is not allowed." },
      { status: 403 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*", // matches /api/ and any nested routes
};
