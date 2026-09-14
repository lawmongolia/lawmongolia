import Link from 'next/link';
import { T } from '@/content/dictionary';
import { path, type Lang } from '@/lib/types';
import { Section, PageHeader, Breadcrumbs, RuleList } from '@/components/ui';

export function AboutView({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHeader
        eyebrow={
          <Breadcrumbs lang={lang} trail={[{ name: T.about.title[lang], route: '/about' }]} />
        }
        title={T.about.heading[lang]}
      />

      <Section className="border-t border-rule">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {T.about.body[lang].map((p) => (
              <p key={p} className="mb-5 max-w-prose text-[1.0625rem]">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="warm">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="t-h2">{T.about.approachHeading[lang]}</h2>
          </div>
          <div className="lg:col-span-7">
            <RuleList items={T.about.approach[lang].map((x) => <span key={x}>{x}</span>)} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="t-h2">{T.about.whoHeading[lang]}</h2>
          </div>
          <div className="lg:col-span-7">
            <RuleList items={T.about.who[lang].map((x) => <span key={x}>{x}</span>)} columns={2} />
            <Link href={path(lang, '/services')} className="action mt-10 inline-flex">
              {T.home.servicesAll[lang]}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
