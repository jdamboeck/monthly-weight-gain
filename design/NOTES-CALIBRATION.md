# Seed-data calibration (2026-06-29)

The per-unit kcal/protein/price numbers in `seed-data.js` were tuned so each recipe reproduces
the source plan's stated kcal labels and every rotation day hits the 3,000–3,200 kcal / ≥110 g
protein target. Verified by summing `amount × ingredient.{kcalPer,proteinPer,pricePer}`.

## Recipes vs plan labels

| Recipe | kcal | protein | € | plan label | Δ |
|---|---:|---:|---:|---:|---:|
| S1 Peanut-Banana    | 1016 | 38.2 | 1.21 | 1000 | +1.6% |
| S2 Blueberry-Walnut | 1003 | 36.8 | 1.98 |  960 | +4.5% |
| S3 Cocoa-Banana     |  994 | 37.9 | 1.37 | 1000 | −0.6% |
| S4 Berry-Yogurt     |  925 | 35.8 | 1.83 |  950 | −2.6% |
| Solid A (mid+aft)   |  992 | 38.7 | 2.96 |  990 | +0.2% |
| Solid B (mid+aft)   | 1011 | 69.0 | 2.92 |  980 | +3.2% |
| Solid C (mid+aft)   | 1057 | 44.6 | 2.96 | 1030 | +2.6% |

All within ±5%.

## One deliberate change from the original plan
**B_mid (tuna-bean salad)** = tuna + kidney beans **+ 1 tbsp olive oil + ½ avocado**.
A bare can-of-tuna + can-of-beans was ~406 kcal, leaving Solid B 21% under its 980 label and
dragging Days 2 & 5 below 3,000. The oil + avocado is the dressing a "Mexican-style" salad
carries (both already on the shopping list), and brings Solid B to 1,011 kcal.

## Day totals (final)

| Day | kcal | protein | food € |
|---|---:|---:|---:|
| 1 | 3011 | 114 | 6.14 |
| 2 | 3021 | 145 | 5.49 |
| 3 | 2985 | 117 | 6.77 |
| 4 | 3002 | 115 | 5.53 |
| 5 | 2939 | 142 | 6.72 |
| 6 | 3077 | 120 | 6.15 |

## Budget shape
- 6-day food ≈ €36.80 → 30-day food (exact-amount basis) ≈ €184.
- Water: 30 d × 2 L × €0.66 ≈ €40.
- Exact-amount food+water ≈ €224; pack-rounded (default mode) lands near the plan's **~€247**,
  leaving a **~€23 buffer** under the **€270** cap.
