import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/site";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { FinalCTA } from "@/components/site/Sections";

const service = SERVICES[8];

export const Route = createFileRoute("/ada-compliance-repairs")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:url", content: "/ada-compliance-repairs" },
    ],
    links: [{ rel: "canonical", href: "/ada-compliance-repairs" }],
  }),
  component: () => (
    <>
      <ServicePageTemplate service={service} />
      <FinalCTA />
    </>
  ),
});
