# Claude Code — Shopify Theme Project

## ⚙️ PROJECT DETAILS (update these for each client)

- **Store name:** Meke Baby
- **Theme:** Horizon
- **Store status:** Live store
- **Custom sections already built:** [list them here, or write "none yet"]
- **Metafield namespaces in use:** [e.g. custom.tagline — or write "none"]
- **Notes:** [anything else Claude should know about this client]

---

## 🔒 SAFETY RULES (keep these the same every project)

- Never push directly to the live/published theme
- Always use a development theme or duplicate for testing
- Never edit config/settings_data.json — this file contains the client's live theme editor settings and must not be overwritten
- Always include `--ignore=config/settings_data.json` with `shopify theme dev` and `shopify theme push` to prevent overwriting Theme Editor settings
- Run `shopify theme check` and fix all errors before any push
- Keep commits small — one change at a time, not big bundles of changes
- Test changes on a real Shopify preview URL, not just localhost

---

## 🟢 NEW BUILD — Claude behaviour (use this section for new stores)

*Delete this section if this is a live store*

- You can build freely and create new files
- Suggest approaches before implementing large changes
- Follow Shopify OS 2.0 structure: assets/, config/, layout/, sections/, snippets/, templates/, locales/
- Use `{% render %}` not `{% include %}`
- Use JSON templates in templates/ folder, not .liquid templates

---

## 🔴 LIVE STORE — Claude behaviour (use this section for live stores with real data)

*Delete this section if this is a new build*

- This store has real customers and live orders — be careful
- **Always ask me before editing any existing file**
- **Always ask me before pushing anything anywhere**
- Only create new files (new snippets/sections) freely — editing existing ones needs my approval first
- If something looks risky, flag it and wait for confirmation
- Suggest changes with explanation before making them

---

## 📐 CODE STANDARDS (keep these the same every project)

- Prefer `{% render %}` over `{% include %}`
- Always check metafields exist before outputting: `{% if product.metafields.custom.key != blank %}`
- Validate all schema JSON — broken schema silently breaks the Theme Editor
- Every new section needs a comment at the top explaining what it does
- Do not create folders outside the standard Shopify theme structure

---

## ✅ WHAT CLAUDE CAN DO WITHOUT ASKING

- Read and analyse any file
- Create brand new snippet or section files
- Suggest code changes and explain them
- Run `shopify theme check`

## ❓ WHAT CLAUDE MUST ASK BEFORE DOING

- Editing any existing section, snippet, or layout file (on live stores)
- Anything involving config/settings_data.json
- Pushing to any theme (dev or live)
- Deleting any file
- Installing new dependencie
