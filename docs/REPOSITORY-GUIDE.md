# Financial Stream Repository Guide

## Purpose

This repository contains the public production website for Financial Stream LLC. It is a client business repository, not a general open-source project or a public support forum.

## Ownership and roles

- **Business owner:** Financial Stream LLC
- **Website and digital systems:** ProAI Expert
- **Production branch:** `main`
- **Public site:** https://financialstreamllc.com/

Changes to business claims, services, contact details, legal language, consent flows, or public metrics require explicit business approval.

## Core directories

| Path | Purpose |
|---|---|
| `assets/` | Brand files, images, CSS, JavaScript, fonts, icons, and supporting media |
| `blog/` | English practical materials and article hub |
| `contact/` | English contact and structured request experience |
| `services/` | English service pages |
| `ru/` | Russian-localized pages and content structure |
| `.github/` | Repository workflows and validation tooling |
| `docs/` | Public maintenance, integrity, deployment, and GitHub presentation guidance |

## Language architecture

The site uses dedicated English and Russian routes. Localization must preserve meaning and client intent rather than mechanically mirror every sentence.

When adding or materially changing a public page:

1. identify whether both language versions are required;
2. preserve canonical and `hreflang` relationships;
3. verify navigation and internal links in both language structures;
4. verify that untranslated fallback text is not exposed;
5. keep service scope and legal qualifications consistent across languages.

## Page and route rules

- Do not delete or rename public files solely because they appear duplicated.
- Confirm whether a path supports an existing URL, redirect, search result, bookmark, or external link.
- Route cleanup requires a separate inventory and redirect plan.
- Preserve trailing-slash and non-trailing-slash behavior already used by production routes.
- New pages should use existing global navigation, footer, metadata, and structured-data conventions.

## Brand assets

Official Financial Stream assets live under `assets/brand/financial-stream/` and related image directories.

Do not:

- replace the Financial Stream identity with ProAI Expert branding;
- use unofficial logo recreations in production;
- stretch, distort, recolor, or crop the logo in a way that damages legibility;
- add stock-office imagery that implies employees, facilities, or clients that do not exist;
- publish client documents or private screenshots as design assets.

ProAI Expert attribution should remain subordinate to the Financial Stream brand and normally appear in project documentation, repository presentation, or an approved website credit location.

## Content changes

Before publishing a content change, verify:

- the service is actually offered;
- the wording does not create a guarantee;
- the statement is current for the relevant jurisdiction and date;
- the content distinguishes general information from individualized professional advice;
- any metric, credential, testimonial, or business claim can be substantiated;
- English and Russian versions do not materially contradict each other.

See [`CONTENT-INTEGRITY.md`](CONTENT-INTEGRITY.md) for mandatory public-content rules.

## Contact architecture

Primary structured request routes:

- `/contact/#structured-request`
- `/ru/contact/#structured-request`

Do not casually alter form field names, consent language, privacy links, terms links, anti-spam fields, submission endpoints, or analytics hooks. These elements may support operational workflows and compliance requirements outside the visible page layout.

## Change discipline

For non-trivial work:

1. start from the current `main` HEAD;
2. create an `agent/` or feature branch;
3. limit the branch to one coherent scope;
4. avoid unrelated formatting churn;
5. run relevant checks;
6. review the diff and public routes;
7. open a draft pull request;
8. merge only after explicit approval.

## Production safety

Do not commit:

- API keys, tokens, passwords, private webhook credentials, or account recovery data;
- unredacted client documents;
- tax returns or financial statements;
- private phone or address data not already approved for publication;
- temporary exports, local backups, or editor caches;
- generated files whose source and purpose are unknown.

## External contributions

This is not a community contribution repository. Unsolicited pull requests may be closed. GitHub Issues are not a client-service channel.

For Financial Stream service inquiries, use:

https://financialstreamllc.com/contact/#structured-request
