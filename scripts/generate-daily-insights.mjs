import fs from "node:fs/promises";
import path from "node:path";

const CONTENT_DIR = path.resolve("content/insights");
const API_URL = "https://api.openai.com/v1/responses";
const MODEL = process.env.OPENAI_MODEL || "gpt-5.6";
const REVIEW_MODEL = process.env.OPENAI_REVIEW_MODEL || MODEL;
const REASONING_EFFORT = process.env.OPENAI_REASONING_EFFORT || "high";
const API_KEY = process.env.OPENAI_API_KEY;

const ALLOWED_SERVICES = [
  "corporate-commercial",
  "contracts",
  "litigation-dispute-resolution",
  "tax",
  "employment-labour",
  "administrative-regulatory",
  "fintech-financial-regulation",
  "technology-digital-platforms",
  "investment-cross-border",
  "mining-natural-resources",
];

if (!API_KEY) throw new Error("OPENAI_API_KEY is missing.");

function ulaanbaatarDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ulaanbaatar",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const p = Object.fromEntries(parts.map((x) => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day}`;
}

function parseFrontmatter(raw, filename) {
  const block = raw.match(/^---\s*\n([\s\S]*?)\n---/);
  const fm = block?.[1] || "";
  const get = (key) => {
    const m = fm.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, "m"));
    return m?.[1]?.trim() || "";
  };
  return {
    filename,
    title: get("title"),
    slug: get("slug"),
    lang: get("lang"),
    date: get("date"),
    category: get("category"),
  };
}

async function inventory() {
  const names = (await fs.readdir(CONTENT_DIR))
    .filter((n) => n.endsWith(".md") && !n.startsWith("_"));
  const rows = [];
  for (const name of names) {
    const raw = await fs.readFile(path.join(CONTENT_DIR, name), "utf8");
    rows.push(parseFrontmatter(raw, name));
  }
  return rows;
}

function extractOutputText(json) {
  if (typeof json.output_text === "string" && json.output_text.trim()) {
    return json.output_text.trim();
  }
  const chunks = [];
  for (const item of json.output || []) {
    if (item?.type !== "message") continue;
    for (const content of item.content || []) {
      if (content?.type === "output_text" && typeof content.text === "string") {
        chunks.push(content.text);
      }
    }
  }
  if (!chunks.length) throw new Error(`No output text. Status: ${json.status || "unknown"}`);
  return chunks.join("\n").trim();
}

const sourceSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    title: { type: "string", minLength: 3 },
    url: { type: "string", minLength: 8 },
  },
  required: ["title", "url"],
};

const articleSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    title_mn: { type: "string", minLength: 12 },
    description_mn: { type: "string", minLength: 40 },
    slug_mn: { type: "string", pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$" },
    body_mn: { type: "string", minLength: 3000 },

    title_en: { type: "string", minLength: 12 },
    description_en: { type: "string", minLength: 40 },
    slug_en: { type: "string", pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$" },
    body_en: { type: "string", minLength: 3000 },

    category: { type: "string", minLength: 3 },
    relatedServices: {
      type: "array",
      minItems: 1,
      maxItems: 3,
      items: { type: "string", enum: ALLOWED_SERVICES },
    },
    sources: {
      type: "array",
      minItems: 2,
      maxItems: 8,
      items: sourceSchema,
    },
  },
  required: [
    "title_mn", "description_mn", "slug_mn", "body_mn",
    "title_en", "description_en", "slug_en", "body_en",
    "category", "relatedServices", "sources"
  ],
};

const resultSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    articles: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: articleSchema,
    },
  },
  required: ["articles"],
};

