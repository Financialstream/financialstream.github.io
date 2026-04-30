(function () {
  const body = document.body;
  const header = document.querySelector('[data-proto-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobilePanel = header ? header.querySelector('.site-header__panel') : null;
  const coarsePointerQuery = window.matchMedia('(pointer: coarse)');
  let lastHeaderScrollY = window.scrollY;

  function syncHeaderState() {
    if (!header) return;
    const currentScrollY = window.scrollY;
    const isScrolled = header.classList.contains('is-scrolled');
    const shouldCompact = isScrolled ? currentScrollY > 8 : currentScrollY > 32;
    const shouldAutoHide = window.innerWidth <= 1024 || coarsePointerQuery.matches;
    const scrollDelta = currentScrollY - lastHeaderScrollY;

    header.classList.toggle('is-scrolled', shouldCompact);

    if (!shouldAutoHide || header.classList.contains('is-open') || currentScrollY < 20) {
      header.classList.remove('is-hidden-mobile');
    } else if (scrollDelta > 10) {
      header.classList.add('is-hidden-mobile');
    } else if (scrollDelta < -10) {
      header.classList.remove('is-hidden-mobile');
    }

    lastHeaderScrollY = Math.max(currentScrollY, 0);
  }

  if (header) {
    syncHeaderState();
    window.addEventListener('scroll', syncHeaderState, { passive: true });
    window.addEventListener('resize', syncHeaderState);
  }

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

    header.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 1024 && header.classList.contains('is-open')) {
          header.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
          if (mobilePanel) {
            mobilePanel.hidden = true;
          }
        }
      });
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

  document.querySelectorAll('[data-answer-desk]').forEach(function (desk) {
    const items = Array.from(desk.querySelectorAll('[data-answer-item]'));
    const panel = desk.querySelector('[data-answer-panel]');
    const openLabel = desk.getAttribute('data-open-label') || 'Open';
    const answerLabel = desk.getAttribute('data-answer-label') || 'Answer →';

    function syncPanel(item, animate) {
      if (!panel || !item) return;
      const content = item.querySelector('[data-answer-content] .answer-panel-content');
      if (!content) return;
      if (animate) {
        panel.classList.add('is-switching');
        window.setTimeout(function () {
          panel.innerHTML = content.outerHTML;
          panel.classList.remove('is-switching');
        }, 120);
      } else {
        panel.innerHTML = content.outerHTML;
      }
    }

    function setActive(item, animate) {
      items.forEach(function (current) {
        const isActive = current === item;
        const trigger = current.querySelector('[data-answer-trigger]');
        const state = current.querySelector('[data-answer-state]');
        const content = current.querySelector('[data-answer-content]');
        current.classList.toggle('is-active', isActive);
        if (trigger) trigger.setAttribute('aria-expanded', String(isActive));
        if (state) state.textContent = isActive ? openLabel : answerLabel;
        if (content) content.hidden = !isActive;
      });
      syncPanel(item, animate);
    }

    items.forEach(function (item) {
      const trigger = item.querySelector('[data-answer-trigger]');
      if (!trigger) return;
      trigger.addEventListener('click', function () {
        setActive(item, true);
      });
    });

    setActive(items.find(function (item) { return item.classList.contains('is-active'); }) || items[0], false);
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
      const gap = window.innerWidth <= 960 ? 0 : 18;
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

    carousel.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        index = Math.max(0, index - 1);
        update();
      }
      if (event.key === 'ArrowRight') {
        index = Math.min(maxIndex(), index + 1);
        update();
      }
    });

    let touchStartX = 0;
    track.addEventListener('touchstart', function (event) {
      touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', function (event) {
      const diff = touchStartX - event.changedTouches[0].clientX;
      if (Math.abs(diff) > 42) {
        index = diff > 0 ? Math.min(maxIndex(), index + 1) : Math.max(0, index - 1);
        update();
      }
    }, { passive: true });

    rebuildDots();
    window.addEventListener('resize', function () {
      rebuildDots();
      update();
    }, { passive: true });
    update();
  });

  (function setupSituationClarity() {
    const roots = document.querySelectorAll('[data-situation-clarity]');
    if (!roots.length) return;

    const copy = {
      en: [
        {
          title: 'Start with the business foundation.',
          text: 'When the basics are clear, bookkeeping, payroll, sales tax, and tax preparation are easier to organize.',
          checks: ['business type and state', 'EIN and registration details', 'business license', 'owner information'],
          service: 'Business setup',
          visual: 'registration',
          label: 'EIN'
        },
        {
          title: 'Your books should reflect the real business picture.',
          text: 'When QuickBooks is not organized, reporting and tax preparation become harder to trust.',
          checks: ['bank and card accounts', 'transaction categories', 'reconciliations', 'cleanup / catch-up scope'],
          service: 'QuickBooks bookkeeping',
          visual: 'books',
          label: 'QB'
        },
        {
          title: 'The key is knowing the state, period, and numbers.',
          text: 'Sales tax becomes clearer when sales, collected tax, and prior filings are organized.',
          checks: ['state and filing frequency', 'sales records', 'taxable / exempt sales', 'prior filings'],
          service: 'Sales tax reporting',
          visual: 'sales',
          label: 'Tax'
        },
        {
          title: 'Payroll filings depend on aligned data.',
          text: 'Quarterly reporting works better when payroll summaries, withholdings, deposits, and period details match.',
          checks: ['payroll summaries', 'employee / contractor context', 'quarter and deadlines', 'payroll accounts'],
          service: 'Payroll & quarterly filing',
          visual: 'payroll',
          label: 'QTR'
        },
        {
          title: 'Tax preparation starts with a complete picture.',
          text: 'The process is smoother when income, expenses, forms, and bookkeeping records are organized first.',
          checks: ['income documents', 'bank statements', 'QuickBooks status', 'prior-year return'],
          service: 'Tax return preparation',
          visual: 'tax',
          label: 'Tax Year'
        },
        {
          title: 'Sometimes the next step matters more than another report.',
          text: 'A financial review helps clarify the picture, identify priorities, and move forward with more confidence.',
          checks: ['income and expenses', 'cash flow', 'recurring payments', 'client questions'],
          service: 'Financial consulting',
          visual: 'review',
          label: 'Review'
        }
      ],
      ru: [
        {
          title: 'Сначала — регистрационная основа бизнеса.',
          text: 'Когда базовые данные понятны, проще выстроить бухгалтерию, payroll, sales tax и подготовку налоговых деклараций.',
          checks: ['тип бизнеса и штат', 'EIN и регистрационные данные', 'business license', 'данные владельцев'],
          service: 'Регистрация бизнеса',
          visual: 'registration',
          label: 'EIN'
        },
        {
          title: 'Учёт должен отражать реальную картину бизнеса.',
          text: 'Если данные в QuickBooks не собраны аккуратно, отчёты и налоговая подготовка становятся менее понятными.',
          checks: ['банковские и карточные счета', 'категории операций', 'сверки', 'cleanup / catch-up объём'],
          service: 'Бухгалтерия в QuickBooks',
          visual: 'books',
          label: 'QB'
        },
        {
          title: 'Главное — понять период, штат и цифры.',
          text: 'Sales tax становится понятнее, когда собраны продажи, суммы налога и информация по прошлым подачам.',
          checks: ['штат и filing frequency', 'sales records', 'taxable / exempt sales', 'прошлые filings'],
          service: 'Отчётность по sales tax',
          visual: 'sales',
          label: 'Tax'
        },
        {
          title: 'Payroll требует согласованности данных и отчётов.',
          text: 'Квартальная отчётность зависит от точных payroll summaries, удержаний, платежей и данных по периоду.',
          checks: ['payroll summaries', 'employees / contractors context', 'квартал и сроки', 'payroll accounts'],
          service: 'Payroll и квартальная отчётность',
          visual: 'payroll',
          label: 'QTR'
        },
        {
          title: 'Налоговая подготовка начинается с полной картины.',
          text: 'Декларация готовится спокойнее, когда доходы, расходы, формы и данные из учёта собраны заранее.',
          checks: ['income documents', 'bank statements', 'статус QuickBooks', 'прошлогодняя декларация'],
          service: 'Подготовка налоговых деклараций',
          visual: 'tax',
          label: 'Tax Year'
        },
        {
          title: 'Иногда важно понять не только цифры, но и следующий шаг.',
          text: 'Финансовый разбор помогает увидеть картину, выделить приоритеты и принять более спокойное решение.',
          checks: ['доходы и расходы', 'cash flow', 'регулярные платежи', 'финансовые вопросы клиента'],
          service: 'Финансовые консультации',
          visual: 'review',
          label: 'Review'
        }
      ]
    };

    const activeLang = (document.documentElement.lang || 'en').toLowerCase().startsWith('ru') ? 'ru' : 'en';
    const mobileQuery = window.matchMedia('(max-width: 960px)');

    function buildVisual(item) {
      const label = item.label || '';
      const base = '<span class="situation-doc situation-doc--back"></span>' +
        '<span class="situation-doc situation-doc--front"></span>' +
        '<span class="situation-cardlet" data-label="' + label + '">' + label + '</span>' +
        '<span class="situation-folder"></span>';

      if (item.visual === 'registration') {
        return base + '<span class="situation-stamp">Filed</span>';
      }

      if (item.visual === 'books') {
        return base +
          '<span class="situation-row situation-row--one"></span>' +
          '<span class="situation-row situation-row--two"></span>' +
          '<span class="situation-row situation-row--three"></span>' +
          '<span class="situation-checkmark"></span>';
      }

      if (item.visual === 'sales') {
        return base +
          '<span class="situation-row situation-row--one"></span>' +
          '<span class="situation-row situation-row--two"></span>' +
          '<span class="situation-period">Period</span>';
      }

      if (item.visual === 'payroll') {
        return base +
          '<span class="situation-tabs"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></span>' +
          '<span class="situation-row situation-row--two"></span>' +
          '<span class="situation-row situation-row--three"></span>' +
          '<span class="situation-period">Due</span>';
      }

      if (item.visual === 'tax') {
        return base +
          '<span class="situation-clip"></span>' +
          '<span class="situation-row situation-row--one"></span>' +
          '<span class="situation-row situation-row--two"></span>';
      }

      if (item.visual === 'review') {
        return base +
          '<span class="situation-lens"></span>' +
          '<span class="situation-note"></span>' +
          '<span class="situation-highlight"></span>';
      }

      return base;
    }

    roots.forEach(function (root) {
      const items = copy[activeLang];
      const layout = root.querySelector('.situation-clarity__layout');
      const selector = root.querySelector('.situation-selector');
      const triggers = Array.from(root.querySelectorAll('[data-situation-trigger]'));
      const panel = root.querySelector('[data-situation-panel]');
      const content = root.querySelector('[data-situation-content]');
      const title = root.querySelector('[data-situation-title]');
      const text = root.querySelector('[data-situation-text]');
      const checks = root.querySelector('[data-situation-checks]');
      const service = root.querySelector('[data-situation-service]');
      const visual = root.querySelector('[data-situation-visual]');
      let activeIndex = 0;

      if (!layout || !selector || !panel || !content || !title || !text || !checks || !service || !visual || !triggers.length) {
        return;
      }

      function placePanel() {
        if (mobileQuery.matches) {
          const activeTrigger = triggers[activeIndex] || triggers[0];
          selector.insertBefore(panel, activeTrigger.nextSibling);
          panel.classList.add('is-mobile-panel');
        } else {
          layout.appendChild(panel);
          panel.classList.remove('is-mobile-panel');
        }
      }

      function render(index, animate) {
        const item = items[index];
        if (!item) return;

        activeIndex = index;
        triggers.forEach(function (trigger, triggerIndex) {
          const active = triggerIndex === index;
          trigger.classList.toggle('is-active', active);
          trigger.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        function updateContent() {
          title.textContent = item.title;
          text.textContent = item.text;
          service.textContent = item.service;
          visual.className = 'situation-visual situation-visual--' + item.visual;
          visual.innerHTML = buildVisual(item);
          checks.innerHTML = '';
          item.checks.forEach(function (check) {
            const chip = document.createElement('span');
            chip.textContent = check;
            checks.appendChild(chip);
          });
          placePanel();
        }

        if (!animate) {
          updateContent();
          return;
        }

        panel.classList.add('is-updating');
        window.setTimeout(function () {
          updateContent();
          window.setTimeout(function () {
            panel.classList.remove('is-updating');
          }, 40);
        }, 140);
      }

      triggers.forEach(function (trigger, index) {
        trigger.addEventListener('click', function () {
          render(index, true);
        });

        trigger.addEventListener('keydown', function (event) {
          if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
            return;
          }
          event.preventDefault();
          const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
          const nextIndex = (index + direction + triggers.length) % triggers.length;
          triggers[nextIndex].focus();
          render(nextIndex, true);
        });
      });

      if (typeof mobileQuery.addEventListener === 'function') {
        mobileQuery.addEventListener('change', placePanel);
      } else if (typeof mobileQuery.addListener === 'function') {
        mobileQuery.addListener(placePanel);
      }

      render(0, false);
    });
  })();

  if (body) {
    body.classList.add('proto-ready');
  }

  (function setupChatbaseWidget() {
    const CHATBOT_ID = 'L9Rqcw-6NJyxiL2AcTbtP';
    const CHATBASE_DOMAIN = 'www.chatbase.co';
    const CHATBASE_SCRIPT_SELECTOR = 'script[data-chatbase-loader="1"]';

    if (!CHATBOT_ID || window.__fsChatbaseBootstrapped) return;
    window.__fsChatbaseBootstrapped = true;

    window.embeddedChatbotConfig = {
      chatbotId: CHATBOT_ID,
      domain: CHATBASE_DOMAIN
    };

    window.embeddedChatbotConfigLower = {
      chatbotId: CHATBOT_ID.toLowerCase(),
      domain: CHATBASE_DOMAIN
    };

    function injectChatbaseStyle() {
      if (document.querySelector('style[data-fs-chatbase-style="1"]')) return;
      const style = document.createElement('style');
      style.setAttribute('data-fs-chatbase-style', '1');
      style.textContent = [
        'iframe[src*="chatbase.co"] {',
        '  right: max(14px, calc(env(safe-area-inset-right, 0px) + 12px)) !important;',
        '  bottom: max(14px, calc(env(safe-area-inset-bottom, 0px) + 12px)) !important;',
        '  z-index: 72 !important;',
        '  border-radius: 16px !important;',
        '  box-shadow: 0 14px 30px rgba(13, 34, 53, 0.2) !important;',
        '}',
        '@media (max-width: 760px) {',
        '  iframe[src*="chatbase.co"] {',
        '    right: max(10px, calc(env(safe-area-inset-right, 0px) + 10px)) !important;',
        '    bottom: max(10px, calc(env(safe-area-inset-bottom, 0px) + 10px)) !important;',
        '  }',
        '}'
      ].join('');
      document.head.appendChild(style);
    }

    function applyChatbasePositioning() {
      document.querySelectorAll('iframe[src*="chatbase.co"]').forEach(function (iframe) {
        iframe.style.setProperty('z-index', '72', 'important');
        iframe.style.setProperty('border-radius', '16px', 'important');
      });
    }

    function injectChatbaseScript() {
      if (document.querySelector(CHATBASE_SCRIPT_SELECTOR)) return;
      const script = document.createElement('script');
      script.src = 'https://www.chatbase.co/embed.min.js';
      script.setAttribute('chatbotId', CHATBOT_ID);
      script.setAttribute('chatbotid', CHATBOT_ID);
      script.setAttribute('data-chatbot-id', CHATBOT_ID);
      script.setAttribute('data-chatbotid', CHATBOT_ID);
      script.setAttribute('data-chatbot-id-lower', CHATBOT_ID.toLowerCase());
      script.setAttribute('domain', CHATBASE_DOMAIN);
      script.setAttribute('data-chatbase-loader', '1');
      script.defer = true;
      script.addEventListener('load', applyChatbasePositioning);
      script.addEventListener('error', function () {
        console.warn('Chatbase embed failed to load.');
      });
      document.body.appendChild(script);
    }

    injectChatbaseStyle();
    if (document.readyState === 'complete') {
      injectChatbaseScript();
    } else {
      window.addEventListener('load', injectChatbaseScript, { once: true });
    }

    const observer = new MutationObserver(function () {
      applyChatbasePositioning();
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    window.addEventListener('resize', applyChatbasePositioning, { passive: true });
    window.setTimeout(applyChatbasePositioning, 900);
  })();

  (function setupProofStripCounters() {
    const strip = document.querySelector('[data-proof-strip]');
    if (!strip) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const counterNodes = Array.from(strip.querySelectorAll('[data-proof-value]'));

    function renderCounter(node, value) {
      const prefix = node.getAttribute('data-proof-prefix') || '';
      const suffix = node.getAttribute('data-proof-suffix') || '';
      node.textContent = prefix + value + suffix;
    }

    function finalizeCounters() {
      counterNodes.forEach(function (node) {
        const target = Number(node.getAttribute('data-proof-value'));
        if (Number.isFinite(target)) {
          renderCounter(node, target);
        }
      });
    }

    function animateCounter(node) {
      if (node.dataset.counted === 'true') return;
      node.dataset.counted = 'true';

      const target = Number(node.getAttribute('data-proof-value'));
      if (!Number.isFinite(target)) return;

      const duration = 1550;
      const startTime = performance.now();

      function frame(now) {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        renderCounter(node, current);
        if (progress < 1) {
          requestAnimationFrame(frame);
        }
      }

      renderCounter(node, 0);
      requestAnimationFrame(frame);
    }

    function startCountUpOnce() {
      if (strip.dataset.countersStarted === 'true') return;
      strip.dataset.countersStarted = 'true';

      if (reduceMotion) {
        finalizeCounters();
        return;
      }

      counterNodes.forEach(function (node) {
        animateCounter(node);
      });
    }

    if (!('IntersectionObserver' in window)) {
      startCountUpOnce();
      return;
    }

    const countObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        startCountUpOnce();
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.34 });

    countObserver.observe(strip);
  })();

  document.querySelectorAll('[data-fs-installation]').forEach(function (hero) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    hero.addEventListener('pointermove', function (event) {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--mx', x.toFixed(2) + '%');
      hero.style.setProperty('--my', y.toFixed(2) + '%');

      const nx = ((event.clientX - rect.left) / rect.width) - 0.5;
      const ny = ((event.clientY - rect.top) / rect.height) - 0.5;
      hero.style.setProperty('--shift-x', (nx * 14).toFixed(2) + 'px');
      hero.style.setProperty('--shift-y', (ny * 12).toFixed(2) + 'px');
    });

    hero.addEventListener('pointerleave', function () {
      hero.style.setProperty('--mx', '50%');
      hero.style.setProperty('--my', '38%');
      hero.style.setProperty('--shift-x', '0px');
      hero.style.setProperty('--shift-y', '0px');
    });
  });

  document.querySelectorAll('[data-approved-hero-visual]').forEach(function (hero) {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktopMotion = window.matchMedia('(min-width: 901px) and (hover: hover) and (pointer: fine)');

    function resetApprovedHeroParallax() {
      hero.style.setProperty('--move-x', '0px');
      hero.style.setProperty('--move-y', '0px');
      hero.style.setProperty('--glow-x', '50%');
      hero.style.setProperty('--glow-y', '52%');
    }

    function handleApprovedHeroPointerMove(event) {
      if (reducedMotion.matches || !desktopMotion.matches) {
        resetApprovedHeroParallax();
        return;
      }

      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const moveX = (x - 0.5) * 8;
      const moveY = (y - 0.5) * 6;

      hero.style.setProperty('--move-x', moveX.toFixed(2) + 'px');
      hero.style.setProperty('--move-y', moveY.toFixed(2) + 'px');
      hero.style.setProperty('--glow-x', (39 + x * 22).toFixed(1) + '%');
      hero.style.setProperty('--glow-y', (40 + y * 24).toFixed(1) + '%');
    }

    hero.addEventListener('pointermove', handleApprovedHeroPointerMove);
    hero.addEventListener('pointerleave', resetApprovedHeroParallax);

    if (typeof reducedMotion.addEventListener === 'function') {
      reducedMotion.addEventListener('change', resetApprovedHeroParallax);
      desktopMotion.addEventListener('change', resetApprovedHeroParallax);
    }
  });

  document.querySelectorAll('[data-config-link]').forEach(function (node) {
    const configKey = node.getAttribute('data-config-link');
    const config = window.FS_CONTACT_CONFIG || {};
    const url = configKey ? (config[configKey] || '') : '';
    const enabledLabel = node.getAttribute('data-enabled-label') || node.textContent || '';
    const disabledLabel = node.getAttribute('data-disabled-label') || node.textContent || '';

    if (!url) {
      node.textContent = disabledLabel;
      node.classList.add('is-disabled');
      node.setAttribute('aria-disabled', 'true');
      if (node.tagName === 'BUTTON') node.disabled = true;
      return;
    }

    const link = document.createElement('a');
    link.className = node.className.replace(/\bis-disabled\b/g, '').trim();
    link.href = url;
    link.rel = 'noopener';
    link.textContent = enabledLabel;
    if (node.classList.contains('contact-card-link')) {
      const arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '→';
      link.appendChild(document.createTextNode(' '));
      link.appendChild(arrow);
    }
    node.replaceWith(link);
  });

  document.querySelectorAll('[data-contact-form]').forEach(function (form) {
    const lang = document.documentElement.lang === 'ru' ? 'ru' : 'en';
    const status = form.querySelector('[data-form-status]');
    const endpoint = form.getAttribute('data-form-endpoint') || (window.FS_CONTACT_CONFIG && window.FS_CONTACT_CONFIG.FORM_ENDPOINT) || '';
    const messages = {
      en: {
        success: 'Thank you. Your message has been sent. We’ll review it and follow up as soon as possible.',
        error: 'Something went wrong. Please try again or contact us by email.',
        notConfigured: 'The website form is temporarily unavailable. Please contact us by email at financialstreamllc@gmail.com.',
        email: 'Please enter a valid email address.',
        minLength: 'Please add a message with at least 12 characters.'
      },
      ru: {
        success: 'Спасибо. Сообщение отправлено. Мы посмотрим обращение и свяжемся с вами при первой возможности.',
        error: 'Что-то пошло не так. Попробуйте ещё раз или напишите нам на email.',
        notConfigured: 'Форма на сайте временно недоступна. Пожалуйста, напишите нам на email: financialstreamllc@gmail.com.',
        email: 'Укажите корректный email.',
        minLength: 'Добавьте сообщение минимум из 12 символов.'
      }
    }[lang];

    function setStatus(text, isError) {
      if (!status) return;
      status.textContent = text;
      status.classList.add('is-visible');
      status.classList.toggle('is-error', Boolean(isError));
    }

    function clearStatus() {
      if (!status) return;
      status.textContent = '';
      status.classList.remove('is-visible', 'is-error');
    }

    function setFieldError(field, message) {
      const wrapper = field.closest('.contact-field');
      const error = wrapper ? wrapper.querySelector('.field-error') : null;
      if (wrapper) wrapper.classList.toggle('has-error', Boolean(message));
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
      if (error) {
        error.textContent = message || '';
        if (!error.id && field.id) error.id = field.id + '-error';
        if (message && error.id) field.setAttribute('aria-describedby', error.id);
        if (!message) field.removeAttribute('aria-describedby');
      }
    }

    function validateField(field) {
      const value = (field.value || '').trim();
      let message = '';
      if (field.required && !value) {
        message = field.getAttribute('data-error') || 'Required field.';
      } else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        message = messages.email;
      } else if (field.name === 'message' && value && value.length < 12) {
        message = messages.minLength;
      }
      setFieldError(field, message);
      return !message;
    }

    const fields = Array.from(form.querySelectorAll('input:not(.hp-field), select, textarea'));
    fields.forEach(function (field) {
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true') validateField(field);
      });
      field.addEventListener('blur', function () {
        validateField(field);
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      clearStatus();

      const honeypot = form.querySelector('.hp-field');
      if (honeypot && honeypot.value) return;

      const valid = fields.every(validateField);
      if (!valid) {
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (!endpoint) {
        setStatus(messages.notConfigured, true);
        return;
      }

      const submit = form.querySelector('[type="submit"]');
      if (submit) submit.disabled = true;

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (response) {
        if (!response.ok) throw new Error('Form submit failed');
        form.reset();
        setStatus(messages.success, false);
      }).catch(function () {
        setStatus(messages.error, true);
      }).finally(function () {
        if (submit) submit.disabled = false;
      });
    });
  });

  document.querySelectorAll('[data-blog-library]').forEach(function (library) {
    const filters = Array.from(library.querySelectorAll('[data-blog-filter]'));
    const cards = Array.from(library.querySelectorAll('.blog-article-card[data-topic]'));
    const monthSections = Array.from(library.querySelectorAll('[data-blog-month]'));

    function applyFilter(topic) {
      filters.forEach(function (button) {
        const isActive = button.getAttribute('data-blog-filter') === topic;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      cards.forEach(function (card) {
        const topics = (card.getAttribute('data-topic') || '').split(/\s+/);
        const matches = topic === 'all' || topics.includes(topic);
        card.classList.toggle('is-hidden', !matches);
      });

      monthSections.forEach(function (section) {
        const visibleCards = section.querySelectorAll('.blog-article-card:not(.is-hidden)');
        section.classList.toggle('is-empty', visibleCards.length === 0);
      });
    }

    filters.forEach(function (button) {
      button.addEventListener('click', function () {
        applyFilter(button.getAttribute('data-blog-filter') || 'all');
      });
    });
  });
})();
