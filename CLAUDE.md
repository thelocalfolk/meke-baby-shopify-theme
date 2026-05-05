# Claude Code — Shopify Theme Project

## ⚙️ PROJECT DETAILS

- **Store name:** Meke Baby
- **Theme:** Horizon
- **Store status:** Live store
- **GitHub repo connected to:** Development theme (not the live/published theme)
- **Dev theme ID:** 78574584107
- **Custom sections already built:** sections/footer-meke-custom.liquid
- **Metafield namespaces in use:** none yet
- **Notes:** The GitHub repo is connected to a dev theme only. All design changes made directly in the Shopify Theme Editor are stored in config/settings_data.json — this file must never be touched, overwritten, or pulled. Do not edit sections/footer.liquid (native Horizon footer) — the custom footer is sections/footer-meke-custom.liquid.

---

## 🔒 SAFETY RULES

- Never push directly to the live/published theme
- Always push to the development theme only, using the dev theme ID above
- **Always use this exact push command:**
  `shopify theme push --theme 78574584107 --ignore=config/settings_data.json`
- **Always use this exact pull command (if ever needed):**
  `shopify theme pull --theme 78574584107 --ignore=config/settings_data.json`
- Never edit config/settings_data.json — this file stores all Theme Editor design changes and must never be overwritten
- Never remove config/settings_data.json from .gitignore
- Run `shopify theme check` and fix all errors before any push
- Keep commits small — one change at a time, not big bundles of changes
- Test changes on a real Shopify preview URL, not just localhost

---

## 🔴 LIVE STORE — Claude behaviour

- This store has real customers and live orders — be careful
- **Always ask before editing any existing file**
- **Always ask before pushing anything anywhere**
- Only create new files (new snippets/sections) freely — editing existing ones needs approval first
- If something looks risky, flag it and wait for confirmation
- Suggest changes with explanation before making them

---

## 📐 CODE STANDARDS

- Prefer `{% render %}` over `{% include %}`
- Always check metafields exist before outputting: `{% if product.metafields.custom.key != blank %}`
- Validate all schema JSON — broken schema silently breaks the Theme Editor
- Every new section needs a comment at the top explaining what it does
- Do not create folders outside the standard Shopify theme structure
- Use Australian English in all comments, labels, and default copy (colour, customise, optimisation, behaviour)
- Scope all CSS to `#section-{{ section.id }}` to prevent style bleed
- Always use `image_url: width: X` filter — never `.url` or `.src` directly
- Wrap every optional element in a `blank` conditional so empty fields don't render empty markup
- Always include a preset so sections can be added in the Theme Editor

---

## ✅ WHAT CLAUDE CAN DO WITHOUT ASKING

- Read and analyse any file
- Create brand new snippet or section files
- Suggest code changes and explain them
- Run `shopify theme check`

## ❓ WHAT CLAUDE MUST ASK BEFORE DOING

- Editing any existing section, snippet, or layout file
- Anything involving config/settings_data.json
- Pushing or pulling to any theme (dev or live)
- Deleting any file
- Installing new dependencies
