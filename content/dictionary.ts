import type { L, LList } from '@/lib/types';

/**
 * All interface text and page copy. Edit English under `en`, Mongolian under `mn`.
 * Nothing else in the codebase contains visible copy.
 *
 * Writing rule: plain professional language in both languages. State what the
 * service is and what the firm does. No slogans, no metaphors, no claims that
 * cannot be supported.
 */
export const T = {
  nav: {
    about: { en: 'About', mn: 'Бидний тухай' },
    services: { en: 'Services', mn: 'Үйлчилгээ' },
    people: { en: 'People', mn: 'Хуульчид' },
    insights: { en: 'Insights', mn: 'Нийтлэл' },
    contact: { en: 'Contact', mn: 'Холбоо барих' },
    home: { en: 'Home', mn: 'Нүүр' },
    menu: { en: 'Menu', mn: 'Цэс' },
    close: { en: 'Close', mn: 'Хаах' },
    skip: { en: 'Skip to content', mn: 'Агуулга руу очих' },
  },

  home: {
    /** Used for the browser title and search results, not shown on the page. */
    metaTitle: {
      en: 'LawMongolia — Lawyer and legal services for business in Mongolia',
      mn: 'LawMongolia — Өмгөөлөгч, бизнесийн хууль зүйн зөвлөгөө',
    },
    metaDescription: {
      en: 'Lawyer and legal services in Ulaanbaatar for companies, investors and business owners: corporate law, contracts, court disputes, tax, employment and regulatory matters.',
      mn: 'Улаанбаатар дахь өмгөөлөгч, хууль зүйн зөвлөгөөний үйлчилгээ. Компанийн эрх зүй, гэрээ, шүүхийн маргаан, татвар, хөдөлмөр, захиргааны асуудал.',
    },
    eyebrow: { en: 'ULAANBAATAR · MONGOLIA', mn: 'УЛААНБААТАР · МОНГОЛ' },
    headingA: { en: 'Corporate law, contracts', mn: 'Компанийн эрх зүй, гэрээ' },
    headingB: { en: 'and dispute resolution', mn: 'ба маргаан шийдвэрлэх' },
    lede: {
      en: 'Legal advice and representation for companies, investors and business owners.',
      mn: 'Компани, хөрөнгө оруулагч, бизнес эрхлэгчдэд хууль зүйн зөвлөгөө, өмгөөллийн үйлчилгээ үзүүлнэ.',
    },
    ctaServices: { en: 'Our services', mn: 'Үйлчилгээ' },
    ctaContact: { en: 'Contact', mn: 'Холбоо барих' },

    introHeading: { en: 'Legal advice for business', mn: 'Бизнесийн хууль зүйн зөвлөгөө' },
    introBody: {
      en: 'Corplex Consulting LLC has provided legal advice and representation to businesses since 2022. We work on contracts, corporate law, employment, tax, administrative matters and court disputes.',
      mn: '“Корплекс Консалтинг” ХХК нь 2022 оноос хойш бизнесийн байгууллагуудад хууль зүйн зөвлөгөө, өмгөөллийн үйлчилгээ үзүүлж байна. Бид гэрээ, компанийн эрх зүй, хөдөлмөр, татвар, захиргааны асуудал болон шүүхийн маргаанд ажилладаг.',
    },
    aboutMore: { en: 'More about us', mn: 'Дэлгэрэнгүй' },

    servicesHeading: { en: 'Services', mn: 'Үйлчилгээ' },
    servicesAll: { en: 'View all services', mn: 'Бүх үйлчилгээг үзэх' },

    peopleHeading: { en: 'People', mn: 'Хуульчид' },
    viewProfile: { en: 'View profile', mn: 'Профайл үзэх' },

    experienceHeading: { en: 'Experience', mn: 'Ажлын туршлага' },
    clientsHeading: {
      en: 'Selected organisations we have worked with',
      mn: 'Хамтран ажилласан зарим байгууллагууд',
    },
    insightsHeading: { en: 'Insights', mn: 'Нийтлэл' },
    insightsAll: { en: 'All insights', mn: 'Бүх нийтлэл' },

    contactHeading: { en: 'Contact', mn: 'Холбоо барих' },
    contactLede: {
      en: 'To discuss a legal matter, get in touch with us.',
      mn: 'Хууль зүйн асуудлаар зөвлөгөө авах бол бидэнтэй холбогдоно уу.',
    },
  },

  about: {
    metaDescription: {
      en: 'Corplex Consulting LLC has provided legal advice and court representation to businesses in Mongolia since 2022.',
      mn: '“Корплекс Консалтинг” ХХК нь 2022 оноос хойш бизнесийн байгууллагад хууль зүйн зөвлөгөө, өмгөөллийн үйлчилгээ үзүүлж байна.',
    },
    title: { en: 'About', mn: 'Бидний тухай' },
    heading: { en: 'About us', mn: 'Бидний тухай' },
    body: {
      en: [
        'Corplex Consulting LLC has provided legal advice and representation to companies, investors and business owners since 2022.',
        'Our main services cover corporate and commercial law, contracts, court disputes, tax, employment, administrative law, fintech, technology, investment and mining-related legal matters.',
        'We assess a legal question against the actual circumstances of the business and focus on solutions that can be implemented.',
      ],
      mn: [
        '“Корплекс Консалтинг” ХХК нь 2022 оноос хойш компани, хөрөнгө оруулагч, бизнес эрхлэгчдэд хууль зүйн зөвлөгөө, өмгөөллийн үйлчилгээ үзүүлж байна.',
        'Манай үндсэн үйлчилгээ нь компанийн болон арилжааны эрх зүй, гэрээ хэлцэл, шүүхийн маргаан, татвар, хөдөлмөр, захиргааны эрх зүй, финтек, технологи, хөрөнгө оруулалт болон ашигт малтмалын эрх зүйн асуудлыг хамарна.',
        'Бид хууль зүйн асуудлыг тухайн бизнесийн бодит нөхцөл байдалтай уялдуулан үнэлж, хэрэгжих боломжтой шийдэл санал болгоход анхаардаг.',
      ],
    },
    approachHeading: { en: 'How we work', mn: 'Ажиллах зарчим' },
    approach: {
      en: [
        'Advice that complies with the law',
        'Solutions that fit the needs of the business',
        'Clear assessment of risk',
        'Prompt response',
        'Confidentiality',
        'Responsible service',
      ],
      mn: [
        'Хуульд нийцсэн зөвлөгөө',
        'Бизнесийн бодит хэрэгцээнд нийцсэн шийдэл',
        'Эрсдэлийн тодорхой үнэлгээ',
        'Шуурхай ажиллагаа',
        'Нууцлал',
        'Хариуцлагатай үйлчилгээ',
      ],
    },
    whoHeading: { en: 'Clients', mn: 'Үйлчлүүлэгчид' },
    who: {
      en: [
        'Mongolian companies',
        'Foreign investors',
        'Founders and shareholders',
        'Financial and fintech companies',
        'Technology companies',
        'Mining companies',
        'Foreign companies operating in Mongolia',
        'Businesses involved in commercial disputes',
      ],
      mn: [
        'Монголын компаниуд',
        'Гадаадын хөрөнгө оруулагчид',
        'Үүсгэн байгуулагч, хувьцаа эзэмшигчид',
        'Санхүү, финтекийн компаниуд',
        'Технологийн компаниуд',
        'Уул уурхайн компаниуд',
        'Монголд үйл ажиллагаа явуулж буй гадаадын компаниуд',
        'Арилжааны маргаанд оролцож буй байгууллагууд',
      ],
    },
  },

  services: {
    metaTitle: {
      en: 'Legal services for business — corporate, contracts, disputes, tax',
      mn: 'Хууль зүйн үйлчилгээ — компанийн эрх зүй, гэрээ, маргаан, татвар',
    },
    metaDescription: {
      en: 'Legal advice and court representation for companies: corporate law, contracts, litigation, tax, employment, regulatory matters, fintech, technology, investment and mining.',
      mn: 'Компанид зориулсан хууль зүйн зөвлөгөө, өмгөөллийн үйлчилгээ. Компанийн эрх зүй, гэрээ, шүүхийн маргаан, татвар, хөдөлмөр, захиргаа, финтек, технологи, хөрөнгө оруулалт, уул уурхай.',
    },
    title: { en: 'Services', mn: 'Үйлчилгээ' },
    heading: { en: 'Services', mn: 'Үйлчилгээ' },
    lede: {
      en: 'Legal advice and representation across the areas of law a business needs for its operations.',
      mn: 'Бизнесийн үйл ажиллагаанд шаардлагатай хууль зүйн үндсэн чиглэлээр зөвлөгөө, өмгөөллийн үйлчилгээ үзүүлнэ.',
    },
    covers: { en: 'What this covers', mn: 'Хамрах хүрээ' },
    related: { en: 'Related services', mn: 'Холбогдох үйлчилгээ' },
    discuss: { en: 'Discuss a matter', mn: 'Асуудлаар зөвлөлдөх' },
  },

  people: {
    metaTitle: {
      en: 'Our lawyers',
      mn: 'Манай өмгөөлөгч, хуульчид',
    },
    title: { en: 'People', mn: 'Хуульчид' },
    lede: {
      en: 'Profile, areas of expertise and professional experience.',
      mn: 'Манай хуульчийн танилцуулга, мэргэшлийн чиглэл, ажлын туршлага.',
    },
    expertise: { en: 'Areas of expertise', mn: 'Мэргэшлийн чиглэл' },
    industries: { en: 'Industry experience', mn: 'Ажилласан салбарууд' },
    status: { en: 'Professional status', mn: 'Мэргэжлийн байдал' },
    overview: { en: 'Profile', mn: 'Танилцуулга' },
    experience: { en: 'Experience', mn: 'Ажлын туршлага' },
    professional: { en: 'Professional background', mn: 'Мэргэжлийн туршлага' },
    education: { en: 'Education', mn: 'Боловсрол' },
    languages: { en: 'Languages', mn: 'Хэл' },
    insightsBy: { en: 'Insights', mn: 'Нийтлэл' },
    contact: { en: 'Contact', mn: 'Холбоо барих' },
    photoPending: { en: 'Portrait to be added', mn: 'Хөрөг зураг нэмэгдэнэ' },
  },

  insights: {
    title: { en: 'Insights', mn: 'Нийтлэл' },
    lede: {
      en: 'Articles and commentary on legal matters that affect business operations.',
      mn: 'Бизнесийн үйл ажиллагаанд хамаарах хууль зүйн асуудлаарх нийтлэл, тайлбар.',
    },
    empty: {
      en: 'No articles have been published yet.',
      mn: 'Одоогоор нийтлэл нийтлэгдээгүй байна.',
    },
    readingTime: { en: 'min read', mn: 'минут унших' },
    published: { en: 'Published', mn: 'Нийтэлсэн' },
    updated: { en: 'Updated', mn: 'Шинэчилсэн' },
    author: { en: 'Author', mn: 'Зохиогч' },
    relatedServices: { en: 'Related services', mn: 'Холбогдох үйлчилгээ' },
    relatedArticles: { en: 'Related articles', mn: 'Холбогдох нийтлэл' },
    backToInsights: { en: 'All insights', mn: 'Бүх нийтлэл' },
  },

  contact: {
    metaTitle: {
      en: 'Contact a lawyer in Ulaanbaatar',
      mn: 'Өмгөөлөгчтэй холбоо барих — Улаанбаатар',
    },
    title: { en: 'Contact', mn: 'Холбоо барих' },
    heading: { en: 'Contact', mn: 'Холбоо барих' },
    lede: {
      en: 'To discuss a legal matter, use the details below or send an enquiry.',
      mn: 'Хууль зүйн асуудлаар зөвлөгөө авах бол доорх мэдээллээр холбогдох эсхүл хүсэлтээ илгээнэ үү.',
    },
    office: { en: 'Office', mn: 'Хаяг' },
    telephone: { en: 'Telephone', mn: 'Утас' },
    email: { en: 'Email', mn: 'Имэйл' },
    facebook: { en: 'Facebook', mn: 'Facebook' },
    linkedin: { en: 'LinkedIn', mn: 'LinkedIn' },
    mapPending: { en: 'Office location to be added', mn: 'Оффисын байршил нэмэгдэнэ' },
    form: {
      name: { en: 'Name', mn: 'Нэр' },
      company: { en: 'Company', mn: 'Байгууллага' },
      email: { en: 'Email', mn: 'Имэйл' },
      phone: { en: 'Phone (optional)', mn: 'Утас (заавал бус)' },
      subject: { en: 'Subject', mn: 'Сэдэв' },
      message: { en: 'Message', mn: 'Мэдээлэл' },
      send: { en: 'Send enquiry', mn: 'Хүсэлт илгээх' },
      sending: { en: 'Sending…', mn: 'Илгээж байна…' },
      sent: {
        en: 'Your enquiry has been received. We will be in touch.',
        mn: 'Таны хүсэлтийг хүлээн авлаа. Бид тантай холбогдох болно.',
      },
      error: {
        en: 'The enquiry could not be sent. Please write to us by email instead.',
        mn: 'Хүсэлт илгээгдсэнгүй. Имэйлээр шууд хандана уу.',
      },
      required: {
        en: 'Complete the name, email, subject and message fields.',
        mn: 'Нэр, имэйл, сэдэв, мэдээллийн талбарыг бөглөнө үү.',
      },
      invalidEmail: {
        en: 'Enter a valid email address.',
        mn: 'Зөв имэйл хаяг оруулна уу.',
      },
    },
    disclaimer: {
      en: 'Sending information through this form does not create an attorney-client relationship. Please do not send confidential information before we have confirmed that we are able to act in the matter.',
      mn: 'Маягтаар мэдээлэл илгээсэн нь өмгөөлөгч, үйлчлүүлэгчийн харилцаа үүссэнд тооцогдохгүй. Үйлчилгээ үзүүлэх боломжийг баталгаажуулахаас өмнө нууц мэдээлэл илгээхгүй байхыг зөвлөж байна.',
    },
  },

  experience: {
    items: {
      en: [
        'Corporate governance and day-to-day corporate legal advice',
        'Drafting, reviewing and negotiating domestic and cross-border contracts',
        'Contractual and regulatory matters for technology and platform businesses',
        'Licensing, products and contracts for fintech and financial services businesses',
        'Employment law advice and employment disputes',
        'Tax and administrative disputes',
        'Representation in civil and commercial court proceedings',
        'Foreign investment and cross-border transactions',
        'Contracts and legal matters in transportation and logistics',
        'Contracts, regulation and administrative matters in mining and natural resources',
      ],
      mn: [
        'Компанийн засаглал, өдөр тутмын компанийн эрх зүйн зөвлөгөө',
        'Дотоодын болон хил дамнасан гэрээ боловсруулах, хянах, хэлэлцээр хийх',
        'Технологи, платформын бизнесийн гэрээ болон зохицуулалтын асуудал',
        'Финтек, санхүүгийн үйлчилгээний тусгай зөвшөөрөл, бүтээгдэхүүн, гэрээний асуудал',
        'Хөдөлмөрийн эрх зүйн зөвлөгөө, хөдөлмөрийн маргаан',
        'Татварын болон захиргааны маргаан',
        'Иргэний болон арилжааны хэргийн шүүхийн төлөөлөл',
        'Гадаадын хөрөнгө оруулалт, хил дамнасан хэлцэл',
        'Тээвэр, логистикийн гэрээ, эрх зүйн асуудал',
        'Уул уурхай, ашигт малтмалын салбарын гэрээ, зохицуулалт, захиргааны асуудал',
      ],
    },
    note: {
      en: 'Information subject to client confidentiality is not published.',
      mn: 'Үйлчлүүлэгчийн нууцлалтай холбоотой мэдээллийг нийтлээгүй болно.',
    },
  },

  retainer: {
    heading: { en: 'Ongoing legal services', mn: 'Гэрээт хууль зүйн үйлчилгээ' },
    lede: {
      en: 'We take ongoing responsibility for an organisation’s day-to-day legal matters, providing advice, contract review and other legal support as required.',
      mn: 'Байгууллагын өдөр тутмын хууль зүйн асуудлыг тогтмол хариуцаж, шаардлагатай үед зөвлөгөө, гэрээний хяналт болон бусад хууль зүйн дэмжлэг үзүүлнэ.',
    },
    items: {
      en: [
        'Day-to-day legal advice',
        'Drafting and reviewing contracts',
        'Preparing corporate documents',
        'Drafting internal rules and policies',
        'Employment law advice',
        'Tax law advice',
        'Administrative and regulatory matters',
        'Debt recovery',
        'Advice before a dispute arises',
        'Official letters and other legal documents',
      ],
      mn: [
        'Өдөр тутмын хууль зүйн зөвлөгөө',
        'Гэрээ боловсруулах, хянах',
        'Компанийн баримт бичиг боловсруулах',
        'Дотоод дүрэм, журам боловсруулах',
        'Хөдөлмөрийн эрх зүйн зөвлөгөө',
        'Татварын эрх зүйн зөвлөгөө',
        'Захиргааны болон зохицуулалтын асуудал',
        'Авлага барагдуулах',
        'Маргаан үүсэхээс өмнөх зөвлөгөө',
        'Албан бичиг болон бусад эрх зүйн баримт бичиг боловсруулах',
      ],
    },
  },

  legal: {
    noticeTitle: { en: 'Legal Notice', mn: 'Эрх зүйн мэдэгдэл' },
    notice: {
      en: [
        'This website is operated by Corplex Consulting LLC.',
        'The information published on this website is for general information purposes and is not legal advice given on a specific matter.',
        'Contacting us or sending information through this website does not create an attorney-client relationship.',
        'Please do not send confidential or sensitive information before Corplex Consulting LLC has confirmed that it is able to act in the matter.',
        'Corplex Consulting LLC is not responsible for the content of external websites linked from this site.',
      ],
      mn: [
        'Энэхүү цахим хуудсыг “Корплекс Консалтинг” ХХК ажиллуулна.',
        'Цахим хуудсанд нийтэлсэн мэдээлэл нь ерөнхий мэдээллийн зориулалттай бөгөөд тодорхой асуудлаар өгсөн хууль зүйн зөвлөгөө биш болно.',
        'Цахим хуудсаар холбогдох, мэдээлэл илгээх нь өмгөөлөгч, үйлчлүүлэгчийн харилцаа үүссэнд тооцогдохгүй.',
        '“Корплекс Консалтинг” ХХК тухайн асуудлаар үйлчилгээ үзүүлэх боломжийг баталгаажуулахаас өмнө нууц болон эмзэг мэдээлэл илгээхгүй байхыг зөвлөж байна.',
        'Гаднын цахим хуудасны холбоосын агуулгыг “Корплекс Консалтинг” ХХК хариуцахгүй.',
      ],
    },
    privacyTitle: { en: 'Privacy Policy', mn: 'Нууцлалын бодлого' },
    privacyIntro: {
      en: 'This policy explains how information received through this website is used and protected. The entity responsible for that information is Corplex Consulting LLC.',
      mn: 'Энэхүү бодлого нь цахим хуудсаар дамжуулан авсан мэдээллийг хэрхэн ашиглах, хамгаалах талаар тайлбарлана. Мэдээллийг хариуцах этгээд нь “Корплекс Консалтинг” ХХК байна.',
    },
    privacySections: {
      en: [
        ['Information collected through the contact form', 'The contact form collects a name, company, email address, telephone number where given, subject and the content of the message. This is the only place on the website where information is collected directly from a visitor.'],
        ['Purposes of processing', 'Information sent through the form is used to respond to the enquiry, to assess whether we are able to act in the matter, and to carry out conflict checks before an engagement is accepted. It is not used for marketing.'],
        ['Website analytics', 'Analytics are not enabled on this website. If they are enabled in future, this policy will be updated.'],
        ['Technical logs and cookies', 'The hosting provider records standard technical request information, such as IP address and browser type, in order to operate and secure the website. This website does not set advertising or tracking cookies.'],
        ['Retention', 'Information sent through the form is kept for as long as is necessary to respond to the enquiry and to provide any legal services that follow from it.'],
        ['Information security', 'Access to enquiries is limited to the lawyers and staff of Corplex Consulting LLC who need it in order to respond. Information sent through this website is transmitted over an encrypted connection.'],
        ['Contact', 'Questions about this policy, or requests concerning information held about you, can be sent to us using the details on the contact page.'],
        ['Changes to this policy', 'This policy will be updated as the website develops and as required by applicable Mongolian law. The date of the most recent revision is shown below.'],
      ],
      mn: [
        ['Холбоо барих маягтаар цуглуулах мэдээлэл', 'Холбоо барих маягтаар нэр, байгууллагын нэр, имэйл хаяг, утасны дугаар (өгсөн тохиолдолд), сэдэв болон мэдээллийн агуулгыг авна. Цахим хуудсанд зочноос шууд мэдээлэл авдаг цорын ганц хэсэг нь энэ маягт юм.'],
        ['Боловсруулах зорилго', 'Маягтаар илгээсэн мэдээллийг хүсэлтэд хариу өгөх, тухайн асуудлаар үйлчилгээ үзүүлэх боломжтой эсэхийг үнэлэх, гэрээ байгуулахын өмнө ашиг сонирхлын зөрчлийн шалгалт хийхэд ашиглана. Сурталчилгааны зорилгоор ашиглахгүй.'],
        ['Вэб аналитик', 'Энэхүү цахим хуудсанд аналитик идэвхжүүлээгүй болно. Хэрэв ирээдүйд идэвхжүүлбэл энэ бодлогыг шинэчилнэ.'],
        ['Техникийн бүртгэл, күүки', 'Хостинг үйлчилгээ үзүүлэгч нь цахим хуудсыг ажиллуулах, хамгаалах зорилгоор IP хаяг, хөтчийн төрөл зэрэг стандарт техникийн мэдээллийг бүртгэдэг. Энэхүү цахим хуудас сурталчилгаа болон хянан мөрдөх күүки ашиглахгүй.'],
        ['Хадгалах хугацаа', 'Маягтаар ирүүлсэн мэдээллийг хүсэлтэд хариу өгөх болон шаардлагатай хууль зүйн үйлчилгээ үзүүлэхтэй холбоотой зорилгоор шаардлагатай хугацаанд хадгална.'],
        ['Мэдээллийн аюулгүй байдал', 'Хүсэлтэд хандах эрхийг хариу өгөхөд шаардлагатай “Корплекс Консалтинг” ХХК-ийн хуульч, ажилтнаар хязгаарлана. Цахим хуудсаар илгээсэн мэдээллийг шифрлэгдсэн холболтоор дамжуулна.'],
        ['Холбоо барих', 'Энэхүү бодлоготой холбоотой асуулт, эсхүл таны талаарх мэдээлэлтэй холбоотой хүсэлтийг холбоо барих хуудсанд заасан мэдээллээр илгээж болно.'],
        ['Бодлогын өөрчлөлт', 'Энэхүү бодлогыг цахим хуудсын хөгжилт болон Монгол Улсын холбогдох хууль тогтоомжид нийцүүлэн шинэчилнэ. Хамгийн сүүлд хянан засварласан огноог доор харуулав.'],
      ],
    },
    lastUpdated: { en: 'Last updated', mn: 'Сүүлд шинэчилсэн' },
  },

  notFound: {
    code: { en: '404', mn: '404' },
    heading: { en: 'This page does not exist', mn: 'Ийм хуудас олдсонгүй' },
    body: {
      en: 'The address may have changed, or the page may have been removed.',
      mn: 'Хаяг өөрчлөгдсөн, эсхүл хуудас устсан байж болно.',
    },
  },

  footer: {
    navigate: { en: 'Navigate', mn: 'Цэс' },
    contact: { en: 'Contact', mn: 'Холбоо барих' },
    follow: { en: 'Follow', mn: 'Дагах' },
    legal: { en: 'Legal', mn: 'Эрх зүй' },
    privacy: { en: 'Privacy Policy', mn: 'Нууцлалын бодлого' },
    notice: { en: 'Legal Notice', mn: 'Эрх зүйн мэдэгдэл' },
    rights: { en: 'All rights reserved.', mn: 'Бүх эрх хуулиар хамгаалагдсан.' },
  },

  common: {
    languageSwitch: { en: 'Language', mn: 'Хэл' },
    toBeConfirmed: { en: '[TO BE CONFIRMED]', mn: '[ТОДРУУЛНА]' },
  },
} satisfies Record<string, unknown>;

export type Dict = typeof T;
export type { L, LList };
