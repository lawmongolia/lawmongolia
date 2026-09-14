import type { Metadata } from 'next';
import { LegalNoticeView } from '@/components/views/LegalView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'en',
  route: '/legal-notice',
  title: T.legal.noticeTitle['en'],
  description: T.legal.notice['en'][0],
});

export default function Page() {
  return (
    <>
      <LegalNoticeView lang="en" />
    </>
  );
}
