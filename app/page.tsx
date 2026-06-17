import type { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import {
  ServicesGrid,
  IndustriesGrid,
  ProblemsGrid,
  WhyChooseUs,
  ProcessSteps,
  ServiceArea,
  FAQSection,
  FinalCTA,
} from "@/components/site/Sections";
import { FAQ_JSONLD } from "@/components/site/Schema";
import { BASE_URL, getStaticRouteMeta } from "@/lib/route-seo";

const routeMeta = getStaticRouteMeta("/");

export const metadata: Metadata = {
  title: routeMeta?.title,
  description: routeMeta?.description,
  alternates: {
    canonical: routeMeta ? `${BASE_URL}${routeMeta.canonical}` : `${BASE_URL}/`,
  },
  openGraph: {
    title: "Commercial Concrete Repair — Hamilton County, IN",
    description:
      "Specialists in commercial concrete repair across Hamilton County, Indiana. Request a free on-site assessment.",
    url: `${BASE_URL}/`,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <Hero />
      <ServicesGrid />
      <IndustriesGrid />
      <ProblemsGrid />
      <WhyChooseUs />
      <ProcessSteps />
      <ServiceArea />
      <FAQSection />
      <FinalCTA />
    </>
  );
}