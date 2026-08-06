# Financial Stream Deployment Notes

## Production environment

- Repository: `Financialstream/financialstream.github.io`
- Production branch: `main`
- Public domain: `https://financialstreamllc.com/`
- Hosting: GitHub Pages

A branch or pull request must not be described as deployed unless the production workflow and public site have been verified after merge.

## Pre-merge checks

Run the repository audit when the relevant tooling is available:

```bash
bash .github/scripts/audit-stage-1.sh
```

For JavaScript changes, run:

```bash
node --check assets/js/site.js
```

For presentation-only changes limited to Markdown documentation, verify:

- all internal Markdown links resolve;
- all public website links use HTTPS;
- image paths render in GitHub;
- no production HTML, CSS, JavaScript, form, or routing file changed;
- the branch comparison is limited to the approved scope.

## Contact and consent preservation

Primary structured request anchors:

- `/contact/#structured-request`
- `/ru/contact/#structured-request`

The short-message form currently relies on existing submission behavior and field names. Unless a future task explicitly scopes a form migration, preserve:

- `data-form-endpoint`;
- `_subject`;
- `site_lang`;
- `_gotcha`;
- existing visible field names;
- `sms_consent`;
- privacy, terms, and SMS links;
- `id="structured-request"`.

Do not expose credentials or private webhook information in documentation.

## Chatbase preservation

Chatbase configuration, script placement, and mobile layering must remain unchanged unless the task explicitly includes Chatbase.

When Chatbase changes are approved, verify:

- desktop visibility;
- mobile visibility;
- z-index interaction with sticky controls;
- language behavior;
- privacy and consent implications;
- no obstruction of contact actions.

## SEO and localization preservation

Before merging page or navigation changes, verify:

- canonical URL;
- `hreflang="en"`;
- `hreflang="ru"`;
- `hreflang="x-default"` where used;
- Open Graph URL and image;
- Twitter card metadata;
- organization and service structured data;
- language-switch destinations;
- internal links in both language trees.

## Responsive QA

For visual or layout changes, test at minimum:

- 1440 px desktop;
- 1024 px tablet/desktop transition;
- 768 px tablet;
- 430 px mobile;
- 390 px mobile;
- 375 px mobile;
- 360 px mobile;
- 320 px narrow mobile.

Check:

- horizontal overflow;
- clipped cards or controls;
- header and menu behavior;
- CTA visibility;
- text wrapping;
- image aspect ratios;
- chat bubble and sticky-control overlap;
- form usability.

## Deployment sequence

1. Create a branch from current `main`.
2. Apply one coherent change scope.
3. Run relevant checks.
4. Review the branch comparison.
5. Open a draft pull request.
6. Obtain explicit approval.
7. Merge using the approved repository method.
8. Verify the GitHub Pages workflow.
9. Verify the live domain and affected routes.
10. Record the merge commit and deployment run.

## Rollback

For a defective deployment:

1. identify the exact merge or production commit;
2. determine whether a targeted correction is safer than a full revert;
3. prepare the rollback in a new branch;
4. review affected routes and data flows;
5. merge only after approval;
6. verify the public site after redeployment.

Do not force-push `main` as a normal rollback method.
