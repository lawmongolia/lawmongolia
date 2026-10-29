import { T } from '@/content/dictionary';
import { RETAINED_COUNSEL } from '@/content/focus-practices';
import type { Lang } from '@/lib/types';
import Link from 'next/link';
import { path } from '@/lib/types';
import { PageHeader, Breadcrumbs, Section, RuleList } from '@/components/ui';
import { ServiceIndex } from '@/components/ServiceIndex';

export function ServicesView({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHeader
        eyebrow={<Breadcrumbs lang={lang} trail={[{ name: T.services.title[lang], route: '/services' }]} />}
        title={T.services.heading[lang]}
        lede={T.services.lede[lang]}
      />
      <div className="shell pb-20"><ServiceIndex lang={lang} withLead /></div>
      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="t-h2">{RETAINED_COUNSEL.title[lang]}</h2>
            <p className="t-lede mt-5 max-w-prose">{RETAINED_COUNSEL.lead[lang]}</p>
            <Link href={path(lang, '/services/ongoing-legal-services')} className="action action-accent mt-8 inline-flex">
              {lang === 'mn' ? 'Дэлгэрэнгүй' : 'Explore retained legal counsel'}
            </Link>
          </div>
          <div className="lg:col-span-7">
            <RuleList items={T.retainer.items[lang].map((item) => <span key={item}>{item}</span>)} columns={2} />
          </div>
        </div>
      </Section>
    </>
  );
}
