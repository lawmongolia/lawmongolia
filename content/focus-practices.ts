import type { Lang } from '@/lib/types';

type Dual = Record<Lang, string>;
type DualList = Record<Lang, string[]>;
export type FocusPractice = {
  title: Dual;
  lead: Dual;
  metaTitle: Dual;
  metaDescription: Dual;
  paragraphs: DualList;
  sections: Array<{ heading: Dual; paragraphs: DualList }>;
  covers: DualList;
  articleSlugs: Record<Lang, string[]>;
};

/** Original English and Mongolian service copy, not new insight articles. */
export const RETAINED_COUNSEL: FocusPractice = {
  title: {
    en: 'Retained Legal Counsel for Companies in Mongolia',
    mn: 'Компанийн гэрээт хууль зүйн зөвлөх үйлчилгээ',
  },
  lead: {
    en: 'Ongoing outsourced legal counsel for business contracts, governance, employment and regulatory questions, under an agreed scope and service process.',
    mn: 'Компанийн гэрээ, засаглал, хөдөлмөр болон зохицуулалтын асуудлыг тохиролцсон хүрээ, үйлчилгээний нөхцөлөөр тогтмол хариуцан зөвлөгөө үзүүлнэ.',
  },
  metaTitle: {
    en: 'Retained Legal Counsel in Mongolia | Outsourced Corporate Lawyer',
    mn: 'Компанийн гэрээт хуулийн зөвлөх үйлчилгээ | LawMongolia',
  },
  metaDescription: {
    en: 'Ongoing corporate legal counsel in Mongolia for contract review, governance, employment policies, regulatory matters and commercial risk management.',
    mn: 'Компанийн байнгын гэрээт хууль зүйн үйлчилгээ: гэрээ хянах, компанийн засаглал, хөдөлмөр, комплаенс, эрх зүйн эрсдэлийн зөвлөгөө.',
  },
  paragraphs: {
    en: [
      'Corplex Consulting LLC (LawMongolia) provides continuing legal advice for companies that need reliable day-to-day support, whether they have an internal legal team or engage an external adviser for defined matters.',
      'We work with businesses on commercial contracts, corporate decisions, employer documentation, regulatory correspondence and the legal issues that arise during ongoing operations. The services and deliverables are agreed in advance.',
      'Retained advisory services should be distinguished from court representation and other regulated advocacy work. Separate representation and fees can be agreed where a matter becomes contentious.',
    ],
    mn: [
      '“Корплекс Консалтинг” ХХК (LawMongolia) нь орон тооны хуульчтай эсэхээс үл хамааран компанийн өдөр тутмын үйл ажиллагаанд үүсдэг эрх зүйн асуудлаар тогтмол зөвлөгөө, баримт бичгийн хяналтын үйлчилгээ үзүүлнэ.',
      'Үйлчилгээ нь нийлүүлэлт, хамтын ажиллагаа болон бусад арилжааны гэрээ, компанийн шийдвэр, ажил олгогчийн баримт бичиг, зохицуулалтын шаардлага, маргаан үүсэхээс өмнөх эрсдэлийн үнэлгээг хамарч болно. Гүйцэтгэх ажлын бодит хүрээг гэрээгээр тохиролцоно.',
      'Байнгын хууль зүйн зөвлөгөө болон шүүхэд өмгөөлөгчөөр төлөөлөх ажиллагаа нь ижил үйлчилгээ биш. Маргаан шийдвэрлэх ажлын хүрээ, хөлсийг шаардлагатай тохиолдолд тусад нь тохиролцоно.',
    ],
  },
  sections: [
    {
      heading: { en: 'What the monthly engagement includes', mn: 'Сарын гэрээт үйлчилгээний хамрах хүрээ' },
      paragraphs: {
        en: [
          'An engagement should define the documents and advisory work covered, the responsible contact persons, and whether corporate resolutions, employment advice, debt recovery and regulatory reviews are in scope. A fixed monthly fee does not automatically mean unlimited legal work.',
          'Special projects such as financing transactions, complex litigation, licensing applications or due diligence may require separate instructions and pricing.',
        ],
        mn: [
          'Гэрээнд боловсруулах, хянах баримт бичгийн төрөл, хариуцах ажилтан, компанийн шийдвэр, хөдөлмөрийн асуудал, авлага, зохицуулалтын үнэлгээ зэрэг ажлын хамрах хүрээг тодорхойлно. Сарын тогтмол хөлсийг хязгааргүй үйлчилгээтэй адилтгаж болохгүй.',
          'Томоохон санхүүжилтийн хэлцэл, шүүхийн маргаан, зөвшөөрөл хүсэх ажиллагаа, иж бүрэн эрх зүйн шалгалтын ажлыг тусдаа захиалга, үнийн нөхцөлөөр гүйцэтгэж болно.',
        ],
      },
    },
    {
      heading: { en: 'Response times and reporting', mn: 'Хүсэлт шийдвэрлэх хугацаа ба тайлагнал' },
      paragraphs: {
        en: [
          'The parties should agree how requests are submitted, response targets for urgent and routine questions, drafting deadlines and the approval of additional work. A confidential matter register can support reporting and accountability.',
        ],
        mn: [
          'Хүсэлт хүлээн авах суваг, яаралтай болон ердийн асуудлын хариу өгөх хугацаа, гэрээний төсөл боловсруулах хугацаа, нэмэлт ажлыг зөвшөөрүүлэх журмыг тохиролцоно. Ажлын бүртгэл, тайлагнал нь гүйцэтгэлийг үнэлэх үндэслэл болно.',
        ],
      },
    },
    {
      heading: { en: 'Corporate counsel for regulated businesses', mn: 'Зохицуулалттай салбарын компанийн гэрээт зөвлөгөө' },
      paragraphs: {
        en: [
          'For a company operating in fintech, technology or another regulated sector, the retainer can coordinate day-to-day contracts and compliance questions while specialist licensing or product classification work is scoped separately.',
        ],
        mn: [
          'Финтек, технологи болон бусад тусгай зохицуулалттай салбарын компанид гэрээт үйлчилгээний хүрээнд өдөр тутмын гэрээ, комплаенсийн асуудлыг хариуцаж, бүтээгдэхүүний зөвшөөрөл, эрх зүйн ангиллын нарийвчилсан үнэлгээг тусад нь тохиролцож болно.',
        ],
      },
    },
  ],
  covers: {
    en: [
      'Contract drafting, review and negotiation', 'Corporate decisions and governance documents',
      'Employment agreements and employer policies', 'Commercial and vendor contract risk',
      'Regulatory and administrative correspondence', 'Compliance policies and internal procedures',
      'Pre-dispute advice and contractual claims', 'Monthly work tracking and reporting',
    ],
    mn: [
      'Гэрээ боловсруулах, хянах, хэлэлцээр хийх', 'Компанийн шийдвэр, засаглалын баримт бичиг',
      'Хөдөлмөрийн гэрээ, ажил олгогчийн дотоод журам', 'Нийлүүлэгч, харилцагчийн гэрээний эрсдэл',
      'Зохицуулагч, төрийн байгууллагатай харилцах баримт', 'Комплаенс, дотоод бодлого, журам',
      'Маргаанаас өмнөх зөвлөгөө, авлагын шаардлага', 'Ажлын бүртгэл, тайлагнал',
    ],
  },
  articleSlugs: {
    en: ['retained-legal-counsel-for-companies-mongolia-2026', 'mongolia-major-transactions-director-authority'],
    mn: ['gereet-huuliin-zuvluh-uilchilgee-kompani-2026', 'kompani-ih-hemjeenii-heltsel-zahirliin-erh'],
  },
};

