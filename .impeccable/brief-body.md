# Surface brief — portfolio home (apps/client)

Scope: the one-page portfolio surface (client SPA), plus the CV PDF it offers.
Visitor mode: Experience — the work itself leads; the interface recedes.

Audience: freelance clients (Egypt/Gulf + international, English-reading) deciding whether
to hire Abdullah to build a product end-to-end. Job: evaluate proof fast. Action: contact
(email / LinkedIn / Discord) or download the CV. Proof: five live systems, verifiable URLs,
skills matrix. Constraints: no fabricated metrics, testimonials, or client logos; clincai
repo is private — describe, never link.

## Direction contract

THESIS: the portfolio as a typeset field reference — twin dossier columns around a red key
rail, evidence URLs hung in the margin like apparatus — refusing the category default of a
giant hero banner over a row of equal project cards.

OWN-WORLD: near-black #08080a ground, ink #f2f2f2, muted #8a8a90, signal red #d10a11
reserved for keys, rules and the CV action; Archivo 500–900 display with Martian Mono
tracked labels; hairline rules (1 device px via a canvas ruling engine); keyed red squares
01–06; barcode and stamp motifs from the established GitHub dossier identity.

STORY: a client lands on a precise operative file, reads the dossier, follows margin
evidence to running systems, and exits through the debrief — contact channels and the CV.
They leave believing: this engineer is precise, and everything claimed is live.

FIRST VIEWPORT (1440×900): top file bar (FILE NO. 640509-040822 — edition line). Centered
masthead: red mono kicker "OPERATIVE FILE — SOFTWARE ENGINEER, FULL-STACK", "ABDULLAH
MOHAMED" in Archivo 900 caps, meta line (@AbdullahM07 — OBLIEN — B.SC. COMPUTER SCIENCE,
SUEZ CANAL UNIVERSITY). Below, the book: two dossier columns around a 64px centre key rail
(01 DOSSIER active-filled red, 02 EQUIP, 03 CONTRACTS, 04 DEBRIEF), left column opening the
file in running text, right column carrying the equipment rows; margin apparatus at right
edge: EVIDENCE A–E (live URLs) and DEBRIEF KIT (cv.pdf). Footer bar: keyed entry nav +
red CV.PDF button.

Signature interaction: the key rail is the page's one moving part — the red detent fills
and advances 01→04 as sections cross the viewport centre (scroll-linked, damped
single-axis). Margin notes draw a 1px leader line when their evidence row enters view.
Motion grammar: reveals are single-axis translateY+opacity, ~200ms ease-out, no overshoot,
no parallax; prefers-reduced-motion collapses all of it to static. The ruling engine is
real: a canvas layer draws every hairline at device-pixel ratio and re-solves on resize.

FORM: Field Reference — grounded-list position 4; fused from catalog challenger
rw-centre-rail-reference-setting (dealt), verdict: wins. SEED REFERENCE: seed:340bee574541588f.
Build path: code-led (no image generation available this session).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review,
the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

- Live hosting of the Express API (client bakes content; API + Mongo deploy-ready for any
  host — Render/Vercel/Openship — awaiting user account/credentials).
- CV employment dates deliberately omitted (no verified data); user to supply.
