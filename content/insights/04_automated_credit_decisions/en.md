---
title: "Borrowers retain rights to challenge decisions made through automated credit scoring"
description: "Personal-data rights, impact assessments, NHRC recommendations and processor accountability in automated lending decisions in Mongolia."
slug: "automated-credit-scoring-data-subject-rights-mongolia"
lang: "en"
date: "2026-10-14"
category: "Data Protection and Fintech"
author: "LawMongolia"
---

# Borrowers retain rights to challenge decisions made through automated credit scoring

Automated credit decisions are a defining feature of digital lending. A borrower may receive an approval or rejection within seconds of completing an application, without a loan officer manually reviewing every request. That speed does not remove the applicant's rights concerning the information used to reach the decision. Credit scoring involves multiple processes: collecting data, verifying its accuracy, analysing repayment risk, generating a score and applying that score to a lending decision. Each stage needs a legally defensible basis.

Mongolia's [Law on Personal Data Protection](https://legalinfo.mn/mn/detail?lawId=16390288615991) extends beyond the prevention of data leaks. It governs collection, processing, use and security of personal data, the rights of data subjects, risk assessments of specified automated processing, and the use of contractors to process data. These provisions are relevant to the architecture and day-to-day operation of automated consumer-credit products.

## A lawful basis is required for the data used in credit scoring

Article 7 of the Personal Data Protection Law addresses the grounds on which private parties may collect, process and use personal data. Article 8.1 requires consent unless another legal basis applies. Section 8.2 sets out information that must be presented when consent is requested, including the controller's identity, the categories of data involved and the purpose of processing.

Accordingly, a single tap on a general “Continue” button should not be treated as permission to collect any data from any source, retain it indefinitely or repurpose it for unrelated activities. The precise scope of any consent and the applicable statutory exceptions must be established for each processing operation.

A scoring model might use income, banking activity, previous borrowing, device identifiers, location or information provided by an external service. These examples are not a statement that every lender may lawfully access every such category. Each source raises separate questions about permission, necessity, accuracy, external disclosure and, where applicable, financial-sector regulation. Product teams should identify those questions before integrating the relevant data feed.

## Data subjects can challenge decisions resulting from processing

Article 16.1.11 gives a data subject the right to make a complaint or provide an explanation concerning a decision resulting from processing, submit additional information and request that the information be processed again. This goes beyond the narrow situation in which a customer's name or identification number is misspelled.

For example, an outdated income record may cause an application to be refused. A previously settled debt may still appear in an input dataset, or a record may relate to another person with similar identifying details. These are circumstances in which the law's rights concerning accuracy, correction, additional information and renewed processing may become material.

This is not a statutory entitlement to receive credit, nor does a complaint automatically overturn a lender's assessment. The right is procedural: it enables a person to contest processing-derived decisions, give an explanation and seek reconsideration of the relevant information. An operator should establish where such requests are submitted, how they are recorded, who checks the underlying data and how the outcome is communicated.

## Certain automated decisions require an assessment and NHRC involvement

Article 23.1 permits the use of technology that processes personal data without human involvement, while requiring an assessment where the processing generates decisions capable of affecting the data subject's rights, freedoms or legitimate interests, or involves the regular processing of sensitive personal data. Article 23.2 requires that assessment to be submitted to the National Human Rights Commission (NHRC) for recommendations as part of the statutory procedure for using the technology.

These provisions should not be described as a general ban on automated decision-making. Equally, they should not be mischaracterised as an ordinary product licence issued by the NHRC. The statutory mechanism concerns an **assessment and recommendations**. Whether a specific credit engine triggers that mechanism must be evaluated by reference to the actual processing and the potential effect on the individual.

A system that automatically rejects applications without substantive human review deserves particular examination. Where software merely generates a preliminary score for an employee who genuinely makes the decision, the actual scope of human participation must be understood. An approval button that is always clicked without consideration does not necessarily answer that factual question by itself.

## Outsourcing scoring does not eliminate the controller's responsibilities

Many lending businesses acquire scoring software from a specialist vendor, use cloud infrastructure or obtain data through external APIs. The Personal Data Protection Law distinguishes the responsibilities of the party that controls the relevant processing from those of a contractor acting under an agreement. Articles 18 and 19 address controllers and processing carried out by another party under contract.

The parties should therefore document which organisation determines the purposes of processing, which performs the technical steps, the data categories that may be used, authorised access, retention, security controls and the steps to be taken when processing ceases. Contracts should address incident reporting, audit access, correction requests, log retention and the return or deletion of information in accordance with applicable legal requirements.

Articles 22.1 and 22.2 also address incident notifications: a processor must notify the controller promptly upon learning of a relevant breach, and the controller must notify the data subject promptly where the statutory conditions concerning harm are met. A supplier's promise to accept all liability for software failures does not by itself extinguish the controller's statutory obligations.

Cross-border processing requires particular care. Article 14.1 restricts transfers to foreign persons, entities and international organisations unless an applicable legal or consent basis exists. Consequently, a vendor's use of overseas cloud infrastructure calls for an examination of actual data transfers, access rights and processing locations. The technical label “API integration” is not a substitute for that assessment.

## The system must preserve enough evidence to resolve complaints

When a customer challenges an adverse scoring outcome, a response stating only that “the system made the decision” may not permit an effective review. The institution should be able to establish the relevant data categories, their update dates, whether a decision was fully automated, whether additional information was considered and what changed during any subsequent review.

That does not mean the Personal Data Protection Law automatically creates a general right to obtain a lender's source code, proprietary scoring weights or trade secrets. Rather, the institution needs information and records sufficient to give practical effect to the data subject's rights and to investigate alleged errors. This capacity should be designed into the product at the specification stage rather than added only after a dispute.

## Conclusion

Automation improves the speed and scale of lending, but it does not displace the legal rights of the persons whose information is processed. A compliant credit-scoring framework requires lawful collection and use of data, consideration of statutory impact-assessment requirements, effective procedures for challenges and corrections, and properly allocated responsibilities between financial institutions and technology suppliers. A lending model is more resilient when its decision process can be tested and explained within the limits of applicable law.

### Legal sources

- [Law on Personal Data Protection, articles 5, 7–8, 14, 16, 18–19 and 22–23](https://legalinfo.mn/mn/detail?lawId=16390288615991).
- [FRC Resolution No. 278 of 9 July 2026, Regulation on NBFI Lending Activities, section 1.1](https://legalinfo.mn/mn/detail?lawId=17438385368832&showType=1).

*The application of article 23 to a particular system depends on its actual automation, the nature of the decision, the data processed and the rules in force at the time. This article does not treat all credit-scoring implementations as identical.*
