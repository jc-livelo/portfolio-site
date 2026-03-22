# CLAUDE.md — jankylazy.dev Portfolio

## Who I Am
I'm Justin Livelo — graphic design student with a concentration in full-stack web development (~3 semesters remaining). Background includes pharmacy tech work for 10+ years, which I'm transitioning out of. I'm targeting hybrid UX/front-end dev internship roles, specifically creative/tech companies (current target: Honda/Acura internship).

My brand is **jankylazypanda** — self-aware, self-deprecating but intentional. "Janky" and "lazy" aren't limitations, they're an ethos: find the most efficient, elegant path. The panda is my mascot and personal symbol.

## Project Overview
A single-page personal portfolio website to be hosted on GitHub Pages.
- **URL target:** `jankylazy.dev`
- **Repo:** github.com/jc-livelo
- **Stack:** Vanilla HTML, CSS, JavaScript only. No frameworks. No React. No Tailwind. No Next.js.
- **One allowed library:** GSAP (for animations only, loaded via CDN)

## Design System

### Palette
- Background (dark mode default): `#000000`
- Text (dark mode): `#FFFFFF`
- Background (light mode): `#FFFFFF`
- Text (light mode): `#000000`
- Accent (both modes): `#89CFF0` — baby blue. Used for hover states, active nav, buttons, focus rings, and subtle highlights only. Never overused.

### Typography
- **Font:** PT Mono (Google Fonts) — used for everything: headings, body, nav, labels
- Hierarchy through size and weight only, not font switching
- All nav items and section labels use lowercase with a period: `home.` `resume.` `projects.` `contact.`

### Motifs & Details
- **Dashed borders** as the primary decorative element (headers, cards, contact form, section dividers)
- **Lowercase naming convention** throughout UI labels — this is intentional brand voice, not a mistake
- **Custom cursor:** panda paw SVG (desktop only, fallback to `auto`)
- Baby blue accent on all interactive hover states
- Y2K/MySpace nostalgia filtered through modern minimalism — subtle references, not cosplay
- ASCII art `jankylazy.dev` text in the header (styled with `<pre>`, PT Mono, not an image)

### Aesthetic Direction
Refined brutalism. Monochrome base, intentional type, dashed borders as texture, one accent color used sparingly. Think: a developer's zine, not a design agency site. Should feel handcrafted and specific, not templated. Nostalgic but not kitschy.

## Site Structure

Single page. All sections on one scrollable page. Nav links are anchor links with smooth scroll behavior.

```
[ Splash Screen ]
  - Panda PNG logo, centered, ~60vh
  - Click to enter
  - GSAP animation: logo scales down, repositions to header

[ Header ]
  - ASCII art "jankylazy.dev" (centered)
  - Nav: home. | resume. | projects. | contact.
  - Dark/light mode toggle (sun/moon icon)

[ #home — Hero ]
  - Name: Justin Livelo
  - Title: Graphic Design Student · Full-Stack Web Development
  - 1–2 sentence personal statement
  - Haiku (carry over from original: J/L initials woven in)

[ #about — About ]
  - Short paragraph: design + dev hybrid angle
  - Pharmacy tech → tech career transition story (brief)
  - Woven into hero or just below, not a separate nav item

[ #resume — Resume + Skills ]
  - Inline display: Education, Experience, Skills
  - Skills rendered as a styled tag/badge list
  - Download PDF button (baby blue, dashed border style)

[ #projects — Projects ]
  - Card grid, placeholder-ready
  - Each card: project title, short description, tech stack tags, links (GitHub / live)
  - Cards use dashed border motif

[ #contact — Contact ]
  - Form: name. | email. | message. | submit.
  - Dashed border container
  - Footer embedded here or just below:
    - © Justin Livelo [year] | LinkedIn | GitHub | CodePen | Figma

```

## Interactions & Animations

- **Splash entry:** GSAP — logo click triggers scale-down + reposition to header
- **Smooth scroll:** CSS `scroll-behavior: smooth` + JS for enhanced easing if needed
- **Section entrance:** GSAP ScrollTrigger — sections fade/slide up as they enter viewport
- **Dark/light toggle:** JS class toggle on `<body>`, preference saved to `localStorage`
- **Custom cursor:** CSS `cursor: url(...)` with panda paw asset, desktop only
- **Hover states:** All interactive elements highlight in `#89CFF0` (baby blue)
- **No jarring transitions** — everything eased, nothing instant

## File Structure
```
jankylazy-dev/
├── index.html
├── style.css
├── main.js
├── CLAUDE.md
└── assets/
    ├── logo/
    │   └── panda-logo.png      ← provided by me, do not generate
    ├── cursor/
    │   └── panda-paw.svg       ← to be created
    ├── resume/
    │   └── justin-livelo-resume.pdf  ← provided by me
    └── fonts/                  ← if self-hosting PT Mono
```

## Coding Conventions
- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- CSS custom properties (variables) for all colors and fonts — no hardcoded hex values in rules
- Mobile-first responsive CSS
- No inline styles
- No deprecated HTML (no `<center>`, no `<font>` tags)
- JS in `main.js` only — no inline `<script>` blocks in HTML
- Comments on non-obvious code sections
- All section IDs match nav anchor hrefs exactly: `#home`, `#resume`, `#projects`, `#contact`

## What NOT To Do
- Do not use React, Vue, Next.js, or any JS framework
- Do not use Tailwind CSS or any CSS utility framework
- Do not use Bootstrap
- Do not import fonts other than PT Mono
- Do not use purple gradients, glassmorphism, or generic "AI portfolio" aesthetics
- Do not add sections or features not listed above without asking first
- Do not change the color palette or introduce new colors
- Do not use `<center>` tags or other deprecated HTML
- Do not auto-populate the logo or resume PDF — those assets are provided by me

## Assets Provided by Me (do not generate placeholders for these)
- `assets/logo/panda-logo.png` — my actual logo, will be placed manually
- `assets/resume/justin-livelo-resume.pdf` — will be placed manually

## Notes for Claude Code
- Always ask before adding any dependency or library not listed here
- When generating code, explain what each major block does in comments
- If something is a placeholder (e.g. project cards), mark it clearly with a `<!-- PLACEHOLDER -->` comment
- Build mobile-first. Test layout assumptions at 390px (mobile) and 1440px (desktop)
- The vibe is: a developer built this for themselves, not for a client. Personal, specific, a little raw but intentional.
