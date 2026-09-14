import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, organizationSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  lang: 'en',
  route: '/',
  title: T.home.metaTitle['en'],
  description: T.home.metaDescription['en'],
});

export default function Page() {
  return (
    <>
      <JsonLd data={organizationSchema('en')} />
      <HomeView lang="en" />
    </>
  );
}
