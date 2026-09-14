import type { Metadata } from 'next';
import { ContactView } from '@/components/views/ContactView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'en',
  route: '/contact',
  title: T.contact.metaTitle['en'],
  description: T.contact.lede['en'],
});

export default function Page() {
  return (
    <>
      <ContactView lang="en" />
    </>
  );
}
