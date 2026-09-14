import type { Metadata } from 'next';
import { ServicesView } from '@/components/views/ServicesView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'en',
  route: '/services',
  title: T.services.title['en'],
  description: T.services.lede['en'],
});

export default function Page() {
  return (
    <>
      <ServicesView lang="en" />
    </>
  );
}
