# Financial Stream LLC Website

This repository contains the static GitHub Pages website for Financial Stream LLC.

Live site: https://financialstreamllc.com/

## Site Structure

The site is bilingual EN/RU with dedicated pages, canonical tags, and hreflang alternates.

Active styling lives in `assets/css/site.css`.

Active behavior lives in `assets/js/site.js`.

## Contact Architecture

Structured request routes:

- `/contact/#structured-request`
- `/ru/contact/#structured-request`

The current structured intake may route to Google Form.

The short message form uses the Formspree endpoint:

`https://formspree.io/f/xwvqekla`

Preserve the existing Formspree fields and behavior unless a future package explicitly scopes a change:

- `data-form-endpoint`
- `_subject`
- `site_lang`
- `_gotcha`
- existing field names
- `sms_consent`
- privacy, terms, and SMS links
- `id="structured-request"`

Chatbase config and script placement must be preserved unless a future package explicitly scopes a Chatbase change.

## Content Guardrails

Do not add fake ratings, fake review counts, guarantees, no-cost consult offers, timed consult offers, fake protected-portal claims, refund promises, penalty-avoidance promises, or audit-defense promises.

## QA

Run the internal stage audit from the non-public repo tooling path:

```bash
bash .github/scripts/audit-stage-1.sh
```

Also run JavaScript syntax checks before shipping behavior changes:

```bash
node --check assets/js/site.js
```
