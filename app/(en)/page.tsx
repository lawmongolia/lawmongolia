import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
import { buildMetadata } from '@/lib/seo';
import { JsonLd, organizationSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  lang: 'en',
  route: '/',
  title: "Retained Corporate Legal Counsel & Fintech Law in Mongolia",
  description: "Ongoing legal counsel for companies in Mongolia, plus regulatory advice for NBFIs, digital lending, BNPL, payment services and technology businesses.",
});

export default function Page() {
  return (
    <>
      <JsonLd data={organizationSchema('en')} />
      <HomeView lang="en" />
    </>
  );
}
