# Financial Stream GitHub Manual Settings

These settings are account- or repository-level controls that are not changed by the presentation branch. Apply them only after the branch content and draft pull request are approved.

## 1. Account profile

Open:

`https://github.com/settings/profile`

Set:

### Name

`Financial Stream LLC`

### Bio

`Bookkeeping, tax preparation, sales tax, business setup, and document support for U.S. small businesses. EN/RU.`

### Website

`https://financialstreamllc.com/`

### Location

`Washington, United States`

### Public email

Leave unpublished unless the business owner explicitly approves a public business email. The primary service path should remain:

`https://financialstreamllc.com/contact/#structured-request`

### Avatar

Use the official Financial Stream square or circular FS mark. Confirm that it remains legible in GitHub’s circular crop and at small sizes.

Do not use:

- a personal photograph;
- ProAI Expert branding;
- a wide horizontal logo with unreadable small text;
- unofficial recreated artwork.

## 2. Create the profile repository

Create a new public repository with the exact name:

`Financialstream`

Required full name:

`Financialstream/Financialstream`

Recommended creation settings:

- Visibility: Public
- Initialize with README: Yes
- Add `.gitignore`: No
- Choose a license: No license

Replace its README with the approved content from:

`docs/GITHUB-PROFILE-README.md`

GitHub shows this README on the account profile because the repository name exactly matches the username.

## 3. Pin the production repository

On `https://github.com/Financialstream`:

1. select **Customize your pins**;
2. select `financialstream.github.io`;
3. save the selection.

Do not pin empty or artificial repositories solely to fill the profile.

## 4. Repository About section

Open:

`https://github.com/Financialstream/financialstream.github.io`

In the **About** panel, select the edit icon and set:

### Description

`Official EN/RU website for Financial Stream LLC — bookkeeping, tax preparation, sales tax, business setup, and document support for U.S. small businesses.`

### Website

`https://financialstreamllc.com/`

### Topics

Add:

- `accounting`
- `bookkeeping`
- `tax-preparation`
- `sales-tax`
- `business-setup`
- `small-business`
- `financial-services`
- `multilingual-website`
- `github-pages`
- `responsive-web-design`
- `english`
- `russian`

Do not add `payroll`, `open-source`, `fintech`, `saas`, or `ai-accounting` unless the project scope materially changes and the new label is verified.

## 5. Repository social preview

Open:

`Repository → Settings → General → Social preview`

Preferred source:

`assets/img/og/financial-stream-og-en-1200x630.png`

Before upload, confirm:

- the image is readable at small preview sizes;
- Financial Stream is the dominant brand;
- no private data is visible;
- no unsupported metrics or claims appear;
- the file meets GitHub’s size and format limits.

If GitHub rejects the existing dimensions, export a dedicated 1280 × 640 PNG based on the same approved artwork.

## 6. Repository features

Open:

`Repository → Settings → General → Features`

Recommended state:

- Issues: Off unless actively used for development work
- Discussions: Off
- Projects: Off unless actively used
- Wiki: Off
- Sponsorships: Off

Keep GitHub Pages and required Actions workflows enabled.

## 7. Verify the public result

After applying settings, verify:

- [ ] profile name is `Financial Stream LLC`;
- [ ] bio is complete and not truncated materially;
- [ ] official website is clickable;
- [ ] avatar is clear in circular crop;
- [ ] profile README appears on `github.com/Financialstream`;
- [ ] `financialstream.github.io` is pinned;
- [ ] About description is visible;
- [ ] website and topics are saved;
- [ ] social preview renders when the repository link is shared;
- [ ] ProAI Expert appears only as subordinate developer attribution;
- [ ] no client or tax data is exposed.
