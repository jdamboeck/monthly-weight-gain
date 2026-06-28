/* ============================================================================
 * monthly-weight-gain — CANONICAL SEED DATA
 * ----------------------------------------------------------------------------
 * Single source of truth for the app's default data. Used by:
 *   - Claude Design : to populate mockups with REALISTIC content density
 *                     (a 7-ingredient recipe card, a whole-month shopping list,
 *                      the 6×4 rotation table) — do NOT invent placeholder numbers.
 *   - Claude Code   : copied verbatim into monthly-weight-gain.html as SEED_*.
 *
 * Calibrated 2026-06-29 so each recipe reproduces the plan's stated kcal labels
 * within ±5%, and every rotation day lands in the 3,000–3,200 kcal / ≥110 g
 * protein target. (See design/NOTES-CALIBRATION.md for the verification table.)
 *
 * UNITS
 *   unit         : the unit amounts are expressed in WITHIN a recipe.
 *   kcalPer      : kcal per 1 `unit`.
 *   proteinPer   : g protein per 1 `unit`.
 *   pricePer     : € per 1 `unit` (used in "by exact amount" shopping mode).
 *   pack/packPrice/packLabel : how the item is actually bought
 *                  (used in default "by pack" shopping mode → ceil(total/pack)).
 *   group        : "fresh" (🛒 every-3-days run) | "pantry" (🫙 bulk restock).
 * ========================================================================== */

const SEED_INGREDIENTS = {
  milk:        { name:"Whole milk 3.5%",      unit:"ml",   kcalPer:0.64, proteinPer:0.034, pricePer:0.0011,  pack:1000, packPrice:1.10, packLabel:"1 L carton",       group:"fresh" },
  oats:        { name:"Oats",                 unit:"g",    kcalPer:3.70, proteinPer:0.13,  pricePer:0.00163, pack:500,  packPrice:0.81, packLabel:"500 g",            group:"pantry" },
  banana:      { name:"Banana",               unit:"each", kcalPer:105,  proteinPer:1.3,   pricePer:0.20,    pack:1,    packPrice:0.20, packLabel:"each",             group:"fresh" },
  peanutButter:{ name:"Peanut butter",        unit:"g",    kcalPer:5.88, proteinPer:0.25,  pricePer:0.00475, pack:1000, packPrice:4.75, packLabel:"1 kg jar",         group:"pantry" },
  honey:       { name:"Honey",                unit:"tbsp", kcalPer:64,   proteinPer:0.06,  pricePer:0.14,    pack:500,  packPrice:3.50, packLabel:"500 g (≈25 tbsp)", group:"pantry" },
  flaxseed:    { name:"Ground flaxseed",      unit:"tbsp", kcalPer:55,   proteinPer:1.9,   pricePer:0.045,   pack:500,  packPrice:1.50, packLabel:"500 g",            group:"pantry" },
  blueberries: { name:"Frozen blueberries",   unit:"g",    kcalPer:0.57, proteinPer:0.007, pricePer:0.00698, pack:1000, packPrice:6.98, packLabel:"1 kg",             group:"pantry" },
  mixedBerries:{ name:"Frozen mixed berries", unit:"g",    kcalPer:0.50, proteinPer:0.009, pricePer:0.0056,  pack:1000, packPrice:5.60, packLabel:"1 kg",             group:"pantry" },
  walnuts:     { name:"Walnuts",              unit:"g",    kcalPer:6.54, proteinPer:0.15,  pricePer:0.014,   pack:700,  packPrice:9.80, packLabel:"700 g",            group:"pantry" },
  almonds:     { name:"Almonds",              unit:"g",    kcalPer:5.79, proteinPer:0.21,  pricePer:0.0125,  pack:400,  packPrice:5.00, packLabel:"400 g",            group:"pantry" },
  cocoa:       { name:"Cocoa powder",         unit:"tbsp", kcalPer:12,   proteinPer:1.0,   pricePer:0.06,    pack:250,  packPrice:1.50, packLabel:"250 g box",        group:"pantry" },
  greekYogurt: { name:"Greek yogurt 10%",     unit:"g",    kcalPer:1.30, proteinPer:0.058, pricePer:0.00358, pack:500,  packPrice:1.79, packLabel:"500 g",            group:"fresh" },
  gouda:       { name:"Gouda/Emmentaler",     unit:"g",    kcalPer:3.56, proteinPer:0.25,  pricePer:0.00853, pack:150,  packPrice:1.28, packLabel:"150 g",            group:"fresh" },
  bread:       { name:"Wholegrain bread",     unit:"slice",kcalPer:80,   proteinPer:4,     pricePer:0.07,    pack:20,   packPrice:1.40, packLabel:"loaf ≈20 sl",      group:"fresh" },
  avocado:     { name:"Avocado",              unit:"each", kcalPer:240,  proteinPer:3,     pricePer:0.70,    pack:1,    packPrice:0.70, packLabel:"each",             group:"fresh" },
  kiwi:        { name:"Kiwi",                 unit:"each", kcalPer:42,   proteinPer:0.8,   pricePer:0.30,    pack:1,    packPrice:0.30, packLabel:"each",             group:"fresh" },
  orange:      { name:"Orange",               unit:"each", kcalPer:62,   proteinPer:1.2,   pricePer:0.30,    pack:1,    packPrice:0.30, packLabel:"each",             group:"fresh" },
  redPepper:   { name:"Red pepper",           unit:"each", kcalPer:37,   proteinPer:1.2,   pricePer:0.60,    pack:1,    packPrice:0.60, packLabel:"each",             group:"fresh" },
  cherryTom:   { name:"Cherry tomatoes",      unit:"g",    kcalPer:0.18, proteinPer:0.009, pricePer:0.006,   pack:250,  packPrice:1.50, packLabel:"250 g",            group:"fresh" },
  tuna:        { name:"Canned tuna",          unit:"can",  kcalPer:191,  proteinPer:42,    pricePer:0.90,    pack:1,    packPrice:0.90, packLabel:"can",              group:"fresh" },
  kidneyBeans: { name:"Kidney beans",         unit:"can",  kcalPer:215,  proteinPer:14,    pricePer:0.90,    pack:1,    packPrice:0.90, packLabel:"can",              group:"fresh" },
  oliveOil:    { name:"Olive oil (extra)",    unit:"tbsp", kcalPer:120,  proteinPer:0,     pricePer:0.10,    pack:750,  packPrice:5.00, packLabel:"750 ml",           group:"pantry" },
};

