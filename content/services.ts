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
      en: 'Company formation, governance, shareholder arrangements and day-to-day corporate legal advice.',
      mn: 'Компани үүсгэн байгуулах, засаглал, хувьцаа эзэмшигчдийн харилцаа, өдөр тутмын компанийн эрх зүйн зөвлөгөө.',
    },
    body: {
      en: [
        'We advise companies, founders and investors on how a business is structured, governed and operated under Mongolian law. This includes the decisions taken at formation and the ones taken years later, when ownership changes or a group is reorganised.',
        'Most corporate problems are governance problems that were not documented early enough. Our work focuses on putting the constitutional documents, shareholder arrangements and board procedures in a state where they answer the question before the dispute arises.',
      ],
      mn: [
        'Бид компани, үүсгэн байгуулагч, хөрөнгө оруулагчдад бизнесээ Монгол Улсын хуулийн хүрээнд хэрхэн бүтэцжүүлэх, удирдах, үйл ажиллагаа явуулах талаар зөвлөгөө өгдөг. Энэ нь үүсгэн байгуулах үед гаргах шийдвэрээс эхлээд хожим эзэмшил өөрчлөгдөх, групп өөрчлөн байгуулагдах үеийн шийдвэрийг хамарна.',
        'Компанийн ихэнх маргаан нь цаг тухайд нь баримтжуулаагүй засаглалын асуудлаас үүддэг. Бидний ажил нь дүрэм, хувьцаа эзэмшигчдийн гэрээ, төлөөлөн удирдах зөвлөлийн журмыг маргаан үүсэхээс өмнө хариултаа агуулсан байдалд хүргэхэд чиглэдэг.',
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
      en: 'Drafting, review and negotiation of domestic and cross-border commercial agreements.',
      mn: 'Дотоодын болон хил дамнасан арилжааны гэрээг боловсруулах, хянах, хэлэлцэн тохирох.',
    },
    body: {
      en: [
        'A commercial contract is read twice: once when it is signed, and once when something has gone wrong. We draft and negotiate agreements with the second reading in mind, so that risk allocation, remedies and termination are workable rather than decorative.',
        'We work in Mongolian and English, including on multi-party negotiations where drafts pass between counsel in tracked changes and the commercial position shifts between rounds.',
      ],
      mn: [
        'Арилжааны гэрээг хоёр удаа уншдаг: нэг нь гарын үсэг зурах үед, нөгөө нь асуудал үүссэн үед. Бид хоёр дахь уншилтыг харгалзан гэрээг боловсруулж, хэлэлцэн тохирдог. Ингэснээр эрсдэлийн хуваарилалт, эрх зүйн хамгаалалт, гэрээ цуцлах нөхцөл нь бодитоор хэрэгжих боломжтой болно.',
        'Бид монгол, англи хос хэлээр ажиллана. Үүнд төслүүд нь өмгөөлөгчдийн хооронд залруулгын горимоор дамжиж, арилжааны нөхцөл үе шат бүрт өөрчлөгддөг олон талт хэлэлцээр орно.',
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
      en: 'Assessment, negotiation and representation in civil, commercial and administrative disputes.',
      mn: 'Иргэний, арилжааны болон захиргааны маргаанд үнэлгээ хийх, хэлэлцээр хийх, төлөөлөн оролцох.',
    },
    body: {
      en: [
        'Disputes are assessed before they are argued. We begin with a candid view of the legal position, the evidence actually available and what enforcement would look like if a judgment were obtained, because those three things determine whether litigation is the right instrument at all.',
        'Where proceedings are the right course, we prepare and represent the client through them. Where they are not, settlement negotiated from an accurate reading of the position is usually the better commercial outcome.',
      ],
      mn: [
        'Маргааныг маргалдахаас өмнө үнэлдэг. Бид эрх зүйн байр суурь, бодитоор байгаа нотлох баримт, шийдвэр гарсан тохиолдолд биелүүлэх ажиллагаа хэрхэн явагдах гэсэн гурван зүйлийг шулуухан үнэлэхээс эхэлдэг. Учир нь эдгээр нь шүүхэд хандах нь зөв арга мөн эсэхийг тодорхойлно.',
        'Шүүхийн ажиллагаа зөв арга бол бид бэлтгэж, үйлчлүүлэгчээ төлөөлөн оролцоно. Харин зөв арга биш бол байр сууриа үнэн зөв үнэлсний үндсэн дээр хийсэн эвлэрэл нь ихэвчлэн арилжааны талаасаа илүү үр дүнтэй байдаг.',
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
      en: 'The legal side of tax: transaction consequences, contractual allocation, assessments and disputes.',
      mn: 'Татварын эрх зүйн тал: хэлцлийн үр дагавар, гэрээгээр хуваарилах, ногдуулалт, маргаан.',
    },
    body: {
      en: [
        'We advise on tax as a matter of law rather than of accounting. That means the tax consequences of a transaction structure, how obligations are allocated between contracting parties, and how an assessment or a decision of the tax authority can be challenged.',
        'Corplex Consulting LLC is a legal practice. It does not provide accounting, bookkeeping or audit services, and works alongside the client’s own accountants and tax advisers where those services are needed.',
      ],
      mn: [
        'Бид татварыг нягтлан бодох бүртгэлийн бус эрх зүйн асуудал болгон авч үздэг. Өөрөөр хэлбэл хэлцлийн бүтцээс үүсэх татварын үр дагавар, гэрээний талуудын хооронд үүргийг хэрхэн хуваарилах, татварын албаны ногдуулалт болон шийдвэрийг хэрхэн эс зөвшөөрөх асуудлыг хамарна.',
        '“Корплекс Консалтинг” ХХК нь хууль зүйн үйлчилгээ эрхэлдэг. Нягтлан бодох бүртгэл, аудитын үйлчилгээ үзүүлэхгүй бөгөөд шаардлагатай тохиолдолд үйлчлүүлэгчийн нягтлан бодогч, татварын зөвлөхтэй хамтран ажиллана.',
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
      en: 'Employment documentation, internal rules, termination procedure and labour disputes.',
      mn: 'Хөдөлмөрийн баримт бичиг, дотоод журам, ажлаас чөлөөлөх ажиллагаа, хөдөлмөрийн маргаан.',
    },
    body: {
      en: [
        'Employment law in Mongolia is procedural. An employer with a sound commercial reason for a decision can still lose a dispute if the steps leading to that decision were not followed and recorded.',
        'We work on the documentation and the procedure together: contracts and internal rules that reflect how the organisation actually operates, and disciplinary or termination processes conducted in a way that will hold up if examined.',
      ],
      mn: [
        'Монголын хөдөлмөрийн эрх зүй нь процедурын шинжтэй. Ажил олгогч шийдвэр гаргах үндэслэлтэй байсан ч тэр шийдвэрт хүрэх алхмуудыг дагаж, баримтжуулаагүй бол маргаанд ялагдаж болно.',
        'Бид баримт бичиг, ажиллагаа хоёрыг хамтад нь авч үзнэ: байгууллагын бодит үйл ажиллагааг тусгасан гэрээ, дотоод журам, мөн шалгалтад тэсвэрлэх чадвартай сахилгын болон ажлаас чөлөөлөх ажиллагаа.',
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
      en: 'Licences, permits, regulatory proceedings and challenges to administrative acts.',
      mn: 'Тусгай зөвшөөрөл, зөвшөөрөл, зохицуулалтын ажиллагаа, захиргааны актыг эс зөвшөөрөх.',
    },
    body: {
      en: [
        'Businesses in regulated sectors deal with government authorities continuously rather than occasionally. We advise on licence and permit requirements, on how to respond to a regulatory inquiry, and on when an administrative act should be challenged rather than accommodated.',
        'Administrative matters have short procedural deadlines. Involving counsel at the point the decision is received, rather than after the period to object has passed, materially changes the options available.',
      ],
      mn: [
        'Зохицуулалттай салбарын бизнесүүд төрийн байгууллагатай үе үе биш, тасралтгүй харилцдаг. Бид тусгай зөвшөөрөл, зөвшөөрлийн шаардлага, зохицуулагчийн шалгалтад хэрхэн хариу өгөх, захиргааны актыг эс зөвшөөрөх үү эсвэл дагах уу гэдгийг зөвлөнө.',
        'Захиргааны асуудалд гомдол гаргах хугацаа богино байдаг. Шийдвэр хүлээн авсан даруйд өмгөөлөгчийг татан оролцуулах нь хугацаа өнгөрсний дараа хандахаас хамаагүй өргөн сонголт үлдээнэ.',
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
      en: 'Regulatory analysis, licensing and product structuring for non-bank financial and payment businesses.',
      mn: 'Банк бус санхүү, төлбөрийн бизнесийн зохицуулалтын дүн шинжилгээ, тусгай зөвшөөрөл, бүтээгдэхүүний бүтэц.',
    },
    body: {
      en: [
        'Financial products are easier to change before launch than after. We analyse a proposed model against the applicable regulatory perimeter early, so that the licensing route, the documentation and the consumer-facing terms are settled before development is complete.',
        'The work covers lending, payment services, electronic money and adjacent digital financial products, together with the internal documentation that a regulator will expect to see in an examination.',
      ],
      mn: [
        'Санхүүгийн бүтээгдэхүүнийг зах зээлд гаргахаас өмнө өөрчлөх нь дараа өөрчлөхөөс амархан. Бид санал болгож буй загварыг холбогдох зохицуулалтын хүрээнд эрт дүгнэж, тусгай зөвшөөрлийн зам, баримт бичиг, хэрэглэгчид зориулсан нөхцөлийг хөгжүүлэлт дуусахаас өмнө тодорхой болгоно.',
        'Энэ ажил нь зээл, төлбөрийн үйлчилгээ, цахим мөнгө болон түүнтэй хиллэдэг дижитал санхүүгийн бүтээгдэхүүн, мөн зохицуулагч шалгалтаар шаардах дотоод баримт бичгийг хамарна.',
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
      en: 'Technology contracts, platform terms and the legal architecture of digital businesses.',
      mn: 'Технологийн гэрээ, платформын нөхцөл, дижитал бизнесийн эрх зүйн бүтэц.',
    },
    body: {
      en: [
        'Platform businesses carry legal risk in places that traditional contracting does not reach: the terms accepted by users, the relationship with suppliers who are not employees, and the treatment of data generated by the service.',
        'We advise on the agreements that hold a technology business together, from procurement and software licensing through to the public-facing terms that govern the platform itself.',
      ],
      mn: [
        'Платформын бизнес нь уламжлалт гэрээ хамардаггүй хэсэгт эрх зүйн эрсдэл үүрдэг: хэрэглэгчийн хүлээн зөвшөөрсөн нөхцөл, ажилтан бус нийлүүлэгчтэй тогтох харилцаа, үйлчилгээнээс үүсэх өгөгдлийг хэрхэн зохицуулах зэрэг.',
        'Бид технологийн бизнесийг холбож байдаг гэрээнүүд буюу худалдан авалт, программ хангамжийн лицензээс эхлээд платформыг өөрийг нь зохицуулах олон нийтэд нээлттэй нөхцөл хүртэлх асуудлаар зөвлөнө.',
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
        'SaaS хэлбэрийн зохицуулалт',
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
      en: 'Investment structuring, transaction documentation and closing support for cross-border deals.',
      mn: 'Хөрөнгө оруулалтын бүтэц, хэлцлийн баримт бичиг, хил дамнасан хэлцлийг хаах дэмжлэг.',
    },
    body: {
      en: [
        'Investors entering Mongolia are usually working with two legal systems at once. We handle the Mongolian side of a transaction and coordinate with foreign counsel, so that the structure agreed in one jurisdiction is actually implementable in the other.',
        'The work runs from early structuring and due diligence through negotiation and regulatory approvals to closing and the post-closing steps that are easy to overlook.',
      ],
      mn: [
        'Монголд орж ирж буй хөрөнгө оруулагчид ихэвчлэн хоёр эрх зүйн тогтолцоотой зэрэг ажилладаг. Бид хэлцлийн монголын талыг хариуцаж, гадаадын өмгөөлөгчтэй уялдуулан ажиллана. Ингэснээр нэг улсад тохирсон бүтэц нөгөө улсад бодитоор хэрэгжих боломжтой болно.',
        'Ажил нь эхний шатны бүтэц тодорхойлох, эрх зүйн шалгалтаас эхлээд хэлэлцээр, зохицуулагчийн зөвшөөрөл, хэлцлийг хаах, мөн анзаарагдахгүй өнгөрөх хэлцлийн дараах алхмууд хүртэл үргэлжилнэ.',
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
      en: 'Corporate, contractual, regulatory and dispute work for mining and resource businesses.',
      mn: 'Уул уурхай, байгалийн нөөцийн бизнесийн компани, гэрээ, зохицуулалт, маргааны асуудал.',
    },
    body: {
      en: [
        'Resource businesses sit at the intersection of corporate law, administrative law and long-term commercial contracting. A licence question is rarely only a licence question — it usually reaches the shareholding, the supply chain and the financing at the same time.',
        'We advise on those matters together rather than in isolation, including where a regulatory decision has to be challenged through administrative proceedings.',
      ],
      mn: [
        'Байгалийн нөөцийн бизнес нь компанийн эрх зүй, захиргааны эрх зүй, урт хугацааны арилжааны гэрээний огтлолцол дээр оршдог. Тусгай зөвшөөрлийн асуудал нь ховор тохиолдолд зөвхөн тусгай зөвшөөрлийн асуудал байдаг — ихэвчлэн эзэмшил, нийлүүлэлтийн сүлжээ, санхүүжилтэд нэгэн зэрэг хүрдэг.',
        'Бид эдгээрийг тусад нь бус цогцоор нь авч үзнэ. Үүнд зохицуулагчийн шийдвэрийг захиргааны журмаар эс зөвшөөрөх шаардлагатай тохиолдол мөн хамаарна.',
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
