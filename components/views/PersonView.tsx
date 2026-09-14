import Link from 'next/link';
import { T } from '@/content/dictionary';
import { type Person, isPlaceholder } from '@/content/people';
import { getArticles, formatDate } from '@/lib/insights';
import { path, type Lang } from '@/lib/types';
import { Section, Breadcrumbs, RuleList } from '@/components/ui';
import { Portrait } from '@/components/Portrait';

function Field({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="border-b border-rule py-6">
      <h2 className="t-label mb-3 font-sans">{label}</h2>
      <ul className="space-y-1.5 text-[1rem]">
        {values.map((v) => (
          <li key={v} className={isPlaceholder(v) ? 'text-rule' : ''}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PersonView({ lang, person }: { lang: Lang; person: Person }) {
  const articles = getArticles(lang).filter((a) => a.author === person.slug);

  return (
    <>
      <div className="field pt-10">
        <div className="shell">
        <Breadcrumbs
          lang={lang}
          trail={[
            { name: T.people.title[lang], route: '/people' },
            { name: person.name[lang], route: `/people/${person.slug}` },
          ]}
        />

        <header className="grid gap-10 pb-16 pt-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Portrait person={person} lang={lang} priority sizes="(max-width: 1024px) 60vw, 28vw" />
          </div>

          <div className="lg:col-span-8">
            <h1 className="font-serif text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.06] tracking-[-0.025em]">
              {person.name[lang]}
            </h1>
            <p className="mt-4 font-sans text-[1rem] text-white/95">
              {person.title[lang]}
            </p>
            <p className="field-mute font-sans text-[0.9375rem]">
              {person.entity[lang]}
            </p>

            <p className="field-mute mt-5 font-sans text-[0.875rem]">
              {person.status[lang]}
            </p>

            <p className="mt-6 text-[1.125rem]" style={{ color: 'var(--accent-lift)' }}>
              {person.positioning[lang]}
            </p>
            <p className="field-mute mt-2 font-sans text-[0.875rem]">{person.secondary[lang]}</p>

            <div className="mt-8 space-y-1 font-sans text-[0.9375rem]">
              <p className={isPlaceholder(person.email) ? 'text-white/40' : 'text-white/90'}>
                {person.email}
              </p>
              <p className={isPlaceholder(person.telephone) ? 'text-white/40' : 'text-white/90'}>
                {person.telephone}
              </p>
            </div>
          </div>
        </header>
        </div>
      </div>

      <Section className="border-t border-rule">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="t-label mb-5 font-sans">{T.people.overview[lang]}</h2>
            {person.overview[lang].map((p) => (
              <p key={p} className="mb-5 max-w-prose text-[1.0625rem]">
                {p}
              </p>
            ))}

            <h2 className="t-label mb-5 mt-12 font-sans">{T.people.experience[lang]}</h2>
            <ul className="border-t border-rule">
              {T.experience.items[lang].map((item) => (
                <li key={item} className="border-b border-rule py-4 text-[1rem]">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-prose font-sans text-[0.8125rem] text-muted">
              {T.experience.note[lang]}
            </p>
          </div>

          <div className="lg:col-span-5">
            <h2 className="t-label mb-5 font-sans">{T.people.expertise[lang]}</h2>
            <RuleList items={person.expertise[lang].map((x) => <span key={x}>{x}</span>)} />

            <h2 className="t-label mb-5 mt-12 font-sans">{T.people.industries[lang]}</h2>
            <RuleList items={person.industries[lang].map((x) => <span key={x}>{x}</span>)} />

            <div className="mt-12 border-t border-rule">
              <Field label={T.people.status[lang]} values={[person.admitted[lang]]} />
              <Field label={T.people.professional[lang]} values={person.professional[lang]} />
              <Field label={T.people.education[lang]} values={person.education[lang]} />
              <Field label={T.people.languages[lang]} values={person.languages[lang]} />
            </div>
          </div>
        </div>
      </Section>

      {articles.length > 0 && (
        <Section tone="warm">
          <h2 className="t-h2 mb-8 border-b border-rule pb-4">{T.people.insightsBy[lang]}</h2>
          <ul className="border-t border-rule">
            {articles.map((a) => (
              <li key={a.slug} className="border-b border-rule">
                <Link href={path(lang, `/insights/${a.slug}`)} className="group block py-5 no-underline">
                  <p className="font-sans text-[0.8125rem] text-muted">{formatDate(a.date, lang)}</p>
                  <p className="mt-1 font-serif text-[1.125rem] transition-colors group-hover:text-[var(--accent)]">
                    {a.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section tone={articles.length > 0 ? 'paper' : 'warm'}>
        <h2 className="t-h2">{T.people.contact[lang]}</h2>
        <Link href={path(lang, '/contact')} className="action action-accent mt-6 inline-flex">
          {T.services.discuss[lang]}
        </Link>
      </Section>
    </>
  );
}
