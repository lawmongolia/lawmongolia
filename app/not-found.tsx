import Link from 'next/link';
import '@fontsource-variable/source-serif-4/wght.css';
import '@fontsource-variable/source-serif-4/wght-italic.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import './globals.css';
import { T } from '@/content/dictionary';
import { Logo } from '@/components/Logo';

/**
 * Root not-found. With two root layouts this file supplies its own document
 * shell, so it renders correctly for any unmatched URL in either language.
 */
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main className="shell flex min-h-screen flex-col justify-center py-24">
          <Link href="/" aria-label={T.nav.home.en} className="mb-16 inline-block w-fit">
            <Logo />
          </Link>

          <p className="t-label mb-6">{T.notFound.code.en}</p>
          <h1 className="t-display max-w-[14ch]">{T.notFound.heading.en}</h1>
          <p className="t-lede mt-6 max-w-prose">{T.notFound.body.en}</p>

          <nav className="mt-12 flex flex-wrap gap-x-12 gap-y-4">
            <Link href="/" className="action">
              {T.nav.home.en}
            </Link>
            <Link href="/services" className="action">
              {T.nav.services.en}
            </Link>
            <Link href="/contact" className="action">
              {T.nav.contact.en}
            </Link>
            <Link href="/mn" className="action" hrefLang="mn">
              Монгол
            </Link>
          </nav>
        </main>
      </body>
    </html>
  );
}
