import type { MetadataRoute } from 'next';

/** Required so the file is emitted during static export. */
export const dynamic = 'force-static';
import { SITE_URL } from '@/lib/site';
import { SERVICES } from '@/content/services';
import { PEOPLE } from '@/content/people';
import { getArticles } from '@/lib/insights';
import { LANGS, path } from '@/lib/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { route: '/', priority: 1 },
    { route: '/about', priority: 0.8 },
    { route: '/services', priority: 0.9 },
    ...SERVICES.map((s) => ({ route: `/services/${s.slug}`, priority: 0.8 })),
    { route: '/people', priority: 0.8 },
    ...PEOPLE.map((p) => ({ route: `/people/${p.slug}`, priority: 0.9 })),
    { route: '/insights', priority: 0.7 },
    { route: '/contact', priority: 0.7 },
    { route: '/privacy', priority: 0.3 },
    { route: '/legal-notice', priority: 0.3 },
  ];

  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [];

  for (const lang of LANGS) {
    for (const { route, priority } of routes) {
      pages.push({
        url: `${SITE_URL}${path(lang, route)}`,
        lastModified,
        priority,
        alternates: {
          languages: {
            en: `${SITE_URL}${path('en', route)}`,
            mn: `${SITE_URL}${path('mn', route)}`,
          },
        },
      });
    }

    for (const article of getArticles(lang)) {
      pages.push({
        url: `${SITE_URL}${path(lang, `/insights/${article.slug}`)}`,
        lastModified: new Date(article.updated ?? article.date),
        priority: 0.6,
      });
    }
  }

  return pages;
}
