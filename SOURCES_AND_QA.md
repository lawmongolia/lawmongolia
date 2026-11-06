# LawMongolia — English publication pack: source and QA notes

Checked: 2026-11-06.

## Official laws referenced

- Civil Code: https://legalinfo.mn/mn/detail/299 — Articles 75–82, 189, 202, 227 and 232 where relevant.
- Copyright Law: https://legalinfo.mn/mn/detail/16230812154721 — Articles 22, 37. In particular, Article 22.3 distinguishes software authored in the course of employment and commissioned software, both subject to contrary contractual agreement.
- Law on Personal Data Protection: https://legalinfo.mn/mn/detail/16390288615991 — Articles 8, 14, 19, 20 and 22. Article 19.4.5 concerns return without retaining a copy and erasure when the processing purpose has been fulfilled; Article 22 concerns incident notification.
- Cybersecurity Law: https://legalinfo.mn/mn/detail/16390365491061 — Articles 17 and 24; applicability is context-dependent.
- Civil Procedure Law: https://legalinfo.mn/mn/detail/302 — Articles 25, 37–38, 44 and 50; in particular Article 44.5 addresses electronic documents.
- Supreme Court material on standard contract terms: https://supremecourt.mn/mn/print?id=48090.

## Editorial and legal checks

- Liability cap vs contractual penalty: the Civil Code's 50% total penalty ceiling is **not** described as a general ceiling for all damages.
- B2B vs consumer standard terms: Article 202.2 is not treated as automatically applicable to all B2B contracts.
- Copyright: natural-person authorship is distinguished from economic/exploitation rights, and newly commissioned work from supplier background IP and third-party dependencies.
- SaaS data processing: statutory duties are distinguished from practical contractual checklists; overseas transfer is not described as categorically banned or permitted.
- Commercial disputes: a creditor's unilateral demand is not described as automatically interrupting limitation, and screenshots are not presented as automatically conclusive evidence.
- No invented engagements, fees, cases or client-identifying information; no promise of search rankings.

## Technical checks and caveats

- All 8 Markdown files carry valid YAML frontmatter fields used by the site's parser (`title`, `description`, `author`, `date`, `updated`, `category`, `slug`, `lang`, `relatedServices`, `translation`, `draft`).
- Two-way translation slugs were checked for consistency.
- Mongolian article body content and old slugs are unchanged; only `translation:` was added.
- English links use the English article/service route scheme; all new URLs require a successful site build after merge.
- **SEO overlap warning:** the new English article on employee/contractor/client software rights overlaps partially with existing indexed article `/insights/commissioned-software-source-code-copyright-mongolia-2026` from 2026-10-20. Keep the old page untouched; assess the distinct search intent and potential cannibalization before publication.
- The articles are drafts ready for editorial/publication review. No claims of proven rankings, live deployment or indexing.
