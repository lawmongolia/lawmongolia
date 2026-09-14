import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceView } from '@/components/views/ServiceView';
import { SERVICES, getService } from '@/content/services';
import { T } from '@/content/dictionary';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbSchema } from '@/lib/schema';

const LANG = 'mn' as const;

/** Only the paths generated below exist; nothing is rendered on demand. */
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    lang: LANG,
    route: `/services/${slug}`,
    title: service.title[LANG],
    description: service.lead[LANG],
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(LANG, [
          { name: T.services.title[LANG], route: '/services' },
          { name: service.title[LANG], route: `/services/${slug}` },
        ])}
      />
      <ServiceView lang={LANG} service={service} />
    </>
  );
}
