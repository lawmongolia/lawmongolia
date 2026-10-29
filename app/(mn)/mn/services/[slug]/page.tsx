import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceView } from '@/components/views/ServiceView';
import { SERVICES, getService } from '@/content/services';
import { T } from '@/content/dictionary';
import { FINTECH_COUNSEL } from '@/content/focus-practices';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, breadcrumbSchema, serviceSchema } from '@/lib/schema';

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
    title: slug === 'fintech-financial-regulation' ? FINTECH_COUNSEL.metaTitle[LANG] : service.title[LANG],
    description: slug === 'fintech-financial-regulation' ? FINTECH_COUNSEL.metaDescription[LANG] : service.metaDescription?.[LANG] ?? service.lead[LANG],
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
      <JsonLd data={serviceSchema({
        slug: service.slug,
        h1: service.slug === 'fintech-financial-regulation' ? FINTECH_COUNSEL.title : service.title,
        metaDescription: service.slug === 'fintech-financial-regulation'
          ? FINTECH_COUNSEL.metaDescription
          : service.metaDescription ?? service.lead,
      }, LANG)} />
      <ServiceView lang={LANG} service={service} />
    </>
  );
}
