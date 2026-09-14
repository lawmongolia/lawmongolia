import Link from 'next/link';
import { Logo } from './Logo';
import { T } from '@/content/dictionary';
import { CONTACT, OFFICE, BRAND, ENTITY } from '@/lib/site';
import { path, type Lang } from '@/lib/types';
import { isPlaceholder } from '@/content/people';

function Detail({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <li className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
      <span className="field-mute w-20 shrink-0 text-[0.8125rem]">{label}</span>
      <span className={isPlaceholder(value) ? 'text-white/45' : 'text-white/90'}>{value}</span>
    </li>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();
  const other: Lang = lang === 'en' ? 'mn' : 'en';

  return (
    <footer className="field border-t border-white/15">
      <div className="shell grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link href={path(lang, '/')} aria-label={T.nav.home[lang]}>
            <Logo variant="wordmark" />
          </Link>
          <p className="field-mute mt-4 font-sans text-[0.875rem]">
            {ENTITY[lang]}
          </p>
        </div>

        <nav className="md:col-span-3" aria-label={T.footer.navigate[lang]}>
          <p className="field-mute mb-4 font-sans text-[0.75rem] tracking-[0.11em]">{T.footer.navigate[lang]}</p>
          <ul className="space-y-2 font-sans text-[0.9375rem]">
            {(['about', 'services', 'people', 'insights', 'contact'] as const).map(
              (key) => (
                <li key={key}>
                  <Link href={path(lang, `/${key}`)} className="text-white/70 no-underline transition-colors hover:text-[var(--accent-lift)]">
                    {T.nav[key][lang]}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="md:col-span-5">
          <p className="field-mute mb-4 font-sans text-[0.75rem] tracking-[0.11em]">{T.footer.contact[lang]}</p>
          <ul className="space-y-2 font-sans text-[0.9375rem]">
            <Detail label={T.contact.office[lang]} value={OFFICE[lang]} />
            <Detail label={T.contact.email[lang]} value={CONTACT.email} />
            <Detail label={T.contact.telephone[lang]} value={CONTACT.telephone} />
            <Detail label="" value={CONTACT.telephoneAlt} />
          </ul>

          {(CONTACT.facebook || CONTACT.linkedin) && (
            <ul className="mt-6 flex gap-5 font-sans text-[0.9375rem]">
              {CONTACT.facebook && (
                <li>
                  <a
                    href={CONTACT.facebook}
                    className="text-white/70 no-underline transition-colors hover:text-[var(--accent-lift)]"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {T.contact.facebook[lang]}
                  </a>
                </li>
              )}
              {CONTACT.linkedin && (
                <li>
                  <a
                    href={CONTACT.linkedin}
                    className="text-white/70 no-underline transition-colors hover:text-[var(--accent-lift)]"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {T.contact.linkedin[lang]}
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="shell flex flex-col gap-4 py-6 font-sans text-[0.8125rem] text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {BRAND.name}. {T.footer.rights[lang]}
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            <li>
              <Link href={path(lang, '/privacy')} className="text-white/70 no-underline transition-colors hover:text-[var(--accent-lift)]">
                {T.footer.privacy[lang]}
              </Link>
            </li>
            <li>
              <Link href={path(lang, '/legal-notice')} className="text-white/70 no-underline transition-colors hover:text-[var(--accent-lift)]">
                {T.footer.notice[lang]}
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-white">{lang.toUpperCase()}</span>
              <span aria-hidden>|</span>
              <Link href={path(other, '/')} hrefLang={other} className="text-white/70 no-underline transition-colors hover:text-[var(--accent-lift)]">
                {other.toUpperCase()}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
