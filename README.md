# LawMongolia

Bilingual (Mongolian / English) website for a Mongolian law firm. Built with
Next.js, TypeScript and Tailwind CSS. Every page is generated as static HTML,
so the site needs no database and no server to maintain.

---

## 1. Project architecture

```
app/
  (en)/                 English pages, served at /
    layout.tsx          <html lang="en"> and page chrome
    page.tsx            Home
    about/ services/ people/ insights/ contact/ privacy/ legal-notice/
  (mn)/                 Mongolian pages, served at /mn
    layout.tsx          <html lang="mn"> and page chrome
    mn/…                the same set of pages
  globals.css           Design tokens and the typographic system
  sitemap.ts            sitemap.xml
  robots.ts             robots.txt
  not-found.tsx         404

components/             Reusable interface pieces
  views/                One component per page type, shared by both languages

content/                EVERYTHING YOU WILL NORMALLY EDIT
  dictionary.ts         All interface text and page copy, in both languages
  services.ts           The ten practice areas
  people.ts             Lawyer profiles
  insights/             Articles, one Markdown file each

worker/
  index.ts              The Cloudflare Worker: handles /api/contact
wrangler.jsonc          Cloudflare deployment configuration

lib/
  site.ts               Domain, brand, contact details, logo, verification codes
  types.ts              Language helpers
  seo.ts                Titles, canonical URLs, hreflang
  schema.tsx            JSON-LD structured data
  insights.ts           Reads the Markdown articles
```

The two page sets are thin. Each page file is a few lines that render a view
from `components/views/` in one language, so a change to a view changes both
languages at once and they can never drift apart in layout.

---

## 2. Running it locally

You need Node.js 18.18 or newer.

```bash
npm install     # once
npm run dev     # then open http://localhost:3000
```

Useful checks before deploying:

```bash
npm run typecheck   # TypeScript
npm run lint        # ESLint
npm run build       # production build
```

---

## 3. Editing text

### 3.1 Interface text and page copy

Open `content/dictionary.ts`. Every entry has an `en` and an `mn` value:

```ts
introHeading: {
  en: 'Practical legal advice for business',
  mn: 'Бизнесийн хэрэгцээнд нийцсэн хууль зүйн зөвлөгөө',
},
```

Change the text between the quotation marks. Change `en` for the English site
and `mn` for the Mongolian site. Do not change the name before the colon.

If a value contains an apostrophe, write it as `’` (a curly apostrophe) rather
than `'`, or the line will break.

### 3.2 Practice area pages

Open `content/services.ts`. Each practice area has:

- `title` — the name shown everywhere
- `lead` — one line, used in listings and as the page's meta description
- `body` — the paragraphs at the top of the page
- `covers` — the list under "What this covers"

### 3.3 Adding a practice area

Copy an existing block in `content/services.ts`, paste it inside the list, and
change `slug`, `title`, `lead`, `body` and `covers`. The `slug` becomes the
URL, so use lowercase words separated by hyphens. The page, the numbered index,
the sitemap and the internal links all update by themselves.

To remove one, delete its block.

---

## 3.4 The brand and the legal entity — read this before editing copy

**LawMongolia is a brand, not a company.** The provider of legal services, and
the contracting party in every engagement, is **Corplex Consulting LLC**
(Корплекс Консалтинг ХХК). The website may present LawMongolia prominently, but
it must never read as though LawMongolia is itself a law firm or a registered
entity.

When editing copy, never write:

- “LawMongolia is a law firm” / “LawMongolia хуулийн фирм”
- “LawMongolia provides legal services” without naming Corplex Consulting LLC
- anything implying LawMongolia contracts with clients

The approved relationship line lives in `lib/site.ts` as `BRAND_LINE` and
appears in the header and footer:

> Legal services by Corplex Consulting LLC
> “Корплекс Консалтинг” ХХК-ийн хууль зүйн үйлчилгээний брэнд

The structured data reflects this too: the Organization is Corplex Consulting
LLC, with LawMongolia declared as its `brand`. There is no second organisation.

---

## 4. Lawyer information

Open `content/people.ts`.

### 4.1 Filling in the placeholders

Fields that have not been confirmed hold the text `[TO BE CONFIRMED]` and are
shown on the page in grey. Replace them with real values:

