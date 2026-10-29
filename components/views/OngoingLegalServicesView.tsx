import Link from 'next/link';
import { RETAINED_COUNSEL } from '@/content/focus-practices';
import { getArticles } from '@/lib/insights';
import { path, type Lang } from '@/lib/types';
import { T } from '@/content/dictionary';
import { Breadcrumbs, PageHeader, RuleList, Section } from '@/components/ui';

export function OngoingLegalServicesView({ lang }: { lang: Lang }) {
  const focus = RETAINED_COUNSEL;
  const selected = focus.articleSlugs[lang];
  const articles = getArticles(lang)
    .filter((article) => selected.includes(article.slug))
    .sort((a, b) => selected.indexOf(a.slug) - selected.indexOf(b.slug));

  return (
    <>
      <PageHeader
        eyebrow={<Breadcrumbs lang={lang} trail={[
          { name: T.services.title[lang], route: '/services' },
          { name: focus.title[lang], route: '/services/ongoing-legal-services' },
        ]} />}
        title={focus.title[lang]}
        lede={focus.lead[lang]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {focus.paragraphs[lang].map((p) => <p key={p} className="mb-5 max-w-prose text-[1.0625rem]">{p}</p>)}
            {focus.sections.map((section) => (
              <section key={section.heading[lang]} className="mt-10">
                <h2 className="mb-4 font-serif text-[1.5rem] leading-tight">{section.heading[lang]}</h2>
                {section.paragraphs[lang].map((p) => <p key={p} className="mb-5 max-w-prose text-[1.0625rem]">{p}</p>)}
              </section>
            ))}
            <Link href={path(lang, '/contact')} className="action action-accent mt-8 inline-flex">
              {T.services.discuss[lang]}
            </Link>
          </div>
          <div className="lg:col-span-5">
            <h2 className="t-label mb-5 font-sans">{T.services.covers[lang]}</h2>
            <RuleList items={focus.covers[lang].map((item) => <span key={item}>{item}</span>)} />
          </div>
        </div>
      </Section>

      {articles.length > 0 && (
        <Section tone="warm">
          <h2 className="t-h2 mb-6">{lang === 'mn' ? 'Холбогдох хууль зүйн нийтлэл' : 'Relevant legal analysis'}</h2>
          <ul className="max-w-3xl border-t border-rule">
            {articles.map((article) => (
              <li key={article.slug} className="border-b border-rule py-5">
                <Link href={path(lang, `/insights/${article.slug}`)} className="group block no-underline">
                  <h3 className="font-serif text-[1.125rem] transition-colors group-hover:text-[var(--accent)]">{article.title}</h3>
                  <p className="mt-2 font-sans text-[0.875rem] text-muted">{article.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section>
        <h2 className="t-label mb-6 font-sans">{T.services.related[lang]}</h2>
        <ul className="border-t border-rule">
          {(['corporate-commercial', 'contracts', 'employment-labour', 'fintech-financial-regulation'] as const).map((slug) => (
            <li key={slug} className="border-b border-rule py-4">
              <Link href={path(lang, `/services/${slug}`)} className="font-serif text-[1.125rem] no-underline hover:text-[var(--accent)]">
                {{
                  'corporate-commercial': lang === 'mn' ? 'Компанийн болон арилжааны эрх зүй' : 'Corporate & Commercial',
                  contracts: lang === 'mn' ? 'Гэрээ, арилжааны хэлцэл' : 'Contracts & Commercial Transactions',
                  'employment-labour': lang === 'mn' ? 'Хөдөлмөрийн эрх зүй' : 'Employment & Labour',
                  'fintech-financial-regulation': lang === 'mn' ? 'Финтек, санхүүгийн зохицуулалт' : 'Fintech & Financial Regulation',
                }[slug]}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
