import Link from 'next/link';
import { T } from '@/content/dictionary';
import { SERVICES, type Service } from '@/content/services';
import { path, type Lang } from '@/lib/types';
import { Section, PageHeader, Breadcrumbs, RuleList } from '@/components/ui';

export function ServiceView({ lang, service }: { lang: Lang; service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHeader
        eyebrow={
          <Breadcrumbs
            lang={lang}
            trail={[
              { name: T.services.title[lang], route: '/services' },
              { name: service.title[lang], route: `/services/${service.slug}` },
            ]}
          />
        }
        title={service.title[lang]}
        lede={service.lead[lang]}
      />

      <Section className="border-t border-rule">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {service.body[lang].map((p) => (
              <p key={p} className="mb-5 max-w-prose text-[1.0625rem]">
                {p}
              </p>
            ))}
            <Link href={path(lang, '/contact')} className="action action-accent mt-6 inline-flex">
              {T.services.discuss[lang]}
            </Link>
          </div>

          <div className="lg:col-span-5">
            <h2 className="t-label mb-5 font-sans">{T.services.covers[lang]}</h2>
            <RuleList items={service.covers[lang].map((c) => <span key={c}>{c}</span>)} />
          </div>
        </div>
      </Section>

      <Section tone="warm">
        <h2 className="t-label mb-6 font-sans">{T.services.related[lang]}</h2>
        <ul className="border-t border-rule">
          {others.map((s) => (
            <li key={s.slug} className="border-b border-rule">
              <Link
                href={path(lang, `/services/${s.slug}`)}
                className="group block py-4 font-serif text-[1.125rem] no-underline transition-colors group-hover:text-[var(--accent)]"
              >
                {s.title[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
