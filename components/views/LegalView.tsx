import { T } from '@/content/dictionary';
import type { Lang } from '@/lib/types';
import { PageHeader, Breadcrumbs } from '@/components/ui';

const REVISED = '2026-09-11';

export function LegalNoticeView({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHeader
        eyebrow={
          <Breadcrumbs
            lang={lang}
            trail={[{ name: T.legal.noticeTitle[lang], route: '/legal-notice' }]}
          />
        }
        title={T.legal.noticeTitle[lang]}
      />
      <div className="shell pb-24">
        <div className="prose-legal border-t border-rule pt-10">
          {T.legal.notice[lang].map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export function PrivacyView({ lang }: { lang: Lang }) {
  return (
    <>
      <PageHeader
        eyebrow={
          <Breadcrumbs
            lang={lang}
            trail={[{ name: T.legal.privacyTitle[lang], route: '/privacy' }]}
          />
        }
        title={T.legal.privacyTitle[lang]}
        lede={T.legal.privacyIntro[lang]}
      />
      <div className="shell pb-24">
        <div className="prose-legal border-t border-rule pt-10">
          {T.legal.privacySections[lang].map(([heading, body]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{body}</p>
            </section>
          ))}
          <p className="mt-10 border-t border-rule pt-6 font-sans text-[0.8125rem] text-muted">
            {T.legal.lastUpdated[lang]}: {REVISED}
          </p>
        </div>
      </div>
    </>
  );
}
