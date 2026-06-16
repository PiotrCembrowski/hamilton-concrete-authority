import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICES, PROBLEMS, BENEFITS, PROCESS, CITIES, FAQS, SITE } from "@/data/site";
import { INDUSTRY_PAGES } from "@/data/industries";
import { CASE_STUDIES_CONTENT } from "@/data/case-studies";
import { EstimateForm } from "./EstimateForm";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base text-muted-foreground md:text-lg">{intro}</p>}
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section className="section-pad bg-background">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="Services"
            title="Commercial Concrete Repair, Done Right the First Time"
            intro="Specialized repair, restoration, and replacement services engineered for commercial properties across Hamilton County."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                href={`/${s.slug}`}
                className="group flex h-full flex-col justify-between rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[0_24px_60px_-30px_rgba(28,43,57,0.45)]"
              >
                <div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[color:var(--color-primary)] font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-primary)] group-hover:text-accent">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesGrid() {
  return (
    <section className="section-pad bg-[color:var(--color-surface)]">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="Commercial Property Types"
            title="Built for the Properties You Manage"
            intro="From multi-tenant retail to distribution centers, we tailor scope, scheduling, and reporting to your asset class."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRY_PAGES.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.03}>
              <Link
                href={`/${ind.slug}`}
                className="group block h-full rounded-sm border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent"
              >
                <div className="h-1 w-10 bg-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground group-hover:text-accent">
                  {ind.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-primary)] group-hover:text-accent">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProblemsGrid() {
  return (
    <section className="section-pad bg-[color:var(--color-primary)] text-white">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">Problems We Solve</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              If your property has any of these — we should be talking.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p} delay={i * 0.03}>
              <div className="group flex items-center justify-between rounded-sm border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent hover:bg-white/[0.06]">
                <span className="font-display text-base font-semibold uppercase tracking-wide text-white">
                  {p}
                </span>
                <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-background">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div>
            <SectionHeader
              eyebrow="Why Choose Us"
              title="A Commercial Partner — Not a Residential Crew."
              intro="We specialize in commercial assets. That means engineering-grade scope, professional documentation, and crews scheduled around your operations."
            />
            <div className="mt-8 rounded-sm border border-border bg-[color:var(--color-surface)] p-6">
              <p className="font-display text-sm uppercase tracking-[0.18em] text-[color:var(--color-primary)]">
                Single point of contact
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                One project manager owns your scope from inspection through final walk-through.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.04}>
              <div className="h-full rounded-sm border border-border bg-card p-5">
                <div className="h-1 w-8 bg-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSteps() {
  return (
    <section className="section-pad bg-[color:var(--color-surface)]">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="Our Process"
            title="Five Steps. Zero Surprises."
            intro="A repeatable, documented process that property teams can stake their reputation on."
          />
        </Reveal>
        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <div className="relative h-full rounded-sm border border-border bg-card p-5">
                <div className="font-display text-4xl font-bold text-accent">{p.step}</div>
                <h3 className="mt-3 font-display text-base font-semibold uppercase tracking-wide text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceArea() {
  return (
    <section className="section-pad bg-background">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="Service Area"
            title="Hamilton County Coverage"
            intro="On-site assessments and repair crews dispatched throughout Hamilton County, Indiana."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CITIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.04}>
              <Link
                href={`/concrete-repair-${c.slug}-in`}
                className="group block rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent"
              >
                <div className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Indiana
                </div>
                <div className="mt-2 font-display text-2xl font-semibold text-foreground">
                  {c.name}
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] group-hover:text-accent">
                  View location <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudies() {
  return (
    <section className="section-pad bg-[color:var(--color-surface)]">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="Case Studies"
            title="Real Commercial Projects, Documented Outcomes"
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES_CONTENT.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.04}>
              <Link
                href={cs.path}
                className="group flex h-full flex-col rounded-sm border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-accent">
                    {cs.industry}
                  </span>
                  <span className="rounded-sm border border-dashed border-accent px-1.5 py-0.5 font-display text-[9px] font-bold uppercase tracking-wider text-accent">
                    Placeholder
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground group-hover:text-accent">
                  {cs.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{cs.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 border-t border-border pt-4 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-primary)] group-hover:text-accent">
                  Read the case study <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="section-pad bg-background">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Answers for Property Decision-Makers"
            intro="If your question isn't here, call us — we'd rather talk than guess."
          />
        </Reveal>
        <div className="divide-y divide-border rounded-sm border border-border bg-card">
          {FAQS.map((f, i) => (
            <details key={i} className="group p-5 open:bg-[color:var(--color-surface)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-base font-semibold text-foreground">{f.q}</span>
                <span className="font-display text-xl font-semibold text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative bg-[color:var(--color-primary)] py-20 text-white md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(transparent 95%, rgba(255,255,255,0.6) 95%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.6) 95%)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div>
            <p className="eyebrow text-accent">Free Site Assessment</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight md:text-5xl">
              Protect Your Property Before Small Concrete Problems Become Major Expenses.
            </h2>
            <p className="mt-5 max-w-lg text-base text-white/75">
              Tell us about your property and a specialist will reach out within one business day to schedule your on-site assessment.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {SITE.hasPhone && (
                <div className="rounded-sm border border-white/10 bg-white/[0.04] p-4">
                  <div className="font-display text-xs uppercase tracking-[0.18em] text-accent">Call Direct</div>
                  <a href={SITE.phoneHref} className="mt-1 block font-display text-lg font-semibold text-white hover:text-accent">
                    {SITE.phone}
                  </a>
                </div>
              )}
              <div className="rounded-sm border border-white/10 bg-white/[0.04] p-4">
                <div className="font-display text-xs uppercase tracking-[0.18em] text-accent">Email</div>
                <a href={`mailto:${SITE.email}`} className="mt-1 block text-sm font-medium text-white hover:text-accent break-all">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-sm border border-white/10 bg-white p-6 text-foreground shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] md:p-8">
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">
              Request Free Assessment
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Response within one business day.
            </p>
            <div className="mt-5">
              <EstimateForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
