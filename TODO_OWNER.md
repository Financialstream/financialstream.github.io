# TODO_OWNER (post-release)

1) Chatbase security
- In Chatbase settings, confirm **Allowed domains** include:
  - financialstreamllc.com
  - www.financialstreamllc.com (if used)

2) (Optional) Canonical policy decision
- Confirm whether you want canonical domain with **www** or **non-www**, and whether you want a site-wide rule for trailing slashes.
  - Current build uses: **non-www** and folder canonicals where applicable.

3) Live sanity check (2 minutes)
- Open live pages: `/contact/`, `/ru/contact/`, `/blog/`, `/ru/blog/`, `/terms-and-conditions.html`.
- Confirm: no console errors, language switch works, ChatBot visible.
