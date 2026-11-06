---
title: 'Who owns software copyright in Mongolia: employees, contractors and clients'
description: 'Mongolian software copyright law explained: employee-created and commissioned code, exclusive exploitation rights, source-code handover, open-source licences and SaaS.'
author: itgel-galsanjamts
date: '2026-11-06'
updated: '2026-11-06'
category: Technology and Intellectual Property
slug: software-copyright-employee-contractor-client-mongolia-2026
lang: en
relatedServices:
  - technology-digital-platforms
  - contracts
  - corporate-commercial
translation: program-hangamj-zohiogchiin-erh-ajiltan-guitsetgegch-2026
draft: false
---

When a company develops software through its employees or commissions an outside team to build a website, application, API or fintech system, a central question arises: **who holds the copyright-related rights and who controls the source code?** Paying the developer in full or putting the system into production does not necessarily resolve every intellectual-property and operational issue.

Mongolia's [Copyright Law](https://legalinfo.mn/mn/detail/16230812154721) expressly addresses the authorship of computer programs and the exclusive right to exploit programs created in the course of employment or on commission. The analysis must distinguish **who wrote the program, who holds exclusive exploitation rights, who receives the source code, and which third-party licences apply**.

## 1. Authorship is not the same as the right to exploit the program

Under [Article 22.1 of the Copyright Law](https://legalinfo.mn/mn/detail/16230812154721), the author of a computer program may be one or more natural persons who created it. Article 22.2 extends copyright protection to an original computer program as provided by law.

The **exclusive right to exploit a program**, however, need not always remain with the person who wrote the code. The legal consequences can differ for an employee-created program, commissioned software and a pre-existing product licensed by its developer.

Failure to distinguish those categories can lead to two opposite disputes. An employer may believe every piece of code written by an employee belongs to the company, while a developer may seek to reuse business-specific code elsewhere. Equally, a customer may believe it bought the entire software product when the transaction actually granted only limited access to a pre-existing platform.

## 2. Software created in the course of employment

[Article 22.3 of the Copyright Law](https://legalinfo.mn/mn/detail/16230812154721) establishes a default rule: unless the contract provides otherwise, the employer holds the exclusive right to exploit a computer program created by an employee **in the course of performing official duties**. The rule is not that every program written by anyone on a company's payroll automatically becomes the employer's property.

Relevant evidence may include the employment contract, job description, instructions, project scope, development history and use of company resources. A separate question may arise where an employee develops software independently, outside the duties of employment.

For sound internal governance, employment documents and technology policies should identify the scope of company projects, the applicable rights over resulting code and technical documentation, the handover of work products, access credentials and confidentiality obligations. A contractual record can help prevent disagreements over whether particular work fell within the employee's duties.

## 3. Commissioned software: what does the customer receive by default?

The same [Article 22.3](https://legalinfo.mn/mn/detail/16230812154721) provides that, **unless the contract states otherwise, the party commissioning a computer program holds the exclusive right to exploit the commissioned program**. This is an important statutory rule specifically addressing computer software created on commission.

Two qualification questions remain. First, was the product actually **created on commission**, or did the supplier license an existing software product with limited configuration work? The agreement, statement of work, acceptance records and development history may matter. Second, even where the customer holds rights to newly commissioned code, that does not automatically eliminate rights in the supplier's pre-existing modules, third-party components or open-source packages.

A broad clause saying that "all intellectual property transfers to the customer upon full payment" may therefore fail to explain the permissions needed to operate the complete solution. The customer should know which parts are newly created, which are background technology and which depend on licences from other rightsholders.

## 4. Legal rights and practical control of source code are separate

Holding an exclusive exploitation right does not by itself guarantee operational access to the software. The supplier may retain exclusive control over the source-code repository, deployment pipeline, build scripts, administrative accounts or third-party API credentials.

A development agreement should consider specifying, as separate deliverables:

- the source-code package, build scripts, deployment configurations and technical documentation;
- ownership or administration of the source-code repository and handover of access rights;
- a record of supplier background technology, third-party code and open-source components;
- permissions to modify, maintain, further develop and have the program maintained by a replacement provider;
- acceptance criteria, defect-remediation periods and relevant licence warranties; and
- the process for transferring credentials, encryption keys, servers and configurations when the contract ends.

This is a **practical handover checklist**, not a statement that the Copyright Law mandates every item as a separate schedule. Its purpose is to make a legal entitlement usable in a live business environment.

## 5. Open-source and third-party licences must be identified

A modern application may incorporate open-source libraries, paid SDKs, database products, fonts, imagery and APIs, each subject to different licence terms. A contractor cannot grant the customer unrestricted ownership of a third party's intellectual property merely by promising to do so in a development contract.

For example, a commissioned application may contain newly written business-specific code alongside libraries distributed under open-source licences. The default rule for the commissioned program must be considered separately from the rights and obligations attached to those libraries.

A **software bill of materials (SBOM)** or at least a licence and dependency inventory can help identify the components before final acceptance. Agreements may require the developer to disclose third-party materials, avoid unauthorised code and cooperate with the customer in addressing infringement allegations. The extent of any indemnity or licence-replacement obligation should be negotiated in light of the project and the rights the supplier actually controls.

Demanding ownership of all of the supplier's pre-existing technology may be commercially unrealistic. In many projects, a durable licence to necessary background components provides better protection than a sweeping but unenforceable assignment promise.

## 6. Distinguish a software licence from commissioned development

Where a supplier makes its own SaaS platform available to many customers, an individual customer may neither need nor expect to acquire exclusive exploitation rights or the source code. It may need a reliable licence or subscription, continuing access to its data, export rights and assistance with a future migration.

[Article 37.2 of the Copyright Law](https://legalinfo.mn/mn/detail/16230812154721) regulates licence agreements and their form and substantive terms, including the type of licence, rights granted, sublicensing, duration, territory and remuneration. The correct contractual structure depends on whether the parties are licensing a product, commissioning new development or combining both models.

**A SaaS subscription, a commissioned software-development agreement and a transfer of exclusive exploitation rights are not interchangeable transactions.** One commercial arrangement may contain elements of all three, but the contract should distinguish them.

## 7. Protect continuity when the developer leaves

A business needs to be able to operate its software if the developer resigns, the contractor exits or a dispute arises. Copyright wording matters, but so do repository administration, CI/CD pipelines, documentation, cloud accounts, domains, credentials and key management.

For critical systems, final acceptance may be made conditional on verified handover. The parties may consider a source-code escrow arrangement where appropriate, a defined period of transition support and permission for a replacement provider to maintain or adapt the system.

If a payment dispute develops, the parties should already know whether and when service access may be suspended, what happens to the customer's data and what technical handover obligations survive. Leaving these matters unresolved may expose a business to operational lock-in even when its underlying intellectual-property rights are strong.

## 8. Five questions for management

1. Is the work employee-created software, commissioned software or a licence to an existing product?
2. Have the parties varied the statutory default position on exclusive exploitation rights in their contracts?
3. Is there an inventory of background technology, open-source dependencies and third-party licences?
4. Who must hand over source code, repository access and technical records, and at what stage?
5. Can the company continue operating and maintaining the software through another provider when the relationship ends?

## Conclusion

Mongolian law distinguishes **the human author of a computer program** from **the holder of the exclusive right to exploit it**. [Article 22.3 of the Copyright Law](https://legalinfo.mn/mn/detail/16230812154721) establishes default rules for employee-created and commissioned programs, while permitting the parties to agree otherwise. Those rules should be implemented alongside clear provisions on code delivery, background technology, third-party licences and business continuity.

For related disputes involving deliverables, source code, SaaS and technical evidence, see our article on [IT and technology litigation in Mongolia](/insights/technology-lawyer-it-disputes-saas-api-mongolia-2026). Information on [technology and digital-platform law](/services/technology-digital-platforms) and [commercial contract drafting](/services/contracts) is also available.

**Legal sources:** [Copyright Law, Articles 22 and 37](https://legalinfo.mn/mn/detail/16230812154721); [Civil Code, Article 189](https://legalinfo.mn/mn/detail/299).

*This article provides general information based on legislation reviewed as at 5 November 2026. Rights to any specific program must be assessed from the relevant contracts, code history and licence arrangements.*
