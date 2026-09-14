import Link from 'next/link';
import { T } from '@/content/dictionary';
import { getArticles, formatDate } from '@/lib/insights';
import { PEOPLE } from '@/content/people';
import { path, type Lang } from '@/lib/types';
import { PageHeader, Breadcrumbs } from '@/components/ui';

export function InsightsView({ lang }: { lang: Lang }) {
  const articles = getArticles(lang);
  const author = PEOPLE[0];

  return (
    <>
      <PageHeader
        eyebrow={
          <Breadcrumbs lang={lang} trail={[{ name: T.insights.title[lang], route: '/insights' }]} />
        }
        title={T.insights.title[lang]}
        lede={T.insights.lede[lang]}
      />

      <div className="shell">
        {articles.length > 0 ? (
          <ul className="border-t border-rule">
            {articles.map((a) => (
              <li key={a.slug} className="border-b border-rule">
                <Link href={path(lang, `/insights/${a.slug}`)} className="group block py-8 no-underline">
                  <p className="font-sans text-[0.8125rem] text-muted">
                    {formatDate(a.date, lang)}
                    {a.category ? ` · ${a.category}` : ''}
                    {` · ${a.readingMinutes} ${T.insights.readingTime[lang]}`}
                  </p>
                  <h2 className="t-h3 mt-3 max-w-[32ch] font-serif transition-colors group-hover:text-[var(--accent)]">
                    {a.title}
                  </h2>
                  <p className="mt-3 max-w-prose font-sans text-[0.9375rem] text-muted">
                    {a.description}
                  </p>
                  <p className="mt-3 font-sans text-[0.875rem] text-muted">{author.name[lang]}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-prose border-t border-rule pt-8 font-sans text-[0.9375rem] text-muted">
            {T.insights.empty[lang]}
          </p>
        )}
      </div>

    </>
  );
}
