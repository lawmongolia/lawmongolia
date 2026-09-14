import Link from 'next/link';
import { SERVICES } from '@/content/services';
import { path, type Lang } from '@/lib/types';

/**
 * The ten practice areas as a numbered index. The numbering is the firm's
 * standing order of practice areas, so the sequence carries meaning and is
 * consistent between the home page and the services page.
 */
export function ServiceIndex({
  lang,
  withLead = false,
}: {
  lang: Lang;
  withLead?: boolean;
}) {
  return (
    <ul className="border-t border-rule">
      {SERVICES.map((service, i) => (
        <li key={service.slug} className="border-b border-rule">
          <Link
            href={path(lang, `/services/${service.slug}`)}
            className="group flex flex-col gap-1 py-5 no-underline sm:flex-row sm:items-baseline sm:gap-8 sm:py-6"
          >
            <span
              className="font-sans text-[0.8125rem] tabular-nums sm:w-8"
              style={{ color: 'var(--accent)' }}
              aria-hidden
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            <span className="flex-1">
              <span className="t-h3 block font-serif transition-colors group-hover:text-[var(--accent)]">
                {service.title[lang]}
              </span>
              {withLead && (
                <span className="mt-2 block max-w-prose font-sans text-[0.9375rem] text-muted">
                  {service.lead[lang]}
                </span>
              )}
            </span>

            <span
              aria-hidden
              className="hidden h-px w-8 shrink-0 self-center bg-rule transition-all duration-200 group-hover:w-12 group-hover:bg-[var(--accent)] sm:block"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
