"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/data/site";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[color:var(--color-primary)] text-white backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-primary)]/95">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" data-testid="header-home-link" className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-accent font-display text-base font-bold tracking-tight text-[color:var(--color-primary)]">
            HC
          </span>
          <span className="font-display text-base font-semibold uppercase tracking-wide leading-tight">
            Hamilton County
            <span className="block text-[10px] font-medium tracking-[0.22em] text-white/70">CONCRETE REPAIR</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              data-testid={`header-nav-link-${n.to.replaceAll("/", "") || "home"}`}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                pathname === n.to ? "text-accent" : "text-white/80"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {SITE.hasPhone && (
            <a
              href={SITE.phoneHref}
              data-testid="header-phone-link"
              className="hidden items-center gap-2 text-sm font-semibold text-white hover:text-accent md:inline-flex"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          )}
          <Link
            href="/contact"
            data-testid="header-request-assessment-link"
            className="hidden rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-[color:var(--color-primary)] transition-transform hover:scale-[1.03] sm:inline-block"
          >
            Request Assessment
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            data-testid="header-mobile-menu-toggle-button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[color:var(--color-primary)] lg:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                data-testid={`header-mobile-nav-link-${n.to.replaceAll("/", "") || "home"}`}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-accent"
              >
                {n.label}
              </Link>
            ))}
            {SITE.hasPhone && (
              <a
                href={SITE.phoneHref}
                data-testid="header-mobile-phone-link"
                className="mt-2 inline-flex items-center gap-2 rounded-sm bg-accent px-3 py-2.5 text-sm font-semibold text-[color:var(--color-primary)]"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
