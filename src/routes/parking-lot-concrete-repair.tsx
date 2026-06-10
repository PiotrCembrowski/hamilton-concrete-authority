import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/site";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { FinalCTA } from "@/components/site/Sections";

const service = SERVICES[5];

export const Route = createFileRoute("/parking-lot-concrete-repair")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:url", content: "/parking-lot-concrete-repair" },
    ],
    links: [{ rel: "canonical", href: "/parking-lot-concrete-repair" }],
  }),
  component: () => (
    <>
      <ServicePageTemplate service={service} />
      <FinalCTA />
    </>
  ),
});
