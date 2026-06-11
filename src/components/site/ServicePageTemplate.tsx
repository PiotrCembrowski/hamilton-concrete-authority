import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import type { ServiceItem } from "@/data/site";
import { CITIES, SERVICES, SITE } from "@/data/site";
import { Reveal } from "./Reveal";
import { EstimateForm } from "./EstimateForm";
import { breadcrumbSchema, serviceSchema } from "./Schema";
import { FAQSection } from "./Sections";

export function ServicePageTemplate({ service }: { service: ServiceItem }) {
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

      <section className="bg-[color:var(--color-primary)] text-white">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow text-accent">{SITE.region}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/75 md:text-lg">{service.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
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
                What&apos;s Included
              </h3>
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

      <section className="section-pad bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Scope</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Engineered for Commercial Conditions
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Our crews handle high-traffic commercial conditions every day. We protect your operations, your tenants, and your asset value with documentation-grade work.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Phased, after-hours scheduling",
                "Detailed proposals & line-items",
                "Documented warranty",
                "Licensed & fully insured",
                "ADA-aware finish work",
                "Single project-manager contact",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2.5 rounded-sm border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  <span className="text-sm text-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-sm border border-border bg-card p-6 md:p-8">
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
              Get a Free Assessment
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Response within one business day.
            </p>
            <div className="mt-5">
              <EstimateForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[color:var(--color-surface)]">
        <div className="container-x">
          <p className="eyebrow">Service Areas</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            {service.title} — Throughout Hamilton County
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
          <div className="mt-12">
            <p className="eyebrow">Related Services</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.filter((s) => s.slug !== service.slug)
                .slice(0, 4)
                .map((s) => (
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
        </div>
      </section>

      <FAQSection />
    </>
  );
}
