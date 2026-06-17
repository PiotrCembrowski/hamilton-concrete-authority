"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Building2,
  Clock,
  Award,
  CheckCircle2,
} from "lucide-react";
import { SITE } from "@/data/site";

const TRUST = [
  { icon: Building2, label: "Commercial Specialists" },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Award, label: "Property Manager Focused" },
  { icon: Clock, label: "Fast Project Turnaround" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-primary)] text-white">
      {/* geometric background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(transparent 95%, rgba(255,255,255,0.6) 95%), linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.6) 95%)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-40 top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(245,166,35,0.18), transparent 60%)",
        }}
      />
      <div className="container-x relative grid gap-14 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Serving Hamilton County, Indiana
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Commercial Concrete Repair Services in{" "}
            <span className="text-accent">Hamilton County, Indiana</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
          >
            Helping property managers, HOAs, retail centers, warehouses, and commercial property owners repair, restore, and protect concrete infrastructure throughout Hamilton County.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              data-testid="hero-request-assessment-link"
              className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)] transition-transform hover:scale-[1.03]"
            >
              Request a Site Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {SITE.hasPhone && (
              <a
                href={SITE.phoneHref}
                data-testid="hero-phone-link"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/0 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Call {SITE.phone}
              </a>
            )}
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {TRUST.map((t) => (
              <li
                key={t.label}
                className="flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-medium text-white/85"
              >
                <t.icon className="h-4 w-4 text-accent" />
                {t.label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-sm bg-accent/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[color:var(--color-primary)]">
              Free
            </div>
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-white">
              On-Site Assessment Request
            </h3>
            <p className="mt-1 text-sm text-white/65">
              A specialist will reach out within one business day.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Walk your property with you",
                "Document conditions and risks",
                "Deliver a line-item proposal",
                "Schedule around your operations",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-white/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              data-testid="hero-card-start-assessment-link"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-white px-5 py-3 font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary)] hover:bg-accent"
            >
              Start Your Assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
