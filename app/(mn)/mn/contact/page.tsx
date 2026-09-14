import type { Metadata } from 'next';
import { ContactView } from '@/components/views/ContactView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'mn',
  route: '/contact',
  title: T.contact.title['mn'],
  description: T.contact.lede['mn'],
});

export default function Page() {
  return (
    <>
      <ContactView lang="mn" />
    </>
  );
}
