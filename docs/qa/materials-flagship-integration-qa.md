# Materials and Flagship Integration QA

Branch: `agent/fix-materials-index-and-final-article-integration`

Base main SHA: `a2e78c69f4bcaf52a10dc70b00a6d2b2076c67a3`

## Root cause

The shared reveal system applies the following behavior:

- `.js-enabled .fade-in` starts at `opacity: 0` with a translated position.
- `assets/js/site.js` observes `.fade-in` elements with `IntersectionObserver({ threshold: 0.12 })`.
- Both materials indexes applied `.fade-in` to the entire `.blog-library-section`.

The article library is substantially taller than a mobile viewport. Requiring 12% of that ancestor to intersect can leave the section below the observer threshold on mobile/iOS Safari. The parent remains transparent while its cards continue to occupy layout space, producing visible month headings/spacing and invisible cards.

A second mobile issue came from the materials-page right-side reservation (`--blog-chatbase-lane`) and mobile grid padding, which reduced the usable card/filter width and contributed to clipping.

## Fix

Changed only the EN and RU materials indexes:

- Cards and material sections are visible by default.
- The featured and library sections no longer depend on `.fade-in` for rendering.
- Scoped CSS provides a no-JavaScript / failed-JavaScript visibility fallback.
- Filtered cards still use `.is-hidden`; empty month groups still use `.is-empty`.
- Mobile card grids no longer reserve the right-side lane.
- Filter buttons use an internal horizontal scroller with non-wrapping buttons, touch momentum, scroll padding, and no page-level overflow.
- `prefers-reduced-motion` disables transitions and animations in the materials interface.
- The RU June 2026 card was localized to Russian and aligned with the existing RU article metadata.
- The malformed EN card arrow was corrected.

## Integration verification

### EN

- Homepage contains a visible flagship resource card linking to `/blog/us-bookkeeping-small-business.html`.
- EN materials featured section and August 2026 index contain the EN flagship article only.
- Article language switch links to the RU flagship URL.
- Breadcrumbs link to `/` and `/blog/`.
- Article links to `/services/quickbooks-bookkeeping.html` and `/contact/#structured-request`.
- Sitemap contains the EN article URL.

### RU

- Homepage contains a visible flagship resource card linking to `/ru/blog/buhgalteriya-ssha-malogo-biznesa.html`.
- RU materials featured section and August 2026 index contain the RU flagship article only.
- Article language switch links to the EN flagship URL.
- Breadcrumbs link to `/ru/` and `/ru/blog/`.
- Article links to the RU service/contact paths.
- Sitemap contains the RU article URL.

## SEO verification

Both flagship articles have:

- one H1;
- unique title and meta description;
- self-referencing canonical;
- EN/RU/x-default hreflang set;
- matching `og:title`, `og:description`, `og:url`, and `og:image`;
- `Article` JSON-LD;
- a `Person` author;
- Financial Stream LLC publisher reference;
- breadcrumb structured data;
- no `meta keywords`;
- no `noindex` directive;
- no duplicate canonical;
- no `Financial Times`, `Tatiana`, or immigration references in the flagship files.

`robots.txt` allows crawling and references the canonical sitemap.

## Filter behavior review

The existing filter script:

1. reads `data-blog-filter`;
2. matches against each card's `data-topic` tokens;
3. toggles `.is-hidden` on cards;
4. toggles `.is-empty` on month groups;
5. updates `aria-pressed` and `.is-active` on buttons.

The fix preserves this logic while removing reveal animation as a rendering dependency.

## Viewport matrix

CSS constraints were reviewed for 1440, 1280, 1024, 768, 430, 390, 375, 360, and 320 px. The branch includes explicit mobile containment, `min-width: 0`, internal horizontal filter scrolling, and removal of the mobile right-lane padding.

## Screenshot and runtime limitation

The connected GitHub environment can read/write repository content and create the Draft PR, but it does not expose an interactive browser or a deployed branch-preview URL. Therefore browser-rendered before/after screenshots, JavaScript-disabled browser runs, orientation/back-navigation tests, and console/runtime capture cannot be truthfully marked as executed in this environment.

Preview targets for owner/browser QA:

- Live EN materials: `https://financialstreamllc.com/blog/`
- Live RU materials: `https://financialstreamllc.com/ru/blog/`
- Branch EN source: `https://github.com/Financialstream/financialstream.github.io/blob/agent/fix-materials-index-and-final-article-integration/blog/index.html`
- Branch RU source: `https://github.com/Financialstream/financialstream.github.io/blob/agent/fix-materials-index-and-final-article-integration/ru/blog/index.html`

## Remaining risk

The existing website still presents Payroll / L&I as a service on shared home/service/footer surfaces and includes payroll service URLs in `sitemap.xml`. This predates this branch and is broader than the two-file materials visibility fix. The requirement “absence of Payroll as a claimed service” is therefore not globally satisfied by this PR and requires a separate site-wide service-positioning cleanup or an explicitly expanded scope.
