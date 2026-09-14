import type { Metadata } from 'next';
import { AboutView } from '@/components/views/AboutView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'en',
  route: '/about',
  title: T.about.title['en'],
  description: T.about.body['en'][0],
});

export default function Page() {
  return (
    <>
      <AboutView lang="en" />
    </>
  );
}