| Field | What it is |
| --- | --- |
| `title`, `entity` | Title and the legal entity it belongs to |
| `status`, `admitted` | Professional standing and year of admission |
| `email`, `telephone` | Direct contact details |
| `industries` | Sectors worked in — distinct from areas of expertise |
| `professional` | Deliberately generic. **Never list former employers here.** |
| `education` | Degrees and institutions |
| `languages` | Working languages |
| `sameAs` | Links to LinkedIn or an association profile, used by Google |

Two standing rules for this page: no chronological CV, and no former employer
names. The page exists to show expertise and positioning, not employment
history. Bar registration and licence numbers are not published; do not add
them unless you decide otherwise.

Placeholders are deliberately excluded from the structured data sent to search
engines, so an unfilled field is never published as a fact. **Do not replace a
placeholder with an approximation.** An empty field is always better than a
wrong one on a law firm's website.

### 4.2 Adding the portrait

1. Save the photograph as `public/itgel-galsanjamts.jpg`. A 1200 × 1500 pixel
   image is more than enough; the site generates smaller sizes automatically.
2. In `content/people.ts`, set:

```ts
portrait: '/itgel-galsanjamts.jpg',
```

Until that line is filled in, the site draws a proportioned empty frame rather
than a stock photograph. Alt text comes from `portraitAlt` just above it.

### 4.3 Adding another lawyer

Copy the whole block inside `PEOPLE`, paste it after the first, and change the
`slug` and the fields. Their page appears at `/people/their-slug` and on the
People page automatically.

---

## 5. Publishing an article

1. Create a file in `content/insights/`, for example
   `fintech-regulation-mongolia.md`.
2. Copy the contents of `content/insights/_template.md` into it.
3. Fill in the block at the top:

```yaml
---
title: Fintech regulation in Mongolia
description: One or two sentences. Used in listings and as the meta description.
author: itgel-galsanjamts
date: 2026-10-02
updated: 2026-10-02
category: Fintech
slug: fintech-regulation-mongolia
lang: en
relatedServices:
  - fintech-financial-regulation
draft: false
---
```

4. Write the article below the closing `---` using ordinary Markdown:
   `## ` for a heading, a blank line between paragraphs, `- ` for a list item.
5. Set `draft: false`. While `draft: true`, the article is ignored entirely.

For the Mongolian version, create a second file with `lang: mn` and its own
Mongolian `slug`. The two are independent, so one language can be published
before the other.

**Pair the two editions.** Because each language has its own slug, add a
`translation:` line to both files naming the other one's slug:

```yaml
# in the English file
slug: business-contracts-seven-issues
translation: biznesiin-geree-7-asuudal

# in the Mongolian file
slug: biznesiin-geree-7-asuudal
translation: business-contracts-seven-issues
```

That is what tells search engines the two pages are the same article in two
languages. Leave it out and each edition is treated as standalone — which is
correct when only one language has been written.

Reading time, the byline, the date line, the article's structured data and its
place in the sitemap are all generated from that block. No code changes are
needed.

`_template.md` is never published — files whose name starts with `_` are
skipped.

---

## 5a. Companies advised (the client section)

Open `content/clients.ts`. Each company is one line:

```ts
{ name: 'Gerege Systems', published: true, logo: '' },
```

`published: false` keeps an organisation in the file but off the website. UBCab
is set that way, because publication of that name has not been approved for
this page. Change it to `true` only once that approval is given.

**Permission comes first.** A company appears on the site only once it has
agreed that its name may be published. For an advocate, the identity of a
client is itself confidential, so record that permission before adding an
entry — particularly for any company involved in a dispute.

### Showing names as text

With `logo` empty, the company name is set in the site's serif face on a
hairline grid. This is a complete presentation in its own right; a good number
of firms list clients this way and never use logos at all. Nothing further is
needed.

### Adding a logo file

A logo is a registered trademark belonging to that company. Use its own file,
supplied by it, under the permission it has given — not an image copied from a
website or a search result.

1. Ask the company for its logo in SVG, or a PNG at least 320 pixels wide with
   a transparent background. This normally arrives with the brand guidelines.
2. Save it in `public/clients/`, named after the company, e.g.
   `gerege-systems.svg`.
3. Point to it in `content/clients.ts`:

```ts
{ name: 'Gerege Systems', logo: '/clients/gerege-systems.svg' },
```

Logos render in greyscale at reduced opacity and come to full strength on
hover, so a row of mismatched brand colours never competes with the page.

Mixing the two states is fine — companies without a file keep showing as text
next to those with a logo, and the grid stays even.