async function callOpenAI({ model, system, user }) {
  const body = {
    model,
    store: false,
    reasoning: { effort: REASONING_EFFORT },
    tools: [{ type: "web_search" }],
    input: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
    text: {
      format: {
        type: "json_schema",
        name: "lawmongolia_daily_insights",
        strict: true,
        schema: resultSchema,
      },
    },
    max_output_tokens: 36000,
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(`OpenAI API ${res.status}: ${JSON.stringify(json)}`);
  return JSON.parse(extractOutputText(json));
}

function generationPrompt() {
  return `
You are the senior bilingual legal editor for a Mongolian legal information website.

Prepare exactly TWO distinct bilingual legal insight articles.

LEGAL ACCURACY
- Jurisdiction: Mongolia.
- Use live web search.
- Prefer authoritative primary sources: current legislation, Legalinfo, Parliament, courts, regulators, ministries and other competent public authorities.
- Verify every material legal proposition before writing.
- Do not invent article numbers, dates, case numbers, quotations, monetary thresholds, statistics, regulatory requirements or URLs.
- If a point cannot be verified, omit it.
- Distinguish binding law, case law, regulatory guidance and practical commentary.
- Do not present disputed interpretations as settled law.
- Avoid partisan or political advocacy.
- Do not disclose confidential clients or engagements.

TOPICS
- Choose two different topics useful to businesses, executives, in-house counsel, investors or technology companies operating in or with Mongolia.
- Prefer material recent developments when available.
- If current news is thin, use a strong evergreen legal topic instead.
- Do not duplicate an existing article.
- The two new topics must also be meaningfully different from each other.

MONGOLIAN
- Draft the Mongolian edition first.
- Write polished, idiomatic, scholarly Mongolian legal prose that reads as original Mongolian, not translated English.
- Avoid machine-translated syntax, choppy AI-like sentences, repeated conclusions and needless foreign terminology.
- Explain the rule, scope, practical consequence and important limitations.
- Aim for roughly 900-1,400 substantive Mongolian words per article.

ENGLISH
- Write a professional legal-English edition conveying the same legal substance.
- It must read naturally in English, not as a word-for-word translation.
- Do not add legal claims that are absent from the Mongolian edition.

FORMAT
- body_mn and body_en are Markdown article bodies only.
- Do not include YAML frontmatter and do not use an H1 heading.
- Use ## and ### headings sparingly.
- Do not emit OpenAI citation markers.
- Put the authoritative pages actually relied on in the sources array with real titles and URLs.

BRAND
- LawMongolia is a brand, not a legal entity or separate law firm.
- If the service provider must be named, identify Corplex Consulting LLC.

METADATA
- Slugs must be lowercase ASCII words separated by hyphens.
- MN and EN slugs must be different.
- relatedServices may use only the supplied service slugs.
`.trim();
}

async function generateDrafts(existing, date) {
  return callOpenAI({
    model: MODEL,
    system: generationPrompt(),
    user: `
Publication date: ${date}

Allowed relatedServices:
${ALLOWED_SERVICES.map((x) => `- ${x}`).join("\n")}

Existing insight inventory:
${JSON.stringify(existing, null, 2)}

Research and return exactly two new bilingual articles.
`.trim(),
  });
}

async function reviewDrafts(drafts, existing, date) {
  return callOpenAI({
    model: REVIEW_MODEL,
    system: `
You are the final independent legal editor and fact-checker for a Mongolian legal publication.

Use live web search to independently verify the two bilingual drafts and return exactly two corrected publication-ready article pairs.

- Verify every material legal statement, law/article number, effective date, case reference, regulatory requirement, numerical threshold and source URL.
- Correct errors and remove anything that cannot be verified.
- Ensure sources actually support the article and prefer primary official sources.
- Check that neither topic duplicates the existing inventory and that the two topics differ materially.
- Preserve practical value without overstating certainty.
- Keep political material neutral and factual if unavoidable.
- Rewrite Mongolian as needed so it reads as elegant, native Mongolian legal prose.
- Ensure English conveys the same legal substance in professional legal English.
- Do not emit OpenAI citation markers.
- body fields are Markdown body only, with no H1 or YAML frontmatter.
- LawMongolia is a brand; Corplex Consulting LLC is the service provider.
`.trim(),
    user: `
Publication date: ${date}

Existing insight inventory:
${JSON.stringify(existing, null, 2)}

Drafts:
${JSON.stringify(drafts, null, 2)}

Return the independently verified final version.
`.trim(),
  });
}

function validate(result, existing) {
  if (!Array.isArray(result?.articles) || result.articles.length !== 2) {
    throw new Error("Expected exactly two articles.");
  }

  const used = new Set(existing.map((x) => x.slug).filter(Boolean));
  const fresh = new Set();

  result.articles.forEach((a, i) => {
    for (const key of ["slug_mn", "slug_en"]) {
      const slug = a[key];
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        throw new Error(`Article ${i + 1}: invalid ${key}: ${slug}`);
      }
      if (used.has(slug)) throw new Error(`Article ${i + 1}: slug already exists: ${slug}`);
      if (fresh.has(slug)) throw new Error(`Duplicate new slug: ${slug}`);
      fresh.add(slug);
    }

    if (a.slug_mn === a.slug_en) throw new Error(`Article ${i + 1}: slugs must differ.`);

    if (!Array.isArray(a.relatedServices) ||
        !a.relatedServices.length ||
        a.relatedServices.some((x) => !ALLOWED_SERVICES.includes(x))) {
      throw new Error(`Article ${i + 1}: invalid relatedServices.`);
    }

    if (!Array.isArray(a.sources) || a.sources.length < 2) {
      throw new Error(`Article ${i + 1}: at least two sources are required.`);
    }

    for (const s of a.sources) {
      const u = new URL(s.url);
      if (!["https:", "http:"].includes(u.protocol)) {
        throw new Error(`Article ${i + 1}: invalid source URL: ${s.url}`);
      }
    }

    if (a.body_mn.length < 3000 || a.body_en.length < 3000) {
      throw new Error(`Article ${i + 1}: body too short.`);
    }

    if (a.body_mn.includes("cite") || a.body_en.includes("cite")) {
      throw new Error(`Article ${i + 1}: citation markers must not be published.`);
    }
  });
}

