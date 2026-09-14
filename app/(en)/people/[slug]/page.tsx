import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PersonView } from '@/components/views/PersonView';
import { PEOPLE, getPerson } from '@/content/people';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, personSchema, profilePageSchema, breadcrumbSchema } from '@/lib/schema';

const LANG = 'en' as const;

/** Only the paths generated below exist; nothing is rendered on demand. */
export const dynamicParams = false;

export function generateStaticParams() {
  return PEOPLE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return {};
  return buildMetadata({
    lang: LANG,
    route: `/people/${slug}`,
    title: `${person.name[LANG]} — ${person.positioning[LANG]}`,
    description: person.overview[LANG][0],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  return (
    <>
      <JsonLd data={personSchema(person, LANG)} />
      <JsonLd data={profilePageSchema(person, LANG)} />
      <JsonLd
        data={breadcrumbSchema(LANG, [
          { name: T.people.title[LANG], route: '/people' },
          { name: person.name[LANG], route: `/people/${slug}` },
        ])}
      />
      <PersonView lang={LANG} person={person} />
    </>
  );
}