To link a company to its own website, add `url: 'https://…'` to its line.

### Changing the heading

The heading and the note beneath the grid are in `content/dictionary.ts` under
`home.clientsHeading` and `home.clientsNote`. Consider the wording carefully:
"Companies we have advised" states a fact, where "Our clients" makes a claim
about a continuing relationship that may no longer hold.

---

## 6. Contact details, email and address

Open `lib/site.ts`. Phone, email and social links live in `CONTACT`; leaving
`facebook` or `linkedin` as an empty string removes the link rather than
showing a dead one.

The address is held in two places, because a Mongolian address and an English
address are written differently, and search engines want it broken into fields:

```ts
export const OFFICE = {
  en: '52-120 Paris Street, Khoroo 1, Sükhbaatar District, Ulaanbaatar 14191, Mongolia',
  mn: 'Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Парисын гудамж, 52-120',
};

export const OFFICE_PARTS = { /* streetAddress, postalCode, … */ };
```

`OFFICE` is what a visitor reads. `OFFICE_PARTS` is what goes into the
structured data. If the office moves, change both.

---

## 7. The logo

The supplied logo is in `public/logo.png`, with its white background removed so
it sits cleanly on the page. It is wired up in `lib/site.ts`:

```ts
export const LOGO_SRC = '/logo.png';
export const LOGO_HEIGHT = 54;   // rendered height in pixels
```

To replace it, drop a new file in `public/` and change that path. An SVG is
better than a PNG if your designer can supply one — it stays sharp at any size
and is a fraction of the file size.

### The knockout version

The logo is navy and gold, so it reads on white but disappears on the deep
navy blocks. The header uses the real logo; the footer falls back to a
typographic wordmark.

Ask your designer for a **knockout version** — the same logo in solid white.
Save it as `public/logo-white.png` (or `.svg`), then in
`components/Logo.tsx` replace the wordmark fallback with that image. The site
will then use the real mark everywhere.

### Matching the colours to the logo

The whole colour system is four values at the top of `app/globals.css`.
Nothing else in the codebase names a colour, so changing these changes every
page at once:

```css
--field: #22497a;        /* the deep colour: hero, page headers, footer, closing block */
--field-mute: #adc6e0;   /* secondary text on that colour */
--accent: #25507d;       /* links, practice-area numbers, emphasis on white */
--accent-lift: #cc9a39;  /* the gold — used on the deep colour only */
--accent-soft: #e9eff6;  /* text selection tint */
```

These are sampled from the logo: `#25507d` is its navy, `#cc9a39` its gold.

Two rules keep the palette working when you change it:

- `--field` must be dark enough for white text to sit on it comfortably.
- `--accent` is read against white, `--accent-lift` against `--field`. They are
  two stops of the same hue, not the same value.

Everything between the coloured blocks stays white, off-white, hairline grey
and near-black.

---

## 8. Configuring the contact form

The form validates on the page and again on the server, rejects submissions
that trip the spam trap, and allows five submissions per hour per address. What
it does **not** do out of the box is deliver the message, because that requires
credentials that belong to you.

To switch delivery on, set an environment variable pointing at any endpoint
that accepts a JSON POST — an email service such as Resend or Postmark, a form
service such as Formspree, or an internal endpoint:

```
CONTACT_FORM_WEBHOOK=https://…
CONTACT_FORM_TOKEN=…            # optional, sent as a Bearer token
```

The endpoint receives:

```json
{
  "name": "…", "company": "…", "email": "…", "phone": "…",
  "subject": "…", "message": "…", "lang": "en",
  "receivedAt": "2026-09-11T08:00:00.000Z"
}
```

Until `CONTACT_FORM_WEBHOOK` is set, the form tells the visitor to write to the
firm by email instead. Enquiries are never written to a database.

---

## 9. How the site is hosted

The site is built as plain static files and served from **Cloudflare Workers
Static Assets**. There is no second hosting platform and no adapter between
Next.js and Cloudflare.

```
npm run build          →  writes ./out  (plain HTML, CSS, JS)
wrangler deploy        →  uploads ./out and worker/index.ts to Cloudflare
```

Cloudflare serves every matching file directly, without running any code. The
Worker in `worker/index.ts` is invoked only for `/api/contact`.

Response headers for pages live in `public/_headers`, which the build copies
into `out/`. Edit that file to change caching or security headers.

---

## 10. Deploying

### First deployment

