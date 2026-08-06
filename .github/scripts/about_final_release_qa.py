#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import re
import subprocess
import time
from pathlib import Path
from urllib.parse import urlparse

from bs4 import BeautifulSoup
from PIL import Image
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError

ROOT = Path.cwd()
OUT_ROOT = Path('/tmp/about-final-evidence')
OUT = OUT_ROOT / 'docs/qa/about-release'
SHOTS = OUT / 'screenshots'
OUT.mkdir(parents=True, exist_ok=True)
SHOTS.mkdir(parents=True, exist_ok=True)

BASELINE = 'a0e6a0caa8280db8643a97d905a35c5384a3fe58'
LIVE_BASE = 'https://financialstreamllc.com'
LOCAL_BASE = 'http://127.0.0.1:4173'

FORBIDDEN = re.compile(
    r'Owner\s*&\s*Practicing Accountant|Practicing Accountant|practicing accountant|'
    r'\bCPA\b|\bEA\b|\blicensed\b|\bcertified\b|'
    r'This space can later be replaced|not presented as a personal quotation|'
    r'Позже этот блок можно заменить|Текст не оформлен как личная цитата',
    re.I,
)
PAYROLL = re.compile(r'Payroll|Расч[её]т заработной платы|Зарплатн|Квартальн|Quarterly', re.I)
CONSULTING = re.compile(
    r'Financial Consulting\s*/\s*Document Review|'
    r'Финансовые консультации\s*/\s*Проверка документов|'
    r'Финансовый разбор\s*/\s*документы',
    re.I,
)
THIRD_PARTY_CONSOLE = re.compile(r'chatbase|googleapis|gstatic|doubleclick|favicon', re.I)


def run(*args: str) -> str:
    return subprocess.check_output(list(args), text=True).strip()


def assert_internal_target(href: str) -> None:
    parsed = urlparse(href)
    if parsed.scheme or parsed.netloc or href.startswith('#') or href.startswith('mailto:') or href.startswith('tel:'):
        return
    path = parsed.path
    target = ROOT / path.lstrip('/')
    if path.endswith('/'):
        target = target / 'index.html'
    elif not target.suffix and target.is_dir():
        target = target / 'index.html'
    assert target.exists(), f'Broken internal target: {href} -> {target}'


