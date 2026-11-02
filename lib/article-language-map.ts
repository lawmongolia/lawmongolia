import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Lang } from './types';

/**
 * Correct cross-language slugs for articles. Read only Markdown frontmatter,
 * never parse/render article bodies for the site-wide header.
 * On a static build, these values are generated from current published articles.
 */
type LangMap = Record<Lang, Record<string, string>>;
const DIR = path.join(process.cwd(), 'content', 'insights');
let cache: LangMap | null = null;

export function getArticleLanguageMap(lang: Lang): Record<string, string> {
  if (!cache) {
    const next: LangMap = { en: {}, mn: {} };
    const articles: Array<{ lang: Lang; slug: string; translation?: string }> = [];

    if (fs.existsSync(DIR)) {
      for (const file of fs.readdirSync(DIR)) {
        if (!file.endsWith('.md') || file.startsWith('_')) continue;
        const { data } = matter(fs.readFileSync(path.join(DIR, file), 'utf8'));
        if (data.draft === true) continue;
        if (data.lang !== 'en' && data.lang !== 'mn') continue;
        const slug = String(data.slug ?? file.replace(/\.md$/, '')).trim();
        const translation = data.translation ? String(data.translation).trim() : undefined;
        if (slug) articles.push({ lang: data.lang, slug, translation });
      }
    }

    // A language-switch link must lead to an actual published translation.
    const available = new Set(articles.map(({ lang, slug }) => `${lang}:${slug}`));
    for (const article of articles) {
      const other: Lang = article.lang === 'en' ? 'mn' : 'en';
      if (article.translation && available.has(`${other}:${article.translation}`)) {
        next[article.lang][article.slug] = article.translation;
      }
    }
    cache = next;
  }
  return cache[lang];
}
