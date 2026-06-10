import { Link } from "@tanstack/react-router";
import { Phone, ClipboardList } from "lucide-react";
import { SITE } from "@/data/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-2 shadow-lg backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href={SITE.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-[color:var(--color-primary)] px-3 py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <Link
          to="/contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-accent px-3 py-3 text-sm font-semibold text-[color:var(--color-primary)]"
        >
          <ClipboardList className="h-4 w-4" /> Free Assessment
        </Link>
      </div>
    </div>
  );
}
