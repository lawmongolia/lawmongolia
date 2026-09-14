import Link from 'next/link';
import { T } from '@/content/dictionary';
import { PEOPLE, isPlaceholder } from '@/content/people';
import { path, type Lang } from '@/lib/types';
import { PageHeader, Breadcrumbs } from '@/components/ui';
import { Portrait } from '@/components/Portrait';

export function PeopleView({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHeader
        eyebrow={
          <Breadcrumbs lang={lang} trail={[{ name: T.people.title[lang], route: '/people' }]} />
        }
        title={T.people.title[lang]}
        lede={T.people.lede[lang]}
      />

      <div className="shell pb-24">
        <ul className="border-t border-rule">
          {PEOPLE.map((person) => (
            <li key={person.slug} className="border-b border-rule py-10">
              <div className="grid gap-8 sm:grid-cols-12 sm:gap-10">
                <div className="sm:col-span-4 lg:col-span-3">
                  <Portrait person={person} lang={lang} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="font-serif text-[1.75rem] leading-tight tracking-[-0.02em]">
                    {person.name[lang]}
                  </h2>
                  <p className="mt-2 font-sans text-[0.9375rem]">
                    {person.title[lang]}
                    <span className="text-muted">{` · ${person.entity[lang]}`}</span>
                  </p>
                  <p className="mt-5 max-w-prose text-[1.0625rem]">{person.positioning[lang]}</p>
                  <p className="mt-2 font-sans text-[0.875rem] text-muted">
                    {person.secondary[lang]}
                  </p>
                  <Link
                    href={path(lang, `/people/${person.slug}`)}
                    className="action mt-8 inline-flex"
                  >
                    {T.home.viewProfile[lang]}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
