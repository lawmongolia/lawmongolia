# LawMongolia.mn — 4 шинэ нийтлэл / 2 хэл

**Огноо:** 2026-11-11
**Хамрах хүрээ:** Монгол 4 + Англи 4 = нийт 8 Markdown файл. 4 бие даасан сэдэв, сэдэв бүр хоёр хэлтэй.
**Эх репозитор:** `lawmongolia/lawmongolia`, `main` салбарын `content/insights/` бүтэцтэй харьцуулсан.

## GitHub Desktop ашиглан нийтлэх

1. ZIP файлыг **задална**. ZIP өөрийг нь GitHub-д хуулж болохгүй.
2. Энэ багц дахь `content/insights/` хавтсанд байгаа **8 `.md` файлыг** таны локал `lawmongolia/content/insights/` хавтсанд хуулна.
3. `README_MN.md` ба `QA_AND_SOURCES.md` файлуудыг репозиторид хуулах шаардлагагүй.
4. GitHub Desktop-ийн **Changes** хэсэгт зөвхөн 8 шинэ `.md` файл нэмэгдсэнийг, хуучин файл устсан/солигдоогүйг шалгана.
5. `Commit to main` -> `Push origin` (эсвэл урьдчилан review хийх бол шинэ branch/PR) хийнэ. **Push нь сайт амжилттай нийтлэгдсэнийг батлахгүй.**
6. Cloudflare deployment амжилттай дууссаны дараа URL тус бүр `200` буцаах, canonical ба hreflang зөв гарах, sitemap-д орсныг шалгана.
7. Google Search Console URL Inspection-д шинэ хуудасны **canonical URL** тус бүрийг тусад нь шалгана. Индексжүүлэлт баталгаатай үр дүн биш.

## Нийтлэлийн URL

| Сэдэв | Монгол URL | Англи URL |
|---|---|---|
| Компанийн due diligence | `/mn/insights/kompani-hudaldan-avah-legal-due-diligence-2026` | `/insights/company-acquisition-legal-due-diligence-mongolia-2026` |
| Программ хөгжүүлэлтийн milestone төлбөр | `/mn/insights/programm-hugjuulelt-guitsetgel-tulbur-huleeltseh-geree-2026` | `/insights/software-development-milestone-payments-acceptance-mongolia-2026` |
| Мэдээлэл боловсруулах DPA | `/mn/insights/huviin-medeelel-bolovsruulah-geree-dpa-mongolia-2026` | `/insights/data-processing-agreement-dpa-mongolia-business-2026` |
| Компани хооронд ажилтан шилжүүлэх | `/mn/insights/grupp-kompani-hoorond-ajiltan-shiljuuleh-hodolmor-2026` | `/insights/employee-transfer-between-group-companies-mongolia-2026` |

## Сайтын SEO тохиргоотой нийцүүлсэн нь

- `date`, `updated`, `author`, `lang`, `slug`, `description`, `relatedServices`, `translation`, `draft: false` талбар оруулсан.
- Хоёр хэлний нийтлэлүүдийн `translation` талбар харилцан заана.
- `lib/insights.ts` нь `content/insights/*.md`-ийг уншдаг; `app/sitemap.ts` нь нийтлэлийн URL-уудыг автоматаар үүсгэдэг. Тиймээс зөвхөн эдгээр 8 файл нэмэхэд үндсэн сайтын `sitemap.ts`, `robots.ts`, `_redirects` болон өмнөх нийтлэлд засвар хийх шаардлагагүй гэж үзэв.
- Сайтын `metadata` тохиргоо SEO title, description, canonical, hreflang-ийг Markdown frontmatter-ээс авдаг. **Live deployment хийхээс өмнө URL-ын гаралтыг дахин баталгаажуул.**

## Чанар, эрх зүйн анхааруулга

Албан ёсны хууль тогтоомжийн заалтыг 2026-11-11-нд legalinfo.mn-ээс шалгасан. Нийтлэлүүд нь зөвхөн нийтлэг мэдээлэл; тодорхой компани, үйлчлүүлэгчийн баримт, маргаан, нууц мэдээлэл ороогүй. Хуулийн заалт, салбарын журам нийтлэгдсэний дараа өөрчлөгдөж болно. Google индексжүүлэх, хайлтад тодорхой байр эзлэхийг баталгаажуулахгүй.
