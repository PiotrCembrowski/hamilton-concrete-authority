import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import type { ServiceItem } from "@/data/site";
import { CITIES, SERVICES, SITE } from "@/data/site";
import { Reveal } from "./Reveal";
import { EstimateForm } from "./EstimateForm";
import { FigurePlaceholder } from "./FigurePlaceholder";
import { breadcrumbSchema, faqSchema, serviceSchema } from "./Schema";

export function ServicePageTemplate({ service }: { service: ServiceItem }) {
  const related = service.related
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is ServiceItem => Boolean(s))
    .slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path: `/${service.slug}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(service.faqs, `/${service.slug}`)),
        }}
      />

      {/* Hero */}
      <section className="bg-[color:var(--color-primary)] text-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-accent">{SITE.region}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
              {service.h1}
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/75 md:text-lg">{service.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                data-testid="service-hero-request-assessment-link"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)] hover:scale-[1.03]"
              >
                Request Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.phoneHref}
                data-testid="service-hero-phone-link"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
          <Reveal>
            <div className="rounded-sm border border-white/10 bg-white/[0.04] p-6">
              <h2 className="font-display text-base font-semibold uppercase tracking-wide text-accent">
                What&apos;s Included
              </h2>
              <ul className="mt-4 space-y-2.5">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-white/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Long-form body + sticky assessment form */}
      <section className="section-pad bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="max-w-2xl">
            {service.sections.map((sec, i) => (
              <div key={sec.h2} className={i === 0 ? "" : "mt-10"}>
                <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                  {sec.h2}
                </h2>
                {sec.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="mt-5 grid gap-2.5">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* First image slot after the opening section */}
                {i === 0 && service.images[0] && (
                  <div className="mt-8">
                    <FigurePlaceholder slot={service.images[0]} />
                  </div>
                )}

                {/* Contextual internal-link callout mid-article */}
                {i === 1 && service.internalLinks.length > 0 && (
                  <aside className="mt-8 rounded-sm border border-border bg-card p-5">
                    <p className="eyebrow text-[10px]">Related coverage</p>
                    <ul className="mt-3 grid gap-2">
                      {service.internalLinks.map((l) => (
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

                {/* Second image slot (before/after) deeper in the article */}
                {i === 2 && service.images[1] && (
                  <div className="mt-8">
                    <FigurePlaceholder slot={service.images[1]} />
                  </div>
                )}
              </div>
            ))}
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-sm border border-border bg-card p-6 md:p-7">
              <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                Get a Free Assessment
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                On-site walkthrough and a line-item proposal. Response within one business day.
              </p>
              <div className="mt-5">
                <EstimateForm compact />
              </div>
            </div>
            <div className="mt-4 rounded-sm border border-border bg-[color:var(--color-surface)] p-5">
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                Prefer to talk it through?
              </p>
              <a
                href={SITE.phoneHref}
                data-testid="service-aside-phone-link"
                className="mt-2 inline-flex items-center gap-2 font-display text-lg font-semibold text-[color:var(--color-primary)] hover:text-accent"
              >
                <Phone className="h-4 w-4 text-accent" /> {SITE.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Service areas + related services */}
      <section className="section-pad bg-[color:var(--color-surface)]">
        <div className="container-x">
          <p className="eyebrow">Service Areas</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            {service.title} Across Hamilton County
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/concrete-repair-${c.slug}-in`}
                className="rounded-sm border border-border bg-card px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-foreground hover:border-accent hover:text-accent"
              >
                {c.name}, IN
              </Link>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <p className="eyebrow">Related Services</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="group rounded-sm border border-border bg-card p-4 hover:border-accent"
                  >
                    <div className="font-display text-sm font-semibold text-foreground group-hover:text-accent">
                      {s.title}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.short}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Unique, per-page FAQ */}
      <section className="section-pad bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="max-w-md">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              {service.title} — Common Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Specific to {service.title.toLowerCase()}. If yours isn&apos;t here, call us — we&apos;d
              rather talk than guess.
            </p>
          </div>
          <div className="divide-y divide-border rounded-sm border border-border bg-card">
            {service.faqs.map((f, i) => (
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
