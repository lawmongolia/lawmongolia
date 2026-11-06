# LawMongolia — Монгол/Англи 4 хос нийтлэлийн засварласан багц

Бэлтгэсэн: 2026-11-06

## Ямар алдааг зассан бэ?

2026-11-05-нд гаргасан ZIP-д 4 монгол нийтлэл байсан боловч англи хувилбарууд байгаагүй. 2026-11-06-ны шалгалтаар уг 4 монгол нийтлэл GitHub-ийн `lawmongolia/lawmongolia` репозиторийн `main` салбар болон амьд сайтад нэмэгдсэн, харин тохирох англи файлууд ороогүй байв.

Энэ багцад:
- **4 шинэ англи эх** (`lang: en`, `date: 2026-11-06`);
- **4 монгол эхийн зөвхөн YAML metadata засварласан хуулбар** (`translation: англи-slug`); эх бичвэр, URL, нийтэлсэн огноо хэвээр;
- `GIT_APPLY.patch` — шинэ англи файлууд болон монгол metadata-ийн хамгийн бага өөрчлөлтийг хэрэглэх patch;
- `SOURCES_AND_QA.md` — эх сурвалж, эрсдэл, QA;
- `ARTICLE_MAPPING.csv` — хоёр хэлний URL болон файлын харьцуулалт багтсан.

## Нийтлэл тус бүрийн англи гарчиг

1. **Limitation of liability in Mongolian commercial contracts: what businesses should review**
2. **SaaS contracts in Mongolia: SLAs, data protection and a workable exit plan**
3. **Who owns software copyright in Mongolia: employees, contractors and clients**
4. **Commercial disputes in Mongolia: evidence to prepare before filing a claim**

## Нийтлэх арга

Дараах файлуудыг төслийн `content/insights/` хавтсанд байрлуулах байдлаар бэлтгэсэн. Шинэ 4 англи файл нэмэгдэнэ; одоогийн 4 монгол файл дээр **зөвхөн `translation` талбар** нэмэгдэнэ. `title`, `description`, `slug`, `date`, `updated`, нийтлэлийн агуулга өөрчлөгдөхгүй.

Сайтын `lib/insights.ts` нь англи, монгол Markdown-ийг frontmatter-ээр уншдаг. `app/(en)/insights/[[...slug]]/page.tsx` болон `app/(mn)/mn/insights/[[...slug]]/page.tsx` нь `translation`-ийн дагуу хоёр хэлний `hreflang` холбоос үүсгэнэ. `app/sitemap.ts` шинэ нийтлэл тус бүрийг автоматаар жагсаадаг. **Сайтын код, одоо индексжсэн хуудсууд, URL slug-уудыг солих шаардлагагүй.**

### Git patch ашиглах бол

Репозиторийн үндсэн хавтсанд:

```bash
git apply --check GIT_APPLY.patch
git apply GIT_APPLY.patch
```

Patch-ийг 2026-11-06-ны `main` хувилбарт байсан монгол эхүүдтэй харьцуулж, шинэ англи файлууд байхгүй нөхцөлд тестэлсэн. Өөр хэрэглэгч зэрэг зассан бол patch-ийн зөрчлийг эхлээд үнэлнэ; одоо байгаа файлыг шууд дарж хуулж болохгүй.

### Нийтлэхээс өмнөх хяналт

1. Эх сурвалж/заалтын эцсийн редакцын хяналт хийж, мэргэжлийн орчуулгын эрх зүйн утгыг баталгаажуулна.
2. Дөрвөн англи slug давхардаагүй эсэх, хоёр талын `translation` холболт хоёр чиглэлдээ таарч байгаа эсэхийг шалгана.
3. `npm run build` эсвэл репозиторийн бодит build скриптээр build хийж, 8 URL-ийн хуудас, canonical/hreflang, sitemap, дотоод холбоосыг шалгана.
4. Англи програмын зохиогчийн эрхийн сэдэв өмнө индексжсэн `/insights/commissioned-software-source-code-copyright-mongolia-2026`-тай ойролцоо. SEO cannibalization үүсэх эрсдэлийг редакцын түвшинд үнэлнэ; хуучин URL-ыг устгах, redirect хийхийг энэхүү багц санал болгоогүй.
5. Нийтлэлийн дараа Search Console URL Inspection ашиглаж индексжүүлэлтийн бодит төлөвийг хянаж болно. Индексжих эсвэл эрэмбэ дээшлэх баталгаа байхгүй.

**Энэ багц бэлтгэхдээ GitHub-д commit, PR, merge, сайт дээр шинэ нийтлэлт хийгээгүй.** Веб нийтлэл гаргах шийдвэрийг эрх бүхий этгээд баталгаажуулсны дараа хэрэгжүүлнэ.