export const FINTECH_COUNSEL: FocusPractice = {
  title: { en: 'Fintech & Financial Regulation', mn: 'Финтек, санхүүгийн зохицуулалт' },
  lead: {
    en: 'Legal advice for non-bank financial services, digital lending, BNPL, payment products, electronic money and technology-enabled finance in Mongolia.',
    mn: 'ББСБ, цахим зээл, BNPL, төлбөрийн үйлчилгээ, цахим мөнгө болон технологид суурилсан санхүүгийн бүтээгдэхүүний эрх зүйн зөвлөгөө.',
  },
  metaTitle: {
    en: 'Fintech Lawyer & Regulatory Counsel in Mongolia | LawMongolia',
    mn: 'Финтек, ББСБ, цахим зээлийн хуулийн зөвлөх | LawMongolia',
  },
  metaDescription: {
    en: 'Fintech legal counsel in Mongolia for NBFIs, digital lending, BNPL, payment services, e-money, product classification, licensing and data protection.',
    mn: 'Финтек хууль зүйн зөвлөгөө: ББСБ, BNPL, цахим зээл, төлбөрийн үйлчилгээ, цахим мөнгө, тусгай зөвшөөрөл, мэдээллийн хамгаалалт.',
  },
  paragraphs: {
    en: [
      'Fintech products must be classified by their real payment flows, counterparties and contractual obligations. A product name alone does not establish whether an arrangement is lending, deferred payment, factoring, a regulated payment service or electronic money.',
      'We advise on product structures, customer terms, licensing and notification questions, outsourcing contracts, compliance procedures and data-protection issues. Relevant permissions must be assessed against the actual model before launch.',
    ],
    mn: [
      'Финтек бүтээгдэхүүний эрх зүйн ангиллыг аппликэйшнд өгсөн нэрээр нь бус, мөнгөний бодит урсгал, талуудын үүрэг, санхүүжүүлэгч болон хэрэглэгчийн харилцаагаар тогтооно. Зээл, хойшлуулсан төлбөр, факторинг, төлбөрийн үйлчилгээ, цахим мөнгө нь өөр өөр шаардлагатай байж болно.',
      'Бид бүтээгдэхүүний бүтэц, хэрэглэгчийн гэрээ, тусгай зөвшөөрөл болон мэдэгдлийн шаардлага, аутсорсинг, комплаенс, хувийн мэдээллийн хамгаалалтын асуудлаар хууль зүйн үнэлгээ, баримт бичгийн үйлчилгээ үзүүлнэ.',
    ],
  },
  sections: [
    {
      heading: { en: 'Digital lending, BNPL and factoring', mn: 'Цахим зээл, BNPL, факторинг' },
      paragraphs: {
        en: [
          'In a BNPL or merchant-finance model it matters who pays the merchant, who holds the claim against the buyer, who bears default risk and what the customer is charged. The contracts must reflect the actual software and settlement flow.',
          'Digital lending raises separate questions about customer identification, disclosure, automated decisions, data handling and applicable regulatory approvals.',
        ],
        mn: [
          'BNPL болон худалдаачны санхүүжилтийн загварт худалдаачинд мөнгийг хэн төлөх, хэрэглэгчээс шаардах эрхийг хэн эзэмших, төлөгдөхгүй байх эрсдэлийг хэн хүлээх, хэрэглэгч ямар төлбөр төлөх нь эрх зүйн ангилалд нөлөөлнө. Гэрээ нь системийн бодит гүйлгээний урсгалтай нийцэх ёстой.',
          'Цахим зээлийн хувьд харилцагчийг таньж баталгаажуулах, гэрээний нөхцөлийг мэдээлэх, автомат шийдвэр, өгөгдөл боловсруулах болон зохицуулалтын зөвшөөрлийн асуудлыг тусад нь үнэлнэ.',
        ],
      },
    },
    {
      heading: { en: 'Payment services, wallets and electronic money', mn: 'Төлбөрийн үйлчилгээ, цахим хэтэвч, цахим мөнгө' },
      paragraphs: {
        en: [
          'The legal review considers who receives client funds, whether stored balances can be redeemed or transferred, who settles transactions and which entity performs the regulated activity. Depending on these facts, Bank of Mongolia or Financial Regulatory Commission requirements may apply.',
        ],
        mn: [
          'Хэрэглэгчийн мөнгийг хэн хүлээн авах, үлдэгдлийг буцаан авах, бусдад шилжүүлэх боломжтой эсэх, төлбөр тооцоог хэн гүйцэтгэхийг шалгаж зохих зөвшөөрөл, хяналтын байгууллагын шаардлагыг тогтооно. Бүтээгдэхүүнээс хамаарч Монголбанк эсхүл Санхүүгийн зохицуулах хорооны зохицуулалт хамаарч болно.',
        ],
      },
    },
    {
      heading: { en: 'Licensing, compliance and technology contracts', mn: 'Тусгай зөвшөөрөл, комплаенс, технологийн гэрээ' },
      paragraphs: {
        en: [
          'Product launches can require an assessment of licences, notifications, fee disclosures, customer terms, regulatory correspondence, third-party technology providers, data processing and complaint handling. A legal opinion does not guarantee an authorisation or a regulator’s decision.',
        ],
        mn: [
          'Бүтээгдэхүүн нэвтрүүлэхээс өмнө зөвшөөрөл, мэдэгдэл, хэрэглэгчид мэдээлэх нөхцөл, зохицуулагчид хүргүүлэх баримт, технологийн нийлүүлэгчийн гэрээ, мэдээлэл хамгаалалт болон гомдол шийдвэрлэх процессыг үнэлнэ. Эрх зүйн дүгнэлт нь зөвшөөрөл олгогдох баталгаа биш.',
        ],
      },
    },
  ],
  covers: {
    en: [
      'Fintech business-model legal classification', 'NBFI licensing and digital lending',
      'BNPL and factoring arrangements', 'Digital wallets, payment services and electronic money',
      'Customer contracts and fee disclosures', 'Regulatory notifications and correspondence',
      'Data protection and automated decisions', 'Technology vendor and outsourcing agreements',
    ],
    mn: [
      'Финтек бизнес загварын эрх зүйн ангилал', 'ББСБ, цахим зээлийн зөвшөөрөл, зохицуулалт',
      'BNPL, факторингийн гэрээ, бүтэц', 'Цахим хэтэвч, төлбөрийн үйлчилгээ, цахим мөнгө',
      'Хэрэглэгчийн гэрээ, хүү, шимтгэлийн мэдээлэл', 'Зохицуулагчид хүргүүлэх мэдэгдэл, тайлбар',
      'Хувийн мэдээлэл, автомат шийдвэрийн эрсдэл', 'Технологийн нийлүүлэгч, аутсорсингийн гэрээ',
    ],
  },
  articleSlugs: {
    en: ['bnpl-deferred-payment-credit-classification-mongolia', 'app-wallet-balance-electronic-money-mongolia', 'automated-credit-scoring-data-subject-rights-mongolia'],
    mn: ['bnpl-daraa-tuluh-zeel-gereenii-angilal', 'app-hetevch-uldegdel-tsahim-mungu-mongol', 'avtomat-zeeliin-shiidver-huviin-medeelel'],
  },
};
