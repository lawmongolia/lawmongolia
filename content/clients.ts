import type { L } from '@/lib/types';

/**
 * Companies the firm has advised.
 *
 * PERMISSION RULE: a company appears here only once it has given permission
 * for its name — and, where a logo file is used, its trademark — to be
 * published on this website. Record that permission internally before adding
 * an entry. `logo` stays empty until you hold the company's own logo file and
 * the right to display it.
 *
 * With `logo` empty the site renders the company name as text, which is a
 * complete and professional presentation in itself. Many law firms present
 * clients this way and never use a logo wall.
 */
export type Client = {
  /** Name exactly as the organisation writes it. */
  name: string;
  /**
   * Set to false to keep an organisation in this file but off the website.
   * Used where publication has not been approved for this page.
   */
  published: boolean;
  /** File in /public, e.g. '/clients/gerege.svg'. Empty renders the name as text. */
  logo: string;
  /** Alt text for the logo image. Ignored when no logo file is set. */
  alt?: L;
  /** Optional link to the organisation. Empty renders the name without a link. */
  url?: string;
};

const ALL: Client[] = [
  { name: 'Tous les Jours', published: true, logo: '' },
  { name: 'Abico', published: true, logo: '' },
  { name: 'Monbakery', published: true, logo: '' },
  { name: 'Gerege Systems', published: true, logo: '' },
  { name: 'Ichinichi Mongolia', published: true, logo: '' },
  { name: 'SafeTrans', published: true, logo: '' },
  { name: 'Targilj', published: true, logo: '' },
  { name: 'Japancar Trade', published: true, logo: '' },
  { name: 'Cupchicken', published: true, logo: '' },

  { name: 'UBCab', published: true, logo: '' },
];

/** Only approved names reach the website. */
export const CLIENTS: Client[] = ALL.filter((c) => c.published);
