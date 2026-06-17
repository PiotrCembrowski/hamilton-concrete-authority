import Link from "next/link";
import { ArrowUpRight, CalendarDays, Phone } from "lucide-react";
import type { RichArticle } from "@/data/content-types";
import { SITE } from "@/data/site";
import { Reveal } from "./Reveal";
import { FigurePlaceholder } from "./FigurePlaceholder";
import { articleSchema, breadcrumbSchema, faqSchema } from "./Schema";

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export function ArticlePageTemplate({ article }: { article: RichArticle }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              path: article.path,
              title: article.title,
              metaDescription: article.metaDescription,
              updated: article.updated,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources" },
              { name: article.title, path: article.path },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(article.faqs, article.path)) }}
      />

      {/* Hero */}
      <section className="bg-[color:var(--color-primary)] py-16 text-white md:py-20">
        <div className="container-x max-w-3xl">
          <p className="eyebrow text-accent">Resource Guide</p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">
            {article.h1}
          </h1>
          <p className="mt-5 text-base text-white/75 md:text-lg">{article.excerpt}</p>
          <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            <CalendarDays className="h-3.5 w-3.5 text-accent" /> Updated {fmtDate(article.updated)}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="max-w-2xl">
            {article.images[0] && (
              <div className="mb-8">
                <FigurePlaceholder slot={article.images[0]} />
              </div>
            )}
            {article.sections.map((sec, i) => (
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
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Unique FAQ */}
            <div className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                Frequently Asked
              </h2>
              <div className="mt-5 divide-y divide-border rounded-sm border border-border bg-card">
                {article.faqs.map((f, i) => (
                  <details key={i} className="group p-5 open:bg-[color:var(--color-surface)]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="font-display text-base font-semibold text-foreground">
                        {f.q}
                      </span>
                      <span className="font-display text-xl font-semibold text-accent transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <div className="rounded-sm border border-border bg-card p-6">
                <p className="eyebrow text-[10px]">Keep reading</p>
                <ul className="mt-3 grid gap-2">
                  {article.internalLinks.map((l) => (
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
            </Reveal>
            <div className="mt-4 rounded-sm border border-accent/40 bg-[color:var(--color-surface)] p-6">
              <p className="font-display text-base font-semibold text-foreground">
                {article.cta}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/contact"
                  data-testid="article-cta-assessment-link"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)] hover:scale-[1.02]"
                >
                  Request a Free Assessment
                </Link>
                {SITE.hasPhone && (
                  <a
                    href={SITE.phoneHref}
                    data-testid="article-cta-phone-link"
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-foreground hover:border-accent hover:text-accent"
                  >
                    <Phone className="h-4 w-4 text-accent" /> {SITE.phone}
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
