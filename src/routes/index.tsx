import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import {
  ServicesGrid,
  IndustriesGrid,
  ProblemsGrid,
  WhyChooseUs,
  ProcessSteps,
  ServiceArea,
  CaseStudies,
  FAQSection,
  FinalCTA,
} from "@/components/site/Sections";
import { FAQ_JSONLD } from "@/components/site/Schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Commercial Concrete Repair in Hamilton County, Indiana | HCCR" },
      {
        name: "description",
        content:
          "Commercial concrete repair, sidewalk repair, loading dock repair, and ADA upgrades for property managers and commercial owners throughout Hamilton County, IN.",
      },
      { property: "og:title", content: "Commercial Concrete Repair — Hamilton County, IN" },
      {
        property: "og:description",
        content:
          "Specialists in commercial concrete repair across Hamilton County, Indiana. Request a free on-site assessment.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
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
      <CaseStudies />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
