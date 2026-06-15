import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageTemplate } from "@/components/site/ArticlePageTemplate";
import { FinalCTA } from "@/components/site/Sections";
import { ARTICLES, getArticle } from "@/data/resources";
import { BASE_URL } from "@/lib/route-seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `${BASE_URL}${article.path}`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      url,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <ArticlePageTemplate article={article} />
      <FinalCTA />
    </>
  );
}
