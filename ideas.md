# Parth Khamkar — Data Analytics Portfolio: Design Ideas

## Three Stylistic Approaches

### Approach A — "Dark Data Lab"
Deep navy/charcoal dark theme with neon cyan/emerald accents. Feels like a live analytics terminal. Probability: 0.07

### Approach B — "Precision Ink"
Clean white background with sharp typographic hierarchy, deep slate ink, and electric indigo accents. Structured editorial feel. Probability: 0.04

### Approach C — "Obsidian Intelligence" ← CHOSEN
Dark obsidian base with amber/gold data-glow accents. Sophisticated, premium, data-science aesthetic. Probability: 0.08

---

## Chosen Approach: "Obsidian Intelligence"

### Design Movement
Dark-mode Data Brutalism meets Scientific Precision — the aesthetic of high-end analytics platforms like Palantir and Bloomberg Terminal, but with warmth from amber/gold accents.

### Core Principles
1. **Data as Art** — Charts, numbers, and code snippets are visual elements, not just content
2. **Obsidian Depth** — Deep layered backgrounds with subtle texture and glow effects
3. **Amber Signal** — A single warm amber/gold accent color cuts through the dark like a data highlight
4. **Asymmetric Precision** — Off-center layouts with deliberate grid breaks for visual tension

### Color Philosophy
- Background: Deep obsidian `oklch(0.10 0.01 260)` — near-black with a cool blue undertone
- Surface: `oklch(0.15 0.015 260)` — card backgrounds
- Amber Accent: `oklch(0.78 0.15 75)` — the signature warm glow
- Cyan Secondary: `oklch(0.72 0.12 200)` — for data viz highlights
- Foreground: `oklch(0.92 0.005 60)` — warm off-white
- Muted: `oklch(0.55 0.01 260)` — secondary text

### Layout Paradigm
Asymmetric split layouts — hero uses a 60/40 diagonal split. Sections alternate between full-bleed and contained. Project cards use a masonry-style staggered grid. Navigation is a minimal top bar with a glowing amber indicator.

### Signature Elements
1. **Amber glow orbs** — radial gradient blobs behind key sections
2. **Data grid lines** — subtle dot-grid or line-grid texture on hero backgrounds
3. **Animated counters** — numbers count up when scrolled into view

### Interaction Philosophy
Every hover reveals depth — cards lift with a subtle amber border glow. Scroll triggers staggered entrance animations. Cursor proximity creates subtle magnetic effects on CTAs.

### Animation
- Hero text: staggered word-by-word fade-up (60ms delay each)
- Section entrances: fade-up with 40px Y offset, 600ms ease-out
- Skill bars: fill left-to-right with spring easing on scroll
- Project cards: scale(0.97) → scale(1) with amber border glow on hover
- Chart data: animate in with recharts' built-in animation
- Number counters: count up from 0 on scroll-into-view

### Typography System
- Display: **Space Grotesk** (700) — technical, geometric, modern
- Body: **Inter** (400/500) — clean readability
- Mono: **JetBrains Mono** — for code/data snippets and skill tags
- Scale: 4xl hero → 2xl section titles → xl card titles → base body

### Brand Essence
*The analytical mind that transforms raw data into decisive insight — for engineers who think in patterns.*
Personality: **Precise. Ambitious. Illuminating.**

### Brand Voice
Headlines sound like insights, not descriptions.
- "Where Data Meets Decision" (not "Welcome to my portfolio")
- "Every dataset tells a story. I find it." (not "I am a data analyst")

### Wordmark & Logo
A stylized "PK" monogram inside a hexagon — referencing data nodes and network graphs. Amber stroke on dark fill.

### Signature Brand Color
**Amber Gold** `oklch(0.78 0.15 75)` — unmistakably Parth's signal color.

## Style Decisions
- Use Space Grotesk for all headings, JetBrains Mono for skill tags and code snippets
- Dark theme is default and only theme
- Amber glow effects on interactive elements and section accents
- Charts use amber/cyan/emerald color palette to match brand