def static_audit() -> dict:
    report: dict = {
        'status': 'PASS',
        'pages': {},
        'homepage': {},
        'javascript': {},
        'photo': {},
        'seo': {},
        'article_guardrail': {},
    }
    configs = [
        ('about/index.html', 'en', 'https://financialstreamllc.com/about/', '/ru/about/', 'Tetiana Horb', 'A note from the CEO'),
        ('ru/about/index.html', 'ru', 'https://financialstreamllc.com/ru/about/', '/about/', 'Татьяна Горб', 'Слово руководителя'),
    ]
    for file_path, lang, canonical, switch_href, person, note_title in configs:
        text = (ROOT / file_path).read_text(encoding='utf-8')
        soup = BeautifulSoup(text, 'html.parser')
        visible = soup.get_text(' ', strip=True)
        assert soup.html and soup.html.get('lang') == lang
        assert len(soup.find_all('h1')) == 1
        ids = [node['id'] for node in soup.find_all(id=True)]
        assert len(ids) == len(set(ids)), f'Duplicate IDs in {file_path}'
        assert not FORBIDDEN.search(text), f'Forbidden credential/editorial text in {file_path}'
        assert person in visible and 'CEO, Financial Stream LLC' in visible
        assert note_title in visible
        assert len(soup.select('.about-service-card')) == 6
        assert PAYROLL.search(visible), f'Payroll missing in {file_path}'
        assert CONSULTING.search(visible), f'Combined consulting/document review missing in {file_path}'
        assert '127+' in visible and '300+' in visible
        assert soup.find('link', rel='canonical')['href'] == canonical
        alternates = {(x.get('hreflang'), x.get('href')) for x in soup.find_all('link', rel='alternate')}
        assert ('en', 'https://financialstreamllc.com/about/') in alternates
        assert ('ru', 'https://financialstreamllc.com/ru/about/') in alternates
        assert ('x-default', 'https://financialstreamllc.com/about/') in alternates
        assert soup.find('meta', property='og:image')
        assert soup.find('meta', attrs={'name': 'twitter:image'})
        schema_node = soup.find('script', attrs={'type': 'application/ld+json'})
        schema = json.loads(schema_node.string)
        org = schema['mainEntity']
        assert schema['@type'] == 'AboutPage'
        assert org['name'] == 'Financial Stream LLC'
        assert org['areaServed'] == 'US'
        assert org['employee']['name'] == person
        assert org['employee']['jobTitle'] == 'CEO'
        assert org['address']['addressLocality'] == 'Federal Way'
        assert org['availableLanguage'] == ['English', 'Russian']
        portrait = soup.select_one('.about-portrait img')
        assert portrait and portrait.get('width') == '1200' and portrait.get('height') == '1500'
        assert portrait.get('fetchpriority') == 'high' and portrait.get('alt')
        assert all(img.get('alt') is not None for img in soup.find_all('img'))
        assert len(soup.select('.lang-switch')) == 1
        assert soup.select_one('.site-header__inner .lang-switch a')['href'] == switch_href
        assert not soup.select('.site-header__panel .lang-switch')
        assert len(soup.select('header .brand-logo-picture')) == 1
        assert len(soup.select('footer .brand-logo-picture')) == 1
        assert soup.find('script', src=re.compile(r'assets/js/site\.js'))
        assert soup.select_one('.skip-link[href="#main"]')
        toggle = soup.select_one('[data-menu-toggle]')
        assert toggle and toggle.get('aria-expanded') == 'false' and toggle.get('aria-controls')
        for anchor in soup.select('a[href]'):
            assert_internal_target(anchor['href'])
        report['pages'][file_path] = {
            'h1': 1,
            'unique_ids': len(ids),
            'services': 6,
            'language_switches': 1,
            'metadata': 'PASS',
            'schema': 'PASS',
            'internal_links': 'PASS',
        }

    en_home = (ROOT / 'index.html').read_text(encoding='utf-8')
    ru_home = (ROOT / 'ru/index.html').read_text(encoding='utf-8')
    assert en_home.count('href="/about/">About</a>') == 3
    assert ru_home.count('href="/ru/about/">О нас</a>') == 3
    report['homepage'] = {'en_static_about_links': 3, 'ru_static_about_links': 3}

    site_js = ROOT / 'assets/js/site.js'
    assert site_js.exists() and site_js.stat().st_size > 10000
    js_text = site_js.read_text(encoding='utf-8')
    assert 'site-core.js' not in js_text
    assert not (ROOT / 'assets/js/site-core.js').exists()
    report['javascript'] = {
        'site_js_bytes': site_js.stat().st_size,
        'site_core_exists': False,
        'architecture': 'single stable production site.js',
    }

    sitemap = (ROOT / 'sitemap.xml').read_text(encoding='utf-8')
    assert 'https://financialstreamllc.com/about/' in sitemap
    assert 'https://financialstreamllc.com/ru/about/' in sitemap
    report['seo'] = {'sitemap': 'PASS', 'canonical_hreflang_og_twitter_schema': 'PASS'}

    photo = ROOT / 'assets/img/about/tetiana-financial-stream-ceo.webp'
    with Image.open(photo) as image:
        assert image.format == 'WEBP' and image.size == (1200, 1500)
    report['photo'] = {
        'path': str(photo),
        'bytes': photo.stat().st_size,
        'width': 1200,
        'height': 1500,
        'format': 'WEBP',
    }

    changed = run('git', 'diff', '--name-only', f'{BASELINE}..HEAD').splitlines()
    article_files = [
        p for p in changed
        if re.search(r'(^|/)(blog|article|articles)(/|$)|article\.css$', p)
    ]
    assert not article_files, article_files
    report['article_guardrail'] = {
        'baseline': BASELINE,
        'article_files_changed_by_about_release': article_files,
    }
    (OUT / 'static-report.json').write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding='utf-8')
    return report


SIZES = [
    ('1440x1000', 1440, 1000),
    ('1280x900', 1280, 900),
    ('1024x768', 1024, 768),
    ('768x1024', 768, 1024),
    ('430x932', 430, 932),
    ('390x844', 390, 844),
    ('375x812', 375, 812),
    ('360x800', 360, 800),
    ('320x720', 320, 720),
    ('844x390', 844, 390),
    ('932x430', 932, 430),
]


