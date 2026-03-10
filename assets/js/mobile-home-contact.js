(() => {
  const MOBILE_QUERY = "(max-width: 760px)";

  function remember(node) {
    if (!node || node.dataset.fsMobileRemembered === "1") return;
    node.dataset.fsMobileRemembered = "1";
    node.__fsParent = node.parentNode;
    node.__fsNext = node.nextSibling;
  }

  function restore(node) {
    if (!node || !node.__fsParent) return;
    if (node.__fsNext && node.__fsNext.parentNode === node.__fsParent) {
      node.__fsParent.insertBefore(node, node.__fsNext);
    } else {
      node.__fsParent.appendChild(node);
    }
  }

  function syncHomeContactOrder() {
    const container = document.querySelector("#contact .contact");
    if (!container) return;

    const left = container.querySelector(".contact__left");
    const right = container.querySelector(".contact__right");
    const updates = left ? left.querySelector(".updates-teaser") : null;
    const title = left ? left.querySelector(".section__title") : null;
    const subtitle = left ? left.querySelector(".section__subtitle") : null;
    const grid = left ? left.querySelector(".contact__grid") : null;

    if (!left || !right || !updates || !title || !subtitle || !grid) return;

    [updates, right, title, subtitle, grid].forEach(remember);

    const isMobile = window.matchMedia
      ? window.matchMedia(MOBILE_QUERY).matches
      : window.innerWidth <= 760;

    if (isMobile) {
      container.insertBefore(updates, container.firstChild);
      container.insertBefore(right, updates.nextSibling);
      container.insertBefore(title, right.nextSibling);
      container.insertBefore(subtitle, title.nextSibling);
      container.insertBefore(grid, subtitle.nextSibling);
      return;
    }

    [updates, right, title, subtitle, grid].forEach(restore);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncHomeContactOrder);
  } else {
    syncHomeContactOrder();
  }

  window.addEventListener("resize", syncHomeContactOrder, { passive: true });
  window.addEventListener("pageshow", syncHomeContactOrder);
})();