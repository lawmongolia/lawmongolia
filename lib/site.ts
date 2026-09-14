import type { L } from './types';

/**
 * Central configuration. Change values here, not in individual pages.
 * SITE_URL drives canonical URLs, sitemap.xml, Open Graph and JSON-LD.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lawmongolia.mn'
).replace(/\/$/, '');

/**
 * LawMongolia is a public-facing brand, not a legal entity. The provider of
 * legal services, and the contracting party in every engagement, is
 * Corplex Consulting LLC. Nothing on this site may imply otherwise.
 */
export const BRAND = {
  name: 'LawMongolia',
  city: 'Ulaanbaatar',
  country: 'MN',
} as const;

/** The actual legal entity. */
export const ENTITY = {
  en: 'Corplex Consulting LLC',
  mn: '“Корплекс Консалтинг” ХХК',
  since: 2022,
} as const;

/** The brand-to-entity line, shown under the logo and in the legal pages. */
export const BRAND_LINE: L = {
  en: 'Legal services by Corplex Consulting LLC',
  mn: '“Корплекс Консалтинг” ХХК-ийн хууль зүйн үйлчилгээний брэнд',
};

/**
 * Logo file placed in /public, e.g. '/logo.svg'.
 * While this is empty the site renders the LawMongolia wordmark instead.
 */
export const LOGO_SRC = '/logo.png';
export const LOGO_HEIGHT = 54;

/** Contact details. */
export const CONTACT = {
  telephone: '+976 7270 1650',
  telephoneAlt: '+976 9903 0626',
  email: 'legal@estaff.mn',
  website: 'lawmongolia.mn',
  facebook: 'https://www.facebook.com/profile.php?id=61580491263187',
  linkedin: '',
} as const;

/** Office address, written the way each language writes an address. */
export const OFFICE: L = {
  en: '52-120 Paris Street, Khoroo 1, Sükhbaatar District, Ulaanbaatar 14191, Mongolia',
  mn: 'Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Парисын гудамж, 52-120',
};

/** Structured-data breakdown of the same address. */
export const OFFICE_PARTS = {
  streetAddress: '52-120 Paris Street, Khoroo 1',
  addressLocality: 'Ulaanbaatar',
  addressRegion: 'Sükhbaatar District',
  postalCode: '14191',
  addressCountry: 'MN',
} as const;

/** Verification placeholders. Empty values omit the tag entirely. */
export const VERIFICATION = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? '',
  /** Analytics stays off until a real measurement ID is supplied. */
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID ?? '',
} as const;

export const TAGLINE: L = {
  en: 'Corporate, commercial and dispute resolution legal services in Mongolia',
  mn: 'Компанийн эрх зүй, гэрээ, маргаан шийдвэрлэх чиглэлийн хууль зүйн үйлчилгээ',
};