def load_page(browser, base: str, route: str, width: int, height: int):
    page = browser.new_page(viewport={'width': width, 'height': height})
    page_errors: list[str] = []
    console_errors: list[str] = []
    same_origin_failures: list[str] = []
    page.on('pageerror', lambda exc: page_errors.append(str(exc)))
    page.on('console', lambda message: console_errors.append(message.text) if message.type == 'error' else None)

    base_origin = urlparse(base).netloc
    def request_failed(request):
        try:
            if urlparse(request.url).netloc == base_origin:
                same_origin_failures.append(request.url)
        except Exception:
            pass
    page.on('requestfailed', request_failed)

    response = None
    last_error = None
    for attempt in range(10):
        try:
            response = page.goto(base + route, wait_until='domcontentloaded', timeout=30_000)
            page.wait_for_selector('.about-service-card', timeout=10_000)
            break
        except Exception as exc:
            last_error = exc
            if attempt == 9:
                page.close()
                raise
            time.sleep(8)
    page.wait_for_timeout(1800 if base.startswith('https') else 500)
    return page, response, page_errors, console_errors, same_origin_failures, last_error


def browser_audit() -> dict:
    report: dict = {
        'status': 'PASS',
        'local': [],
        'live': [],
        'homepage': [],
        'failures': [],
        'console_errors': [],
        'same_origin_failures': [],
    }
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        for base, live in ((LOCAL_BASE, False), (LIVE_BASE, True)):
            for label, width, height in SIZES:
                for locale in ('en', 'ru'):
                    route = '/about/' if locale == 'en' else '/ru/about/'
                    page, response, page_errors, console_errors, failed, _ = load_page(
                        browser, base, route, width, height
                    )
                    data = page.evaluate('''() => ({
                        scrollWidth: document.documentElement.scrollWidth,
                        innerWidth: innerWidth,
                        h1: document.querySelectorAll('h1').length,
                        services: document.querySelectorAll('.about-service-card').length,
                        languageSwitches: document.querySelectorAll('.lang-switch').length,
                        headerLogos: document.querySelectorAll('header .brand-logo-picture').length,
                        footerLogos: document.querySelectorAll('footer .brand-logo-picture').length,
                        text: document.body.innerText,
                        buttons: [...document.querySelectorAll('.about-hero__actions .btn,.about-cta__card .btn,.menu-toggle,.lang-switch a')].map(el => {
                            const r = el.getBoundingClientRect();
                            return {x:r.x,right:r.right,width:r.width,height:r.height,text:(el.textContent||'').trim()};
                        })
                    })''')
                    overflow_buttons = [
                        button for button in data['buttons']
                        if button['x'] < -1 or button['right'] > width + 1 or button['width'] < 1 or button['height'] < 1
                    ]
                    focus_pass = True
                    menu_pass = True
                    header_behavior = {'tested': False}
                    if width <= 900:
                        page.keyboard.press('Tab')
                        focus_pass = page.evaluate("document.activeElement?.classList.contains('skip-link')")
                        toggle = page.locator('[data-menu-toggle]')
                        toggle.click()
                        menu_pass = (
                            toggle.get_attribute('aria-expanded') == 'true'
                            and page.locator('.site-header__panel').is_visible()
                            and not page.locator('.site-header').evaluate("el => el.classList.contains('is-hidden-mobile')")
                        )
                        toggle.click()
                        page.evaluate("scrollTo(0, Math.min(900, document.body.scrollHeight - 500))")
                        page.wait_for_timeout(500)
                        down = page.locator('.site-header').evaluate(
                            "el => ({hidden:el.classList.contains('is-hidden-mobile'),transform:getComputedStyle(el).transform})"
                        )
                        page.evaluate('scrollTo(0,0)')
                        page.wait_for_timeout(500)
                        up = page.locator('.site-header').evaluate(
                            "el => ({hidden:el.classList.contains('is-hidden-mobile'),transform:getComputedStyle(el).transform})"
                        )
                        header_behavior = {'tested': True, 'down': down, 'up': up}
                    first_party_console = [message for message in console_errors if not THIRD_PARTY_CONSOLE.search(message)]
                    ok = bool(
                        response and response.ok
                        and data['scrollWidth'] <= data['innerWidth'] + 1
                        and data['h1'] == 1
                        and data['services'] == 6
                        and data['languageSwitches'] == 1
                        and data['headerLogos'] == 1
                        and data['footerLogos'] == 1
                        and 'CEO, Financial Stream LLC' in data['text']
                        and PAYROLL.search(data['text'])
                        and CONSULTING.search(data['text'])
                        and not overflow_buttons
                        and focus_pass
                        and menu_pass
                        and not page_errors
                        and not failed
                        and not first_party_console
                    )
                    item = {
                        'base': base,
                        'locale': locale,
                        'viewport': label,
                        'width': width,
                        'height': height,
                        'http_status': response.status if response else None,
                        'ok': ok,
                        'horizontal_overflow_px': data['scrollWidth'] - data['innerWidth'],
                        'h1': data['h1'],
                        'services': data['services'],
                        'language_switches': data['languageSwitches'],
                        'focus_pass': bool(focus_pass),
                        'menu_pass': bool(menu_pass),
                        'header_behavior': header_behavior,
                        'button_overflow': overflow_buttons,
                        'page_errors': page_errors,
                        'same_origin_failures': failed,
                        'first_party_console_errors': first_party_console,
                        'third_party_console_errors': [m for m in console_errors if THIRD_PARTY_CONSOLE.search(m)],
                    }
                    ('live' if live else 'local')
                    report['live' if live else 'local'].append(item)
                    if console_errors:
                        report['console_errors'].extend(
                            {'base': base, 'locale': locale, 'viewport': label, 'message': message}
                            for message in console_errors
                        )
                    if failed:
                        report['same_origin_failures'].extend(
                            {'base': base, 'locale': locale, 'viewport': label, 'url': url}
                            for url in failed
                        )
                    if not ok:
                        report['failures'].append(item)
                    page.close()

        # Required production screenshots.
        captures = [
            ('en', '01-en-about-desktop-1440.png', 1440, 1000, None, False, None),
            ('ru', '02-ru-about-desktop-1440.png', 1440, 1000, None, False, None),
            ('en', '03-en-about-mobile-390.png', 390, 844, None, False, None),
            ('ru', '04-ru-about-mobile-390.png', 390, 844, None, False, None),
            ('ru', '05-ru-about-mobile-320.png', 320, 720, None, False, None),
            ('en', '06-en-about-landscape-844x390.png', 844, 390, None, False, None),
            ('en', '07-mobile-header-390.png', 390, 844, '.site-header', False, None),
            ('en', '08-mobile-menu-open-390.png', 390, 844, '.site-header', True, None),
            ('en', '09-owner-and-ceo-note.png', 1280, 1200, None, False, '.about-intro-grid'),
            ('en', '10-six-services.png', 1280, 1200, '.about-services-grid', False, None),
            ('ru', '11-mobile-footer-390.png', 390, 1200, '.footer', False, '.footer'),
        ]
        for locale, filename, width, height, selector, open_menu, scroll_selector in captures:
            route = '/about/' if locale == 'en' else '/ru/about/'
            page, response, page_errors, console_errors, failed, _ = load_page(
                browser, LIVE_BASE, route, width, height
            )
            assert response and response.ok and not page_errors and not failed
            if open_menu:
                page.locator('[data-menu-toggle]').click()
                assert page.locator('[data-menu-toggle]').get_attribute('aria-expanded') == 'true'
            if scroll_selector:
                page.locator(scroll_selector).scroll_into_view_if_needed()
                page.wait_for_timeout(300)
            target = SHOTS / filename
            if selector:
                page.locator(selector).screenshot(path=str(target))
            else:
                page.screenshot(path=str(target), full_page=False)
            assert target.exists() and target.stat().st_size > 10_000
            page.close()

        # Homepage smoke QA.
        for locale, route, href in (
            ('en', '/', '/about/'),
            ('ru', '/ru/', '/ru/about/'),
        ):
            page = browser.new_page(viewport={'width': 390, 'height': 844})
            page_errors: list[str] = []
            failed: list[str] = []
            page.on('pageerror', lambda exc: page_errors.append(str(exc)))
            page.on('requestfailed', lambda request: failed.append(request.url) if urlparse(request.url).netloc == urlparse(LIVE_BASE).netloc else None)
            response = page.goto(LIVE_BASE + route, wait_until='domcontentloaded', timeout=30_000)
            page.wait_for_timeout(1500)
            data = page.evaluate(
                "href => ({links:document.querySelectorAll(`a[href=\"${href}\"]`).length,sw:document.documentElement.scrollWidth,iw:innerWidth})",
                href,
            )
            toggle = page.locator('[data-menu-toggle]')
            toggle.click()
            expanded = toggle.get_attribute('aria-expanded')
            toggle.click()
            ok = bool(
                response and response.ok
                and data['links'] == 3
                and data['sw'] <= data['iw'] + 1
                and expanded == 'true'
                and not page_errors
                and not failed
            )
            item = {
                'locale': locale,
                'http_status': response.status if response else None,
                'about_links': data['links'],
                'horizontal_overflow_px': data['sw'] - data['iw'],
                'menu_expanded': expanded,
                'page_errors': page_errors,
                'same_origin_failures': failed,
                'ok': ok,
            }
            report['homepage'].append(item)
            if not ok:
                report['failures'].append(item)
            page.close()
        browser.close()

    if report['failures']:
        report['status'] = 'FAIL'
    (OUT / 'browser-report.json').write_text(json.dumps(report, indent=2, ensure_ascii=False), encoding='utf-8')
    assert not report['failures'], f"Browser QA failures: {len(report['failures'])}"
    return report


