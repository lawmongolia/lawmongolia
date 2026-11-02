# LawMongolia: Google Search Console 44 incorrect-language URL repair

**Шалгасан огноо:** 2026-11-02
**Шалгасан эх сурвалж:** lawmongolia.mn-Coverage-Drilldown-2026-11-02.xlsx (`Not found (404)`), GitHub `lawmongolia/lawmongolia` main дахь Header.tsx, Shell.tsx, нийтлэлийн frontmatter.

## Яг юу илэрсэн бэ?

44 URL бүгд нийтлэлийн хэлтэй зөрсөн замтай: англи article slug `/mn/insights/` дор эсвэл монгол slug `/insights/` дор байна. Одоогийн `components/Header.tsx` хэл солих товчид `path(other, route)` хэрэглэснээр зөвхөн prefix өөрчилж, орчуулгын slug-г солихгүй байна.

Энэ нь 44 бодит нийтлэл устсан эсвэл 44 хуудас өмнө нь Google-д индекст байсан гэсэн баталгаа биш. Графикаар 2026-10-17-нд 12, 2026-10-20-нд 44 алдаа бүртгэгджээ.

## Суух файлууд

- `components/Header.tsx` (ОДОО БАЙГААГ СОЛИНО) — хэл солих товчийг зөв article slug ашигладаг болгоно.
- `components/Shell.tsx` (ОДОО БАЙГААГ СОЛИНО) — серверээс орчуулгын зураглал дамжуулна.
- `lib/article-language-map.ts` (ШИНЭ) — нийтлэлийн Markdown frontmatter-ийн `lang`, `slug`, `translation`-оор зураглал үүсгэнэ. Нийтлэлийн body-г дахин render хийхгүй.
- `public/_redirects` (ШИНЭ) — 44 буруу URL-ийг тухайн нийтлэлийн зөв хэлний орчуулга руу HTTP 301 чиглүүлнэ.

Эдгээрээс өөр файл солихгүй. `content/insights`, `content/people.ts`, `app/sitemap.ts`, `lib/seo.ts`, `lib/site.ts`-д гар хүрэхгүй.

## Суулгах аюулгүй дараалал

1. `lawmongolia`-ийн одоогийн `main` салбарын өөрчлөлтийг GitHub Desktop дээр `Fetch/Pull` хийнэ.
2. Өөрийн орон нутгийн засвар байгаа бол commit эсвэл backup хийнэ.
3. ZIP-ийн `components`, `lib`, `public` хавтсыг repository root-д нэгтгэн хуулна. *Зөвхөн* `Header.tsx` ба `Shell.tsx` солигдоно.
4. `npm ci`, `npm run typecheck`, `npm run build` ажиллуулж шалгана.
5. GitHub Desktop-ийн `Changes`-ийг үзээд commit/push хийнэ.
6. Cloudflare Workers шинэ build deploy хийсэн эсэхийг шалгана. GitHub-д Push хийх нь дангаараа шинэ production хувилбар ажиллаж байна гэсэн баталгаа биш.
7. Deploy-ийн дараа 44 буруу URL-д HTTP 301 + `Location` зөв target, зөв target-д HTTP 200 буцаж байгаа эсэхийг шалгана. Хэл солих товчоор MN↔EN аль алинаар нь жишээ нийтлэлүүдийг шалгана.
8. Search Console → Page indexing → Not found (404) → Validate fix (ЗӨВХӨН production тест амжилттай болсны дараа). `404`-ийн тоо цөөрөх боловч эдгээр буруу URL `Page with redirect` бүлэгт байж болно — энэ нь хэвийн.

## Эх сурвалж ба техникийн анхааруулга

- Cloudflare Workers static assets `_redirects`: https://developers.cloudflare.com/workers/static-assets/redirects/
- Google permanent redirect guidance: https://developers.google.com/search/docs/crawling-indexing/301-redirects
- Google Page indexing status: https://support.google.com/webmasters/answer/7440203?hl=en

**Production тест хийгдээгүй**. Эдгээр нь GitHub дээрх эх код ба Search Console экспортод тулгуурлан бэлтгэсэн засвар. Хайлт дахь байрлал, өмнөх impressions сэргээх баталгаа биш. `Discovered – currently not indexed` 80 хуудасны URL Excel энэ багцад байхгүй тул тусад нь шалгана.
