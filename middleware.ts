import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Canonical-host guard. The site's canonical host is www (see BASE_URL); this 301s
// the bare apex to www so no route can ever be SERVED on a non-www host — a
// defense-in-depth complement to the www canonical tags already emitted in HTML.
//
// Loop-safe by construction: it matches the apex host EXACTLY, so www, Vercel
// preview domains (*.vercel.app), and localhost pass straight through. If the host
// platform already performs the apex→www redirect at the domain level, this is
// harmless (the apex request never reaches middleware); if it doesn't, this
// guarantees the redirect regardless of dashboard state.
const APEX_HOST = "hamiltoncountyconcreterepair.com";
const CANONICAL_HOST = "www.hamiltoncountyconcreterepair.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  if (host === APEX_HOST) {
    const { pathname, search } = request.nextUrl;
    return NextResponse.redirect(`https://${CANONICAL_HOST}${pathname}${search}`, 301);
  }
  return NextResponse.next();
}

export const config = {
  // Run on page/document routes; skip Next internals and static assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
