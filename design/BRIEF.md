# Design Brief — Interactive Weight-Gain Plan

> **For Claude Design.** Produce the visual system + static mockups for a small personal web
> app. Claude Code will rebuild your mockups as a live, data-driven single HTML file, reusing
> your CSS and markup verbatim. Stay self-contained — **no external fonts, no CDN, no images**;
> system font stack only. Mobile-first, with a graceful desktop layout. Light **and** dark mode.

## What the app is
A single-file, offline, `localStorage`-backed tool that turns a static 30-day weight-gain meal
plan into a living one. A 47 y/o user (184 cm, ~60 kg, small appetite) follows a **6-day menu
rotation** (repeats 5× = 30 days) of two calorie-dense shakes + two solid snacks per day,
targeting **3,000–3,200 kcal / ≥110 g protein/day** on a German-discounter budget (**~€247/mo**,
cap **€270**). The app shows today's meals, lets them tick meals off, edit recipes/prices, and
generate shopping lists — all recomputing live.

## Hard constraints (these shape the visuals)
- **Self-contained:** no web fonts, no icon fonts, no CDN, no external images. Use the **system
  font stack** and **Unicode emoji** for iconography (🛒 fresh · 🫙 pantry · 💧 water · ☀️🌤️🌙
  for time-of-day). SVG inlined in the mockup is OK if truly needed, but prefer emoji.
- **Single column, mobile-first**, ~720px max content width, centered on desktop.
- **Dark mode** via `@media (prefers-color-scheme: dark)` — both themes must look intentional.
- **Print mode** for the shopping list (`@media print` hides nav/controls).
- Large tap targets (checkboxes, buttons) — this gets used one-handed in a kitchen / a shop.

## Semantic color language (please define as CSS custom properties)
- **In-target = green** (kcal within 3000–3200; protein ≥110; budget buffer positive).
- **Out-of-target / over budget = amber** (not red — it's a nudge, not an error).
- **Neutral grays** for structure; one **accent** for interactive/active elements.
- Define a token set: `--bg --surface --text --muted --accent --ok --warn --border --radius`
  plus a spacing scale and type scale. Code will inline these.

## Deliverables (write into this repo, under `design/`)
1. `design/mockups/today.html`, `rotation.html`, `recipes.html`, `shopping.html`,
   `tracker.html`, `settings.html` — one **static** mockup per screen. Populate them with the
   **real seed data** in `design/seed-data.js` (numbers below) so density is true to life —
   do **not** use lorem-ipsum or invented values.
2. `design/design-system.css` — the visual system: tokens + component classes
   (`.app`, `.nav`, `.statusbar`, `.card`, `.chip`, `.meal-card`, `.progress`, `.table`,
   `.btn`, `.checkbox`, `.field`, etc.). Light + dark. This is the file Code inlines.
3. `design/NOTES.md` — short rationale + a **class → component map** so Code knows which class
   belongs to which UI element, and a list of the **component states** you styled.

## Use the real data
All seed numbers live in `design/seed-data.js` (ingredients with kcal/protein/price, the 10
recipes, the 6-day rotation, settings). Representative values to show in mockups:
- **Today (Day 1):** total **3,011 kcal · 114 g protein · €6.14**; meals = S1 (1016 kcal),
  Solid A midday (495), Solid A afternoon (497), S2 (1003).
- **A dense recipe card:** S3 has **7 ingredients** (milk 500 ml, oats 70 g, banana 1,
  peanut butter 25 g, cocoa 1 tbsp, honey 1 tbsp, almonds 15 g) → 994 kcal · €1.37.
- **Whole-month shopping list:** dozens of line items across 🛒 Fresh and 🫙 Pantry groups +
  a 💧 water line; grand total ≈ **€247** vs cap **€270** → **€23 buffer**.

---

## The six screens (components to mock)

### 1. Today (`today.html`) — the home screen
- Sticky **nav** (6 tabs: Today · Rotation · Recipes · Shopping · Tracker · Settings; active = Today).
- **Statusbar** strip: localized date + **“Day 1 / 6”** badge.
- **Day summary**: three **chips** — kcal (green, in target), protein (green), € cost — + a
  **progress bar** (meals checked: show e.g. 2 of 4).
- **4 meal cards** (Morning/Midday/Afternoon/Evening), each: time-of-day icon + slot label,
  recipe name, a row of kcal · protein · € , a muted **ingredient line**, and a big **checkbox**.
  Show **mixed states**: 2 checked, 2 unchecked.
- A small **“jump to date”** date control.

### 2. Rotation (`rotation.html`)
- The **6-day × 4-slot table** (rows = Day 1–6; columns = Morning/Midday/Afternoon/Evening;
  cells = recipe names). A trailing **per-row totals** column (kcal/protein/€).
- The **current day's row highlighted**. A caption: “Repeats 5× → 30 days.”

### 3. Recipes (`recipes.html`) — the editable core
- **Recipe cards**: each shows ingredient **rows** as editable controls — a `select`
  (ingredient) + number `input` (amount) + unit label + per-row kcal/€ + a remove ✕; an
  “+ add ingredient” row; a card footer with recipe totals. Mock **S3** (7 rows) for density.
- **Ingredients table**: columns name · unit · kcal/unit · protein/unit · pack · pack € ·
  €/unit (derived) · group — with **inline-editable** numeric cells. Mock ~6 rows + “+ new”.

### 4. Shopping (`shopping.html`)
- **Range controls**: from/to date fields + quick buttons (Next 3 days · This week · Whole
  month) + a **By pack ⇄ By exact amount** toggle.
- Two grouped **tables**: 🛒 **Fresh** and 🫙 **Pantry** (item · needed · buy (packs) · €),
  plus a 💧 **Water** line. Mock the **whole-month** list (long, realistic).
- **Footer**: grand total + **vs €270 cap** with the green **€23 buffer**.
- **Copy** and **Print** buttons. Include the `@media print` styling.

### 5. Tracker (`tracker.html`)
- **10-cycle checklist** (Cycle 1 = days 1–3 … Cycle 10 = days 28–30) as a list of big
  checkboxes; annotate Cycle 1 “+ full pantry stock-up”, Cycle 5 “+ pantry top-up” (each its
  own checkbox). Show some cycles checked.
- **Budget summary** table: Fresh runs · Water · Pantry · **Total €247** · Cap **€270** ·
  **Buffer €23** (green).

### 6. Settings (`settings.html`)
- A **form** of fields: start date, plan days, water L/day, water €/L, kcal target (min/max),
  protein target, budget cap.
- **Data** block: **Export JSON**, **Import JSON**, **Reset to defaults** (the destructive one
  styled distinctly — amber/outline, not loud red).
- A small **“How it works”** info card + the plan's small-appetite tips.

## States to style (so Code has them ready)
- Checkbox: unchecked / checked. Chip & buffer: in-target (green) / out (amber).
- Recipe row: normal / focused input / remove-hover. Button: primary / secondary / destructive.
- Table row: normal / editing. Empty state (e.g. a date with no meals checked). Nav: active tab.

## Anti-goals
- No animations beyond subtle transitions. No external assets. No framework-specific markup
  (no React/Vue attributes) — plain semantic HTML + classes, since Code emits this with a tiny
  vanilla render helper.
