import type { Metadata } from 'next';
import { ServicesView } from '@/components/views/ServicesView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'en',
  route: '/services',
  title: T.services.metaTitle['en'],
  description: T.services.metaDescription['en'],
});

export default function Page() {
  return (
    <>
      <ServicesView lang="en" />
    </>
  );
}
