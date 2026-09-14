import type { Metadata } from 'next';
import '@fontsource-variable/source-serif-4/wght.css';
import '@fontsource-variable/source-serif-4/wght-italic.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '../globals.css';
import { Shell } from '@/components/Shell';
import { SITE_URL, BRAND, TAGLINE, VERIFICATION } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${BRAND.name} — ${TAGLINE.en}`, template: '%s' },
  description: TAGLINE.en,
  robots: { index: true, follow: true },
  ...(VERIFICATION.google || VERIFICATION.bing
    ? {
        verification: {
          ...(VERIFICATION.google ? { google: VERIFICATION.google } : {}),
          ...(VERIFICATION.bing
            ? { other: { 'msvalidate.01': VERIFICATION.bing } }
            : {}),
        },
      }
    : {}),
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Shell lang="en">{children}</Shell>
      </body>
    </html>
  );
}
