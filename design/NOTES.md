# Design Notes — Nana · Gain Quest 🍌

A **gamified** take on the monthly weight-gain planner. Self-contained: system fonts only,
no CDN/web-fonts/images (Unicode emoji as icons). Mobile-first app shell (~520 px, bottom
tab bar), **dark-first** hero look + light mode (`prefers-color-scheme`), print mode on Supply.
Every number is derived from `design/seed-data.js` — **no invented data** (XP/levels are
flavour only; all kcal/protein/€ are real).

> Code inlines `design-system.css` + each mockup's markup verbatim. Plain semantic HTML +
> one shared stylesheet — no framework attributes.

## The game loop
Feed **Nana** (the banana mascot) to fill the daily **FUEL** bar (3,000–3,200 kcal), charge the
**POWER** cell (≥110 g protein), stay under the budget cap, and keep the 🔥 streak. Each screen
reframes a planner function as play:
- **Today** → feed the mascot, close the daily boss.
- **Journey** (rotation) → a 6-stop level path.
- **Cards** (recipes) → collectible "fuel cards", editable.
- **Supply** (shopping) → a loot haul with pack chips + print.
- **Quest** (tracker) → 10-cycle checkpoint path + treasury.
- **Setup** (settings) → plan + win conditions.

## Visual system
- **Surfaces:** dark `--bg #0e1016` w/ two radial glows; light = warm `#f1efe6`. Chunky cards, big radii.
- **Colour language:** `--energy` green = calories/fuel (glows in target) · `--power` amber = protein ·
  `--player` violet = XP/level/primary-interactive · `--flame` orange = streak/urgency (a nudge, never red) ·
  `--water` blue · `--banana` yellow brand pop.
- **Type:** system stack; **800–900** weights for the game feel; monospace (`.num`) tabular for all figures.
- **Motion:** mascot `nana-bob` float (respects `prefers-reduced-motion`); button press scale.
- **Icons (emoji):** 🍌 brand/Today · 🗺️ Journey · 🃏 Cards · 🎒 Supply · 🏁 Quest · ⚙️ Setup ·
  🌅☀️🌤️🌙 meal slots · 🛒 fresh · 🫙 pantry · 💧 water · 🔥 streak · ⚡ protein · 🏆 boss · ✦ XP.

## Class → component map (for Code)
- `.app` — 520 px app shell. `.hud` (sticky top) = player HUD: `.hud__brand` + `.hud-chip` (`--lvl/--streak/--xp`).
- `.tabbar` > `.tabbar__inner` > `.tab` (`aria-current="page"` = active) — fixed bottom nav, 6 items.
- `.section-title` (uppercase, `.spacer` for right-side meta).
- **Today:** `.mascot` (`.is-warn` variant) > `.mascot__speech`, `.mascot__buddy`, `.fuelbar` (`__fill`/`__label`/`__target`, `--warn`, `--sm`), `.pills`>`.pill` (`--energy/--power/--player/--flame/--water/--ghost`). `.tiles`>`.tile` mini-gauges. `.feedgrid`>`.feedslot` (`.is-fed`). `.feed-card` (`.is-done`) > `.feed-card__slot/__body/__name/__macros/__ings` + `.feedbtn` (the FEED checkbox; `--sm`). `.streak` boss banner.
- **Journey:** `.journey`>`.stop` (`.is-current`/`.is-done`) > `.stop__rail` (`__node`+`__line`) + `.stop__card` (`__top/__day/__meals/__stats`).
- **Cards:** `.fuelcard` (`__top/__emoji/__id/__name/__rarity/__body/__foot`), `.ing-row` (select+amount+unit+`.ing-stats`+`.ing-remove`) + `.ing-add`; codex table uses `.cell-input` inline-editable cells.
- **Supply:** `.loot-head` (`--fresh/--pantry/--water`, `.price`) + `.loot-list`>`.loot` (`.is-checked`) > `.loot__body/__name/__need` + `.loot__pack` chip + `.loot__price`. `.treasury` (`__row/__grand`) total.
- **Quest:** `.qpath`>`.qstop` (`.is-done`) > `.qstop__rail` (`__node`+`__line`) + `.qstop__body` (`__title/__sub/__tag`) + `.feedbtn--sm` check. `.treasury`.
- **Setup:** `.field`/`.input`/`select.input`/`.field-grid` (`.field--wide`), `.btn` (`--primary/--energy/--ghost/--danger/--sm/--block`), `.btn-row`, `.info` how-it-works.
- Shared: `.panel` (`__pad/__head/__title/__foot`), `.toggle` segmented, `.divider`, `.empty`.

