# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

MERN monorepo, chosen explicitly by the user:
- `apps/client` — React 18 + Vite (portfolio front end)
- `apps/server` — Node.js + Express REST API (content + contact messages)
- MongoDB via Mongoose (models: Profile, Project, Skill; contact form persists to `messages`)
- Seed script importing a single content source (`content/seed.json`)
- Docker Compose for local full-stack run; `render.yaml` + deployment docs for any host

Live hosting: GitHub Pages for the client (built via GitHub Actions), because it is the only
host with credentials available this session (gh CLI, repo+workflow scopes). The client bakes
content at build time; the Express API is deploy-ready and serves the same content plus the
contact endpoint when the user hosts it (Render/Vercel/Openship). Assumption to disclose:
user picked MERN for the full project; the free-credential live deploy covers the client.

## Users

Primary: freelance clients (Egypt/Gulf + international, English-reading) deciding whether to
hire Abdullah to build a product end-to-end. Secondary: peers and collaborators arriving from
GitHub or Discord.

## Product Purpose

Convert a visit into a conversation: show that Abdullah ships complete, live products
(frontend, backend, data, deployment) and make contacting him one click (email, LinkedIn,
Discord, CV download). Success = a prospect reaches out or downloads the CV.

## Positioning

"Ships end-to-end" — every claim is a link to something real and running (openship.io,
mindwire.sh, masroof-navy.vercel.app, watch-link-web.vercel.app). No fabricated metrics,
testimonials, or client logos.

## Operating Context

- One-page scroll portfolio + CV PDF download + contact section.
- Content source: GitHub profile (AbdullahM07) dossier identity, pinned products, skills matrix.
- The repo itself is portfolio evidence: a clean, real MERN codebase freelance clients can read.

## Capabilities and Constraints

- Projects to feature (real, verified): Openship (work, openship.io), ClinicAI (work; repo is
  PRIVATE — describe, never link the repo), Mindwire (work, mindwire.sh), Masroof (public,
  live demo), WatchLink (public, live demo). Secondary: Employee Management System (Node.js).
- Skills (from profile): JS/TS/Python/SQL; React/Next/Tailwind; Node/Express/Mongo/Postgres/REST;
  Git/Docker/Linux/Vercel/GitHub Actions.
- Facts: Abdullah Mohamed, Cairo Egypt, Software Engineer at Oblien, B.Sc. Computer Science —
  Suez Canal University. Bio line: "Problems have solutions. Enjoy the process."
- Do NOT fabricate: work dates/tenure, client names, testimonials, revenue, user counts.
- CV language: English (assumption — freelance clients picked; English widest reach). CV title:
  "Software Engineer" (user-confirmed).

## Brand Commitments

The user's GitHub profile carries a committed identity: the "contract agency dossier" world —
near-black ground #08080a, signal-red accent #d10a11, tracked mono uppercase labels, file
number 640509-040822, codename AbdullahM07. Recognizable traits to preserve; the web surface
expands this incomplete brand (new-work decides how far).

## Evidence on Hand

- Live product URLs listed above; GitHub repos public except clincai.
- Avatar: https://avatars.githubusercontent.com/u/269013923?v=4 (460×460 JPEG, saved at
  /tmp/hm-assets/avatar.png).
- Socials (from profile README): email abdullahmahbob07@gmail.com · LinkedIn linkedin.com/in/3bs7 ·
  GitHub github.com/AbdullahM07 · Discord discord.gg/_3bbs.
- Absent (must not be invented): testimonials, employment dates, photography beyond the avatar.

## Product Principles

1. Proof over claims — every project row links to something running.
2. One identity — GitHub profile, portfolio, and CV share the same voice and marks.
3. The code is the portfolio — a MERN repo a client can read and trust.
4. Contact friction ≈ zero — primary actions always visible.

## Accessibility & Inclusion

Target WCAG AA: contrast on dark ground, keyboard navigation, reduced-motion respected.
