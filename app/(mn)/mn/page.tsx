import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, organizationSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  lang: 'mn',
  route: '/',
  title: "Компанийн гэрээт хууль зүйн зөвлөгөө, финтек эрх зүй",
  description: "Компанийн гэрээт хуулийн зөвлөх үйлчилгээ, ББСБ, цахим зээл, BNPL, төлбөрийн үйлчилгээ, технологийн бүтээгдэхүүний эрх зүйн зөвлөгөө.",
});

export default function Page() {
  return (
    <>
      <JsonLd data={organizationSchema('mn')} />
      <HomeView lang="mn" />
    </>
  );
}
