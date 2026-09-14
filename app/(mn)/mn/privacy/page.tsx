import type { Metadata } from 'next';
import { PrivacyView } from '@/components/views/LegalView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'mn',
  route: '/privacy',
  title: T.legal.privacyTitle['mn'],
  description: T.legal.privacyIntro['mn'],
});

export default function Page() {
  return (
    <>
      <PrivacyView lang="mn" />
    </>
  );
}
