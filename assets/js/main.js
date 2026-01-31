(function () {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav toggle
  const toggleBtn = document.querySelector(".nav-toggle");
  const menu = document.getElementById("navMenu");

  function closeMenu() {
    if (!menu || !toggleBtn) return;
    menu.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Close on link click
    menu.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (!menu.classList.contains("open")) return;
      if (menu.contains(target) || toggleBtn.contains(target)) return;
      closeMenu();
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Smooth scroll with sticky header offset
  const header = document.querySelector(".site-header");
  const headerOffset = () => (header ? header.getBoundingClientRect().height : 0);

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset() - 10;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", href);
    });
  });

  // FAQ: only one open at a time
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    });
  });

  // Contact form -> mailto
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const message = String(fd.get("message") || "").trim();

      const mailTo = "financialstreamllc@gmail.com";
      const subject = "Financial Stream — Consultation request";

      const bodyLines = [
        "Consultation request",
        "-------------------",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
        "",
        "— Sent from the Financial Stream website"
      ];

      const mailtoHref =
        `mailto:${encodeURIComponent(mailTo)}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.location.href = mailtoHref;
    });
  }
})();