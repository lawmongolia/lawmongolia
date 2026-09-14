import type { L, LList } from '@/lib/types';

/**
 * All interface text and page copy. Edit English under `en`, Mongolian under `mn`.
 * Nothing else in the codebase contains visible copy.
 */
export const T = {
  nav: {
    about: { en: 'About', mn: 'Бидний тухай' },
    services: { en: 'Services', mn: 'Үйлчилгээ' },
    people: { en: 'People', mn: 'Хуульчид' },
    insights: { en: 'Insights', mn: 'Судалгаа' },
    contact: { en: 'Contact', mn: 'Холбоо барих' },
    home: { en: 'Home', mn: 'Нүүр' },
    menu: { en: 'Menu', mn: 'Цэс' },
    close: { en: 'Close', mn: 'Хаах' },
    skip: { en: 'Skip to content', mn: 'Агуулга руу очих' },
  },

  home: {
    eyebrow: {
      en: 'Legal services by Corplex Consulting LLC · Ulaanbaatar',
      mn: '“Корплекс Консалтинг” ХХК-ийн хууль зүйн үйлчилгээ · Улаанбаатар',
    },
    headingA: { en: 'Corporate, Commercial', mn: 'Компанийн эрх зүй, гэрээ' },
    headingB: { en: '& Dispute Resolution', mn: 'ба маргаан шийдвэрлэх' },
    lede: {
      en: 'Strategic legal advice for businesses, investors and companies operating in Mongolia.',
      mn: 'Монгол Улсад үйл ажиллагаа явуулж буй компани, хөрөнгө оруулагч, бизнес эрхлэгчдэд хууль зүйн стратегийн зөвлөгөө үзүүлнэ.',
    },
    ctaServices: { en: 'Our services', mn: 'Үйлчилгээ' },
    ctaContact: { en: 'Contact', mn: 'Холбоо барих' },

    introHeading: {
      en: 'Practical legal advice for business',
      mn: 'Бизнесийн хэрэгцээнд нийцсэн хууль зүйн зөвлөгөө',
    },
    introBody: {
      en: 'Corplex Consulting LLC provides legal advice and representation to businesses, investors and entrepreneurs, and has done so since 2022. We approach legal matters with a focus on legal risk, commercial practicality, enforceability and effective implementation.',
      mn: '“Корплекс Консалтинг” ХХК нь 2022 оноос хойш компани, хөрөнгө оруулагч, бизнес эрхлэгчдэд хууль зүйн зөвлөгөө, өмгөөллийн үйлчилгээ үзүүлж байна. Бид хууль зүйн эрсдэл, бизнесийн бодит хэрэгцээ, хэрэгжих боломж болон эрх зүйн хамгаалалтыг цогцоор нь авч үздэг.',
    },
    aboutMore: { en: 'About the firm', mn: 'Фирмийн тухай' },

    servicesHeading: { en: 'Services', mn: 'Үйлчилгээ' },
    servicesAll: { en: 'View all services', mn: 'Бүх үйлчилгээг үзэх' },

    peopleHeading: { en: 'People', mn: 'Хуульчид' },
    viewProfile: { en: 'View profile', mn: 'Профайл үзэх' },

    experienceHeading: { en: 'Selected experience', mn: 'Сонгосон туршлага' },
    clientsHeading: {
      en: 'Selected organisations we have worked with',
      mn: 'Хамтран ажилласан зарим байгууллагууд',
    },
    clientsNote: {
      en: 'Listed with each organisation’s permission. Other engagements are not published.',
      mn: 'Тухайн байгууллага бүрийн зөвшөөрлөөр нийтэлэв. Бусад ажлыг нийтлээгүй болно.',
    },
    insightsHeading: { en: 'Insights', mn: 'Судалгаа' },
    insightsAll: { en: 'All insights', mn: 'Бүх нийтлэл' },

    contactHeading: { en: 'Contact', mn: 'Холбоо барих' },
    contactLede: {
      en: 'To discuss a matter, write to the firm with a short description of the issue and the parties involved.',
      mn: 'Асуудлаар зөвлөлдөхийг хүсвэл асуудлын товч тайлбар, оролцогч талуудын талаар бичиж илгээнэ үү.',
    },
  },

  about: {
    title: { en: 'About', mn: 'Бидний тухай' },
    heading: {
      en: 'Legal advice for business, since 2022',
      mn: '2022 оноос хойш бизнест зориулсан хууль зүйн зөвлөгөө',
    },
    body: {
      en: [
        'Corplex Consulting LLC provides legal advisory and representation services to businesses, investors and entrepreneurs in Mongolia, and has done so since 2022.',
        'LawMongolia is the public-facing brand through which the firm presents its legal services, professional expertise and legal publications. It is not a separate legal entity.',
        'The practice covers corporate and commercial law, contracts, litigation and dispute resolution, tax, employment, administrative and regulatory law, fintech, technology, investment and mining-related legal matters.',
        'We approach legal work with an emphasis on legal accuracy, commercial practicality, risk allocation and effective implementation.',
      ],
      mn: [
        '“Корплекс Консалтинг” ХХК нь компани, хөрөнгө оруулагч, бизнес эрхлэгчдэд хууль зүйн зөвлөгөө, өмгөөлөл болон эрх зүйн бусад мэргэжлийн үйлчилгээг 2022 оноос хойш үзүүлж байна.',
        'LawMongolia нь тус компанийн хууль зүйн үйлчилгээ, мэргэжлийн туршлага болон эрх зүйн нийтлэл, мэдээллийг олон нийтэд хүргэхэд ашигладаг брэнд юм. Тусдаа хуулийн этгээд биш болно.',
        'Үйлчилгээний үндсэн чиглэл нь компанийн болон арилжааны эрх зүй, гэрээ хэлцэл, шүүхийн маргаан, татвар, хөдөлмөр, захиргааны болон зохицуулалтын эрх зүй, финтек, технологи, хөрөнгө оруулалт, ашигт малтмалын эрх зүйн асуудлыг хамарна.',
        'Бид хууль зүйн асуудлыг хуульд нийцэл, бизнесийн бодит хэрэгцээ, эрсдэлийн хуваарилалт болон хэрэгжих боломжийг харгалзан шийдвэрлэхийг зорьдог.',
      ],
    },
    approachHeading: { en: 'Our approach', mn: 'Ажиллах зарчим' },
    approach: {
      en: [
        'Legally rigorous',
        'Commercially practical',
        'Clear risk assessment',
        'Responsive',
        'Confidential',
        'Solution-oriented',
      ],
      mn: [
        'Хуульд нийцсэн нарийвчлал',
        'Бизнест хэрэгжих боломжтой',
        'Эрсдэлийн тодорхой үнэлгээ',
        'Шуурхай хариу',
        'Нууцлал',
        'Шийдэлд чиглэсэн',
      ],
    },
    approachBody: {
      en: 'These are working commitments rather than slogans. They describe how a matter is handled from the first conversation to implementation.',
      mn: 'Эдгээр нь уриа биш, ажлын үүрэг амлалт юм. Анхны яриа эхлэхээс хэрэгжилт дуустал асуудлыг хэрхэн авч явахыг илэрхийлнэ.',
    },
    whoHeading: { en: 'Who we advise', mn: 'Хэнд үйлчилдэг вэ' },
    who: {
      en: [
        'Mongolian companies',
        'International companies',
        'Foreign investors',
        'Founders and shareholders',
        'Financial and fintech businesses',
        'Technology and platform businesses',
        'Mining and natural-resource businesses',
        'Businesses entering or operating in Mongolia',
        'Companies involved in commercial disputes',
      ],
      mn: [
        'Монголын компаниуд',
        'Олон улсын компаниуд',
        'Гадаадын хөрөнгө оруулагчид',
        'Үүсгэн байгуулагч, хувьцаа эзэмшигчид',
        'Санхүү, финтекийн бизнесүүд',
        'Технологи, платформын бизнесүүд',
        'Уул уурхай, байгалийн нөөцийн бизнесүүд',
        'Монголд шинээр орох, үйл ажиллагаа явуулж буй бизнесүүд',
        'Арилжааны маргаанд оролцож буй компаниуд',
      ],
    },
  },

  services: {
    title: { en: 'Services', mn: 'Үйлчилгээ' },
    heading: { en: 'Services', mn: 'Үйлчилгээ' },
    lede: {
      en: 'Ten practice areas, advised on together where a matter reaches across more than one of them.',
      mn: 'Арван чиглэл. Асуудал хэд хэдэн чиглэлд хамаарах тохиолдолд цогцоор нь авч үзнэ.',
    },
    covers: { en: 'What this covers', mn: 'Хамрах хүрээ' },
    related: { en: 'Related services', mn: 'Холбогдох үйлчилгээ' },
    discuss: { en: 'Discuss a matter', mn: 'Асуудлаар зөвлөлдөх' },
  },

  people: {
    title: { en: 'People', mn: 'Хуульчид' },
    lede: {
      en: 'The lawyers of Corplex Consulting LLC.',
      mn: '“Корплекс Консалтинг” ХХК-ийн хуульчид.',
    },
    expertise: { en: 'Areas of expertise', mn: 'Мэргэшлийн чиглэл' },
    overview: { en: 'Overview', mn: 'Товч танилцуулга' },
    experience: { en: 'Representative experience', mn: 'Төлөөлөх туршлага' },
    professional: { en: 'Professional background', mn: 'Мэргэжлийн туршлага' },
    education: { en: 'Education', mn: 'Боловсрол' },
    industries: { en: 'Industry experience', mn: 'Ажилласан салбарууд' },
    status: { en: 'Professional status', mn: 'Мэргэжлийн байдал' },
    languages: { en: 'Languages', mn: 'Хэл' },
    insightsBy: { en: 'Insights', mn: 'Нийтлэл' },
    contact: { en: 'Contact', mn: 'Холбоо барих' },
    photoPending: {
      en: 'Portrait to be added',
      mn: 'Хөрөг зураг нэмэгдэнэ',
    },
  },

  insights: {
    title: { en: 'Insights', mn: 'Судалгаа' },
    lede: {
      en: 'Notes on Mongolian law as it applies to business decisions.',
      mn: 'Монголын хууль тогтоомжийг бизнесийн шийдвэрт хэрхэн хэрэглэх тухай тэмдэглэл.',
    },
    empty: {
      en: 'No articles have been published yet. The topics below are planned.',
      mn: 'Одоогоор нийтлэл нийтлээгүй байна. Доорх сэдвүүд төлөвлөгдсөн болно.',
    },
    planned: { en: 'Planned topics', mn: 'Төлөвлөсөн сэдвүүд' },
    readingTime: { en: 'min read', mn: 'минут унших' },
    published: { en: 'Published', mn: 'Нийтэлсэн' },
    updated: { en: 'Updated', mn: 'Шинэчилсэн' },
    author: { en: 'Author', mn: 'Зохиогч' },
    relatedServices: { en: 'Related services', mn: 'Холбогдох үйлчилгээ' },
    relatedArticles: { en: 'Related articles', mn: 'Холбогдох нийтлэл' },
    backToInsights: { en: 'All insights', mn: 'Бүх нийтлэл' },
  },

  contact: {
    title: { en: 'Contact', mn: 'Холбоо барих' },
    heading: { en: 'Contact', mn: 'Холбоо барих' },
    lede: {
      en: 'Describe the matter in outline and the firm will respond with next steps.',
      mn: 'Асуудлаа товчхон бичиж илгээнэ үү. Дараагийн алхмын талаар хариу өгнө.',
    },
    office: { en: 'Office', mn: 'Хаяг' },
    telephone: { en: 'Telephone', mn: 'Утас' },
    email: { en: 'Email', mn: 'Имэйл' },
    facebook: { en: 'Facebook', mn: 'Facebook' },
    linkedin: { en: 'LinkedIn', mn: 'LinkedIn' },
    mapPending: {
      en: 'Office location to be added',
      mn: 'Оффисын байршил нэмэгдэнэ',
    },
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
        en: 'Your enquiry has been received. The firm will respond by email.',
        mn: 'Таны хүсэлтийг хүлээн авлаа. Имэйлээр хариу өгөх болно.',
      },
      error: {
        en: 'The enquiry could not be sent. Please write to the firm by email instead.',
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
      en: 'Submitting information through this website does not by itself establish an attorney-client relationship. Legal services are provided by Corplex Consulting LLC. Please do not send confidential or sensitive information until the firm has confirmed its ability to act in the matter.',
      mn: 'Энэхүү цахим хуудсаар мэдээлэл илгээсэн нь өөрөө өмгөөлөгч, үйлчлүүлэгчийн харилцаа үүссэнд тооцогдохгүй. Хууль зүйн үйлчилгээг “Корплекс Консалтинг” ХХК үзүүлнэ. Тухайн асуудлаар үйлчилгээ үзүүлэх боломжтойг баталгаажуулахаас өмнө нууц болон эмзэг мэдээлэл илгээхгүй байна уу.',
    },
  },

  experience: {
    items: {
      en: [
        'Advising companies on corporate governance and day-to-day corporate legal matters.',
        'Drafting, reviewing and negotiating domestic and cross-border commercial agreements.',
        'Advising technology and platform businesses on regulatory and contractual matters.',
        'Advising fintech and financial-sector businesses on licensing, financial regulation, payment structures and consumer-facing legal documentation.',
        'Advising businesses on employment and labour-law matters.',
        'Advising and representing clients in tax and administrative disputes.',
        'Representing clients in civil and commercial litigation.',
        'Advising on foreign investment and cross-border transactions.',
        'Advising businesses in transportation and logistics arrangements.',
        'Advising mining and natural-resource businesses on commercial, regulatory and administrative legal matters.',
      ],
      mn: [
        'Компанийн засаглал болон өдөр тутмын компанийн эрх зүйн асуудлаар зөвлөгөө өгөх.',
        'Дотоодын болон хил дамнасан арилжааны гэрээг боловсруулах, хянах, хэлэлцэн тохирох.',
        'Технологи, платформын бизнест зохицуулалт болон гэрээний асуудлаар зөвлөх.',
        'Финтек болон санхүүгийн салбарын бизнест тусгай зөвшөөрөл, санхүүгийн зохицуулалт, төлбөрийн бүтэц, хэрэглэгчтэй байгуулах баримт бичгийн асуудлаар зөвлөх.',
        'Хөдөлмөрийн эрх зүйн асуудлаар байгууллагад зөвлөх.',
        'Татварын болон захиргааны маргаанд зөвлөгөө өгч, төлөөлөн оролцох.',
        'Иргэний болон арилжааны хэргийн шүүхэд үйлчлүүлэгчийг төлөөлөх.',
        'Гадаадын хөрөнгө оруулалт, хил дамнасан хэлцлийн асуудлаар зөвлөх.',
        'Тээвэр, логистикийн харилцаанд байгууллагад зөвлөх.',
        'Уул уурхай, байгалийн нөөцийн бизнест арилжааны, зохицуулалтын болон захиргааны эрх зүйн асуудлаар зөвлөх.',
      ],
    },
    note: {
      en: 'Certain client names and matter details are omitted due to professional confidentiality.',
      mn: 'Мэргэжлийн нууцлалын үүднээс зарим харилцагчийн нэр, хэрэг, хэлцэл болон зөвлөгөөний мэдээллийг нийтэд мэдээлээгүй болно.',
    },
  },

  retainer: {
    heading: { en: 'Ongoing legal services', mn: 'Гэрээт хууль зүйн үйлчилгээ' },
    lede: {
      en: 'Ongoing legal support for businesses that require reliable access to professional legal advice without maintaining a full internal legal function.',
      mn: 'Байгууллага орон тооны хуульчийн тогтмол зардал гаргахгүйгээр өдөр тутмын хууль зүйн асуудлаа мэргэжлийн түвшинд тогтмол хариуцуулах боломж.',
    },
    items: {
      en: [
        'Day-to-day legal consultation',
        'Contract drafting and review',
        'Corporate documents',
        'Internal policies',
        'Employment matters',
        'Tax-related legal issues',
        'Administrative and regulatory matters',
        'Debt recovery',
        'Pre-litigation matters and dispute support',
        'Official letters and legal documents',
      ],
      mn: [
        'Өдөр тутмын хууль зүйн зөвлөгөө',
        'Гэрээ боловсруулах, хянах',
        'Компанийн баримт бичиг',
        'Дотоод журам, бодлого',
        'Хөдөлмөрийн харилцаа',
        'Татвартай холбоотой эрх зүйн асуудал',
        'Захиргааны болон зохицуулалтын асуудал',
        'Өр төлбөр барагдуулах',
        'Шүүхийн өмнөх ажиллагаа, маргааны дэмжлэг',
        'Албан бичиг, эрх зүйн баримт бичиг',
      ],
    },
  },

  legal: {
    noticeTitle: { en: 'Legal Notice', mn: 'Эрх зүйн мэдэгдэл' },
    notice: {
      en: [
        'This website operates under the LawMongolia brand. The legal services described on this website are provided by Corplex Consulting LLC. LawMongolia is not a separate legal entity.',
        'The information published on this website is provided for general informational purposes only and does not constitute legal advice. Legal advice must be based on the specific facts and circumstances of each matter.',
        'Accessing this website, sending an enquiry or communicating through the website does not by itself establish an attorney-client relationship.',
        'Do not send confidential or sensitive information until the firm has confirmed that it is able to act in the relevant matter.',
        'This website may contain links to external websites. Corplex Consulting LLC is not responsible for the content of those websites.',
      ],
      mn: [
        'Энэхүү цахим хуудас нь LawMongolia брэндийн хүрээнд ажиллана. Цахим хуудсанд танилцуулсан хууль зүйн үйлчилгээг “Корплекс Консалтинг” ХХК үзүүлнэ. LawMongolia нь тусдаа хуулийн этгээд биш болно.',
        'Цахим хуудсанд нийтэлсэн мэдээлэл нь ерөнхий мэдээллийн зориулалттай бөгөөд тухайн асуудалд зориулсан хууль зүйн зөвлөгөө гэж үзэхгүй. Хууль зүйн зөвлөгөө нь тухайн асуудлын бодит нөхцөл байдалд үндэслэсэн байх ёстой.',
        'Цахим хуудсаар холбогдох, мэдээлэл илгээх нь өөрөө өмгөөлөгч, үйлчлүүлэгчийн харилцаа үүсгэхгүй.',
        '“Корплекс Консалтинг” ХХК тухайн асуудлаар үйлчилгээ үзүүлэх боломжтойг баталгаажуулахаас өмнө нууц болон эмзэг мэдээлэл илгээхгүй байна уу.',
        'Энэхүү цахим хуудсанд гадны вэбсайт руу холбоос орсон байж болно. Тэдгээр вэбсайтын агуулгыг “Корплекс Консалтинг” ХХК хариуцахгүй.',
      ],
    },
    privacyTitle: { en: 'Privacy Policy', mn: 'Нууцлалын бодлого' },
    privacyIntro: {
      en: 'This policy explains what information this website collects and how it is handled. The website operates under the LawMongolia brand; the entity responsible for the information is Corplex Consulting LLC.',
      mn: 'Энэхүү бодлого нь цахим хуудас ямар мэдээлэл цуглуулж, хэрхэн боловсруулдгийг тайлбарлана. Цахим хуудас нь LawMongolia брэндийн хүрээнд ажиллах бөгөөд мэдээллийг хариуцах этгээд нь “Корплекс Консалтинг” ХХК болно.',
    },
    privacySections: {
      en: [
        ['Information collected through the contact form', 'The contact form collects the name, company, email address, telephone number where provided, subject and the content of the message. The form is the only place on this website where information is collected directly from a visitor.'],
        ['Purposes of processing', 'Information submitted through the form is used to respond to the enquiry, to assess whether Corplex Consulting LLC is able to act in the matter, and to carry out the conflict checks required before an engagement is accepted. It is not used for marketing.'],
        ['Website analytics', 'Analytics are not enabled on this website at present. If analytics are enabled in future, this policy will be updated to state what is measured and on what basis.'],
        ['Technical logs and cookies', 'The hosting provider records standard technical request information, such as IP address and browser type, for the purpose of operating and securing the website. This website does not set advertising or tracking cookies.'],
        ['Retention', 'Enquiries that do not lead to an engagement are retained only for as long as is necessary for conflict-checking purposes, and are then deleted. Where an engagement follows, the information is retained as part of the matter file in accordance with the firm’s professional obligations.'],
        ['Information security', 'Access to enquiries is limited to the lawyers and staff of Corplex Consulting LLC who need it in order to respond. Information submitted through this website is transmitted over an encrypted connection.'],
        ['Contact', 'Questions about this policy, or requests relating to information held about you, can be directed to the firm using the contact details on the contact page.'],
        ['Changes to this policy', 'This policy will be updated as the website develops and as required to reflect applicable Mongolian requirements. The date of the most recent revision is shown below.'],
      ],
      mn: [
        ['Холбоо барих маягтаар цуглуулах мэдээлэл', 'Холбоо барих маягтаар нэр, байгууллагын нэр, имэйл хаяг, утасны дугаар (өгсөн тохиолдолд), сэдэв болон мэдээллийн агуулгыг цуглуулна. Энэхүү цахим хуудсанд зочноос шууд мэдээлэл авдаг цорын ганц хэсэг нь энэ маягт юм.'],
        ['Боловсруулах зорилго', 'Маягтаар илгээсэн мэдээллийг хүсэлтэд хариу өгөх, “Корплекс Консалтинг” ХХК тухайн асуудлаар үйлчилгээ үзүүлэх боломжтой эсэхийг үнэлэх, гэрээ байгуулахын өмнө шаардлагатай ашиг сонирхлын зөрчлийн шалгалт хийхэд ашиглана. Сурталчилгааны зорилгоор ашиглахгүй.'],
        ['Вэб аналитик', 'Одоогоор энэхүү цахим хуудсанд аналитик идэвхжүүлээгүй болно. Хэрэв ирээдүйд идэвхжүүлбэл юуг, ямар үндэслэлээр хэмжиж байгааг энэ бодлогод тусган шинэчилнэ.'],
        ['Техникийн бүртгэл, күүки', 'Хостинг үйлчилгээ үзүүлэгч нь цахим хуудсыг ажиллуулах, хамгаалах зорилгоор IP хаяг, хөтчийн төрөл зэрэг стандарт техникийн мэдээллийг бүртгэдэг. Энэхүү цахим хуудас сурталчилгаа болон хянан мөрдөх күүки ашиглахгүй.'],
        ['Хадгалах хугацаа', 'Гэрээ байгуулахад хүргээгүй хүсэлтийг зөвхөн ашиг сонирхлын зөрчлийн шалгалтад шаардагдах хугацаанд хадгалж, дараа нь устгана. Гэрээ байгуулсан тохиолдолд мэдээллийг “Корплекс Консалтинг” ХХК-ийн мэргэжлийн үүргийн дагуу хэргийн материалын бүрэлдэхүүнд хадгална.'],
        ['Мэдээллийн аюулгүй байдал', 'Хүсэлтэд хандах эрхийг хариу өгөхөд шаардлагатай “Корплекс Консалтинг” ХХК-ийн хуульч, ажилтнаар хязгаарлана. Цахим хуудсаар илгээсэн мэдээллийг шифрлэгдсэн холболтоор дамжуулна.'],
        ['Холбоо барих', 'Энэхүү бодлоготой холбоотой асуулт, эсхүл таны талаарх мэдээлэлтэй холбоотой хүсэлтийг холбоо барих хуудсанд заасан мэдээллээр дамжуулан “Корплекс Консалтинг” ХХК-д хандаж болно.'],
        ['Бодлогын өөрчлөлт', 'Энэхүү бодлогыг цахим хуудсын хөгжилт болон Монгол Улсын холбогдох шаардлагад нийцүүлэн шинэчилнэ. Хамгийн сүүлд хянан засварласан огноог доор харуулав.'],
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
