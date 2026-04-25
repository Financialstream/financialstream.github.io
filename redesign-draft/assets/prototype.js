(function () {
  const body = document.body;
  const header = document.querySelector('[data-proto-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobilePanel = header ? header.querySelector('.site-header__panel') : null;

  if (header && menuToggle) {
    if (mobilePanel) {
      mobilePanel.hidden = true;
    }

    menuToggle.addEventListener('click', function () {
      const open = header.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
      if (mobilePanel) {
        mobilePanel.hidden = !open;
      }
    });
  }

  const fadeItems = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeItems.length) {
    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeItems.forEach(function (item) { observer.observe(item); });
  } else {
    fadeItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  document.querySelectorAll('[data-faq]').forEach(function (faqRoot) {
    faqRoot.querySelectorAll('.faq-trigger').forEach(function (button) {
      button.addEventListener('click', function () {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        const panel = document.getElementById(button.getAttribute('aria-controls'));
        button.setAttribute('aria-expanded', String(!expanded));
        if (panel) {
          panel.hidden = expanded;
        }
        const icon = button.querySelector('[data-faq-icon]');
        if (icon) {
          icon.textContent = expanded ? '+' : '-';
        }
      });
    });
  });

  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    const track = carousel.querySelector('[data-carousel-track]');
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const dotsWrap = carousel.querySelector('.review-dots');
    const cards = Array.from(carousel.querySelectorAll('[data-carousel-card]'));
    if (!track || cards.length === 0) return;

    let index = 0;
    let dots = [];

    function itemsPerView() {
      if (window.innerWidth <= 960) return 1;
      if (window.innerWidth <= 1180) return 2;
      return 3;
    }

    function maxIndex() {
      return Math.max(0, cards.length - itemsPerView());
    }

    function rebuildDots() {
      if (!dotsWrap) return;
      const needed = maxIndex() + 1;
      dotsWrap.innerHTML = '';
      dots = [];
      for (let i = 0; i < needed; i += 1) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'review-dot';
        dot.setAttribute('data-carousel-dot', '');
        dot.setAttribute('aria-label', 'Show review set ' + (i + 1));
        dot.addEventListener('click', function () {
          index = Math.min(i, maxIndex());
          update();
        });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      }
    }

    function update() {
      const gap = itemsPerView() === 1 ? 18 : 18;
      const cardWidth = cards[0].getBoundingClientRect().width + gap;
      const safeIndex = Math.min(index, maxIndex());
      index = safeIndex;
      track.style.transform = 'translateX(' + (-safeIndex * cardWidth) + 'px)';
      if (prev) prev.disabled = safeIndex === 0;
      if (next) next.disabled = safeIndex >= maxIndex();
      dots.forEach(function (dot, dotIndex) {
        const active = dotIndex === safeIndex;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-current', active ? 'true' : 'false');
      });
    }

    if (prev) {
      prev.addEventListener('click', function () {
        index = Math.max(0, index - 1);
        update();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        index = Math.min(maxIndex(), index + 1);
        update();
      });
    }

    rebuildDots();
    window.addEventListener('resize', function () {
      rebuildDots();
      update();
    }, { passive: true });
    update();
  });

  if (body) {
    body.classList.add('proto-ready');
  }
})();
