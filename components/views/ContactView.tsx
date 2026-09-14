import { T } from '@/content/dictionary';
import { CONTACT, OFFICE } from '@/lib/site';
import { isPlaceholder } from '@/content/people';
import type { Lang } from '@/lib/types';
import { PageHeader, Breadcrumbs } from '@/components/ui';
import { ContactForm } from '@/components/ContactForm';

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  if (!value) return null;
  const pending = isPlaceholder(value);
  return (
    <div className="flex flex-col gap-1 border-b border-rule py-4 sm:flex-row sm:gap-6">
      <dt className="w-28 shrink-0 font-sans text-[0.8125rem] text-muted">{label}</dt>
      <dd className={`font-sans text-[0.9375rem] ${pending ? 'text-rule' : ''}`}>
        {href && !pending ? (
          <a href={href} className="link-underline">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

export function ContactView({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHeader
        eyebrow={
          <Breadcrumbs lang={lang} trail={[{ name: T.contact.title[lang], route: '/contact' }]} />
        }
        title={T.contact.heading[lang]}
        lede={T.contact.lede[lang]}
      />

      <div className="shell grid gap-14 pb-24 pt-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <dl className="border-t border-rule">
            <Row label={T.contact.office[lang]} value={OFFICE[lang]} />
            <Row
              label={T.contact.email[lang]}
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
            />
            <Row
              label={T.contact.telephone[lang]}
              value={CONTACT.telephone}
              href={`tel:${CONTACT.telephone.replace(/\s/g, '')}`}
            />
            <Row
              label=""
              value={CONTACT.telephoneAlt}
              href={`tel:${CONTACT.telephoneAlt.replace(/\s/g, '')}`}
            />
            {CONTACT.facebook && (
              <Row label={T.contact.facebook[lang]} value={CONTACT.facebook} href={CONTACT.facebook} />
            )}
            {CONTACT.linkedin && (
              <Row label={T.contact.linkedin[lang]} value={CONTACT.linkedin} href={CONTACT.linkedin} />
            )}
          </dl>

          <div
            className="mt-8 flex aspect-[4/3] items-end bg-warm p-4"
            role="img"
            aria-label={T.contact.mapPending[lang]}
          >
            <span className="font-sans text-[0.75rem] text-muted">
              {T.contact.mapPending[lang]}
            </span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ContactForm lang={lang} />
        </div>
      </div>
    </>
  );
}
