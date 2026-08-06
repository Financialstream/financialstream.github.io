# 03 — Owner Decisions and Recommended Next Task — Corrected V1.1

## Current immediate sequence

The current first work is not a broad standalone Phase 0. The owner-approved order is:

1. complete the two RU/EN flagship articles;
2. create a premium About / Trust page as a coordinated EN/RU pair using the approved owner photograph;
3. apply only the accessibility, navigation, sitemap and QA fixes required for that release;
4. pause broad Financial Stream redesign until the ProAI Expert website is finished;
5. return later for the evidence-led full redesign.

The detailed sequence is documented in `04_CURRENT_EXECUTION_SEQUENCE.md`.

## Decisions already resolved

### 1. Public service architecture

Financial Stream has six peer service concepts:

1. Bookkeeping / QuickBooks
2. Tax Returns / Tax Preparation
3. Sales Tax / DOR Reporting
4. Payroll / L&I / Quarterly Reporting
5. Business Setup / Company Formation
6. Financial Consulting / Document Review

No service is automatically designated as the single primary service. Page order may vary by user intent and design, but Payroll must not be removed, hidden or demoted and must not automatically be placed first.

### 2. Payroll / L&I

**Resolved:** Payroll / L&I is an active, important Financial Stream service.

Required rule:

- retain dedicated EN/RU service pages;
- retain relevant articles;
- retain navigation, metadata, schema and intake options;
- treat Payroll as a peer service;
- do not ask again whether it should be removed from the offer unless the owner explicitly changes the business model.

### 3. Financial Consulting / Document Review

**Resolved working direction:** retain the combined service concept.

It may include:

- review of financial and business documents;
- explanation of what the documents show;
- practical consultation about accounting, tax-document readiness and possible next steps;
- discussion of expense/document organization and business reporting context.

Guardrail: do not imply legal advice, investment-adviser services or unsupported professional credentials.

## Decisions still required before later broad implementation

### Proof governance

Confirm source and acceptable context for:

- `127+ companies supported`
- `300+ tax filings and declarations prepared`
- each testimonial, name, role and company attribution
- “Remote across the U.S.” operating boundaries

### Contact operating model

Choose one primary lead path and define the role of:

- structured Google Form;
- short Formspree form;
- calendar;
- email;
- phone;
- Chatbase.

Default: structured request is primary; short form is fallback; calendar appears only after context is collected. All six valid service topics, including Payroll, remain available.

## Deferred technical work package

# PHASE 0 — FINANCIAL STREAM ACCESSIBILITY, TRUST AND QA ALIGNMENT V2

This package remains valid, but it is not the immediate first project. During the flagship article/About release, implement only the relevant low-risk items. Defer the broader package until Financial Stream work resumes after ProAI Expert.

## Scope

- Create a new isolated branch from the current approved `main` baseline at execution time.
- Preserve and consistently present all six peer services.
- Preserve Payroll pages, articles, metadata, schema, navigation and intake options.
- Preserve the combined Financial Consulting / Document Review concept and clarify its practical boundaries.
- Fix RU mobile-menu accessible naming.
- Add skip-link support.
- Verify proof metrics/testimonials against the evidence ledger.
- Simplify contact-path governance without deleting valid service choices.
- Add automated no-regression checks for service presence, canonical/hreflang, broken links and accessible menu names.
- Run desktop/mobile, keyboard and form-state QA.
- Open one owner-reviewed PR.

## Explicit exclusions

- No Payroll deletion, hiding, demotion or redirect.
- No automatic promotion of Payroll to the first or dominant service position.
- No artificial split between Financial Consulting and Document Review.
- No broad visual redesign during the current first wave.
- No article merges.
- No mass URL changes.
- No modification of the separately developed flagship branch from unrelated work.
- No unsupported credentials or guarantees.

## Definition of done for the later Phase 0 package

- Six-service architecture is consistent across public copy, metadata, schema and intake.
- Payroll remains a normal peer service throughout the site.
- Financial Consulting / Document Review remains a combined, clearly explained service.
- RU mobile menu has a valid accessible name on all shared templates.
- Skip navigation works by keyboard.
- Proof claims have documented source/approval status.
- Automated regression checks pass.
- No existing canonical production URL is deleted or redirected.
- Owner receives a route/claim before-and-after matrix and QA evidence.
