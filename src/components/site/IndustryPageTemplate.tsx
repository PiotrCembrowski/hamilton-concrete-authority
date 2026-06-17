import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, CheckCircle2, Phone } from "lucide-react";
import type { RichIndustry } from "@/data/content-types";
import { SERVICES, SITE } from "@/data/site";
import { EstimateForm } from "./EstimateForm";
import { FigurePlaceholder } from "./FigurePlaceholder";
import { breadcrumbSchema, faqSchema } from "./Schema";

export function IndustryPageTemplate({ industry }: { industry: RichIndustry }) {
  const services = industry.relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: industry.title, path: `/${industry.slug}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(industry.faqs, `/${industry.slug}`)) }}
      />

      {/* Hero */}
      <section className="bg-[color:var(--color-primary)] text-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              <Building2 className="h-3.5 w-3.5" /> Built for {industry.industryName}
            </div>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
              {industry.h1}
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/75 md:text-lg">{industry.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                data-testid="industry-hero-request-assessment-link"
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)] hover:scale-[1.03]"
              >
                Request Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              {SITE.hasPhone && (
                <a
                  href={SITE.phoneHref}
                  data-testid="industry-hero-phone-link"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body + form */}
      <section className="section-pad bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="max-w-2xl">
            {industry.sections.map((sec, i) => (
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
                {i === 0 && industry.images[0] && (
                  <div className="mt-8">
                    <FigurePlaceholder slot={industry.images[0]} />
                  </div>
                )}
                {i === 1 && industry.internalLinks.length > 0 && (
                  <aside className="mt-8 rounded-sm border border-border bg-card p-5">
                    <p className="eyebrow text-[10px]">Most relevant services</p>
                    <ul className="mt-3 grid gap-2">
                      {industry.internalLinks.map((l) => (
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
              </div>
            ))}
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-sm border border-border bg-card p-6 md:p-7">
              <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                Request a Free Assessment
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                On-site walkthrough and a line-item proposal. Response within one business day.
              </p>
              <div className="mt-5">
                <EstimateForm compact />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Services for this asset class */}
      {services.length > 0 && (
        <section className="section-pad bg-[color:var(--color-surface)]">
          <div className="container-x">
            <p className="eyebrow">Services for {industry.industryName}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              The Services This Asset Class Uses Most
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
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
        </section>
      )}

      {/* Unique FAQ */}
      <section className="section-pad bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="max-w-md">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              {industry.title} — Common Questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Specific to {industry.industryName}. If yours isn&apos;t here, call us — we&apos;d
              rather talk than guess.
            </p>
          </div>
          <div className="divide-y divide-border rounded-sm border border-border bg-card">
            {industry.faqs.map((f, i) => (
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
