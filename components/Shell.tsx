import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { T } from '@/content/dictionary';
import { getArticleLanguageMap } from '@/lib/article-language-map';
import type { Lang } from '@/lib/types';

export function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  // Server-side frontmatter lookup; no filesystem code in the client component.
  const articleTranslations = getArticleLanguageMap(lang);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2 focus:font-sans focus:text-[0.875rem]"
      >
        {T.nav.skip[lang]}
      </a>
      <Header lang={lang} articleTranslations={articleTranslations} />
      <main id="main">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
