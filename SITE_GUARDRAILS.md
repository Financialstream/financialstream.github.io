# Financial Stream LLC — Site Guardrails (do not break)

These are non-negotiable rules for any change to this GitHub Pages static site.

## 1) No regressions
- **ChatBot (Chatbase)** must render on key pages (EN/RU) and must not be duplicated.
- **Forms (Formspree)** must submit (EN/RU) with correct `_next` per locale.
- **Language switch EN↔RU** must **never** route to a missing page/404. Use mapping + existence gate + fallbacks.

## 2) Header rules
- Header must be consistent across pages (either static topbar or injected shared header).
- Header menu item **"Contact"** is an anchor to the main page section:
  - EN: `/#contact`
  - RU: `/ru/#contact`
- Header CTA button label must be consistent:
  - EN: **Contact us** → `/contact/`
  - RU: **Связаться с нами** → `/ru/contact/`

## 3) SEO head hygiene
- One canonical per page, valid HTML in `<head>` (no broken tags, no duplicates).
- Canonical must point to the page itself (no cross-page canonicals).
- Hreflang must not reference non-existent URLs.

## 4) Layout constraints
- Keep forms/CTAs/related blocks inside the standard `.container` width.
- Nothing should overlap the footer on mobile/desktop.

## 5) Minimum checks before shipping
- `node --check script.js`
- `node --check assets/js/shared-header.js`
- Offline scan for missing internal `href/src` targets.
- Smoke test: `/`, `/ru/`, `/contact/`, `/ru/contact/`, `/blog/`, `/ru/blog/`.
