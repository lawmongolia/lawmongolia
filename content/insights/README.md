# LawMongolia — 2026-10-14 нийтэлж болох 5 нийтлэл (MN + EN)

**Тус багц нь зөвхөн 10 шинэ `.md` нийтлэл нэмнэ.** Өмнөх нийтлэл, вэбсайтын код, загвар, зураг, тохиргоог өөрчлөхгүй.

## Шалтгаан

`lib/insights.ts` нь `content/insights/` хавтасны зөвхөн шууд дотор байгаа `.md` файлуудыг уншдаг. Өмнөх ZIP-д нийтлэл бүр `01_.../mn.md`, `.../en.md` гэсэн дэд хавтсанд байсан тул нийтлэгдээгүй.

Мөн Монгол, Англи хувилбар тусдаа slug-тай байх ёстой; өгүүллүүдийн `author` нь `content/people.ts`-д байгаа `itgel-galsanjamts` байх ёстой; шүүхийн кейсийн файлд frontmatter байхгүй байсан. Эдгээрийг зассан.

## Суулгах

**GitHub browser-оор оруулах:** ZIP-ийг компьютер дээрээ задал. `content/insights/` хавтсыг нээгээд түүний дотор байгаа **10 ширхэг `.md` файлыг** GitHub repository-ийн `content/insights/` хавтас руу Upload files ашиглан байршуул. `content/insights/` хавтас дотор нэмэлт дэд хавтас үүсгэхгүй. Commit хийсний дараа deployment-ийг дуусга.

**Repository-ийн үндсэн хавтсаар шинэчлэх:** ZIP-ийг project root-д задлаад `content/insights/`-ийн файлуудыг нэгтгэнэ. ZIP дотроо `content/insights/` гэсэн ЗӨВ замтай, нийтлэл бүр дэд хавтасгүй.

**Зөвхөн ZIP файлыг GitHub руу upload хийх нь нийтлэл нийтлэхгүй.** Zip-ийг задалж markdown файлуудыг байршуулна.

## Нийтлэлийн URL

| Дугаар | Монгол хуудас | English page |
| --- | --- | --- |
| 1 | `/mn/insights/zeeliin-bodit-urtug-huu-shimtgel-mongol` | `/insights/loan-effective-cost-fees-disclosure-mongolia` |
| 2 | `/mn/insights/app-hetevch-uldegdel-tsahim-mungu-mongol` | `/insights/app-wallet-balance-electronic-money-mongolia` |
| 3 | `/mn/insights/bnpl-daraa-tuluh-zeel-gereenii-angilal` | `/insights/bnpl-deferred-payment-credit-classification-mongolia` |
| 4 | `/mn/insights/avtomat-zeeliin-shiidver-huviin-medeelel` | `/insights/automated-credit-scoring-data-subject-rights-mongolia` |
| 5 | `/mn/insights/qr-kodtoi-geree-gazar-ezemshih-shuuhiin-shiidver` | `/insights/qr-coded-land-agreement-contract-formation-court-mongolia` |

## Нягталсан зүйлс

- Дэд хавтасгүй, яг `content/insights/` дотор 10 `.md` файл байна.
- Монгол, Англи хувилбаруудад өөр өөр `slug` ба харилцан `translation` холболттой.
- Файл бүр YAML frontmatter, `author: itgel-galsanjamts`, `draft: false`-тай.
- Нийтлэлийн үндсэн агуулга болон эх сурвалжийн холбоосыг хадгалсан.
- Сайтын Next.js production build-ийг энэ багцаар ажиллуулж баталгаажуулаагүй. GitHub/hosting дээр deployment амжилттай дууссаныг шалгана.

Шүүхийн шийдвэр анхан шатны шийдвэр; дараагийн шатанд өөрчлөгдсөн эсэх нь тусад нь шалгагдаагүй.
