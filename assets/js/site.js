(function () {
  function addHomepageAboutLinks() {
    if (!document.body || !document.body.classList.contains('home-page')) return;

    var isRussian = (document.documentElement.lang || '').toLowerCase().indexOf('ru') === 0;
    var href = isRussian ? '/ru/about/' : '/about/';
    var label = isRussian ? 'О нас' : 'About';

    document.querySelectorAll('.site-header .site-nav').forEach(function (nav) {
      if (nav.querySelector('a[href="' + href + '"]')) return;
      var services = nav.querySelector('a[href="' + (isRussian ? '/ru/services/' : '/services/') + '"]');
      if (!services) return;
      var link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      services.insertAdjacentElement('afterend', link);
    });

    document.querySelectorAll('.footer nav').forEach(function (nav) {
      var title = nav.querySelector('.footer-title');
      if (!title || title.textContent.trim() !== (isRussian ? 'Навигация' : 'Navigation')) return;
      var list = nav.querySelector('.footer-links');
      if (!list || list.querySelector('a[href="' + href + '"]')) return;
      var item = document.createElement('li');
      var link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      item.appendChild(link);
      list.insertBefore(item, list.firstChild);
    });
  }

  addHomepageAboutLinks();

  var core = document.createElement('script');
  core.src = '/assets/js/site-core.js';
  core.async = false;
  document.body.appendChild(core);
})();
