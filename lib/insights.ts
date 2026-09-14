import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Lang, L } from './types';

const DIR = path.join(process.cwd(), 'content', 'insights');

export type Article = {
  slug: string;
  lang: Lang;
  title: string;
  description: string;
  /** Slug of the author in content/people.ts. */
  author: string;
  date: string;
  updated?: string;
  category: string;
  /** Slugs from content/services.ts. */
  relatedServices: string[];
  /** Slug of the same article in the other language, when one exists. */
  translation?: string;
  readingMinutes: number;
  /** Rendered HTML body. */
  body: string;
};

/**
 * YAML parses an unquoted `date: 2026-09-14` into a Date object, whose default
 * string form is not valid for structured data or a <time> element. Normalise
 * everything to YYYY-MM-DD.
 */
function isoDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const text = String(value ?? '').trim();
  if (!text) return '';
  const parsed = new Date(text);
  return Number.isNaN(parsed.getTime()) ? text : parsed.toISOString().slice(0, 10);
}

function readAll(): Article[] {
  if (!fs.existsSync(DIR)) return [];

  const files = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'));

  const articles: Article[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(DIR, file), 'utf8');
    const { data, content } = matter(raw);

    if (data.draft === true) continue;

    const words = content.trim().split(/\s+/).length;
    const body = remark().use(html).processSync(content).toString();

    articles.push({
      slug: String(data.slug ?? file.replace(/\.md$/, '')),
      lang: data.lang === 'mn' ? 'mn' : 'en',
      title: String(data.title ?? ''),
      description: String(data.description ?? ''),
      author: String(data.author ?? 'itgel-galsanjamts'),
      date: isoDate(data.date),
      updated: data.updated ? isoDate(data.updated) : undefined,
      category: String(data.category ?? ''),
      relatedServices: Array.isArray(data.relatedServices)
        ? data.relatedServices.map(String)
        : [],
      translation: data.translation ? String(data.translation) : undefined,
      readingMinutes: Math.max(1, Math.round(words / 200)),
      body,
    });
  }

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticles(lang: Lang): Article[] {
  return readAll().filter((a) => a.lang === lang);
}

export function getArticle(lang: Lang, slug: string): Article | undefined {
  return getArticles(lang).find((a) => a.slug === slug);
}

/** Every (lang, slug) pair, used for static generation. */
export function getAllArticleParams(): { lang: Lang; slug: string }[] {
  return readAll().map((a) => ({ lang: a.lang, slug: a.slug }));
}

/**
 * Topics the firm intends to publish. These are not articles and are shown
 * as a plainly labelled list of planned subjects, never with a date or byline.
 */
export const PLANNED_TOPICS: L[] = [
  {
    en: 'Fintech regulation in Mongolia: key legal considerations',
    mn: 'Монгол дахь финтекийн зохицуулалт: анхаарах эрх зүйн гол асуудлууд',
  },
  {
    en: 'Corporate governance in Mongolia: practical issues for companies and investors',
    mn: 'Компанийн засаглал: компани, хөрөнгө оруулагчдын практик асуудлууд',
  },
  {
    en: 'Key legal risks in cross-border contracts with Mongolian counterparties',
    mn: 'Монголын талтай байгуулах хил дамнасан гэрээний эрх зүйн гол эрсдэл',
  },
  {
    en: 'Commercial contract risk management in Mongolia',
    mn: 'Арилжааны гэрээний эрсдэлийн удирдлага',
  },
  {
    en: 'Employment law issues for employers in Mongolia',
    mn: 'Ажил олгогчид тулгардаг хөдөлмөрийн эрх зүйн асуудлууд',
  },
  {
    en: 'Tax disputes in Mongolia: legal and procedural considerations',
    mn: 'Татварын маргаан: эрх зүй, процессын асуудлууд',
  },
  {
    en: 'Administrative decisions and judicial review in Mongolia',
    mn: 'Захиргааны шийдвэр ба шүүхийн хяналт',
  },
  {
    en: 'Technology and digital platform regulation in Mongolia',
    mn: 'Технологи, дижитал платформын зохицуулалт',
  },
  {
    en: 'Investing in Mongolia: corporate and regulatory considerations',
    mn: 'Монголд хөрөнгө оруулах: компанийн болон зохицуулалтын асуудлууд',
  },
  {
    en: 'Mining regulation in Mongolia: legal issues for businesses and investors',
    mn: 'Уул уурхайн зохицуулалт: бизнес, хөрөнгө оруулагчдад тулгарах эрх зүйн асуудлууд',
  },
];

export function formatDate(iso: string, lang: Lang): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(lang === 'mn' ? 'mn-MN' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(d);
}