You need Node.js installed for this part. It is a one-off; after this,
everything can be done from the browser (see 10.2).

```bash
npm install
npx wrangler login          # opens a browser, sign in to Cloudflare
npm run deploy              # builds, then uploads
```

Wrangler prints a `*.workers.dev` address. Open it and check the site.

### 10.1 Connecting the domain

1. In the Cloudflare dashboard open **Compute → Workers & Pages → lawmongolia
   → Settings → Domains & Routes**.
2. Choose **Add → Custom domain**, enter `lawmongolia.mn`, and repeat for
   `www.lawmongolia.mn`.
3. Cloudflare creates the DNS records itself, because the domain is already on
   your account. No manual record is needed.
4. Under **SSL/TLS → Overview** choose **Full (strict)**, and under **Edge
   Certificates** switch on **Always Use HTTPS**.

Then set the production address so that canonical URLs and the sitemap point
at the real domain. In `lib/site.ts`, change the default:

```ts
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lawmongolia.mn'
).replace(/\/$/, '');
```

and redeploy.

### 10.2 Deploying automatically from GitHub

So that content can be edited from a browser without Node:

1. Put the code in a **private** GitHub repository.
2. In Cloudflare, open the Worker → **Settings → Build** → **Connect** and
   select that repository.
3. Set the build command to `npm run build` and the deploy command to
   `npx wrangler deploy`.

After this, editing a file on github.com and pressing *Commit changes*
rebuilds and publishes the site by itself, usually within two minutes.

---

## 10.3 The contact form

The Worker validates every enquiry, rejects anything that trips the spam trap,
and allows five submissions per hour from one address. It does not deliver the
message until you tell it where to send it, because that requires credentials
that belong to you.

Set them as Cloudflare secrets — never in `wrangler.jsonc`, which is committed
to the repository:

```bash
npx wrangler secret put CONTACT_FORM_WEBHOOK
npx wrangler secret put CONTACT_FORM_TOKEN     # only if your service needs one
```

`CONTACT_FORM_WEBHOOK` is any endpoint that accepts a JSON POST — an email
service such as Resend or Postmark, or a form service. It receives:

```json
{
  "name": "…", "company": "…", "email": "…", "phone": "…",
  "subject": "…", "message": "…", "lang": "en",
  "receivedAt": "2026-09-11T08:00:00.000Z"
}
```

Until the secret is set, the form tells the visitor to write by email instead.
Enquiries are never written to storage by the Worker.

**Add a durable rate limit.** The Worker's own limit stops a single burst, but
a Worker instance is short-lived, so the reliable control is a Cloudflare rule:
**Security → WAF → Rate limiting rules → Create**, matching the path
`/api/contact`, at roughly 5 requests per hour per IP.

---

## 11. Google Search Console, Bing and Analytics

### Search Console

1. Go to search.google.com/search-console and add a **Domain** property for
   `lawmongolia.mn`.
2. Choose DNS verification. Add the `TXT` record it gives you in Cloudflare.
3. Once verified, open *Sitemaps* and submit `sitemap.xml`.

If you prefer the HTML tag method instead, set
`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in `lib/site.ts` (or as a build-time
variable) to the code Google gives you and redeploy. Leaving it unset omits the
tag entirely.

### Bing

At bing.com/webmasters you can import the Search Console property directly,
which is the quickest route. Otherwise set
`NEXT_PUBLIC_BING_SITE_VERIFICATION` the same way and redeploy.

### Analytics

Analytics are not installed. There is no tracking script, and the privacy
policy says so. If you decide to add analytics later, set `NEXT_PUBLIC_GA_ID`
and add the script — and update `content/dictionary.ts` under
`legal.privacySections` so the privacy policy stays accurate.

Fonts are served from your own domain rather than from Google, so visiting the
site makes no request to a third party.

---

## 12. Things to keep in mind

- **Facts.** Anything reading `[TO BE CONFIRMED]` is unconfirmed on purpose.
  Fill it in or leave it; never guess.
- **Client confidentiality.** The experience entries in
  `content/dictionary.ts` are anonymised. Name a client only with that client's
  written permission.
- **Advertising rules.** Copy avoids superlatives, guarantees of outcome and
  claims of ranking. Keep it that way when you edit; the rules on advocate
  advertising apply to the website.
- **Both languages.** When you change `en`, change `mn`. The layout is shared,
  so a missing translation shows as English text on a Mongolian page.
