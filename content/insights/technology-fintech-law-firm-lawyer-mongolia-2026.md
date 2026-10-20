---
title: "Who owns the source code and exploitation rights in commissioned software developed in Mongolia?"
description: "An explanation of copyright in commissioned software, access to source code, pre-existing modules, third-party licences, acceptance of deliverables and contract termination under Mongolian law."
author: "itgel-galsanjamts"
date: "2026-10-20"
updated: "2026-10-20"
category: "Technology and Intellectual Property"
slug: "commissioned-software-source-code-copyright-mongolia-2026"
lang: "en"
relatedServices:
  - technology-digital-platforms
  - contracts
  - corporate-commercial
translation: "zahialgat-programm-eh-kod-zohiogchiin-erh-mongol-2026"
draft: false
---

When a company commissions an online platform, mobile application, internal management system or payment-related software, it needs more than a functioning application. It must understand who holds the economic rights in the software, who can access and maintain the source code, and whether the system can be operated by a new supplier after the development contract ends. These are distinct contractual and technical questions. A company may have the right to use or exploit a work yet lack the credentials, documentation or third-party licences needed to exercise that right independently.

Mongolia's [Law on Copyright](https://legalinfo.mn/mn/detail?lawId=16230812154721) expressly includes computer programs among protected works under Article 6.1.10. Article 22 contains specific provisions governing authorship, exploitation rights in software created by employees or on commission, and specified acts by lawful users. Accordingly, the legal analysis should distinguish the author, the holder of the exclusive right to exploit the commissioned work, the owner of infrastructure accounts and the contractual recipient of the deliverables.

## The statutory rule for commissioned software

Article 22.1 of the Law on Copyright identifies the author of a computer program as the individual or individuals who created it. Under Article 22.3, unless the agreement provides otherwise, the employer holds the exclusive right to exploit software created in the course of employment duties; for commissioned computer programs, the customer holds the exclusive exploitation right unless the contract provides otherwise. The provisions distinguish authorship from rights of economic exploitation.

A software developer can remain the individual author while the company commissioning the particular program enjoys its exclusive exploitation rights under the statutory default. The provision does not, however, mean that every pre-existing library, framework or independently owned component incorporated in a delivered system automatically becomes the customer's property. It is necessary to identify which parts were specifically created under the commission and which are subject to prior rights or third-party licences.

For example, an order-management application may combine new bespoke code with the supplier's pre-existing authentication module, open-source packages and a commercial mapping service. The rights arising in the bespoke commissioned component do not automatically rewrite the licence terms governing those other components. The contract should describe the provenance and permitted use of important third-party and pre-existing elements, including restrictions on modification, redistribution and continued operation.

## Exploitation rights do not themselves provide access to source code

The right to exploit a computer program is legally distinct from possession of the repository containing its source code. A customer may have a strong legal position concerning the program developed on commission but still lack access to version history, configuration files, build instructions, administrator accounts or recovery backups. This can prevent another developer from operating, testing or modifying the system without additional expense.

The contract should therefore define the technical deliverables independently of the intellectual-property provisions. Depending on the project, deliverables may include source-code repositories and version history, architecture documentation, configuration and deployment instructions, third-party dependency and licence lists, database schemas, recovery procedures, API documentation and the handover of relevant administrative credentials. This is not merely a matter of convenience: a deliverable that cannot be maintained or deployed may not satisfy the commercial purpose of the development arrangement.

The converse is also true. Hosting a copy of the code on one's own infrastructure does not establish that the holder is entitled to use every copyright-protected component without restriction. Likewise, a right to exploit the commissioned work does not in itself confer ownership of a supplier's personal cloud account or eliminate fees owed to an independent software-licensing provider.

## Acceptance criteria and defective performance

Depending on its substance, a software-development arrangement may fall within the work-contract provisions of Mongolia's [Civil Code](https://legalinfo.mn/mn/detail?lawId=299). Articles 350 and 351 address the duties of the contractor and customer, while Article 352 specifies remedies concerning defective work. Where the result is defective, remedies may include correction at the contractor's expense, correction at the customer's initiative with recovery of expenses in circumstances provided by law, or a proportionate reduction of remuneration.

A meaningful acceptance procedure should test contractual outcomes rather than merely record that an application has been launched. It can cover access controls, transaction logs, resilience and restoration, data export, interfaces, error handling and any product-specific functional requirements. Test records, defect reports, agreed correction periods and evidence of retesting allow both sides to identify the point at which performance was accepted and any outstanding issues.

The customer's entitlement to particular remedies may depend on the circumstances of acceptance, its awareness of deficiencies and the contract terms. Article 352.4 is especially relevant where the customer knowingly accepts defective results. An undifferentiated handover certificate can therefore be less useful than an acceptance record expressly identifying completed tests and any unresolved defects.

## Access and information when the relationship ends

Operational control frequently remains with the development supplier after launch. The supplier may administer a domain, server, cloud tenant, code repository, database or encryption key. When the engagement ends, the customer needs to know which accounts are registered in its name, which permissions must be transferred and how long transition assistance will continue. Contract provisions should address transfer timelines, secure delivery of credentials, continuity of hosting and cooperation with a replacement provider.

If the system processes customers' personal data, the [Law on Personal Data Protection](https://legalinfo.mn/mn/detail?lawId=16390288615991) also remains relevant. Ending a development agreement does not itself authorise the supplier to disclose customer records or use them for a different purpose. Lawful retention, return, deletion and evidence preservation must be considered under the applicable data-protection obligations.

Even where the agreed development fee has been paid in full, failure to hand over documentation, repository access or operational credentials can result in substantial migration costs. The agreement should address ownership and exploitation rights, deliverables and acceptance, account control, and termination assistance as separate, mutually consistent obligations.

## Primary legal sources

- [Law on Copyright, Articles 6 and 22](https://legalinfo.mn/mn/detail?lawId=16230812154721).
- [Civil Code, Articles 350–352](https://legalinfo.mn/mn/detail?lawId=299).
- [Law on Personal Data Protection](https://legalinfo.mn/mn/detail?lawId=16390288615991).
