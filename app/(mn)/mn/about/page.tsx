import type { Metadata } from 'next';
import { AboutView } from '@/components/views/AboutView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'mn',
  route: '/about',
  title: T.about.title['mn'],
  description: T.about.body['mn'][0],
});

export default function Page() {
  return (
    <>
      <AboutView lang="mn" />
    </>
  );
}
