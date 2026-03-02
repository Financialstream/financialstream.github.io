// Shared header injection + navigation + language switch (static site, GitHub Pages)
// - Injects the standard topbar header on pages that do not already have it (e.g., blog articles).
// - Uses an embedded list of existing site paths to guarantee the EN↔RU switch never routes to a 404.

(function () {
  const EXISTING_PATHS = new Set([
    "/",
    "/blog/",
    "/blog/index.html",
    "/blog/irs-2026-inflation-adjustments.html",
    "/blog/payroll-2026.html",
    "/blog/quickbooks-healthy-books.html",
    "/blog/sales-tax-2026.html",
    "/blog/seattle-area-accountant-bookkeeper.html",
    "/blog/seattle-quickbooks-bookkeeping.html",
    "/blog/seattle-tax-return-guide.html",
    "/blog/washington-bookkeeping-quickbooks.html",
    "/contact/",
    "/contact/index.html",
    "/getting-started.html",
    "/googled57b0ab6edc65ff3.html",
    "/index.html",
    "/privacy-policy.html",
    "/ru/",
    "/ru/blog/",
    "/ru/blog/buhgalter-seattle-quickbooks.html",
    "/ru/blog/index.html",
    "/ru/blog/irs-2026-inflation-adjustments.html",
    "/ru/blog/nalogovaya-deklaraciya-seattle.html",
    "/ru/blog/payroll-2026.html",
    "/ru/blog/quickbooks-healthy-books.html",
    "/ru/blog/sales-tax-2026.html",
    "/ru/blog/seattle-area-accountant-bookkeeper.html",
    "/ru/blog/washington-bookkeeping-quickbooks.html",
    "/ru/contact/",
    "/ru/contact/index.html",
    "/ru/index.html",
    "/ru/kak-nachat.html",
    "/ru/privacy-policy.html",
    "/ru/services/",
    "/ru/services/company-formation.html",
    "/ru/services/financial-consulting.html",
    "/ru/services/index.html",
    "/ru/services/payroll-li-quarterly.html",
    "/ru/services/quickbooks-bookkeeping.html",
    "/ru/services/sales-tax-dor-reporting.html",
    "/ru/services/tax-returns.html",
    "/ru/sms-consent.html",
    "/ru/terms-and-conditions.html",
    "/services/",
    "/services/company-formation.html",
    "/services/financial-consulting.html",
    "/services/index.html",
    "/services/payroll-li-quarterly.html",
    "/services/quickbooks-bookkeeping.html",
    "/services/sales-tax-dor-reporting.html",
    "/services/tax-returns.html",
    "/sms-consent.html",
    "/terms-and-conditions.html"
  ]);

  function normalizePath(pathname) {
    try {
      const u = new URL(pathname, window.location.origin);
      pathname = u.pathname;
    } catch (e) {}
    if (!pathname.startsWith("/")) pathname = "/" + pathname;
    pathname = pathname.replace(/\/{2,}/g, "/");
    // Normalize home
    if (pathname === "/index.html") pathname = "/";
    return pathname;
  }

  function isRu(pathname) {
    return normalizePath(pathname).startsWith("/ru/");
  }

  // Explicit mapping for pages where EN/RU slugs differ.
  const EN_TO_RU = {
    "/blog/seattle-quickbooks-bookkeeping.html": "/ru/blog/buhgalter-seattle-quickbooks.html",
    "/blog/seattle-tax-return-guide.html": "/ru/blog/nalogovaya-deklaraciya-seattle.html",
    "/getting-started.html": "/ru/kak-nachat.html"
  };
  const RU_TO_EN = Object.keys(EN_TO_RU).reduce((acc, en) => {
    acc[EN_TO_RU[en]] = en;
    return acc;
  }, {});

  function exists(pathname) {
    return EXISTING_PATHS.has(normalizePath(pathname));
  }

  function fallback(fromPath, targetLang) {
    const from = normalizePath(fromPath);
    const isBlogArticle = /\/(ru\/)?blog\/.+\.html$/.test(from) && !/\/blog\/index\.html$/.test(from);
    const isServicesArticle = /\/(ru\/)?services\/.+\.html$/.test(from);
    if (targetLang === "ru") {
      if (isBlogArticle) return "/ru/blog/";
      if (isServicesArticle) return "/ru/#services";
      return "/ru/";
    } else {
      if (isBlogArticle) return "/blog/";
      if (isServicesArticle) return "/#services";
      return "/";
    }
  }

  function toRu(pathname) {
    const from = normalizePath(pathname);
    if (isRu(from)) return from;

    let cand;
    if (EN_TO_RU[from]) cand = EN_TO_RU[from];
    else if (from === "/") cand = "/ru/";
    else cand = "/ru" + from;

    if (exists(cand)) return cand;
    return fallback(from, "ru");
  }

  function toEn(pathname) {
    const from = normalizePath(pathname);
    if (!isRu(from)) return from;

    let cand;
    if (RU_TO_EN[from]) cand = RU_TO_EN[from];
    else if (from === "/ru/") cand = "/";
    else cand = from.replace(/^\/ru/, "");

    if (exists(cand)) return cand;
    return fallback(from, "en");
  }

  function navLinks(lang) {
    const prefix = (lang === "ru") ? "/ru" : "";
    return {
      home: (lang === "ru") ? "/ru/" : "/",
      services: (lang === "ru") ? "/ru/#services" : "/#services",
      process: (lang === "ru") ? "/ru/#process" : "/#process",
      faq: (lang === "ru") ? "/ru/#faq" : "/#faq",
      blog: prefix + "/blog/",
      contactAnchor: (lang === "ru") ? "/ru/#contact" : "/#contact",
      contactPage: (lang === "ru") ? "/ru/contact/" : "/contact/"
    };
  }

  function renderTopbar() {
    const pathname = normalizePath(window.location.pathname);
    const lang = isRu(pathname) ? "ru" : "en";
    const nav = navLinks(lang);

    const enUrl = toEn(pathname);
    const ruUrl = toRu(pathname);

    const header = document.createElement("header");
    header.className = "topbar";
    header.innerHTML = `
      <div class="container topbar__inner">
        <a aria-label="Financial Stream LLC" class="brand" href="${nav.home}">
          <img alt="Financial Stream LLC logo" class="brand__logo" src="/assets/logo-horizontal.png"/>
        </a>
        <nav aria-label="Primary" class="nav">
          <a class="nav__link" href="${nav.home}">${lang === "ru" ? "Главная" : "Home"}</a>
          <a class="nav__link" href="${nav.services}">${lang === "ru" ? "Услуги" : "Services"}</a>
          <a class="nav__link" href="${nav.process}">${lang === "ru" ? "Процесс" : "Process"}</a>
          <a class="nav__link" href="${nav.faq}">${lang === "ru" ? "FAQ" : "FAQ"}</a>
          <a class="nav__link" href="${nav.contactAnchor}">${lang === "ru" ? "Контакт" : "Contact"}</a>
        </nav>
        <div class="topbar__actions">
          <div aria-label="Language" class="lang">
            <a aria-current="${lang === "en" ? "page" : "false"}" class="lang__link ${lang === "en" ? "is-active" : ""}" href="${enUrl}">EN</a>
            <a aria-current="${lang === "ru" ? "page" : "false"}" class="lang__link ${lang === "ru" ? "is-active" : ""}" href="${ruUrl}">RU</a>
          </div>
          <a class="btn btn-primary" href="${nav.contactPage}">${lang === "ru" ? "Связаться" : "Contact us"}</a>
        </div>
      </div>
    `;
    return header;
  }

  function mountHeader() {
    // Insert only if there is no existing topbar header.
    if (document.querySelector("header.topbar")) return;

    const placeholder = document.querySelector("[data-shared-header]");
    const header = renderTopbar();
    if (placeholder) {
      placeholder.replaceWith(header);
    } else {
      document.body.insertBefore(header, document.body.firstChild);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountHeader);
  } else {
    mountHeader();
  }
})();
