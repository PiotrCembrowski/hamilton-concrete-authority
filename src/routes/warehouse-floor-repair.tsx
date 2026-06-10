import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/site";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { FinalCTA } from "@/components/site/Sections";

const service = SERVICES[7];

export const Route = createFileRoute("/warehouse-floor-repair")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:url", content: "/warehouse-floor-repair" },
    ],
    links: [{ rel: "canonical", href: "/warehouse-floor-repair" }],
  }),
  component: () => (
    <>
      <ServicePageTemplate service={service} />
      <FinalCTA />
    </>
  ),
});
