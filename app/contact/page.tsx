import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/data/site";
import { EstimateForm } from "@/components/site/EstimateForm";
import { BASE_URL, getStaticRouteMeta } from "@/lib/route-seo";

const routeMeta = getStaticRouteMeta("/contact");

export const metadata: Metadata = {
  title: routeMeta?.title,
  description: routeMeta?.description,
  alternates: {
    canonical: routeMeta ? `${BASE_URL}${routeMeta.canonical}` : undefined,
  },
  openGraph: {
    title: "Contact — Hamilton County Concrete Repair",
    description: "Request a free commercial concrete repair assessment.",
    url: `${BASE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <section className="bg-background">
      <div className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Request Your Free Site Assessment
          </h1>
          <p className="mt-4 text-muted-foreground">
            A commercial concrete specialist will reach out within one business day to schedule your on-site walkthrough.
          </p>
          <div className="mt-8 space-y-4">
            {SITE.hasPhone && (
              <a
                href={SITE.phoneHref}
                data-testid="contact-page-phone-link"
                className="flex items-center gap-3 rounded-sm border border-border bg-card p-4 hover:border-accent"
              >
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <div className="eyebrow text-[10px]">Call Direct</div>
                  <div className="font-display text-lg font-semibold text-foreground">{SITE.phone}</div>
                </div>
              </a>
            )}
            <a
              href={`mailto:${SITE.email}`}
              data-testid="contact-page-email-link"
              className="flex items-center gap-3 rounded-sm border border-border bg-card p-4 hover:border-accent"
            >
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <div className="eyebrow text-[10px]">Email</div>
                <div className="text-sm font-medium text-foreground">{SITE.email}</div>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-sm border border-border bg-card p-4">
              <MapPin className="h-5 w-5 text-accent" />
              <div>
                <div className="eyebrow text-[10px]">Service Area</div>
                <div className="text-sm font-medium text-foreground">Hamilton County, Indiana</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-sm border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">
            Estimate Request
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">Tell us about your property.</p>
          <div className="mt-5">
            <EstimateForm />
          </div>
        </div>
      </div>
    </section>
  );
}