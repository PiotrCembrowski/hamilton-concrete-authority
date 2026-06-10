import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { SERVICES, SITE } from "@/data/site";
import { EstimateForm } from "./EstimateForm";
import { Reveal } from "./Reveal";
import { breadcrumbSchema } from "./Schema";

export function CityPageTemplate({ city }: { city: string }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Service Areas", path: "/service-areas" },
              { name: city, path: `/concrete-repair-${city.toLowerCase()}-in` },
            ]),
          ),
        }}
      />
      <section className="bg-[color:var(--color-primary)] text-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              <MapPin className="h-3.5 w-3.5" /> {city}, Indiana
            </div>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
              Commercial Concrete Repair in {city}, IN
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/75 md:text-lg">
              Trusted by {city} property managers, HOAs, and commercial owners for sidewalk repair, parking lot concrete, loading docks, ADA upgrades, and warehouse floors.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)] hover:scale-[1.03]"
              >
                Request Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
          <Reveal>
            <div className="rounded-sm border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display text-base font-semibold uppercase tracking-wide text-accent">
                Why {city} Properties Choose Us
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Local Hamilton County crews",
                  "Commercial-only specialization",
                  "Insurance documentation included",
                  "Phased work around tenant operations",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-white/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-x">
          <p className="eyebrow">Services Offered in {city}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Full Commercial Concrete Scope
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="group rounded-sm border border-border bg-card p-5 hover:-translate-y-1 hover:border-accent transition-all"
              >
                <div className="font-display text-lg font-semibold text-foreground group-hover:text-accent">
                  {s.title}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[color:var(--color-surface)]">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">Get Started</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Request a Free Assessment in {city}
            </h2>
            <p className="mt-4 text-muted-foreground">
              A specialist will reach out within one business day to schedule your on-site walkthrough.
            </p>
          </div>
          <div className="rounded-sm border border-border bg-card p-6 md:p-8">
            <EstimateForm compact />
          </div>
        </div>
      </section>
    </>
  );
}
