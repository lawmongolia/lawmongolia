import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InsightsView } from '@/components/views/InsightsView';
import { ArticleView } from '@/components/views/ArticleView';
import { getArticle, getArticles } from '@/lib/insights';
import { getPerson } from '@/content/people';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, articleSchema, breadcrumbSchema } from '@/lib/schema';

const LANG = 'mn' as const;

type Params = { slug?: string[] };

/**
 * One optional catch-all route covers the Insights listing and every article.
 * Keeping them together means the section builds correctly whether or not any
 * articles have been published yet.
 */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return [
    { slug: [] },
    ...getArticles(LANG).map((a) => ({ slug: [a.slug] })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return buildMetadata({
      lang: LANG,
      route: '/insights',
      title: T.insights.title[LANG],
      description: T.insights.lede[LANG],
    });
  }

  const article = getArticle(LANG, slug[0]);
  if (!article) return {};

  return buildMetadata({
    lang: LANG,
    route: `/insights/${article.slug}`,
    // The two language editions have different slugs, so hreflang is built
    // from the pairing in the article's frontmatter rather than by prefixing.
    routes: {
      mn: `/insights/${article.slug}`,
      ...(article.translation
        ? { en: `/insights/${article.translation}` }
        : {}),
    },
    title: article.title,
    description: article.description,
    type: 'article',
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return <InsightsView lang={LANG} />;
  }

  const article = getArticle(LANG, slug[0]);
  if (!article) notFound();

  const author = getPerson(article.author);

  return (
    <>
      <JsonLd data={articleSchema(article, author?.name[LANG] ?? article.author, LANG)} />
      <JsonLd
        data={breadcrumbSchema(LANG, [
          { name: T.insights.title[LANG], route: '/insights' },
          { name: article.title, route: `/insights/${article.slug}` },
        ])}
      />
      <ArticleView lang={LANG} article={article} />
    </>
  );
}
