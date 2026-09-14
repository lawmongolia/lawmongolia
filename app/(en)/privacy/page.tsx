import type { Metadata } from 'next';
import { PrivacyView } from '@/components/views/LegalView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'en',
  route: '/privacy',
  title: T.legal.privacyTitle['en'],
  description: T.legal.privacyIntro['en'],
});

export default function Page() {
  return (
    <>
      <PrivacyView lang="en" />
    </>
  );
}
