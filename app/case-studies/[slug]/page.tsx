import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPageTemplate } from "@/components/site/CaseStudyPageTemplate";
import { FinalCTA } from "@/components/site/Sections";
import { CASE_STUDIES_CONTENT, getCaseStudy } from "@/data/case-studies";
import { BASE_URL } from "@/lib/route-seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES_CONTENT.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const url = `${BASE_URL}${study.path}`;
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: "article", title: study.metaTitle, description: study.metaDescription, url },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <CaseStudyPageTemplate study={study} />
      <FinalCTA />
    </>
  );
}
