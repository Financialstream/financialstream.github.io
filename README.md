# Financial Stream LLC — Website (GitHub Pages)

This is a static website intended for GitHub Pages.

## Live URL
https://financialstream.github.io

## Bilingual (EN/RU)
Language switch is in the header. Text is controlled in `script.js` (`i18n` object).

## Form submissions (email delivery)
GitHub Pages is static — it **cannot** send emails by itself.

Right now the forms use a safe fallback:
- On submit, it opens an email draft to `financialstreamllc@gmail.com` with the entered data.

### To receive submissions automatically (recommended)
Pick **one** option:

1) **Formspree** (easiest on GitHub Pages)
   - Create a Formspree form and verify the destination email.
   - Copy your endpoint URL (looks like `https://formspree.io/f/xxxxabcd`).
   - Open `script.js` and set:
     - `const FORM_ENDPOINT = "https://formspree.io/f/xxxxabcd";`
   - Commit + deploy. The form will submit via `fetch()`; if the endpoint is empty, it falls back to opening an email draft.

2) **Netlify Forms** (if you host on Netlify)
   - Deploy the site via Netlify (instead of GitHub Pages).
   - Add Netlify form attributes in HTML and configure notifications.

## Assets
- `assets/logo-horizontal.png` extracted from the approved business card
- `assets/hero-bg.jpg` soft background image aligned with the card/site style

## Deploy to GitHub Pages
1. Create repo named: `financialstream.github.io`
2. Upload all files from this folder to the repo root
3. Settings → Pages → Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`
4. Wait for build → your site is live.

---
If you need a custom domain later, add it in Settings → Pages.