function q(v) {
  return JSON.stringify(String(v));
}

function sourcesMarkdown(lang, sources) {
  const h = lang === "mn" ? "## Эх сурвалж" : "## Sources";
  return `${h}\n\n${sources.map((s) => `- [${s.title}](${s.url})`).join("\n")}`;
}

function render(a, lang, date) {
  const mn = lang === "mn";
  const title = mn ? a.title_mn : a.title_en;
  const description = mn ? a.description_mn : a.description_en;
  const slug = mn ? a.slug_mn : a.slug_en;
  const translation = mn ? a.slug_en : a.slug_mn;
  const body = (mn ? a.body_mn : a.body_en).trim();
  const related = a.relatedServices.map((x) => `  - ${x}`).join("\n");

  return `---
title: ${q(title)}
description: ${q(description)}
author: itgel-galsanjamts
date: ${date}
updated: ${date}
category: ${q(a.category)}
slug: ${slug}
lang: ${lang}
translation: ${translation}
relatedServices:
${related}
draft: false
---

${body}

${sourcesMarkdown(lang, a.sources)}
`;
}

async function writeFiles(result, date) {
  const made = [];
  for (const a of result.articles) {
    for (const pair of [
      { lang: "mn", slug: a.slug_mn },
      { lang: "en", slug: a.slug_en },
    ]) {
      const target = path.join(CONTENT_DIR, `${pair.slug}.md`);
      try {
        await fs.access(target);
        throw new Error(`Refusing to overwrite existing file: ${target}`);
      } catch (e) {
        if (e?.code !== "ENOENT") throw e;
      }
      await fs.writeFile(target, render(a, pair.lang, date), "utf8");
      made.push(path.relative(process.cwd(), target));
    }
  }
  return made;
}

const date = ulaanbaatarDate();
const existing = await inventory();

console.log(`Publication date: ${date}`);
console.log(`Existing insight files: ${existing.length}`);
console.log(`Generation model: ${MODEL}`);
console.log(`Review model: ${REVIEW_MODEL}`);

const drafts = await generateDrafts(existing, date);
const final = await reviewDrafts(drafts, existing, date);
validate(final, existing);

const made = await writeFiles(final, date);
console.log("Created:");
for (const f of made) console.log(`- ${f}`);
