# 01 — Page Inventory Summary — Corrected V1.1

The authoritative row-level inventory is maintained in Google Sheets:

https://docs.google.com/spreadsheets/d/1K1HbtqEAOvGg384duLnwD7yMwR7Y4p__TKE-xxLP73A/edit

## Controlling service architecture

Financial Stream has six peer service concepts:

1. Bookkeeping / QuickBooks
2. Tax Returns / Tax Preparation
3. Sales Tax / DOR Reporting
4. Payroll / L&I / Quarterly Reporting
5. Business Setup / Company Formation
6. Financial Consulting / Document Review

Payroll is a valid active service and is not a deletion, consolidation or demotion candidate merely because it appears throughout the site. Financial Consulting and Document Review remain a combined complementary service concept.

## Route structure

```text
/
├── Home EN
├── services/ — hub + six service routes
├── start-here/
├── contact/
├── blog/ — index + sixteen articles
├── privacy-policy.html
├── terms-and-conditions.html
├── sms-consent.html
└── ru/
    ├── Home RU
    ├── services/ — mirrored hub + six service routes
    ├── start-here/
    ├── contact/
    ├── blog/ — index + sixteen articles
    └── mirrored legal pages

Outside sitemap:
- fourteen noindex legacy redirect routes
- custom 404
```

## Language structure

- Production languages: EN and RU.
- No Ukrainian production layer was found.
- Sampled core pages use appropriate `html lang`, self-canonical and reciprocal EN/RU hreflang.
- `x-default` generally points to EN.
- UA should be selective and demand/capacity-led rather than an automatic clone of every page.

## Page classes

| Page class | Corrected default direction |
|---|---|
| Homepage EN/RU | Improve hierarchy and proof while preserving all six services |
| Services hub EN/RU | Preserve six-service architecture; improve differentiation |
| Bookkeeping / QuickBooks | Preserve URLs; clarify distinct intent and internal links |
| Tax preparation | Preserve URLs; build an intent map before consolidation |
| Sales Tax / DOR | Preserve and improve |
| Payroll / L&I | Preserve and improve as an active peer service |
| Business Setup | Preserve and improve |
| Financial Consulting / Document Review | Keep combined concept; explain practical scope clearly |
| Contact / Start Here | Simplify funnel while retaining all valid service topics |
| Articles | Cluster and prioritize; do not delete merely because they appear dated |
| Legacy redirects | Keep short term; evaluate hosting/GSC/backlinks before changing |
| Legal pages | Preserve; maintain EN/RU parity and effective-date governance |
| 404 | Preserve; consider bilingual recovery behavior later |

## Strongest current systems/pages

- Contact EN/RU — structured request and sensitive-data warning.
- QuickBooks service EN/RU — practical framing and preparation guidance.
- Payroll / L&I service EN/RU — valid dedicated service path requiring normal iterative improvement, not removal.
- Tax Returns service EN/RU — clear service-to-document path.
- Sales Tax / DOR EN/RU — differentiated state-reporting intent.
- Business Formation EN/RU — useful first-step structure.
- Financial Consulting / Document Review EN/RU — broad complementary concept with strong practical potential.
- Start Here EN/RU — useful triage system.
- Materials indexes EN/RU — organized topic/month discovery.
- Legal policy set EN/RU.

## Highest-risk systems

- RU shared mobile navigation.
- Homepage proof/testimonial governance.
- Contact-path fragmentation.
- Legacy client-side redirect system.
- Static template duplication.
- Potential Bookkeeping/QuickBooks and tax-cluster cannibalization.

## Evidence limits

The audit did not have Search Console page/query data, backlink data, analytics conversion data, CrUX or Lighthouse scores. Therefore:

- no ranking impact is asserted;
- no redirect or merge decision is final;
- no traffic/value estimate is invented;
- no formal WCAG compliance claim is made.