## Component states styled
- **FEED button** (`.feedbtn`): empty "FEED" / hover (energy) / **checked** (green ✓) / active scale / focus ring. `--sm` for lists.
- Fuel bar: in-target (green glow) vs `--warn` (amber). Mascot `.is-warn` background.
- Journey/Quest node: upcoming / **current** (violet ring) / **done** (green, line fills).
- Button: primary / energy / ghost / **destructive** (flame outline — Reset) / hover / active.
- Card row: normal / focused input / remove-hover. Codex row: normal / **editing** (violet tint).
- Loot row: normal / **checked off**. Tab: active. Print: HUD/tabbar/controls hidden, ink-on-white.

## Verified data (from seed-data.js)

### Per-recipe totals — kcal · protein g · € (exact-amount)
- S1 Peanut-Banana 1,016 · 38 · 1.21 — S2 Blueberry-Walnut 1,003 · 37 · 1.98
- **S3 Cocoa-Banana 994 · 38 · 1.37** (7 ingredients — the dense fuel card)
- S4 Berry-Yogurt 925 · 36 · 1.83
- A_mid Avocado-cheese bread 495 · 23 · 1.52 — A_aft Yogurt+walnuts+kiwi 497 · 15 · 1.44
- B_mid Tuna-bean salad 646 · 58 · 2.25 — B_aft PB bread+banana+orange 365 · 12 · 0.67
- C_mid Cheese-honey bread 592 · 29 · 1.67 — C_aft Yogurt+almonds+orange 466 · 15 · 1.29

S3 breakdown: milk 500 ml · oats 70 g · banana 1 · PB 25 g · cocoa 1 tbsp · honey 1 tbsp · almonds 15 g.

### Journey day totals — kcal · protein · €
1: 3,011 · 114 · 6.14 (current) — 2: 3,021 · 145 · 5.49 — 3: 2,985 · 117 · 6.77
4: 3,002 · 115 · 5.53 — 5: 2,939 · 142 · 6.72 — 6: 3,077 · 120 · 6.15. Avg/day 3,006 · 126 · 6.13.

### Supply run (30 days, pack-rounded)
🛒 **Fresh ≈ €134.25** (10 × 3-day runs, per-run rounding): milk 28 L 30.80 · yogurt 10×500 g 17.90 ·
Gouda 8×150 g 10.24 · avocado 15 10.50 · banana 40 8.00 · tuna 10 9.00 · beans 10 9.00 ·
cherry tom 4×250 g 6.00 · orange 20 6.00 · pepper 10 6.00 · bread 3 loaves 4.20 · kiwi 10 3.00.
🫙 **Pantry ≈ €73.15** (2 stock-ups): honey 4×500 g 14.00 · blueberries 2×1 kg 13.96 · walnuts 700 g 9.80 ·
PB 2×1 kg 9.50 · oats 9×500 g 7.29 · mixed berries 1 kg 5.60 · almonds 400 g 5.00 · olive oil 5.00 ·
flaxseed 1.50 · cocoa 1.50.
💧 **Water €39.60** (60 L @ €0.66). **Grand €247 · cap €270 · buffer €23 🏆**. Same on Quest treasury.

### Quest cycles & Setup defaults
10 × 3-day cycles (1–3 … 28–30); cycle 1 "full pantry stock-up", cycle 5 "pantry top-up", cycle 10 "final boss";
mock cycles 1–2 done. Setup: start 2026-06-29 · 30 days · water 2 L/day @ €0.66 · kcal 3000–3200 · protein ≥110 · cap €270.

## Files
- `design/design-system.css` — the system.
- `design/mockups/{today,rotation,recipes,shopping,tracker,settings}.html` — the six screens.
- `design/explorations/today-brainstorms.html` — the 5 gamey directions explored (Today). Chosen: **#4 Feed Nana**.
