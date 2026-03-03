# RELEASE_NOTES_v55

## Summary
Fix Contact page layout width to match site container and standardize the **header CTA button label** across all pages.

## Files changed
- `contact/index.html`
- `ru/contact/index.html`
- `getting-started.html`
- `privacy-policy.html`
- `sms-consent.html`
- `terms-and-conditions.html`
- `services/company-formation.html`
- `services/financial-consulting.html`
- `services/payroll-li-quarterly.html`
- `services/quickbooks-bookkeeping.html`
- `services/sales-tax-dor-reporting.html`
- `services/tax-returns.html`
- `ru/kak-nachat.html`
- `ru/privacy-policy.html`
- `ru/sms-consent.html`
- `ru/terms-and-conditions.html`
- `ru/services/company-formation.html`
- `ru/services/financial-consulting.html`
- `ru/services/payroll-li-quarterly.html`
- `ru/services/quickbooks-bookkeeping.html`
- `ru/services/sales-tax-dor-reporting.html`
- `ru/services/tax-returns.html`
- `SITE_GUARDRAILS.md` (new)

## What fixed
1) **Contact page container width**
- Wrapped Contact hub content in the standard `.container`.
- Removed overly-wide `max-width:1400px` from the Contact hub wrapper so the form/cards do not stretch beyond the site layout.

2) **Header CTA label consistency**
- Standardized the header CTA button across all pages:
  - EN: `Contact us` → `/contact/`
  - RU: `Связаться с нами` → `/ru/contact/`
- Removed the dependency on `data-i18n="cta.bookTop"` for the header CTA where it caused the label to become "Book a Free Consultation".

## What intentionally not changed
- No business copy/article text changes.
- No changes to Chatbase loader, Formspree endpoints, calendar/Google Form links.
- No routing changes.

## Tests run (PASS)
- Manual inspection:
  - Contact pages: width aligned with `.container`, no overflow.
  - Header CTA label consistent on: Home, Services pages, Legal pages, Getting started.

## Needs Owner Input
- None for this patch.

## Rollback notes
- Revert the commit/changeset that introduced v55 changes, or restore v54 ZIP.
