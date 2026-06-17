import Link from "next/link";
import { AlertTriangle, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import type { RichCaseStudy } from "@/data/content-types";
import { Reveal } from "./Reveal";
import { FigurePlaceholder } from "./FigurePlaceholder";
import { articleSchema, breadcrumbSchema } from "./Schema";

export function CaseStudyPageTemplate({ study }: { study: RichCaseStudy }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Case Studies", path: "/case-studies" },
              { name: study.title, path: study.path },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              path: study.path,
              title: study.title,
              metaDescription: study.metaDescription,
              updated: study.updated,
            }),
          ),
        }}
      />

      {/* Placeholder banner — these are illustrative until real projects are supplied */}
      <div className="bg-accent/15 border-b border-accent/40">
        <div className="container-x flex items-center gap-2.5 py-2.5 text-xs font-semibold text-[color:var(--color-primary)]">
          <AlertTriangle className="h-4 w-4 flex-none text-accent" />
          PLACEHOLDER — REPLACE WITH REAL PROJECT. Illustrative example; no client, figures, or
          outcomes here are actual until verified details are supplied.
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[color:var(--color-primary)] text-white">
        <div className="container-x py-16 md:py-20">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span>{study.industry}</span>
            <span className="text-white/40">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {study.cityName}, IN
            </span>
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">
            {study.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">{study.summary}</p>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="max-w-2xl">
            {study.images[0] && (
              <div className="mb-8">
                <FigurePlaceholder slot={study.images[0]} />
              </div>
            )}
            {study.sections.map((sec) => (
              <div key={sec.h2} className="mt-8 first:mt-0">
                <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                  {sec.h2}
                </h2>
                {sec.paragraphs.map((p, j) => (
                  <p key={j} className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-sm border border-border bg-card p-6">
              <p className="eyebrow text-[10px]">At a glance</p>
              <ul className="mt-3 space-y-2 border-b border-border pb-4">
                {study.metrics.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-accent" /> {m}
                    <span className="ml-1 text-[10px] uppercase tracking-wide text-accent">(placeholder)</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 eyebrow text-[10px]">Related</p>
              <ul className="mt-3 grid gap-2">
                {study.internalLinks.map((l) => (
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
            </div>
            <Reveal>
              <div className="mt-4 rounded-sm border border-accent/40 bg-[color:var(--color-surface)] p-6">
                <p className="font-display text-base font-semibold text-foreground">
                  Have a similar property challenge?
                </p>
                <Link
                  href="/contact"
                  data-testid="case-study-cta-link"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)] hover:scale-[1.02]"
                >
                  Request a Free Assessment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
