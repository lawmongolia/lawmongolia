import type { Metadata } from 'next';
import { PeopleView } from '@/components/views/PeopleView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'en',
  route: '/people',
  title: T.people.title['en'],
  description: T.people.lede['en'],
});

export default function Page() {
  return (
    <>
      <PeopleView lang="en" />
    </>
  );
}