def write_summary(static: dict, browser: dict) -> None:
    deployment = {
        'id': None,
        'sha': None,
        'ref': None,
        'state': None,
        'environment_url': LIVE_BASE + '/',
    }
    try:
        repository = os.environ['GITHUB_REPOSITORY']
        deployments = json.loads(run('gh', 'api', f'repos/{repository}/deployments?environment=github-pages&per_page=5'))
        if deployments:
            latest = deployments[0]
            deployment.update({'id': latest.get('id'), 'sha': latest.get('sha'), 'ref': latest.get('ref')})
            statuses = json.loads(run('gh', 'api', f"repos/{repository}/deployments/{latest['id']}/statuses?per_page=5"))
            if statuses:
                deployment.update({
                    'state': statuses[0].get('state'),
                    'environment_url': statuses[0].get('environment_url') or deployment['environment_url'],
                })
    except Exception as exc:
        deployment['lookup_error'] = str(exc)

    summary = {
        'status': 'PASS',
        'source_main_sha': os.environ.get('GITHUB_SHA'),
        'qa_run_id': os.environ.get('GITHUB_RUN_ID'),
        'local_viewport_checks_passed': len(browser['local']),
        'live_viewport_checks_passed': len(browser['live']),
        'homepage_smoke_checks_passed': len(browser['homepage']),
        'screenshots_created': len(list(SHOTS.glob('*.png'))),
        'github_pages_deployment': deployment,
    }
    (OUT / 'release-summary.json').write_text(json.dumps(summary, indent=2, ensure_ascii=False), encoding='utf-8')
    photo = static['photo']
    readme = f"""# Final About / Trust Release Evidence

**Status:** PASS

- Source main SHA: `{summary['source_main_sha']}`
- QA workflow run: `{summary['qa_run_id']}`
- Local browser viewport checks: {summary['local_viewport_checks_passed']} PASS
- Live browser viewport checks: {summary['live_viewport_checks_passed']} PASS
- Homepage EN/RU smoke checks: {summary['homepage_smoke_checks_passed']} PASS
- Required screenshots: {summary['screenshots_created']} created
- Photo: {photo['width']} × {photo['height']} {photo['format']}, {photo['bytes']} bytes
- Homepage static About links: EN 3, RU 3
- JavaScript architecture: stable single `assets/js/site.js`; `site-core.js` absent
- Article files changed by the About release: 0
- GitHub Pages deployment state: `{deployment.get('state')}`

## Evidence files

- `static-report.json`
- `browser-report.json`
- `release-summary.json`
- `screenshots/01-en-about-desktop-1440.png`
- `screenshots/02-ru-about-desktop-1440.png`
- `screenshots/03-en-about-mobile-390.png`
- `screenshots/04-ru-about-mobile-390.png`
- `screenshots/05-ru-about-mobile-320.png`
- `screenshots/06-en-about-landscape-844x390.png`
- `screenshots/07-mobile-header-390.png`
- `screenshots/08-mobile-menu-open-390.png`
- `screenshots/09-owner-and-ceo-note.png`
- `screenshots/10-six-services.png`
- `screenshots/11-mobile-footer-390.png`
"""
    (OUT / 'README.md').write_text(readme, encoding='utf-8')


if __name__ == '__main__':
    static_report = static_audit()
    browser_report = browser_audit()
    write_summary(static_report, browser_report)
    print(json.dumps({'static': static_report['status'], 'browser': browser_report['status'], 'output': str(OUT)}, ensure_ascii=False))
