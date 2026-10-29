import Link from 'next/link';
import { T } from '@/content/dictionary';
import { FINTECH_COUNSEL, RETAINED_COUNSEL } from '@/content/focus-practices';
import { PEOPLE } from '@/content/people';
import { getArticles, formatDate } from '@/lib/insights';
import { path, type Lang } from '@/lib/types';
import { Section, SectionHeading } from '@/components/ui';
import { ServiceIndex } from '@/components/ServiceIndex';
import { ClientWall } from '@/components/ClientWall';
import { Portrait } from '@/components/Portrait';

const FEATURED_ARTICLES: Record<Lang, string[]> = {
  mn: [
    'gereet-huuliin-zuvluh-uilchilgee-kompani-2026',
    'kompani-ih-hemjeenii-heltsel-zahirliin-erh',
    'bnpl-daraa-tuluh-zeel-gereenii-angilal',
    'app-hetevch-uldegdel-tsahim-mungu-mongol',
  ],
  en: [
    'retained-legal-counsel-for-companies-mongolia-2026',
    'mongolia-major-transactions-director-authority',
    'bnpl-deferred-payment-credit-classification-mongolia',
    'app-wallet-balance-electronic-money-mongolia',
  ],
};

export function HomeView({ lang }: { lang: Lang }) {
  const person = PEOPLE[0];
  const selected = FEATURED_ARTICLES[lang];
  const articles = getArticles(lang)
    .filter((a) => selected.includes(a.slug))
    .sort((a, b) => selected.indexOf(a.slug) - selected.indexOf(b.slug));

  return (
    <>
      <section className="field">
        <div className="shell pb-24 pt-20 sm:pb-32 sm:pt-28 lg:pb-40 lg:pt-32">
          <h1 className="t-display max-w-[23ch]">
            {lang === 'mn' ? 'Компанийн гэрээт хууль зүйн зөвлөгөө' : 'Retained Corporate Legal Counsel'}
            <br />
            {lang === 'mn' ? 'ба финтек эрх зүй' : 'and Fintech Regulation'}
          </h1>
          <p className="field-mute mt-8 max-w-[54ch] text-[clamp(1.0625rem,1.5vw,1.25rem)] leading-relaxed">
            {lang === 'mn'
              ? 'LawMongolia нь компанийн байнгын гэрээт үйлчилгээ, арилжааны гэрээ, ББСБ, цахим зээл, BNPL, төлбөрийн үйлчилгээ болон технологийн бизнесийн эрх зүйн асуудлаар зөвлөгөө үзүүлнэ.'
              : 'LawMongolia advises companies on continuing corporate legal matters and supports fintech and technology businesses on contracts, digital lending, BNPL, payment services and regulation.'}
          </p>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <Link href={path(lang, '/services/ongoing-legal-services')} className="action-solid">
              {lang === 'mn' ? 'Гэрээт хууль зүйн үйлчилгээ' : 'Corporate legal retainers'}
            </Link>
            <Link href={path(lang, '/services/fintech-financial-regulation')} className="action-outline">
              {lang === 'mn' ? 'Финтекийн эрх зүй' : 'Fintech legal services'}
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading>{lang === 'mn' ? 'Үндсэн мэргэшсэн үйлчилгээ' : 'Our principal practices'}</SectionHeading>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="t-h3 mb-4">{RETAINED_COUNSEL.title[lang]}</h2>
            <p className="max-w-prose text-[1.0625rem]">{RETAINED_COUNSEL.lead[lang]}</p>
            <Link href={path(lang, '/services/ongoing-legal-services')} className="action mt-8 inline-flex">
              {lang === 'mn' ? 'Дэлгэрэнгүй' : 'Explore the service'}
            </Link>
          </div>
          <div>
            <h2 className="t-h3 mb-4">{FINTECH_COUNSEL.title[lang]}</h2>
            <p className="max-w-prose text-[1.0625rem]">{FINTECH_COUNSEL.lead[lang]}</p>
            <Link href={path(lang, '/services/fintech-financial-regulation')} className="action mt-8 inline-flex">
              {lang === 'mn' ? 'Дэлгэрэнгүй' : 'Explore the service'}
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="warm">
        <SectionHeading action={<Link href={path(lang, '/services')} className="action">{T.home.servicesAll[lang]}</Link>}>
          {T.home.servicesHeading[lang]}
        </SectionHeading>
        <ServiceIndex lang={lang} />
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <h2 className="t-h2 lg:col-span-5">{T.home.introHeading[lang]}</h2>
          <div className="lg:col-span-7">
            <p className="max-w-prose text-[1.0625rem]">{T.home.introBody[lang]}</p>
            <Link href={path(lang, '/about')} className="action mt-8 inline-flex">{T.home.aboutMore[lang]}</Link>
          </div>
        </div>
      </Section>

      <Section tone="warm">
        <SectionHeading>{T.home.peopleHeading[lang]}</SectionHeading>
        <div className="grid gap-10 sm:grid-cols-12 sm:gap-12">
          <div className="sm:col-span-4 lg:col-span-3"><Portrait person={person} lang={lang} /></div>
          <div className="sm:col-span-8 lg:col-span-7 lg:pt-2">
            <h3 className="font-serif text-[1.75rem] leading-tight tracking-[-0.02em]">{person.name[lang]}</h3>
            <p className="mt-2 font-sans text-[0.9375rem]">
              {person.title[lang]}<span className="text-muted">{` · ${person.entity[lang]}`}</span>
            </p>
            <p className="mt-5 max-w-prose text-[1.0625rem]">{person.positioning[lang]}</p>
            <Link href={path(lang, `/people/${person.slug}`)} className="action mt-8 inline-flex">{T.home.viewProfile[lang]}</Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading>{T.home.experienceHeading[lang]}</SectionHeading>
        <ul className="max-w-3xl border-t border-rule">
          {T.experience.items[lang].map((item) => (
            <li key={item} className="border-b border-rule py-5 text-[1.0625rem] leading-relaxed">{item}</li>
          ))}
        </ul>
        <p className="mt-6 max-w-prose font-sans text-[0.8125rem] text-muted">{T.experience.note[lang]}</p>
      </Section>

      <Section tone="warm">
        <SectionHeading>{T.home.clientsHeading[lang]}</SectionHeading>
        <ClientWall lang={lang} />
      </Section>

      {articles.length > 0 && (
        <Section>
          <SectionHeading action={<Link href={path(lang, '/insights')} className="action">{T.home.insightsAll[lang]}</Link>}>
            {lang === 'mn' ? 'Онцлох хууль зүйн нийтлэл' : 'Selected legal analysis'}
          </SectionHeading>
          <ul className="border-t border-rule">
            {articles.map((a) => (
              <li key={a.slug} className="border-b border-rule">
                <Link href={path(lang, `/insights/${a.slug}`)} className="group block py-6 no-underline">
                  <p className="font-sans text-[0.8125rem] text-muted">
                    {formatDate(a.date, lang)}{a.category ? ` · ${a.category}` : ''}
                  </p>
                  <p className="t-h3 mt-2 font-serif transition-colors group-hover:text-[var(--accent)]">{a.title}</p>
                  <p className="mt-2 font-sans text-[0.875rem] text-muted">{person.name[lang]}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <section className="field">
        <div className="shell py-20 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.14] tracking-[-0.02em] lg:col-span-5">
              {T.home.contactHeading[lang]}
            </h2>
            <div className="lg:col-span-7">
              <p className="field-mute max-w-prose text-[1.0625rem] leading-relaxed">{T.home.contactLede[lang]}</p>
              <Link href={path(lang, '/contact')} className="action-solid mt-10">{T.nav.contact[lang]}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
