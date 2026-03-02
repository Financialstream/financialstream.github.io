// Shared header injection + navigation + language switch
// This file is intentionally dependency-free and safe for GitHub Pages.

(function () {
  function normalizePath(pathname) {
    // Ensure leading slash, remove query/hash, collapse multiple slashes
    try {
      const u = new URL(pathname, window.location.origin);
      pathname = u.pathname;
    } catch (e) {
      // ignore
    }
    if (!pathname.startsWith("/")) pathname = "/" + pathname;
    pathname = pathname.replace(/\/{2,}/g, "/");
    return pathname;
  }

  function isRuPath(pathname) {
    return normalizePath(pathname).startsWith("/ru/");
  }

  // Map specific pages whose EN/RU slugs differ (blog articles mostly).
  // Keys/values are *pathnames* (no domain).
  const EN_TO_RU = {
    "/blog/seattle-area-bookkeeper-what-to-prepare.html": "/ru/blog/buhgalter-seattle-quickbooks.html",
    "/blog/tax-return-seattle-wa-russian.html": "/ru/blog/nalogovaya-deklaraciya-seattle.html",
    "/blog/washington-quickbooks-checklist-2026.html": "/ru/blog/washington-bookkeeping-quickbooks.html",
    "/blog/quickbooks-clean-books-habits.html": "/ru/blog/quickbooks-healthy-books.html",
    // identical slugs (keep for clarity)
    "/blog/seattle-area-accountant-bookkeeper.html": "/ru/blog/seattle-area-accountant-bookkeeper.html",
    "/blog/sales-tax-2026.html": "/ru/blog/sales-tax-2026.html",
    "/blog/payroll-2026.html": "/ru/blog/payroll-2026.html",
    "/blog/irs-2026-inflation-adjustments.html": "/ru/blog/irs-2026-inflation-adjustments.html"
  };

  const RU_TO_EN = Object.keys(EN_TO_RU).reduce((acc, en) => {
    acc[EN_TO_RU[en]] = en;
    return acc;
  }, {});

  function toRu(pathname) {
    pathname = normalizePath(pathname);
    if (EN_TO_RU[pathname]) return EN_TO_RU[pathname];
    if (pathname === "/") return "/ru/";
    if (pathname.startsWith("/ru/")) return pathname;
    // simple rule: prefix /ru for known mirrored paths
    return "/ru" + pathname;
  }

  function toEn(pathname) {
    pathname = normalizePath(pathname);
    if (RU_TO_EN[pathname]) return RU_TO_EN[pathname];
    if (pathname === "/ru/") return "/";
    if (!pathname.startsWith("/ru/")) return pathname;
    return pathname.replace(/^\/ru/, "");
  }

  function buildNavLinks(lang) {
    const prefix = (lang === "ru") ? "/ru" : "";
    return {
      home: (lang === "ru") ? "/ru/" : "/",
      services: (lang === "ru") ? "/ru/#services" : "/#services",
      process: (lang === "ru") ? "/ru/#process" : "/#process",
      faq: (lang === "ru") ? "/ru/#faq" : "/#faq",
      blog: prefix + "/blog/",
      contact: (lang === "ru") ? "/ru/#contact" : "/#contact"
    };
  }

  function renderHeader() {
    const pathname = normalizePath(window.location.pathname);
    const lang = isRuPath(pathname) ? "ru" : "en";
    const nav = buildNavLinks(lang);

    const enUrl = toEn(pathname);
    const ruUrl = toRu(pathname);

    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="container header-inner">
        <a class="logo" href="${nav.home}" aria-label="Financial Stream">
          <img src="${(lang === "ru") ? "/assets/img/logo.png" : "/assets/img/logo.png"}" alt="Financial Stream" />
        </a>

        <nav class="main-nav" aria-label="Main navigation">
          <a href="${nav.home}">${lang === "ru" ? "Главная" : "Home"}</a>
          <a href="${nav.services}">${lang === "ru" ? "Услуги" : "Services"}</a>
          <a href="${nav.process}">${lang === "ru" ? "Процесс" : "Process"}</a>
          <a href="${nav.faq}">${lang === "ru" ? "Вопросы" : "FAQ"}</a>
          <a href="${nav.contact}">${lang === "ru" ? "Контакты" : "Contact"}</a>
        </nav>

        <div class="header-right">
          <div class="lang-switch" role="group" aria-label="Language switch">
            <a class="${lang === "en" ? "active" : ""}" href="${enUrl}">EN</a>
            <a class="${lang === "ru" ? "active" : ""}" href="${ruUrl}">RU</a>
          </div>
          <a class="cta-btn" href="${nav.contact}">
            ${lang === "ru" ? "Связаться с нами" : "Contact us"}
          </a>
        </div>
      </div>
    `;
    return header;
  }

  function mountHeader() {
    // Only insert if page doesn't already include a header placeholder
    const placeholder = document.querySelector("[data-shared-header]") || document.body;
    const existing = document.querySelector("header.site-header");
    if (existing) return;
    const header = renderHeader();
    if (placeholder === document.body) {
      document.body.insertBefore(header, document.body.firstChild);
    } else {
      placeholder.replaceWith(header);
    }
  }

  // Mount after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountHeader);
  } else {
    mountHeader();
  }
})();
