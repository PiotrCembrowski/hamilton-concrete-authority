import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import type { RichCity } from "@/data/content-types";
import { SERVICES, SITE } from "@/data/site";
import { EstimateForm } from "./EstimateForm";
import { Reveal } from "./Reveal";
import { FigurePlaceholder } from "./FigurePlaceholder";
import { breadcrumbSchema, faqSchema } from "./Schema";

export function CityPageTemplate({ city }: { city: RichCity }) {
  const locationLabel = city.nearby
    ? `${city.name}, Indiana — ${city.county} (nearby)`
    : `${city.name}, Indiana`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Service Areas", path: "/service-areas" },
              { name: city.name, path: city.path },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(city.faqs, city.path)) }}
      />

      {/* Hero */}
      <section className="bg-[color:var(--color-primary)] text-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              <MapPin className="h-3.5 w-3.5" /> {locationLabel}
            </div>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
              {city.h1}
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/75 md:text-lg">{city.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                data-testid="city-hero-request-assessment-link"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)] hover:scale-[1.03]"
              >
                Request {city.name} Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.phoneHref}
                data-testid="city-hero-phone-link"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
          <Reveal>
            <div className="rounded-sm border border-white/10 bg-white/[0.04] p-6">
              <h2 className="font-display text-base font-semibold uppercase tracking-wide text-accent">
                {city.name} commercial corridors we cover
              </h2>
              <ul className="mt-4 space-y-2.5">
                {city.localContext.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-white/85">
                    <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Local body content */}
      <section className="section-pad bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="max-w-2xl">
            {city.sections.map((sec, i) => (
              <div key={sec.h2} className={i === 0 ? "" : "mt-10"}>
                <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                  {sec.h2}
                </h2>
                {sec.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {i === 0 && city.images[0] && (
                  <div className="mt-8">
                    <FigurePlaceholder slot={city.images[0]} />
                  </div>
                )}
                {i === 1 && city.internalLinks.length > 0 && (
                  <aside className="mt-8 rounded-sm border border-border bg-card p-5">
                    <p className="eyebrow text-[10px]">Popular in {city.name}</p>
                    <ul className="mt-3 grid gap-2">
                      {city.internalLinks.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-primary)] underline-offset-4 hover:text-accent hover:underline"
                          >
                            <ArrowUpRight className="h-3.5 w-3.5 flex-none text-accent" />
                            {l.anchor}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </aside>
                )}
                {i === 2 && city.images[1] && (
                  <div className="mt-8">
                    <FigurePlaceholder slot={city.images[1]} />
                  </div>
                )}
              </div>
            ))}

            {/* Project example — tagged placeholder until real data exists */}
            <div className="mt-10 rounded-sm border border-border bg-card p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-sm bg-accent/15 px-2 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-[color:var(--color-primary)]">
                  Project example
                </span>
                <span className="rounded-sm border border-dashed border-accent px-2 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-accent">
                  Placeholder — replace with real project
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {city.project.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{city.project.summary}</p>
              <ul className="mt-4 grid gap-1.5 border-t border-border pt-4 sm:grid-cols-3">
                {city.project.metrics.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-xs text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {m}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-sm border border-border bg-card p-6 md:p-7">
              <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                Request a {city.name} Assessment
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                A specialist reaches out within one business day to schedule your on-site
                walkthrough in {city.name}.
              </p>
              <div className="mt-5">
                <EstimateForm compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Services offered in this city */}
      <section className="section-pad bg-[color:var(--color-surface)]">
        <div className="container-x">
          <p className="eyebrow">Services in {city.name}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Full Commercial Concrete Scope in {city.name}
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group rounded-sm border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent"
              >
                <div className="font-display text-base font-semibold text-foreground group-hover:text-accent">
                  {s.title}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unique, per-city FAQ */}
      <section className="section-pad bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="max-w-md">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Concrete Repair in {city.name} — Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Specific to {city.name}. If yours isn&apos;t here, call us — we&apos;d rather talk
              than guess.
            </p>
          </div>
          <div className="divide-y divide-border rounded-sm border border-border bg-card">
            {city.faqs.map((f, i) => (
              <details key={i} className="group p-5 open:bg-[color:var(--color-surface)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-foreground">{f.q}</span>
                  <span className="font-display text-xl font-semibold text-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