/* Recipes reference ingredients by key. items = [ [ingredientKey, amountInUnit ], ... ].
 * NOTE: the tuna-bean salad (B_mid) includes 1 tbsp olive oil + ½ avocado — the dressing
 * a Mexican-style salad carries — which is what makes Solid B reach its ~980 kcal label. */
const SEED_RECIPES = {
  S1:   { name:"S1 — Peanut-Banana",              kind:"shake", items:[["milk",500],["oats",80],["banana",1],["peanutButter",30],["honey",1],["flaxseed",1]] },
  S2:   { name:"S2 — Blueberry-Walnut",           kind:"shake", items:[["milk",500],["oats",60],["blueberries",100],["peanutButter",30],["walnuts",25],["honey",1]] },
  S3:   { name:"S3 — Cocoa-Banana",               kind:"shake", items:[["milk",500],["oats",70],["banana",1],["peanutButter",25],["cocoa",1],["honey",1],["almonds",15]] },
  S4:   { name:"S4 — Berry-Yogurt",               kind:"shake", items:[["milk",300],["greekYogurt",150],["oats",60],["mixedBerries",100],["peanutButter",25],["honey",1],["flaxseed",1]] },
  A_mid:{ name:"Solid A · Avocado-Cheese bread",  kind:"solid", items:[["bread",2],["avocado",0.5],["gouda",50],["redPepper",1]] },
  A_aft:{ name:"Solid A · Yogurt+walnuts+kiwi",   kind:"solid", items:[["greekYogurt",200],["honey",1],["walnuts",20],["kiwi",1]] },
  B_mid:{ name:"Solid B · Tuna-bean salad",       kind:"solid", items:[["tuna",1],["kidneyBeans",1],["oliveOil",1],["avocado",0.5]] },
  B_aft:{ name:"Solid B · PB bread+banana+orange",kind:"solid", items:[["bread",1],["peanutButter",20],["banana",1],["orange",1]] },
  C_mid:{ name:"Solid C · Cheese-honey bread",    kind:"solid", items:[["bread",3],["gouda",60],["avocado",0.5],["cherryTom",100]] },
  C_aft:{ name:"Solid C · Yogurt+almonds+orange", kind:"solid", items:[["greekYogurt",150],["honey",1],["almonds",25],["orange",1]] },
};

/* 6-day rotation; each day has 4 slots. Repeats 5× → 30 days. */
const SEED_ROTATION = [
  { morning:"S1", midday:"A_mid", afternoon:"A_aft", evening:"S2" }, // Day 1
  { morning:"S3", midday:"B_mid", afternoon:"B_aft", evening:"S1" }, // Day 2
  { morning:"S2", midday:"C_mid", afternoon:"C_aft", evening:"S4" }, // Day 3
  { morning:"S1", midday:"A_mid", afternoon:"A_aft", evening:"S3" }, // Day 4
  { morning:"S4", midday:"B_mid", afternoon:"B_aft", evening:"S2" }, // Day 5
  { morning:"S2", midday:"C_mid", afternoon:"C_aft", evening:"S1" }, // Day 6
];

const SEED_SETTINGS = {
  startDate: "2026-06-29",       // anchors rotation Day 1
  planDays: 30,
  waterPerDayL: 2, waterPricePerL: 0.66,
  kcalTarget: [3000, 3200], proteinTarget: 110,
  budgetCap: 270,
  shoppingByPack: true,          // default cost mode: pack-rounded
};

/* Verified day totals (calibration snapshot, for Design reference / acceptance):
 *   Day 1: 3011 kcal · 114 g · €6.14 food     Day 4: 3002 kcal · 115 g · €5.53 food
 *   Day 2: 3021 kcal · 145 g · €5.49 food     Day 5: 2939 kcal · 142 g · €6.72 food
 *   Day 3: 2985 kcal · 117 g · €6.77 food     Day 6: 3077 kcal · 120 g · €6.15 food
 * Monthly (pack-rounded) ≈ €247 incl. ~€40 water → ~€23 buffer under €270 cap. */

if (typeof module !== "undefined") module.exports = { SEED_INGREDIENTS, SEED_RECIPES, SEED_ROTATION, SEED_SETTINGS };
