import type { L, LList } from '@/lib/types';

export type Service = {
  slug: string;
  title: L;
  /** One line used in listings and meta descriptions. */
  lead: L;
  /** Two or three paragraphs of page introduction. */
  body: LList;
  /** What the practice covers, shown as a typographic list. */
  covers: LList;
};

export const SERVICES: Service[] = [
  {
    slug: 'corporate-commercial',
    title: { en: 'Corporate & Commercial', mn: 'Компанийн болон арилжааны эрх зүй' },
    lead: {
      en: 'Advice on company formation, governance, shareholder matters, investment and day-to-day corporate legal questions.',
      mn: "Компани үүсгэн байгуулах, засаглал, хувьцаа эзэмшигчдийн харилцаа, хөрөнгө оруулалт болон компанийн өдөр тутмын эрх зүйн асуудлаар зөвлөгөө үзүүлнэ.",
    },
    body: {
      en: [
        "We advise on corporate governance matters: company formation, shareholding structure, the company charter, and shareholder and board resolutions.",
        "We also prepare and review the legal documents required for reorganisations, investments, share purchases and other commercial transactions.",
      ],
      mn: [
        "Компани үүсгэн байгуулах, хувьцаа эзэмшлийн бүтэц, компанийн дүрэм, хувьцаа эзэмшигчдийн болон төлөөлөн удирдах зөвлөлийн шийдвэр зэрэг компанийн засаглалын асуудлаар зөвлөгөө өгнө.",
        "Мөн компанийн өөрчлөн байгуулалт, хөрөнгө оруулалт, хувьцаа худалдах, худалдан авах болон бусад арилжааны хэлцэлд шаардлагатай эрх зүйн баримт бичгийг боловсруулж, хянана.",
      ],
    },
    covers: {
      en: [
        'Incorporation and corporate structuring',
        'Corporate governance frameworks',
        'Shareholder arrangements and shareholder agreements',
        'Boards of directors and board procedure',
        'Shareholder and board resolutions',
        'Reorganisations',
        'Mergers and acquisitions',
        'Joint ventures',
        'Investment transactions',
        'Legal due diligence',
        'Corporate compliance',
        'Day-to-day corporate legal advice',
      ],
      mn: [
        'Компани үүсгэн байгуулах, бүтцийг тодорхойлох',
        'Компанийн засаглалын тогтолцоо',
        'Хувьцаа эзэмшигчдийн харилцаа, хувьцаа эзэмшигчдийн гэрээ',
        'Төлөөлөн удирдах зөвлөл, түүний ажиллагааны журам',
        'Хувьцаа эзэмшигчдийн хурал болон ТУЗ-ийн шийдвэр',
        'Өөрчлөн байгуулалт',
        'Нэгдэх, нийлэх, худалдан авах хэлцэл',
        'Хамтарсан үйлдвэр',
        'Хөрөнгө оруулалтын хэлцэл',
        'Эрх зүйн иж бүрэн шалгалт',
        'Компанийн дагаж мөрдөлт',
        'Өдөр тутмын компанийн эрх зүйн зөвлөгөө',
      ],
    },
  },
  {
    slug: 'contracts',
    title: { en: 'Contracts & Commercial Transactions', mn: 'Гэрээ, арилжааны хэлцэл' },
    lead: {
      en: 'Legal advice on drafting, reviewing and negotiating domestic and international contracts.',
      mn: "Дотоодын болон олон улсын гэрээ, хэлцлийг боловсруулах, хянах, хэлэлцээр хийхэд хууль зүйн зөвлөгөө үзүүлнэ.",
    },
    body: {
      en: [
        "When drafting a contract we focus on setting out clearly the rights and obligations of the parties, payment terms, liability, the grounds on which the contract ends, and the dispute resolution procedure.",
        "We draft and review contracts in Mongolian and English, propose amendments, and provide legal support during negotiations.",
      ],
      mn: [
        "Гэрээ боловсруулахдаа талуудын эрх, үүрэг, төлбөрийн нөхцөл, хариуцлага, гэрээ дуусгавар болох үндэслэл болон маргаан шийдвэрлэх журмыг тодорхой тусгахад анхаарна.",
        "Монгол болон англи хэлээр гэрээ боловсруулах, хянах, нэмэлт өөрчлөлтийн санал гаргах болон гэрээний хэлэлцээрт хууль зүйн дэмжлэг үзүүлнэ.",
      ],
    },
    covers: {
      en: [
        'Contract drafting and review',
        'Negotiation support',
        'Domestic commercial agreements',
        'Cross-border agreements',
        'Services and supply agreements',
        'Distribution arrangements',
        'Transportation and logistics contracts',
        'Leases',
        'Technology agreements',
        'Financing-related contracts',
        'Risk allocation and limitation of liability',
        'Termination, remedies and enforceability',
      ],
      mn: [
        'Гэрээ боловсруулах, хянах',
        'Хэлэлцээрийн дэмжлэг',
        'Дотоодын арилжааны гэрээ',
        'Хил дамнасан гэрээ',
        'Үйлчилгээ, нийлүүлэлтийн гэрээ',
        'Түгээлтийн зохицуулалт',
        'Тээвэр, ложистикийн гэрээ',
        'Түрээсийн гэрээ',
        'Технологийн гэрээ',
        'Санхүүжилттэй холбоотой гэрээ',
        'Эрсдэлийн хуваарилалт, хариуцлагын хязгаарлалт',
        'Гэрээ цуцлах, эрх зүйн хамгаалалт, хэрэгжих боломж',
      ],
    },
  },
  {
    slug: 'litigation-dispute-resolution',
    title: { en: 'Litigation & Dispute Resolution', mn: 'Шүүхийн маргаан, маргаан шийдвэрлэх' },
    lead: {
      en: 'Legal advice in civil, commercial and administrative disputes, and representation in court and other proceedings.',
      mn: "Иргэний, арилжааны болон захиргааны маргаанд хууль зүйн зөвлөгөө өгч, шүүх болон бусад ажиллагаанд төлөөлөн оролцоно.",
    },
    body: {
      en: [
        "Where a dispute has arisen, we assess the legal basis of the matter, the available evidence and the likely outcomes, and advise on what to do next.",
        "Where appropriate we conduct negotiations, prepare settlement terms, draft claims and other documents, and represent the client in court.",
      ],
      mn: [
        "Маргаан үүссэн тохиолдолд тухайн асуудлын хууль зүйн үндэслэл, нотлох баримт, боломжит үр дагаврыг үнэлж, цаашид авах арга хэмжээний талаар зөвлөгөө өгнө.",
        "Шаардлагатай тохиолдолд хэлэлцээр хийх, эвлэрэх нөхцөл боловсруулах, нэхэмжлэл болон бусад баримт бичиг бэлтгэх, шүүхэд төлөөлөн оролцох үйлчилгээ үзүүлнэ.",
      ],
    },
    covers: {
      en: [
        'Pre-litigation legal assessment',
        'Civil and commercial litigation',
        'Contractual disputes',
        'Corporate and shareholder disputes',
        'Debt recovery',
        'Damages claims',
        'Tax disputes',
        'Employment disputes',
        'Administrative disputes',
        'Negotiation and settlement',
        'Court representation',
        'Enforcement strategy',
      ],
      mn: [
        'Шүүхэд хандахын өмнөх эрх зүйн үнэлгээ',
        'Иргэний болон арилжааны маргаан',
        'Гэрээний маргаан',
        'Компани болон хувьцаа эзэмшигчдийн маргаан',
        'Өр төлбөр барагдуулах',
        'Хохирол нөхөн төлүүлэх нэхэмжлэл',
        'Татварын маргаан',
        'Хөдөлмөрийн маргаан',
        'Захиргааны маргаан',
        'Хэлэлцээр, эвлэрэл',
        'Шүүхэд төлөөлөн оролцох',
        'Шийдвэр биелүүлэх стратеги',
      ],
    },
  },
  {
    slug: 'tax',
    title: { en: 'Tax', mn: 'Татварын эрх зүй' },
    lead: {
      en: 'Legal advice on the application of tax law, the tax consequences of transactions, and tax disputes.',
      mn: "Татварын хууль тогтоомжийн хэрэглээ, гэрээ хэлцлийн татварын үр дагавар болон татварын маргааны асуудлаар хууль зүйн зөвлөгөө үзүүлнэ.",
    },
    body: {
      en: [
        "We advise on the application of tax law, the tax obligations arising from transactions, tax risk, and matters connected with decisions of the tax authority.",
        "We act on challenges to tax assessments and decisions, and represent clients before administrative bodies and the courts in tax disputes.",
      ],
      mn: [
        "Татварын хууль тогтоомжийн хэрэглээ, гэрээ хэлцлээс үүсэх татварын үүрэг, татварын эрсдэл болон татварын байгууллагын шийдвэртэй холбоотой асуудлаар зөвлөгөө өгнө.",
        "Татварын акт, шийдвэрийг эс зөвшөөрөх болон татварын маргаанд захиргааны байгууллага, шүүхэд төлөөлөн оролцоно.",
      ],
    },
    covers: {
      en: [
        'Tax law advice',
        'Tax implications of transactions',
        'Contractual allocation of tax obligations',
        'Value added tax',
        'Withholding tax',
        'Cross-border tax issues from a legal perspective',
        'Tax risk assessment',
        'Tax assessments',
        'Administrative proceedings involving tax authorities',
        'Representation in tax disputes',
      ],
      mn: [
        'Татварын эрх зүйн зөвлөгөө',
        'Хэлцлийн татварын үр дагавар',
        'Татварын үүргийг гэрээгээр хуваарилах',
        'Нэмэгдсэн өртгийн албан татвар',
        'Суутган тооцох татвар',
        'Хил дамнасан татварын асуудал, эрх зүйн талаас',
        'Татварын эрсдэлийн үнэлгээ',
        'Татвар ногдуулалт',
        'Татварын албатай холбоотой захиргааны ажиллагаа',
        'Татварын маргаанд төлөөлөн оролцох',
      ],
    },
  },
  {
    slug: 'employment-labour',
    title: { en: 'Employment & Labour', mn: 'Хөдөлмөрийн эрх зүй' },
    lead: {
      en: 'Advice on employment contracts, internal rules, disciplinary procedure, termination and employment disputes.',
      mn: "Хөдөлмөрийн гэрээ, дотоод журам, сахилгын ажиллагаа, ажлаас чөлөөлөх болон хөдөлмөрийн маргааны асуудлаар зөвлөгөө үзүүлнэ.",
    },
    body: {
      en: [
        "We draft and review employment contracts, internal rules, orders and other employer documentation.",
        "We advise on disciplinary measures, termination of employment, restructuring and employment disputes, and represent clients in court where required.",
      ],
      mn: [
        "Ажил олгогчийн хөдөлмөрийн гэрээ, дотоод журам, тушаал шийдвэр болон бусад баримт бичгийг боловсруулах, хянах үйлчилгээ үзүүлнэ.",
        "Мөн сахилгын шийтгэл, хөдөлмөрийн гэрээ дуусгавар болгох, бүтцийн өөрчлөлт болон хөдөлмөрийн маргаантай холбоотой асуудлаар зөвлөгөө өгч, шаардлагатай тохиолдолд шүүхэд төлөөлөн оролцоно.",
      ],
    },
    covers: {
      en: [
        'Employment agreements',
        'Internal labour rules',
        'Executive employment arrangements',
        'Employment policies',
        'Disciplinary proceedings',
        'Termination',
        'Restructuring and workforce changes',
        'Employee liability',
        'Labour compliance',
        'Employment disputes',
        'Representation before courts and relevant authorities',
      ],
      mn: [
        'Хөдөлмөрийн гэрээ',
        'Хөдөлмөрийн дотоод журам',
        'Удирдах ажилтны хөдөлмөрийн харилцаа',
        'Хөдөлмөрийн бодлого, дүрэм',
        'Сахилгын шийтгэл ногдуулах ажиллагаа',
        'Хөдөлмөрийн гэрээ цуцлах',
        'Бүтцийн өөрчлөлт, ажиллах хүчний өөрчлөлт',
        'Ажилтны хариуцлага',
        'Хөдөлмөрийн хууль тогтоомжийн хэрэгжилт',
        'Хөдөлмөрийн маргаан',
        'Шүүх болон эрх бүхий байгууллагад төлөөлөн оролцох',
      ],
    },
  },
  {
    slug: 'administrative-regulatory',
    title: { en: 'Administrative & Regulatory Law', mn: 'Захиргааны болон зохицуулалтын эрх зүй' },
    lead: {
      en: 'Advice on licences, permits, decisions of government authorities and administrative disputes.',
      mn: "Тусгай зөвшөөрөл, зөвшөөрөл, төрийн байгууллагын шийдвэр болон захиргааны маргааны асуудлаар зөвлөгөө үзүүлнэ.",
    },
    body: {
      en: [
        "We advise on licences, permits and sector regulatory requirements.",
        "We act on challenges to decisions and procedures of government and regulatory bodies, file complaints, and represent clients before the administrative courts.",
      ],
      mn: [
        "Тусгай зөвшөөрөл, зөвшөөрөл болон салбарын зохицуулалтын шаардлагатай холбоотой асуудлаар зөвлөгөө өгнө.",
        "Төрийн болон зохицуулах байгууллагын шийдвэр, ажиллагааг эс зөвшөөрөх, гомдол гаргах болон захиргааны хэргийн шүүхэд төлөөлөн оролцох үйлчилгээ үзүүлнэ.",
      ],
    },
    covers: {
      en: [
        'Administrative law advice',
        'Licences and permits',
        'Regulatory compliance',
        'Decisions of government authorities',
        'Administrative proceedings',
        'Regulatory investigations',
        'Challenges against administrative acts',
        'Representation before government authorities',
        'Sector regulation',
        'Administrative litigation',
      ],
      mn: [
        'Захиргааны эрх зүйн зөвлөгөө',
        'Тусгай зөвшөөрөл, зөвшөөрөл',
        'Зохицуулалтын шаардлагын хэрэгжилт',
        'Төрийн байгууллагын шийдвэр',
        'Захиргааны ажиллагаа',
        'Зохицуулагчийн шалгалт',
        'Захиргааны актыг эс зөвшөөрөх',
        'Төрийн байгууллагад төлөөлөн оролцох',
        'Салбарын зохицуулалт',
        'Захиргааны хэргийн шүүхийн маргаан',
      ],
    },
  },
  {
    slug: 'fintech-financial-regulation',
    title: { en: 'Fintech & Financial Regulation', mn: 'Финтек, санхүүгийн зохицуулалт' },
    lead: {
      en: 'Advice on the regulation of non-bank finance, lending, payment services, electronic money and financial products.',
      mn: "Банк бус санхүү, зээл, төлбөрийн үйлчилгээ, цахим мөнгө болон санхүүгийн бүтээгдэхүүний эрх зүйн зохицуулалтын асуудлаар зөвлөгөө үзүүлнэ.",
    },
    body: {
      en: [
        "We draft and review the structure of fintech and financial services businesses, licence applications, product terms, consumer contracts and related documentation.",
        "We advise on the legal and regulatory requirements that apply to lending, payment services, electronic money and other financial products.",
      ],
      mn: [
        "Финтек болон санхүүгийн үйлчилгээний бизнесийн бүтэц, тусгай зөвшөөрөл, бүтээгдэхүүний нөхцөл, хэрэглэгчтэй байгуулах гэрээ болон холбогдох баримт бичгийг боловсруулах, хянах үйлчилгээ үзүүлнэ.",
        "Мөн зээл, төлбөрийн үйлчилгээ, цахим мөнгө болон бусад санхүүгийн бүтээгдэхүүнд тавигдах хууль, зохицуулалтын шаардлагын талаар зөвлөгөө өгнө.",
      ],
    },
    covers: {
      en: [
        'Analysis of fintech business models',
        'Non-bank financial services',
        'Lending',
        'Payment services',
        'Electronic money',
        'Payment and settlement structures',
        'Digital financial products',
        'Financial product structuring',
        'Regulatory analysis and licensing',
        'Compliance documentation',
        'Consumer financial agreements',
      ],
      mn: [
        'Финтек бизнес загварын дүн шинжилгээ',
        'Банк бус санхүүгийн үйлчилгээ',
        'Зээлийн үйл ажиллагаа',
        'Төлбөрийн үйлчилгээ',
        'Цахим мөнгө',
        'Төлбөр, тооцооны бүтэц',
        'Дижитал санхүүгийн бүтээгдэхүүн',
        'Санхүүгийн бүтээгдэхүүний бүтцийг тодорхойлох',
        'Зохицуулалтын дүн шинжилгээ, тусгай зөвшөөрөл',
        'Дагаж мөрдөлтийн баримт бичиг',
        'Хэрэглэгчтэй байгуулах санхүүгийн гэрээ',
      ],
    },
  },
  {
    slug: 'technology-digital-platforms',
    title: { en: 'Technology & Digital Platforms', mn: 'Технологи, дижитал платформ' },
    lead: {
      en: 'Advice on technology contracts, online platforms, applications and the legal matters of digital business.',
      mn: "Технологийн гэрээ, цахим платформ, аппликэйшн болон дижитал бизнесийн эрх зүйн асуудлаар зөвлөгөө үзүүлнэ.",
    },
    body: {
      en: [
        "We draft and review contracts, terms of service and other legal documents for software, technology services, online platforms, applications and e-commerce.",
        "We advise on the relationships between platform users, service providers and other participants, and on data, intellectual property and liability.",
      ],
      mn: [
        "Программ хангамж, технологийн үйлчилгээ, цахим платформ, аппликэйшн болон цахим худалдаатай холбоотой гэрээ, үйлчилгээний нөхцөл болон бусад эрх зүйн баримт бичгийг боловсруулж, хянана.",
        "Мөн платформын хэрэглэгч, үйлчилгээ үзүүлэгч болон бусад оролцогч талуудын харилцаа, өгөгдөл, оюуны өмч болон хариуцлагын асуудлаар зөвлөгөө өгнө.",
      ],
    },
    covers: {
      en: [
        'Technology and software agreements',
        'SaaS arrangements',
        'Technology procurement',
        'Digital platforms and app-based businesses',
        'Platform terms of use',
        'Technology-enabled business models',
        'E-commerce',
        'Contractual data provisions',
        'Intellectual-property provisions in technology contracts',
        'Platform legal risk',
        'Regulation of digital business',
      ],
      mn: [
        'Технологи, программ хангамжийн гэрээ',
        "Үүлэн программ хангамжийн үйлчилгээний гэрээ",
        'Технологийн худалдан авалт',
        'Дижитал платформ, аппликэйшнд суурилсан бизнес',
        'Платформ ашиглах нөхцөл',
        'Технологид суурилсан бизнес загвар',
        'Цахим худалдаа',
        'Гэрээн дэх өгөгдлийн зохицуулалт',
        'Технологийн гэрээн дэх оюуны өмчийн заалт',
        'Платформын эрх зүйн эрсдэл',
        'Дижитал бизнесийн зохицуулалт',
      ],
    },
  },
  {
    slug: 'investment-cross-border',
    title: { en: 'Investment & Cross-Border Transactions', mn: 'Хөрөнгө оруулалт, хил дамнасан хэлцэл' },
    lead: {
      en: 'Advice on the structure, contracts, due diligence and implementation of foreign investment and cross-border transactions.',
      mn: "Гадаадын хөрөнгө оруулалт болон хил дамнасан хэлцлийн бүтэц, гэрээ, эрх зүйн шалгалт болон хэрэгжилтэд зөвлөгөө үзүүлнэ.",
    },
    body: {
      en: [
        "We advise foreign investors putting capital into Mongolia, or working with a Mongolian company, on corporate structure, investment agreements, shareholding and the approvals required.",
        "On cross-border transactions we work alongside foreign counsel and take responsibility for the matters governed by Mongolian law.",
      ],
      mn: [
        "Монгол Улсад хөрөнгө оруулах болон Монголын компанитай хамтран ажиллах гадаадын хөрөнгө оруулагчдад компанийн бүтэц, хөрөнгө оруулалтын гэрээ, хувьцаа эзэмшлийн асуудал болон холбогдох зөвшөөрлийн талаар зөвлөгөө өгнө.",
        "Хил дамнасан хэлцлийн үед гадаадын хуульч, зөвлөхтэй хамтран ажиллаж, Монгол Улсын хууль тогтоомжид хамаарах асуудлыг хариуцан ажиллана.",
      ],
    },
    covers: {
      en: [
        'Foreign investment',
        'Investment structuring',
        'Investment agreements',
        'Shareholder arrangements',
        'Joint ventures',
        'Mergers and acquisitions',
        'Cross-border transactions',
        'Legal due diligence',
        'Financing arrangements',
        'Transaction documentation',
        'Regulatory approvals',
        'Negotiation and closing support',
      ],
      mn: [
        'Гадаадын хөрөнгө оруулалт',
        'Хөрөнгө оруулалтын бүтэц',
        'Хөрөнгө оруулалтын гэрээ',
        'Хувьцаа эзэмшигчдийн харилцаа',
        'Хамтарсан үйлдвэр',
        'Нэгдэх, нийлэх, худалдан авах хэлцэл',
        'Хил дамнасан хэлцэл',
        'Эрх зүйн иж бүрэн шалгалт',
        'Санхүүжилтийн зохицуулалт',
        'Хэлцлийн баримт бичиг',
        'Зохицуулагчийн зөвшөөрөл',
        'Хэлэлцээр, хэлцлийг хаах дэмжлэг',
      ],
    },
  },
  {
    slug: 'mining-natural-resources',
    title: { en: 'Mining & Natural Resources', mn: 'Ашигт малтмал, байгалийн нөөц' },
    lead: {
      en: 'Advice on corporate matters, contracts, licences and disputes in the mining and minerals sector.',
      mn: "Уул уурхай, ашигт малтмалын салбарын компани, гэрээ, тусгай зөвшөөрөл болон маргааны асуудлаар зөвлөгөө үзүүлнэ.",
    },
    body: {
      en: [
        "We advise on the operations, contracts, licences, investment and regulatory requirements of mining companies.",
        "We also act on administrative disputes concerning licences and decisions of government bodies, and on contracts with contractors and suppliers.",
      ],
      mn: [
        "Уул уурхайн компанийн үйл ажиллагаа, гэрээ хэлцэл, тусгай зөвшөөрөл, хөрөнгө оруулалт болон зохицуулалтын асуудлаар хууль зүйн зөвлөгөө үзүүлнэ.",
        "Мөн тусгай зөвшөөрөл болон төрийн байгууллагын шийдвэртэй холбоотой захиргааны маргаан, гүйцэтгэгч болон нийлүүлэгчтэй байгуулах гэрээний асуудлаар ажиллана.",
      ],
    },
    covers: {
      en: [
        'Mining and minerals legal advice',
        'Licensing-related legal matters',
        'Corporate issues in mining businesses',
        'Investment in resource projects',
        'Commercial contracts',
        'Contractor and supplier agreements',
        'Regulatory compliance',
        'Administrative proceedings',
        'Licence-related disputes',
        'Commercial disputes',
        'Transaction support',
        'Administrative litigation',
      ],
      mn: [
        'Ашигт малтмалын эрх зүйн зөвлөгөө',
        'Тусгай зөвшөөрөлтэй холбоотой эрх зүйн асуудал',
        'Уул уурхайн компанийн эрх зүйн асуудал',
        'Нөөцийн төсөл дэх хөрөнгө оруулалт',
        'Арилжааны гэрээ',
        'Гүйцэтгэгч, нийлүүлэгчийн гэрээ',
        'Зохицуулалтын шаардлагын хэрэгжилт',
        'Захиргааны ажиллагаа',
        'Тусгай зөвшөөрөлтэй холбоотой маргаан',
        'Арилжааны маргаан',
        'Хэлцлийн дэмжлэг',
        'Захиргааны хэргийн шүүхийн маргаан',
      ],
    },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
