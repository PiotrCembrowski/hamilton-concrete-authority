import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { CITIES, SERVICES, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[color:var(--color-primary)] text-white/80">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm bg-accent font-display text-base font-bold text-[color:var(--color-primary)]">
              HC
            </span>
            <span className="font-display text-base font-semibold uppercase tracking-wide text-white">
              {SITE.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Commercial concrete repair specialists serving property managers, HOAs, and commercial owners throughout {SITE.region}.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2 text-white hover:text-accent">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-white/80 hover:text-accent">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.18em] text-accent">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="text-white/70 hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.18em] text-accent">Service Areas</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link to={`/concrete-repair-${c.slug}-in`} className="text-white/70 hover:text-accent">
                  {c.name}, IN
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.18em] text-accent">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/industries" className="text-white/70 hover:text-accent">Industries Served</Link></li>
            <li><Link to="/case-studies" className="text-white/70 hover:text-accent">Case Studies</Link></li>
            <li><Link to="/resources" className="text-white/70 hover:text-accent">Resource Center</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-accent">Request Assessment</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-white/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. Serving {SITE.region}.</p>
          <p>Service Area Business — On-site assessments by appointment.</p>
        </div>
      </div>
    </footer>
  );
}
