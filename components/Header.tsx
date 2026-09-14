'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { T } from '@/content/dictionary';
import { BRAND_LINE } from '@/lib/site';
import { path, type Lang } from '@/lib/types';

const ITEMS = [
  { key: 'about', route: '/about' },
  { key: 'services', route: '/services' },
  { key: 'people', route: '/people' },
  { key: 'insights', route: '/insights' },
  { key: 'contact', route: '/contact' },
] as const;

/** Strip the language prefix to get the language-neutral route. */
function neutralRoute(pathname: string): string {
  if (pathname === '/mn') return '/';
  if (pathname.startsWith('/mn/')) return pathname.slice(3);
  return pathname || '/';
}

export function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);
  const route = neutralRoute(pathname);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const other: Lang = lang === 'en' ? 'mn' : 'en';

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <div className="shell flex h-[84px] items-center justify-between gap-6">
        <Link
          href={path(lang, '/')}
          className="flex shrink-0 items-center gap-4"
          aria-label={T.nav.home[lang]}
        >
          <Logo />
          <span className="hidden max-w-[22ch] border-l border-rule pl-4 font-sans text-[0.75rem] leading-snug text-muted lg:block">
            {BRAND_LINE[lang]}
          </span>
        </Link>

        <nav
          aria-label={T.nav.menu[lang]}
          className="hidden items-center gap-8 md:flex"
        >
          {ITEMS.map((item) => {
            const href = path(lang, item.route);
            const active = route === item.route || route.startsWith(`${item.route}/`);
            return (
              <Link
                key={item.key}
                href={href}
                aria-current={active ? 'page' : undefined}
                className="font-sans text-[0.9375rem] no-underline transition-colors hover:text-[var(--accent)]"
                style={{ color: active ? 'var(--accent)' : undefined }}
              >
                {T.nav[item.key][lang]}
              </Link>
            );
          })}

          <span className="h-4 w-px bg-rule" aria-hidden />

          <span className="flex items-center gap-1.5 font-sans text-[0.8125rem]">
            <span aria-current="true" className="text-ink">
              {lang.toUpperCase()}
            </span>
            <span className="text-rule" aria-hidden>
              |
            </span>
            <Link
              href={path(other, route)}
              hrefLang={other}
              className="link-quiet"
              aria-label={`${T.common.languageSwitch[lang]}: ${other.toUpperCase()}`}
            >
              {other.toUpperCase()}
            </Link>
          </span>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 border border-rule px-3 py-1.5 font-sans text-[0.875rem] md:hidden"
        >
          {open ? T.nav.close[lang] : T.nav.menu[lang]}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={T.nav.menu[lang]}
          className="border-t border-rule bg-paper md:hidden"
        >
          <ul className="shell py-2">
            {ITEMS.map((item) => (
              <li key={item.key} className="border-b border-rule last:border-0">
                <Link
                  href={path(lang, item.route)}
                  className="block py-4 font-serif text-[1.25rem] no-underline"
                >
                  {T.nav[item.key][lang]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="shell flex items-center gap-2 border-t border-rule py-4 font-sans text-[0.875rem]">
            <span className="text-ink">{lang.toUpperCase()}</span>
            <span className="text-rule" aria-hidden>
              |
            </span>
            <Link href={path(other, route)} hrefLang={other} className="link-quiet">
              {other.toUpperCase()}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
