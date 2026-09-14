export type Lang = 'en' | 'mn';
/** A string that exists in both site languages. */
export type L = Record<Lang, string>;
/** A list of strings that exists in both site languages. */
export type LList = Record<Lang, string[]>;

export const LANGS: Lang[] = ['en', 'mn'];

/** Prefix a path with the language segment. English lives at the root. */
export function path(lang: Lang, p: string): string {
  const clean = p === '/' ? '' : p;
  return lang === 'en' ? clean || '/' : `/mn${clean}`;
}
