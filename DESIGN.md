---
name: Abdullah Mohamed — Field Reference
description: The operative-file portfolio: twin dossier columns around a red key rail on near-black ground.
colors:
  ground: "#08080a"
  ground-raise: "#0d0d11"
  signal-red: "#d10a11"
  signal-red-bright: "#e3231a"
  red-text: "#f43a3a"
  ink: "#f2f2f2"
  ink-2: "#c9c9cf"
  muted: "#8a8a90"
  line: "rgba(242, 242, 242, 0.13)"
  line-strong: "#26262d"
typography:
  display:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(42px, 6.4vw, 76px)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 900
    lineHeight: 1.2
  body:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "15.5px"
    fontWeight: 500
    lineHeight: 1.68
  label:
    fontFamily: "'Martian Mono', 'Courier New', monospace"
    fontSize: "8.5px–11px"
    fontWeight: 700
    letterSpacing: "2.5px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "26px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    padding: "15px 28px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    padding: "4px 9px"
  input:
    backgroundColor: "{colors.ground-raise}"
    textColor: "{colors.ink}"
    padding: "11px 13px"
---

# Design System: Abdullah Mohamed — Field Reference

## Overview

**Creative North Star: "The Field Reference"**

The site is a typeset operative file: dense dossier text set in twin columns around a
keyed centre rail, evidence URLs hung in the outer margin like scholarly apparatus.
Depth comes from hairlines and density, never from shadow or glow; the interface
recedes so the record leads. The identity extends the established GitHub "agency
dossier" brand (near-black ground, signal red, tracked mono labels, file numbers).

**Key Characteristics:**
- Near-black ground with one signal red reserved for keys, rules, and the primary action
- Hairline rules at one device pixel (canvas ruling engine for structural rules)
- Archivo display voice with Martian Mono apparatus labels
- One moving part: the key rail's red detent, scroll-linked, damped, single-axis
- Every claim anchored to a live URL; no decoration that the record did not earn

## Colors

A three-ink palette on near-black: ink for reading, muted ink for apparatus, signal red
for keys and action.

### Primary
- **Signal Red** (#d10a11): fills only — key squares, the rail detent, the CV button,
  hairline leaders, rules, stamp borders. Never for body text.
- **Signal Red, Bright** (#e3231a): hover state of red fills.
- **Readable Red** (#f43a3a): all red *text* at small sizes (section keys, contract
  indices, evidence links, kicker, stamp text) — the ground red fails 4.5:1 on the
  near-black ground; this one clears it.

### Neutral
- **Ground** (#08080a): page field.
- **Raised Ground** (#0d0d11): input fields, cards on ground.
- **Ink** (#f2f2f2): display and headings.
- **Reading Ink** (#c9c9cf): body prose.
- **Apparatus Ink** (#8a8a90): labels, notes, metadata.
- **Hairline** (rgba(242,242,242,0.13)) and **Structural Line** (#26262d): rules and
  borders.

### Named Rules
**The Red Budget Rule.** Red covers under ~5% of any viewport. If a red element is not
a key, a rule, a leader, or the single primary action, it is not red.

**The Readable Red Rule.** Red as text below 18px uses #f43a3a on this ground; #d10a11
is a fill color, not a text color.

## Typography

**Display Font:** Archivo (variable, self-hosted; fallback 'Helvetica Neue', Arial)
**Body Font:** Archivo
**Label/Mono Font:** Martian Mono (variable, self-hosted; fallback 'Courier New')

**Character:** An engineered grotesk for display and prose against a wide technical
mono for apparatus — the pairing of a printed file, not a dashboard.

### Hierarchy
- **Display** (900, clamp(42px→76px), 1.02): the masthead name, once per page.
- **Headline** (900, 21–26px, uppercase): section titles and contract names.
- **Body** (500, 15.5px, 1.68, ~46ch measure): dossier prose and descriptions.
- **Label** (700 mono, 8.5–11px, +2.5px tracking, uppercase): keys, indices, tags,
  metadata — the apparatus layer.

### Named Rules
**The Apparatus Rule.** Mono is for measurement and addressing (keys, file numbers,
indices, handles), never for sentences. Prose is always Archivo.

## Layout

A reference block (max 1120px) centred in the viewport: sections flow as two-column
spreads around a fixed 64px centre rail carrying keys 01–04. A margin apparatus column
(148px) hangs off the right edge above 1380px; below it, margin notes render as inline
blocks inside their sections. Below 980px the rail goes outboard-left (44px) and
columns stack to one measure. Spacing rhythm: tight groups (8–16px), generous section
separation (40–72px), more space above a heading than below it.

## Elevation & Depth

No shadows anywhere. Depth is hairline structure: 1px rules, borders, and density
contrast. The only overlay effect is the file bar's functional blur (8px backdrop)
for legibility over scrolling content — never decorative glass.

## Shapes

Sharp corners everywhere (0px radius); the square is the world's signature — key
squares (30px), barcode bars, square status marks. No pills except none; buttons are
sharp rectangles. Images sit in 1px hairline frames.

## Components

### Buttons
- **Primary (CV / submit):** sharp rectangle, signal-red fill (#d10a11), ground-dark
  mono label, padding 15px 28px; hover brightens to #e3231a.
- **Ghost (evidence links):** underlined mono text, readable red; hover brightens.

### Chips
- **Stack tags:** transparent ground, 1px structural-line border, muted mono label,
  padding 4px 9px.

### Cards / Containers
- **Contract entries:** no card box — a top hairline and typographic anatomy (index
  line, name, tagline, description, tags, evidence). Ledger rows share the same
  bottom-hairline rhythm.

### Inputs / Fields
- Raised-ground fill (#0d0d11), 1px structural-line border, ink text; focus ring is a
  1px signal-red outline at offset 0.

### Navigation
- **Key rail (centre):** sticky vertical rail; 30px key squares 01–04, active fills
  signal red; a 1px detent line fills with scroll. Damped, single-axis, keyboard-nav
  duplicated in the footer keys.
- **Footer keys:** mono anchors with bold key numerals.

### Signature Components
- **Ruling engine:** canvas drawing the block's structural hairlines at device-pixel
  ratio, re-solving on resize.
- **Barcode:** footer SVG drawn deterministically from the file number's digits.
- **Margin apparatus:** section-anchored notes with 1px red leader lines, drawn on
  entry.

## Do's and Don'ts

### Do:
- **Do** keep red as keys, rules, and the single primary action (≤5% of a viewport).
- **Do** set every label in tracked uppercase Martian Mono and every sentence in Archivo.
- **Do** anchor claims to live URLs; label anything unverifiable as on-request.
- **Do** keep corners sharp and lines 1px; resize re-solves the ruling engine.
- **Do** collapse all motion under `prefers-reduced-motion`.

### Don't:
- **Don't** use #d10a11 for small text on the ground — use #f43a3a.
- **Don't** add shadows, glows, gradients, or glass decoration; structure is hairlines.
- **Don't** introduce rounded corners, pills, or emoji/glyph icons.
- **Don't** break the twin-column spread or move the rail off-centre above 980px.
- **Don't** print unverified claims, counters, or client marks.
