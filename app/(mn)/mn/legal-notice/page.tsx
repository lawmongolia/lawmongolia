import type { Metadata } from 'next';
import { LegalNoticeView } from '@/components/views/LegalView';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  lang: 'mn',
  route: '/legal-notice',
  title: T.legal.noticeTitle['mn'],
  description: T.legal.notice['mn'][0],
});

export default function Page() {
  return (
    <>
      <LegalNoticeView lang="mn" />
    </>
  );
}
