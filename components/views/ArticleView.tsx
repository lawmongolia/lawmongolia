import Link from 'next/link';
import { T } from '@/content/dictionary';
import { type Article, getArticles, formatDate } from '@/lib/insights';
import { getPerson } from '@/content/people';
import { getService } from '@/content/services';
import { path, type Lang } from '@/lib/types';
import { Section, Breadcrumbs } from '@/components/ui';

export function ArticleView({ lang, article }: { lang: Lang; article: Article }) {
  const author = getPerson(article.author);
  const related = getArticles(lang)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <div className="shell pt-12">
        <Breadcrumbs
          lang={lang}
          trail={[
            { name: T.insights.title[lang], route: '/insights' },
            { name: article.title, route: `/insights/${article.slug}` },
          ]}
        />
      </div>

      <article className="shell pb-8 pt-10">
        <header className="max-w-prose border-b border-rule pb-10">
          <p className="font-sans text-[0.8125rem] text-muted">
            {article.category}
            {article.category ? ' · ' : ''}
            {article.readingMinutes} {T.insights.readingTime[lang]}
          </p>

          <h1 className="mt-4 font-serif text-[clamp(1.875rem,4vw,3rem)] leading-[1.1] tracking-[-0.025em]">
            {article.title}
          </h1>

          <p className="t-lede mt-6">{article.description}</p>

          <dl className="mt-8 space-y-1 font-sans text-[0.875rem] text-muted">
            <div className="flex gap-3">
              <dt className="w-24 shrink-0">{T.insights.author[lang]}</dt>
              <dd>
                {author ? (
                  <Link href={path(lang, `/people/${author.slug}`)} className="link-underline">
                    {author.name[lang]}
                  </Link>
                ) : (
                  article.author
                )}
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 shrink-0">{T.insights.published[lang]}</dt>
              <dd>
                <time dateTime={article.date}>{formatDate(article.date, lang)}</time>
              </dd>
            </div>
            {article.updated && article.updated !== article.date && (
              <div className="flex gap-3">
                <dt className="w-24 shrink-0">{T.insights.updated[lang]}</dt>
                <dd>
                  <time dateTime={article.updated}>{formatDate(article.updated, lang)}</time>
                </dd>
              </div>
            )}
          </dl>
        </header>

        <div
          className="prose-legal pt-10"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />
      </article>

      {article.relatedServices.length > 0 && (
        <Section tone="warm">
          <h2 className="t-label mb-6 font-sans">{T.insights.relatedServices[lang]}</h2>
          <ul className="max-w-2xl border-t border-rule">
            {article.relatedServices.map((slug) => {
              const s = getService(slug);
              if (!s) return null;
              return (
                <li key={slug} className="border-b border-rule">
                  <Link
                    href={path(lang, `/services/${slug}`)}
                    className="block py-4 font-serif text-[1.125rem] no-underline hover:text-[var(--accent)]"
                  >
                    {s.title[lang]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>
      )}

      {related.length > 0 && (
        <Section>
          <h2 className="t-label mb-6 font-sans">{T.insights.relatedArticles[lang]}</h2>
          <ul className="max-w-2xl border-t border-rule">
            {related.map((a) => (
              <li key={a.slug} className="border-b border-rule">
                <Link
                  href={path(lang, `/insights/${a.slug}`)}
                  className="block py-4 font-serif text-[1.125rem] no-underline hover:text-[var(--accent)]"
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <div className="shell pb-24 pt-10">
        <Link href={path(lang, '/insights')} className="action">
          {T.insights.backToInsights[lang]}
        </Link>
      </div>
    </>
  );
}
