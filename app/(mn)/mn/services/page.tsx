import type { Metadata } from 'next';
import { ServicesView } from '@/components/views/ServicesView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'mn',
  route: '/services',
  title: T.services.title['mn'],
  description: T.services.lede['mn'],
});

export default function Page() {
  return (
    <>
      <ServicesView lang="mn" />
    </>
  );
}
