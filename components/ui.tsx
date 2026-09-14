import Link from 'next/link';
import type { ReactNode } from 'react';
import { path, type Lang } from '@/lib/types';
import { T } from '@/content/dictionary';

export function Section({
  children,
  className = '',
  tone = 'paper',
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: 'paper' | 'warm';
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${tone === 'warm' ? 'bg-warm' : 'bg-paper'} ${className}`}
    >
      <div className="shell py-16 sm:py-20 lg:py-24">{children}</div>
    </section>
  );
}

export function Breadcrumbs({
  lang,
  trail,
}: {
  lang: Lang;
  trail: { name: string; route: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="font-sans text-[0.8125rem] text-white/55">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href={path(lang, '/')}
            className="no-underline transition-colors hover:text-[var(--accent-lift)]"
          >
            {T.nav.home[lang]}
          </Link>
        </li>
        {trail.map((item, i) => (
          <li key={item.route} className="flex items-center gap-2">
            <span aria-hidden className="text-white/30">
              /
            </span>
            {i === trail.length - 1 ? (
              <span aria-current="page" className="text-white/90">
                {item.name}
              </span>
            ) : (
              <Link
                href={path(lang, item.route)}
                className="no-underline transition-colors hover:text-[var(--accent-lift)]"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: ReactNode;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="field">
      <div className="shell pb-14 pt-10 sm:pb-20 sm:pt-12">
        {eyebrow && <div className="mb-10">{eyebrow}</div>}
        <h1 className="max-w-[16ch] font-serif text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.06] tracking-[-0.026em]">
          {title}
        </h1>
        {lede && (
          <p className="field-mute mt-6 max-w-prose text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed">
            {lede}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}

/** A list separated by hairlines rather than boxed into cards. */
export function RuleList({
  items,
  columns = 1,
}: {
  items: ReactNode[];
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={`border-t border-rule ${
        columns === 2 ? 'sm:grid sm:grid-cols-2 sm:gap-x-12' : ''
      }`}
    >
      {items.map((item, i) => (
        <li key={i} className="border-b border-rule py-3.5 font-sans text-[0.9375rem]">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SectionHeading({
  children,
  action,
}: {
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-4">
      <h2 className="t-h2">{children}</h2>
      {action}
    </div>
  );
}
