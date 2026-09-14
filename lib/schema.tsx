import { SITE_URL, BRAND, ENTITY, CONTACT, OFFICE_PARTS, TAGLINE } from './site';
import { path as langPath, type Lang } from './types';
import type { Person } from '@/content/people';
import type { Article } from './insights';
import { isPlaceholder } from '@/content/people';

/** Drop keys whose value is an unfilled placeholder or empty. */
function clean<T extends Record<string, unknown>>(obj: T): T {
  const out = { ...obj };
  for (const key of Object.keys(out)) {
    const v = out[key];
    if (v === '' || v === undefined || (typeof v === 'string' && isPlaceholder(v))) {
      delete out[key];
    }
  }
  return out;
}

/**
 * The organisation is Corplex Consulting LLC. LawMongolia is declared as its
 * brand, not as a second organisation, so search engines do not infer a
 * separate registered entity.
 */
export function organizationSchema(lang: Lang) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${SITE_URL}/#organization`,
    name: ENTITY[lang],
    legalName: ENTITY.en,
    brand: { '@type': 'Brand', name: BRAND.name },
    foundingDate: String(ENTITY.since),
    url: `${SITE_URL}${langPath(lang, '/')}`,
    description: TAGLINE[lang],
    areaServed: { '@type': 'Country', name: 'Mongolia' },
    address: {
      '@type': 'PostalAddress',
      ...OFFICE_PARTS,
    },
    email: CONTACT.email,
    telephone: [CONTACT.telephone, CONTACT.telephoneAlt],
    availableLanguage: ['mn', 'en'],
    ...(CONTACT.facebook ? { sameAs: [CONTACT.facebook] } : {}),
  });
}

export function personSchema(person: Person, lang: Lang) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/people/${person.slug}#person`,
    name: person.name[lang],
    alternateName: person.name[lang === 'en' ? 'mn' : 'en'],
    jobTitle: person.title[lang],
    hasOccupation: { '@type': 'Occupation', name: person.positioning[lang] },
    description: person.overview[lang][0],
    url: `${SITE_URL}${langPath(lang, `/people/${person.slug}`)}`,
    email: person.email,
    telephone: person.telephone,
    worksFor: { '@id': `${SITE_URL}/#organization` },
    knowsAbout: person.expertise[lang],
    ...(person.sameAs.length ? { sameAs: person.sameAs } : {}),
  });
}

export function profilePageSchema(person: Person, lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}${langPath(lang, `/people/${person.slug}`)}#profilepage`,
    mainEntity: { '@id': `${SITE_URL}/people/${person.slug}#person` },
    inLanguage: lang,
  };
}

export function articleSchema(article: Article, authorName: string, lang: Lang) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    inLanguage: lang,
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    author: { '@type': 'Person', name: authorName, '@id': `${SITE_URL}/people/${article.author}#person` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}${langPath(lang, `/insights/${article.slug}`)}`,
  });
}

export function breadcrumbSchema(
  lang: Lang,
  trail: { name: string; route: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${langPath(lang, item.route)}`,
    })),
  };
}

/** Renders a JSON-LD block. Server component friendly. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
