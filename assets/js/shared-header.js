(function(){
  function isRu(){ return window.location.pathname.startsWith('/ru/'); }
  var ru = isRu();
  var path = window.location.pathname || '/';

  // --- Canonicalize index.html in blog paths (GitHub Pages has both URLs)
  // Keep URLs clean to avoid duplicated pages for SEO.
  if(/\/(blog|ru\/blog)\/index\.html$/.test(path)){
    var clean = path.replace(/\/index\.html$/,'/');
    if(window.location.pathname !== clean){
      window.location.replace(clean + window.location.search + window.location.hash);
      return;
    }
  }

  // --- Explicit RU<->EN mapping for pages whose filenames differ across languages.
  // Add new pairs here when you create articles with different slugs in RU vs EN.
  var enToRu = {
    '/blog/seattle-quickbooks-bookkeeping.html': '/ru/blog/buhgalter-seattle-quickbooks.html',
    '/blog/seattle-tax-return-guide.html': '/ru/blog/nalogovaya-deklaraciya-seattle.html'
  };
  var ruToEn = {};
  Object.keys(enToRu).forEach(function(k){ ruToEn[enToRu[k]] = k; });

  function computeLangPaths(){
    var enPath, ruPath;

    // Root edge-cases
    if(path === '/ru' || path === '/ru/'){ return {en:'/', ru:'/ru/'}; }
    if(path === '' || path === '/'){ return {en:'/', ru:'/ru/'}; }

    if(ru){
      enPath = ruToEn[path] || path.replace(/^\/ru\//,'/');
      ruPath = path;
    }else{
      enPath = path;
      ruPath = enToRu[path] || ('/ru' + path);
    }

    return {en:enPath, ru:ruPath};
  }

  var lp = computeLangPaths();

  // Optional: if counterpart is missing, fall back to the same-section index instead of 404.
  // (We still try the mapped URL first.)
  function safeNavigate(target){
    // Same-origin check; GitHub Pages supports HEAD for static files.
    fetch(target, { method:'HEAD', cache:'no-store' })
      .then(function(resp){
        if(resp && resp.ok){
          window.location.href = target;
          return;
        }
        // Fallback rules
        if(target.indexOf('/ru/blog/') === 0) window.location.href = '/ru/blog/';
        else if(target.indexOf('/blog/') === 0) window.location.href = '/blog/';
        else if(target.indexOf('/ru/') === 0) window.location.href = '/ru/';
        else window.location.href = '/';
      })
      .catch(function(){
        // Network/HEAD blocked -> still navigate to target (best effort)
        window.location.href = target;
      });
  }

  var t = ru ? {
    home: 'Главная',
    services: 'Услуги',
    process: 'Процесс',
    faq: 'Вопросы',
    contact: 'Контакты',
    cta: 'Бесплатная консультация',
    aria: 'Financial Stream LLC'
  } : {
    home: 'Home',
    services: 'Services',
    process: 'Process',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Book a Free Consultation',
    aria: 'Financial Stream LLC'
  };

  var headerHTML = `
<header class="topbar">
  <div class="container topbar__inner">
    <a aria-label="${t.aria}" class="brand" href="#top">
      <img alt="Financial Stream LLC logo" class="brand__logo" src="/assets/logo-horizontal.png"/>
    </a>
    <nav aria-label="Primary" class="nav">
      <a class="nav__link" href="${ru?'/ru/':'/'}#top">${t.home}</a>
      <a class="nav__link" href="${ru?'/ru/services/':'/services/'}">${t.services}</a>
      <a class="nav__link" href="${ru?'/ru/process.html':'/process.html'}">${t.process}</a>
      <a class="nav__link" href="${ru?'/ru/faq.html':'/faq.html'}">${t.faq}</a>
      <a class="nav__link" href="#contact">${t.contact}</a>
    </nav>
    <div class="topbar__actions">
      <div class="lang" role="navigation" aria-label="Language">
        <a class="lang__link ${ru?'':'is-active'}" href="${lp.en}" data-lang="en" aria-current="${ru?'false':'page'}">EN</a>
        <a class="lang__link ${ru?'is-active':''}" href="${lp.ru}" data-lang="ru" aria-current="${ru?'page':'false'}">RU</a>
      </div>
      <a class="btn btn--primary" href="#contact">${t.cta}</a>
    </div>
  </div>
</header>`;

  var slots = document.querySelectorAll('[data-shared-header]');
  if(!slots || !slots.length) return;
  slots.forEach(function(el){ el.outerHTML = headerHTML; });

  // Intercept clicks to avoid 404 when a counterpart page doesn't exist.
  var langLinks = document.querySelectorAll('.lang__link');
  langLinks.forEach(function(a){
    a.addEventListener('click', function(e){
      // allow normal navigation for same-page language already active
      if((a.getAttribute('data-lang') === 'ru' && ru) || (a.getAttribute('data-lang') === 'en' && !ru)) return;
      e.preventDefault();
      safeNavigate(a.getAttribute('href'));
    });
  });
})();