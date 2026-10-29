import type { Metadata } from 'next';
import { OngoingLegalServicesView } from '@/components/views/OngoingLegalServicesView';
import { RETAINED_COUNSEL } from '@/content/focus-practices';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbSchema, serviceSchema } from '@/lib/schema';

const LANG = 'mn' as const;
const SLUG = 'ongoing-legal-services';

export const metadata: Metadata = buildMetadata({
  lang: LANG,
  route: `/services/${SLUG}`,
  title: RETAINED_COUNSEL.metaTitle[LANG],
  description: RETAINED_COUNSEL.metaDescription[LANG],
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(LANG, [
        { name: T.services.title[LANG], route: '/services' },
        { name: RETAINED_COUNSEL.title[LANG], route: `/services/${SLUG}` },
      ])} />
      <JsonLd data={serviceSchema({
        slug: SLUG,
        h1: RETAINED_COUNSEL.title,
        metaDescription: RETAINED_COUNSEL.metaDescription,
      }, LANG)} />
      <OngoingLegalServicesView lang={LANG} />
    </>
  );
}
