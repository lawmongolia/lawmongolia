import type { L, LList } from '@/lib/types';

/**
 * Lawyer profiles.
 *
 * FACTUAL INTEGRITY RULE: every field below must be supplied by the person it
 * describes. Where a fact has not been confirmed, the value is the literal
 * string '[TO BE CONFIRMED]' / '[ТОДРУУЛНА]' and is rendered as a visible
 * placeholder. Do not replace a placeholder with a plausible guess.
 */
export type Person = {
  slug: string;
  name: L;
  /** Professional title at the firm. */
  title: L;
  /** The legal entity the person is a partner of. */
  entity: L;
  /** One line: professional status and years of experience. */
  status: L;
  /** Admission to practice, stated as a sentence. */
  admitted: L;
  /** One-line practice positioning. */
  positioning: L;
  /** Secondary practice line, rendered smaller. */
  secondary: L;
  /** Portrait file in /public. Empty string renders a placeholder frame. */
  portrait: string;
  portraitAlt: L;
  email: string;
  telephone: string;
  overview: LList;
  expertise: LList;
  /** Sectors worked in — distinct from areas of expertise. */
  industries: LList;
  /** Generic professional background. Never a list of former employers. */
  professional: LList;
  education: LList;
  languages: LList;
  /** Optional external professional profiles, used in Person JSON-LD. */
  sameAs: string[];
};

