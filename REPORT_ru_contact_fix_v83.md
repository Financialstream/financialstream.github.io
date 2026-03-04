REPORT_ru_contact_fix_v83.md

Goal
- Remove ALL English UI strings from /ru/contact/ form (labels/placeholders/hints/links) and prevent JS i18n fallback from re-inserting EN.

Changed files
1) ru/contact/index.html
2) script.js

Before -> After (required items)

1) Phone label/placeholder
- BEFORE: "Телефон Number (optional)" (label) + placeholder "Телефон Number (optional)"
- AFTER:  "Телефон (необязательно)" (label) + placeholder "Телефон (необязательно)"

2) Message label
- BEFORE: "How can we help?"
- AFTER:  "Чем мы можем помочь?"

3) Hint text under message field
- BEFORE: "The more details you share (state, business type, QuickBooks yes/no), the faster and more accurate our reply."
- AFTER:  "Чем больше деталей вы укажете (штат, тип бизнеса, QuickBooks да/нет), тем быстрее и точнее мы сможем ответить."

4) Textarea placeholder
- BEFORE: "Example: your state, business type, QuickBooks yes/no, what you need help with…"
- AFTER:  "Пример: ваш штат, тип бизнеса, QuickBooks да/нет, с чем нужна помощь…"

5) "Подробнее" block / links
- BEFORE: link text included EN "Terms & Conditions" (href already /ru/terms-and-conditions.html)
- AFTER:  link text "Условия использования" -> /ru/terms-and-conditions.html
  Also verified:
  - /ru/privacy-policy.html
  - /ru/sms-consent.html

6) Hidden site_lang
- Verified: name="site_lang" value="ru" (kept)

7) JS i18n / fallback
- Updated RU form dictionary in script.js so JS sets:
  - messagePlaceholder: "Чем мы можем помочь?"
  - phonePlaceholder: "Телефон (необязательно)"
This prevents EN placeholder from being injected on RU contact.

Notes
- Form endpoint and submit behavior NOT changed.
