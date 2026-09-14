import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, organizationSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  lang: 'mn',
  route: '/',
  title: T.home.metaTitle['mn'],
  description: T.home.metaDescription['mn'],
});

export default function Page() {
  return (
    <>
      <JsonLd data={organizationSchema('mn')} />
      <HomeView lang="mn" />
    </>
  );
}
