import Link from 'next/link';
import { T } from '@/content/dictionary';
import { FINTECH_COUNSEL, RETAINED_COUNSEL } from '@/content/focus-practices';
import { SERVICES, type Service } from '@/content/services';
import { getArticles } from '@/lib/insights';
import { path, type Lang } from '@/lib/types';
import { Section, PageHeader, Breadcrumbs, RuleList } from '@/components/ui';

export function ServiceView({ lang, service }: { lang: Lang; service: Service }) {
  const fintech = service.slug === 'fintech-financial-regulation' ? FINTECH_COUNSEL : null;
  const curated = fintech?.articleSlugs[lang] ?? [];
  const articles = getArticles(lang)
    .filter((a) => a.relatedServices.includes(service.slug) || curated.includes(a.slug))
    .sort((a, b) => {
      const left = curated.indexOf(a.slug);
      const right = curated.indexOf(b.slug);
      if (left !== -1 && right !== -1) return left - right;
      if (left !== -1) return -1;
      if (right !== -1) return 1;
      return b.date.localeCompare(a.date);
    })
    .slice(0, 4);
  const related: Service[] = fintech
    ? ['technology-digital-platforms', 'contracts', 'corporate-commercial']
        .map((slug) => SERVICES.find((s) => s.slug === slug))
        .filter((s): s is Service => Boolean(s))
    : SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHeader
        eyebrow={<Breadcrumbs lang={lang} trail={[
          { name: T.services.title[lang], route: '/services' },
          { name: service.title[lang], route: `/services/${service.slug}` },
        ]} />}
        title={fintech ? fintech.title[lang] : service.title[lang]}
        lede={fintech ? fintech.lead[lang] : service.lead[lang]}
      />

      <Section className="border-t border-rule">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {(fintech ? fintech.paragraphs[lang] : service.body[lang]).map((p) => (
              <p key={p} className="mb-5 max-w-prose text-[1.0625rem]">{p}</p>
            ))}
            {fintech?.sections.map((section) => (
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
            <RuleList items={(fintech ? fintech.covers[lang] : service.covers[lang]).map((item) => <span key={item}>{item}</span>)} />
          </div>
        </div>
      </Section>

      {articles.length > 0 && (
        <Section tone="warm">
          <h2 className="t-label mb-6 font-sans">{lang === 'mn' ? 'Холбогдох хууль зүйн нийтлэл' : 'Related legal analysis'}</h2>
          <ul className="max-w-3xl border-t border-rule">
            {articles.map((a) => (
              <li key={a.slug} className="border-b border-rule py-5">
                <Link href={path(lang, `/insights/${a.slug}`)} className="group block no-underline">
                  <h3 className="font-serif text-[1.125rem] transition-colors group-hover:text-[var(--accent)]">{a.title}</h3>
                  <p className="mt-2 font-sans text-[0.875rem] text-muted">{a.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section>
        <h2 className="t-label mb-6 font-sans">{T.services.related[lang]}</h2>
        <ul className="border-t border-rule">
          {fintech && (
            <li className="border-b border-rule py-4">
              <Link href={path(lang, '/services/ongoing-legal-services')} className="font-serif text-[1.125rem] no-underline hover:text-[var(--accent)]">
                {RETAINED_COUNSEL.title[lang]}
              </Link>
            </li>
          )}
          {related.map((s) => (
            <li key={s.slug} className="border-b border-rule py-4">
              <Link href={path(lang, `/services/${s.slug}`)} className="font-serif text-[1.125rem] no-underline hover:text-[var(--accent)]">
                {s.title[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
