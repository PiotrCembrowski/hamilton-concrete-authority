import { SITE, SERVICES, CITIES, FAQS } from "@/data/site";

const ORG = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hamiltoncountyconcreterepair.com/#business",
  name: SITE.name,
  url: "https://hamiltoncountyconcreterepair.com",
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Hamilton County, Indiana" },
    ...CITIES.map((c) => ({ "@type": "City", name: `${c.name}, IN` })),
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "IN",
    addressCountry: "US",
  },
  serviceType: SERVICES.map((s) => s.title),
};

export const ORG_JSONLD = ORG;

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: "https://hamiltoncountyconcreterepair.com",
};

export function serviceSchema(s: { title: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    provider: { "@id": "https://hamiltoncountyconcreterepair.com/#business" },
    areaServed: "Hamilton County, Indiana",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `https://hamiltoncountyconcreterepair.com${it.path}`,
    })),
  };
}

export const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
