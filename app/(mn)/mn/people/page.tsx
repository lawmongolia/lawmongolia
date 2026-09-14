import type { Metadata } from 'next';
import { PeopleView } from '@/components/views/PeopleView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'mn',
  route: '/people',
  title: T.people.metaTitle['mn'],
  description: T.people.lede['mn'],
});

export default function Page() {
  return (
    <>
      <PeopleView lang="mn" />
    </>
  );
}
