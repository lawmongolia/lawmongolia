import type { Metadata } from 'next';
import { SITE_URL, BRAND } from './site';
import { path as langPath, type Lang } from './types';

type Args = {
  lang: Lang;
  /** Language-neutral route, e.g. '/services/tax'. Use '/' for the home page. */
  route: string;
  /**
   * Explicit per-language routes, for pages whose path differs between
   * languages — an article with its own slug in each language, for example.
   * A language left out here gets no hreflang entry, because no equivalent
   * page exists to point at.
   */
  routes?: Partial<Record<Lang, string>>;
  title: string;
  description: string;
  /** Set for article pages so Open Graph reports the right type. */
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildMetadata({
  lang,
  route,
  routes,
  title,
  description,
  type = 'website',
  publishedTime,
  modifiedTime,
}: Args): Metadata {
  const canonical = `${SITE_URL}${langPath(lang, routes?.[lang] ?? route)}`;

  const enRoute = routes ? routes.en : route;
  const mnRoute = routes ? routes.mn : route;
  const enUrl = enRoute ? `${SITE_URL}${langPath('en', enRoute)}` : undefined;
  const mnUrl = mnRoute ? `${SITE_URL}${langPath('mn', mnRoute)}` : undefined;

  const languages: Record<string, string> = {};
  if (enUrl) languages.en = enUrl;
  if (mnUrl) languages.mn = mnUrl;
  languages['x-default'] = enUrl ?? mnUrl ?? canonical;

  const fullTitle = route === '/' ? title : `${title} — ${BRAND.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: type === 'article' ? 'article' : 'website',
      url: canonical,
      siteName: BRAND.name,
      title: fullTitle,
      description,
      locale: lang === 'mn' ? 'mn_MN' : 'en_US',
      alternateLocale: lang === 'mn' ? 'en_US' : 'mn_MN',
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: { card: 'summary', title: fullTitle, description },
  };
}