export const PEOPLE: Person[] = [
  {
    slug: 'itgel-galsanjamts',
    name: { en: 'Itgel Galsanjamts', mn: 'Галсанжамцын Итгэл' },
    title: { en: 'Managing Partner', mn: 'Managing Partner' },
    entity: { en: 'Corplex Consulting LLC', mn: '“Корплекс Консалтинг” ХХК' },
    status: {
      en: 'Attorney-at-Law | 13+ years of legal experience',
      mn: 'Өмгөөлөгч | 13+ жилийн хууль зүйн туршлага',
    },
    admitted: {
      en: 'Admitted to practice law in Mongolia in 2015.',
      mn: '2015 оноос өмгөөлөгчөөр ажиллаж байна.',
    },
    positioning: {
      en: 'Corporate, Commercial & Dispute Resolution Lawyer',
      mn: 'Компанийн эрх зүй, гэрээ, арилжааны маргааны өмгөөлөгч',
    },
    secondary: {
      en: 'Fintech · Tax · Employment · Regulatory · Technology · Investment · Mining',
      mn: 'Финтек · Татвар · Хөдөлмөр · Захиргаа · Технологи · Хөрөнгө оруулалт · Ашигт малтмал',
    },
    portrait: '/itgel-galsanjamts.jpg',
    portraitAlt: {
      en: 'Itgel Galsanjamts, Managing Partner of Corplex Consulting LLC',
      mn: 'Галсанжамцын Итгэл, “Корплекс Консалтинг” ХХК-ийн Managing Partner',
    },
    email: 'legal@estaff.mn',
    telephone: '+976 7270 1650',
    overview: {
      en: [
        'Itgel Galsanjamts is the Managing Partner of Corplex Consulting LLC and an attorney-at-law with more than 13 years of legal experience.',
        'He advises and represents companies, investors and business owners on corporate and commercial law, commercial contracts, litigation and dispute resolution, tax, employment, administrative and regulatory matters, fintech and financial regulation, technology businesses, investment transactions and mining-related legal matters.',
        'Admitted to practice law in 2015, his work combines preventive legal advice, contract and transaction support, regulatory analysis and dispute resolution. His approach focuses on identifying legal risk, structuring practical solutions and protecting clients’ interests through both preventive and enforcement strategies.',
        'He works with businesses across technology, fintech and financial services, trade and distribution, food and services, transportation and logistics, manufacturing, mining and other commercial sectors.',
      ],
      mn: [
        'Г.Итгэл нь “Корплекс Консалтинг” ХХК-ийн Managing Partner бөгөөд 13-аас дээш жилийн хууль зүйн туршлагатай өмгөөлөгч юм.',
        'Тэрээр компани, хөрөнгө оруулагч, бизнес эрхлэгчдэд компанийн болон арилжааны эрх зүй, гэрээ хэлцэл, шүүхийн маргаан, татвар, хөдөлмөр, захиргааны болон зохицуулалтын эрх зүй, финтек, санхүүгийн зохицуулалт, технологийн бизнес, хөрөнгө оруулалт болон ашигт малтмалын эрх зүйн асуудлаар хууль зүйн зөвлөгөө, өмгөөллийн үйлчилгээ үзүүлдэг.',
        '2015 оноос өмгөөлөгчөөр ажиллаж байгаа бөгөөд түүний практик нь хууль зүйн эрсдэлийг урьдчилан тодорхойлох, гэрээ хэлцлийг зөв бүтэцтэй боловсруулах, зохицуулалтын шаардлагыг үнэлэх, маргаанаас урьдчилан сэргийлэх болон үүссэн маргаанд үйлчлүүлэгчийн эрх ашгийг хамгаалах ажиллагааг хослуулдаг.',
        'Технологи, финтек ба санхүүгийн үйлчилгээ, худалдаа, дистрибьюшн, хүнс үйлчилгээ, тээвэр логистик, үйлдвэрлэл, уул уурхай болон бизнесийн бусад салбарын байгууллагуудтай ажилласан туршлагатай.',
      ],
    },
    expertise: {
      en: [
        'Corporate & Commercial Law',
        'Contract Law & Commercial Transactions',
        'Litigation & Dispute Resolution',
        'Tax Law & Tax Disputes',
        'Employment & Labour Law',
        'Administrative & Regulatory Law',
        'Fintech & Financial Regulation',
        'Technology & Digital Platforms',
        'Investment & Cross-Border Transactions',
        'Mining & Natural Resources',
      ],
      mn: [
        'Компанийн болон арилжааны эрх зүй',
        'Гэрээ, арилжааны хэлцэл',
        'Шүүхийн маргаан, маргаан шийдвэрлэх',
        'Татварын эрх зүй, татварын маргаан',
        'Хөдөлмөрийн эрх зүй',
        'Захиргааны болон зохицуулалтын эрх зүй',
        'Финтек, санхүүгийн зохицуулалт',
        'Технологи, дижитал платформ',
        'Хөрөнгө оруулалт, хил дамнасан хэлцэл',
        'Ашигт малтмал, байгалийн нөөц',
      ],
    },
    industries: {
      en: [
        'Technology & Digital Platforms',
        'Fintech & Financial Services',
        'Trade & Distribution',
        'Food & Consumer Services',
        'Transportation & Logistics',
        'Manufacturing',
        'Mining & Natural Resources',
        'Professional & Business Services',
      ],
      mn: [
        'Технологи, дижитал платформ',
        'Финтек, санхүүгийн үйлчилгээ',
        'Худалдаа, дистрибьюшн',
        'Хүнс, хэрэглээний үйлчилгээ',
        'Тээвэр, логистик',
        'Үйлдвэрлэл',
        'Уул уурхай, ашигт малтмал',
        'Бизнесийн үйлчилгээ',
      ],
    },
    /**
     * Deliberately generic. Previous employers are not published on this
     * profile, and a chronological CV is not the purpose of the page.
     */
    professional: {
      en: [
        'His experience includes senior in-house legal, compliance and governance responsibilities as well as private legal practice.',
      ],
      mn: [
        'Түүний туршлага нь компанийн дотоод хууль зүй, комплаенс, засаглалын удирдах түвшний ажил болон өмгөөллийн практикийг хослуулдаг.',
      ],
    },
    education: {
      en: [
        'Bachelor’s Degree in International Law — National University of Mongolia, 2008–2013',
        'Bachelor of Arts in Linguistics / English Translation — University of the Humanities, Mongolia, 2013–2015',
      ],
      mn: [
        'Олон улсын эрх зүйн бакалавр — Монгол Улсын Их Сургууль, 2008–2013',
        'Англи хэлний орчуулгын бакалавр — Хүмүүнлэгийн Ухааны Их Сургууль, 2013–2015',
      ],
    },
    languages: {
      en: ['Mongolian', 'English'],
      mn: ['Монгол', 'Англи'],
    },
    sameAs: [],
  },
];

export function getPerson(slug: string): Person | undefined {
  return PEOPLE.find((p) => p.slug === slug);
}

/** True when a value is still an unfilled placeholder. */
export function isPlaceholder(value: string): boolean {
  return value.startsWith('[TO BE CONFIRMED') || value.startsWith('[ТОДРУУЛНА');
}
