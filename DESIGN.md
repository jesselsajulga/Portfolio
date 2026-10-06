# DESIGN.md — Jessel's Portfolio Redesign

> **Project:** Jessel's Mini Showroom  
> **Owner:** Jessel Rome B. Sajulga  
> **Design direction:** Editorial minimalism for an engineer's portfolio  
> **Status:** Source of truth for the redesign

---

## 0. Design Intent

The current portfolio has a strong personality, but its visual language is too dependent on cyberpunk conventions: neon gradients, glowing surfaces, floating badges, glassmorphism, novelty typography, animated avatars, confetti, and a highly interactive IDE-style project explorer.

The redesign keeps the **technical identity and personality** while removing visual noise.

The target is not "a simpler version of the existing site." It is a different visual system:

> **A carefully art-directed engineering portfolio where typography, composition, images, and whitespace create the personality.**

The portfolio should make the visitor notice:

1. Jessel.
2. What he builds.
3. The quality and variety of his projects.
4. His engineering range.
5. How to contact him.

The interface itself should remain quiet.

---

# 1. Reference Analysis

The supplied visual reference is a monochrome editorial portfolio/layout board. It is inspiration for the **underlying design language**, not a template to reproduce.

## 1.1 What makes the reference work

### A. Typography is structural

The reference uses large, simple typography as a compositional object.

Text is not treated as decoration inside a UI card. It establishes:

- scale,
- hierarchy,
- orientation,
- rhythm,
- and visual identity.

For Jessel's portfolio, typography should similarly carry much of the design.

### B. Black and white create the visual system

The reference relies heavily on:

- black,
- white,
- light gray,
- thin rules,
- and restrained tonal changes.

There is very little need for a decorative color palette.

For the portfolio:

- light sections should use warm/off-white backgrounds and near-black text;
- dark sections should use near-black backgrounds and off-white text;
- one restrained technical accent may be used for links and active states.

Color should communicate interaction, not decoration.

### C. Grid discipline

The reference feels intentionally constructed because:

- edges line up,
- image blocks share boundaries,
- text follows a consistent grid,
- large areas of empty space are preserved,
- and different content sizes still belong to the same composition.

The portfolio should use a shared content grid instead of independently centered components.

### D. Asymmetry without chaos

The reference does not depend on symmetrical cards.

It creates interest through:

- large vs. small elements,
- image vs. text,
- vertical vs. horizontal compositions,
- offset blocks,
- and changes in scale.

Jessel's project presentation should use this principle.

### E. Thin lines have a purpose

Lines in the reference define structure.

They should be used to:

- separate content,
- establish alignment,
- mark metadata,
- frame an editorial composition,
- or guide the eye.

They should not become decorative borders around every component.

### F. Images are part of the composition

Images are treated as large visual fields rather than thumbnails trapped inside cards.

For project work, images should therefore be:

- large,
- high quality,
- carefully cropped,
- and integrated directly into the page grid.

### G. Personality comes from art direction

The reference does not need:

- glowing gradients,
- floating blobs,
- animated particles,
- excessive shadows,
- or dozens of badges.

Its personality comes from composition.

That is the most important principle to transfer.

---

# 2. Design Principles

## 2.1 Primary Principles

### 01 — Content before interface

The portfolio is a presentation of engineering work, not a demonstration of UI components.

### 02 — Typography before decoration

When a section feels visually weak, first adjust:

1. hierarchy,
2. scale,
3. spacing,
4. alignment,
5. composition.

Do not immediately add an effect.

### 03 — Whitespace is intentional

Empty space is part of the design.

Do not fill it simply because a screen looks empty.

### 04 — One visual language

Light, dark, project, about, and contact sections should feel like parts of one editorial system.

### 05 — Projects are evidence

The portfolio should show what Jessel actually built.

Descriptions should explain:

- the problem,
- the system,
- the technical contribution,
- and the result where available.

### 06 — Interaction should be quiet

Animation exists to communicate state or improve navigation.

It should never become the subject of the page.

### 07 — Technical identity without "tech UI"

Jessel's computer engineering background should be obvious from the content, not from cyberpunk styling.

Avoid using terminal windows, neon interfaces, circuit motifs, code rain, grids, or futuristic UI purely to signal "technology."

---

# 3. Visual Identity

## 3.1 Aesthetic

The visual identity is:

**Editorial + Engineering + Minimal**

Not:

**Cyberpunk + Dashboard + Gaming UI**

The intended impression is similar to a thoughtfully art-directed publication about engineering work.

---

## 3.2 Color System

### Light palette

| Token | Value | Purpose |
|---|---|---|
| `--light-bg` | `#F5F5F2` | Main light canvas |
| `--light-surface` | `#FFFFFF` | Image/content surface when needed |
| `--light-text` | `#111111` | Primary text |
| `--light-muted` | `#646460` | Secondary text |
| `--light-faint` | `#92928C` | Metadata |
| `--light-rule` | `#D8D8D3` | Structural rules |

### Dark palette

| Token | Value | Purpose |
|---|---|---|
| `--dark-bg` | `#111111` | Main dark canvas |
| `--dark-surface` | `#181818` | Rare secondary surface |
| `--dark-text` | `#F2F2ED` | Primary text |
| `--dark-muted` | `#B0B0AA` | Secondary text |
| `--dark-faint` | `#777772` | Metadata |
| `--dark-rule` | `#343431` | Structural rules |

### Accent

Use one accent:

```text
Technical Blue
#1F6FFF
```

Use it for:

- links,
- selected navigation,
- focus states,
- small project identifiers,
- important interactive feedback.

Do not use it as a page-wide gradient.

### Absolute rule

Do not recreate the current:

```text
cyan → blue → purple
```

gradient system.

The reference's restraint is more important than preserving the existing color identity.

---

# 4. Light / Dark Composition

The reference demonstrates that contrast can come from entire compositions rather than decorative effects.

A recommended portfolio rhythm is:

```text
┌──────────────────────────────────────┐
│ LIGHT                                │
│ Navigation                           │
│ Hero / Identity                      │
│                                      │
│ Large portrait + typography          │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ DARK                                 │
│ Selected Work                        │
│                                      │
│ Large project imagery                │
│ Project information                  │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ LIGHT                                │
│ About / Capabilities                 │
│                                      │
│ Editorial text + technical lists     │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│ DARK                                 │
│ Contact                              │
└──────────────────────────────────────┘
```

This is a composition guideline, not a requirement that every section alternate.

A light section should not feel like "light mode."

A dark section should not feel like "dark mode."

They are editorial surfaces within the same page.

---

# 5. Typography

## 5.1 Typeface

Use one primary contemporary sans-serif family.

Preferred:

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

A comparable variable sans-serif is acceptable if it provides the same range of weights.

Remove novelty display typography from the visual system.

Do not use:

- Orbitron,
- Audiowide,
- Great Vibes,
- futuristic display fonts.

The current Orbitron-based identity is one of the strongest contributors to the existing cyberpunk appearance.

---

## 5.2 Type Scale

### Display

Desktop:

```text
72–96px
weight: 500–650
line-height: 0.92–1.02
tracking: -0.045em
```

Mobile:

```text
46–60px
```

### Section heading

Desktop:

```text
48–64px
weight: 500–650
line-height: 1.0–1.1
tracking: -0.035em
```

Mobile:

```text
34–44px
```

### Project heading

```text
30–48px
weight: 550–650
line-height: 1.05–1.15
```

### Body

```text
16–18px
line-height: 1.55–1.7
```

### Metadata

```text
11–14px
weight: 500
letter-spacing: 0.04–0.08em
text-transform: uppercase where useful
```

Do not make all metadata uppercase automatically.

---

# 6. Grid & Layout

## 6.1 Content Width

Maximum content width:

```text
1200–1280px
```

Desktop padding:

```text
32–48px
```

Tablet:

```text
24–32px
```

Mobile:

```text
20–24px
```

## 6.2 Grid

Desktop:

```text
12 columns
```

Tablet:

```text
8 columns
```

Mobile:

```text
4 columns
```

Use grid alignment consistently across the entire page.

## 6.3 Vertical Rhythm

Large sections:

```text
120–180px
```

Mobile:

```text
80–112px
```

Use smaller spacing inside sections.

The visual hierarchy should generally follow:

```text
Section label
      ↓
Large heading
      ↓
Supporting statement
      ↓
Main content
      ↓
Metadata / links
```

## 6.4 Alignment

The left edge of major content should align across:

- hero,
- section headings,
- project information,
- about,
- capabilities,
- contact,
- footer.

This shared edge creates visual cohesion without requiring cards.

---

# 7. Navigation

## 7.1 Current Problem

The existing navigation is a rounded glass panel with:

- animated avatar,
- glowing title,
- gradient typography,
- animated neon underline,
- and multiple decorative treatments.

This is visually dense before the actual content begins.

## 7.2 New Composition

Use a lightweight editorial header.

Example:

```text
JESSEL ROME                               WORK   ABOUT   CONTACT
COMPUTER ENGINEER
```

Alternative:

```text
JESSEL ROME B. SAJULGA                    WORK   ABOUT   CONTACT
```

Rules:

- no enclosing giant pill;
- no glassmorphism;
- no glow;
- no gradient logo;
- no decorative avatar as a primary element;
- no oversized shadow;
- thin rule optional;
- navigation remains compact.

The existing character avatar can survive as a small personal easter egg only if it does not compete with navigation.

---

# 8. Hero

## 8.1 Purpose

The hero must answer:

> Who is Jessel, and what does he build?

Immediately.

## 8.2 Recommended Composition

```text
COMPUTER ENGINEER / BUILDER

Jessel Rome
Sajulga

I build systems that connect
software, electronics, and
the physical world.

[ Selected work → ]    [ Contact → ]

Cagayan de Oro, Philippines
BS Computer Engineering — USTP
```

Alongside this:

```text
┌───────────────────────────────┐
│                               │
│          PORTRAIT             │
│                               │
└───────────────────────────────┘
```

Use an asymmetric split.

The portrait should be large enough to function as a compositional anchor.

## 8.3 Remove from Current Hero

Remove:

- welcome/confetti pill,
- floating Robotics badge,
- floating Computer Engineer badge,
- neon glow around portrait,
- 3D push-button treatment,
- gradient name treatment,
- decorative background orbs,
- unnecessary floating UI.

The personality should come from the writing, photograph, typography, and composition.

---

# 9. Selected Work

Projects should become the strongest part of the portfolio.

The current project explorer is clever, but it makes visitors operate an interface before seeing the work. It also makes the portfolio resemble an IDE rather than an editorial presentation.

The new system should expose the work directly.

## 9.1 Selected Work Structure

Start with approximately 4–6 high-value projects.

Recommended candidates based on the existing portfolio:

1. **SapSense**
2. **Sumo Bot**
3. **Mini Banking System**
4. **Cybersecurity / Network Security**
5. **Sensory Prediction**
6. **Breadboard Competition Champion**

Verify the actual repository data before implementation.

## 9.2 Project Composition

Example:

```text
01
SAPSENSE
IoT / EMBEDDED SYSTEMS
────────────────────────────────────────

┌────────────────────────────────────────┐
│                                        │
│             PROJECT IMAGE              │
│                                        │
└────────────────────────────────────────┘

SapSense
A multi-sensor monitoring system for
coconut sap harvesting.

ESP32 · Raspberry Pi · Firebase · React

View project →
```

A second project can invert the composition:

```text
┌───────────────────────┐
│                       │
│     PROJECT IMAGE     │
│                       │
└───────────────────────┘

                         02
                         SUMO BOT
                         ROBOTICS

                         Autonomous competitive
                         robotics platform...

                         View project →
```

This captures the reference's asymmetric editorial rhythm without copying its exact layouts.

## 9.3 Project Metadata

Prefer:

```text
2026
EMBEDDED / IOT
ESP32 · RASPBERRY PI
```

over:

```text
[ ESP32 ] [ Raspberry Pi ] [ IoT ] [ React ]
```

Metadata is information, not decoration.

## 9.4 Project Archive

The existing portfolio has a broad inventory across:

- Logic and Circuit Design
- Software Development
- Security & Networking
- Electrical and Electronics

Keep the full archive accessible, but give selected projects significantly more visual weight.

Do not give all projects identical large cards.

## 9.5 Project Links

Where repository data contains real links:

```text
GitHub →
Live demo →
Case study →
```

Surface them directly.

Do not invent links where they do not exist.

The walkthrough specifically identifies the current absence of individual GitHub/live-demo links as an area for improvement.

---

# 10. About

## 10.1 Narrative

Replace the current card-based interactive bio with a strong editorial statement.

Example:

```text
ABOUT

I work across the boundary
between software and physical
systems.

My Computer Engineering
background has taken me from
logic gates and microcontrollers
to web applications, networking,
automation, and IoT.
```

Then provide supporting information in a restrained grid.

## 10.2 Background

```text
EDUCATION

2026
BS Computer Engineering
University of Science and Technology
of Southern Philippines
```

Only include this if it matches the current verified content.

## 10.3 Philosophy

Use the existing meaningful idea:

> turning abstract logic into working systems that interact with the physical world.

This is more distinctive than decorative "Visionary" and "Developer" badges.

---

# 11. Capabilities / Skills

Do not use a wall of icon cards.

Use text-based groups.

```text
CAPABILITIES

01  EMBEDDED SYSTEMS
    ESP32 · Arduino · Raspberry Pi · Sensors · IoT

02  SOFTWARE
    React · JavaScript · Python · Tailwind CSS · APIs

03  HARDWARE
    Logic Gates · Flip-Flops · 555 Timer · Verilog · MIPS

04  NETWORKING & SECURITY
    Cisco · TCP/IP · pfSense · Active Directory

05  AUTOMATION
    n8n · AI-assisted workflows · System integration
```

The number labels create hierarchy without decorative badges.

---

# 12. Contact

The contact section should provide a strong final contrast.

Recommended dark composition:

```text
LET'S BUILD
SOMETHING USEFUL.

Have a project, opportunity,
or technical problem worth discussing?

sajulga.jessel123@gmail.com

GitHub        LinkedIn
Messenger     Instagram
```

Use large typography and generous whitespace.

Do not use the current large cyan/blue/purple gradient social card.

The email should be visually prominent but not enclosed in a decorative card.

---

# 13. Footer

Keep it quiet.

```text
Jessel Rome Sajulga                    © 2026

GitHub · LinkedIn · Email
```

A thin rule is sufficient.

Do not repeat the entire navigation hierarchy.

---

# 14. Borders, Rules & Framing

The reference uses lines as architectural elements.

Adopt this deliberately.

Use:

- horizontal section rules,
- vertical grid rules where composition benefits,
- project separators,
- small metadata dividers.

Do not:

- wrap every section in a border;
- create nested bordered cards;
- use glowing borders;
- use gradient borders.

A rule should answer:

> What structure does this line communicate?

If the answer is "none," remove it.

---

# 15. Images

## 15.1 Portrait

Use the existing professional portrait as a major hero image.

Treatment:

- clean crop,
- rectangular frame,
- minimal or no radius,
- no glow,
- no floating label.

## 15.2 Project Images

Project imagery should occupy meaningful surface area.

Preferred:

```text
wide editorial image
```

or:

```text
large vertical image
```

depending on the asset.

Do not force every asset into the same small thumbnail ratio if that damages the image.

## 15.3 Image Interaction

Optional:

```text
hover:
scale 1.01–1.03
```

No dramatic parallax or crossfade is necessary.

---

# 16. Motion

## 16.1 Motion Principles

Motion should be:

- brief,
- predictable,
- quiet,
- informative.

Recommended:

```text
180–400ms
ease-out
```

## 16.2 Appropriate Motion

Use:

- navigation state changes;
- mobile menu transitions;
- link arrow movement;
- subtle project image scaling;
- restrained section reveals;
- image loading transitions.

## 16.3 Remove

The redesign should remove or substantially reduce:

- confetti,
- floating badges,
- animated ambient orbs,
- particle backgrounds,
- avatar video cycling,
- continuous floating animations,
- large spring-based UI movement,
- hover-triggered full-card video replacement.

These features currently contribute to the "AI-generated / over-designed" perception.

## 16.4 Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable non-essential transitions and transforms */
}
```

No essential content should depend on motion.

---

# 17. Responsive Design

## Desktop

Use the complete editorial composition:

- asymmetric hero;
- large project imagery;
- alternating project layouts;
- large type;
- generous whitespace;
- 12-column grid.

## Tablet

Reduce:

- typography,
- column spans,
- section spacing.

Preserve:

- asymmetric composition where readable;
- image prominence;
- alignment.

## Mobile

Do not simply stack the desktop DOM.

Intentional mobile sequence:

```text
NAV
↓
IDENTITY
↓
PORTRAIT
↓
INTRODUCTION
↓
CTA
↓
SELECTED WORK
↓
PROJECT IMAGE
↓
PROJECT TITLE
↓
DESCRIPTION
↓
METADATA
↓
NEXT PROJECT
↓
ABOUT
↓
CAPABILITIES
↓
CONTACT
↓
FOOTER
```

Mobile rules:

- 20–24px side padding;
- minimum readable body text around 16px;
- no horizontal scrolling;
- navigation becomes compact;
- images remain large;
- metadata wraps naturally;
- controls remain touch-friendly.

---

# 18. Accessibility

Required:

- semantic heading hierarchy;
- keyboard navigation;
- visible focus states;
- sufficient contrast;
- descriptive image `alt` text;
- meaningful link labels;
- real buttons for actions;
- no hover-only information;
- reduced-motion support;
- usable mobile touch targets.

Minimalism must not reduce accessibility.

---

# 19. Performance

The existing portfolio contains a significant amount of media and several WebM interactions.

The redesign should reduce unnecessary media work.

Priorities:

1. render hero text quickly;
2. render the portrait efficiently;
3. lazy-load non-critical project images;
4. avoid autoplaying decorative video;
5. use poster images where video is retained;
6. remove media that exists only to produce visual novelty.

The initial viewport should not depend on multiple video assets.

---

# 20. Current Portfolio Content to Preserve

The redesign must retain meaningful existing content.

## Identity

- Jessel Rome B. Sajulga
- Computer Engineering
- University of Science and Technology of Southern Philippines
- Hardware/software integration
- Prototyping
- Robotics
- Embedded systems

## Engineering Areas

- Embedded Systems
- Robotics
- Automation
- Hardware & Circuit Design
- HDL / Verilog
- MIPS / Assembly
- Microcontrollers
- IoT
- Software / Web Development
- Networking
- Cybersecurity
- Active Directory
- pfSense

## Existing Projects

### Logic and Circuit Design

- Simple LCD Design
- Anti-Theft Mechanism
- Christmas Light Controller
- Alarm System
- HDL
- Breadboard Competition Champion

### Software Development

- Portfolio Website
- Calculus Calculator
- Sensory Prediction
- n8n Automation
- MIPS

### Security & Networking

- CCNA Completion Certificate
- Cybersecurity
- Network Security

### Electrical and Electronics

- Automatic Signal Light
- Parking Assistance
- Mini Banking System
- Sumo Bot
- Power Supply
- ThirstAid!

The existing walkthrough says the portfolio contains 20 projects/accomplishments, while the documented inventory contains 18 named entries. **Do not invent the missing entries. Verify the source repository before presenting a final project count.**

---

# 21. Existing UI Elements to Remove or Reconsider

| Current element | Decision | Reason |
|---|---|---|
| Neon cyan/purple gradients | Remove | Creates generic cyberpunk/template appearance |
| Orbitron typography | Remove | Too strongly tied to futuristic UI styling |
| Glassmorphism cards | Remove | Adds visual weight without improving content |
| Floating badges | Remove | Decorative repetition |
| Confetti | Remove | Novelty rather than portfolio value |
| Character avatar switcher | Relegate to optional easter egg | Personality is useful, but it should not dominate navigation |
| Hero crossfade portrait | Remove | Unnecessary interaction |
| 3D tactile buttons | Remove | Too UI-like |
| Animated background orbs | Remove | Decorative noise |
| IDE project explorer | Replace | Makes visitors operate the portfolio before seeing the work |
| Skill hover video swap | Simplify/remove | Hides the core narrative behind interaction |
| Gradient social card | Replace | Too visually dominant |
| Large rounded cards | Reduce | Conflicts with editorial reference |
| Pills/badges | Restrict | Use only when information genuinely benefits from compact labeling |

---

# 22. Component Blueprint

The current architecture contains:

```text
src/
├── App.jsx
├── App.css
├── index.css
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Works.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

Preserve the architecture unless the repository proves that restructuring is necessary.

Recommended conceptual components:

```text
App
├── Navbar
├── Hero
├── SelectedWork
│   ├── FeaturedProject
│   └── ProjectArchive
├── About
├── Capabilities
├── Contact
└── Footer
```

This does not require a complete rewrite. Existing components can be refactored incrementally.

---

# 23. Design Tokens

Centralize these values.

```css
:root {
  --light-bg: #F5F5F2;
  --light-surface: #FFFFFF;
  --light-text: #111111;
  --light-muted: #646460;
  --light-faint: #92928C;
  --light-rule: #D8D8D3;

  --dark-bg: #111111;
  --dark-surface: #181818;
  --dark-text: #F2F2ED;
  --dark-muted: #B0B0AA;
  --dark-faint: #777772;
  --dark-rule: #343431;

  --accent: #1F6FFF;

  --content-max: 1280px;
  --page-padding: 40px;
}
```

Use these tokens consistently rather than scattering arbitrary colors through components.

---

# 24. Page Composition

```text
PORTFOLIO
│
├── NAVIGATION
│
├── HERO
│   ├── Identity
│   ├── Positioning statement
│   ├── CTA
│   └── Portrait
│
├── SELECTED WORK
│   ├── SapSense
│   ├── Sumo Bot
│   ├── Mini Banking System
│   ├── Security / Networking
│   └── Additional selected project
│
├── ABOUT
│   ├── Engineering philosophy
│   └── Education / background
│
├── CAPABILITIES
│   ├── Embedded Systems
│   ├── Robotics
│   ├── Software
│   ├── Hardware
│   ├── Networking & Security
│   └── Automation
│
├── PROJECT ARCHIVE
│   └── Remaining work
│
├── CONTACT
│
└── FOOTER
```

## Visitor logic

```text
WHO?
 ↓
Jessel Rome Sajulga

WHAT?
 ↓
Computer Engineer / builder

PROOF?
 ↓
Selected projects

HOW?
 ↓
Engineering background + capabilities

NEXT?
 ↓
Contact
```

---

# 25. Anti-Pattern Rules

These rules are mandatory during implementation.

```text
DO NOT:
- Add decorative gradients without a functional purpose.
- Add floating blobs.
- Add abstract background shapes.
- Add glassmorphism.
- Turn every section into a card.
- Use excessive rounded corners.
- Use neon glow.
- Use animated particles.
- Add confetti.
- Animate every section.
- Use novelty/cyberpunk fonts.
- Use giant gradient headings.
- Add a badge for every concept.
- Turn technologies into dozens of pills.
- Add shadows simply to create "depth."
- Fill whitespace because it looks empty.
- Recreate the reference literally.
- Copy the reference's exact layout.
- Copy its text, branding, or visual assets.
- Build a dashboard around the portfolio.
- Hide important project information behind unnecessary interaction.
- Give every project equal visual weight.
- Add unsupported credentials or experience.
- Invent project links.
- Add dependencies without a verified need.
```

---

# 26. Implementation Order

Implement in this order.

## Phase 1 — Foundation

- [ ] Establish light/dark design tokens.
- [ ] Replace typography.
- [ ] Remove obsolete global visual effects.
- [ ] Establish container and grid.
- [ ] Establish spacing scale.

## Phase 2 — Navigation + Hero

- [ ] Simplify navigation.
- [ ] Remove cyberpunk branding treatment.
- [ ] Rebuild hero hierarchy.
- [ ] Reframe portrait.
- [ ] Establish CTA hierarchy.

## Phase 3 — Projects

- [ ] Replace IDE explorer presentation.
- [ ] Identify verified high-value projects.
- [ ] Create editorial project compositions.
- [ ] Make project imagery prominent.
- [ ] Add verified project links where available.
- [ ] Create a restrained project archive.

## Phase 4 — About + Capabilities

- [ ] Replace interactive card-heavy About section.
- [ ] Create editorial engineering statement.
- [ ] Group skills by capability.
- [ ] Preserve technical breadth.

## Phase 5 — Contact + Footer

- [ ] Create high-contrast contact section.
- [ ] Surface email.
- [ ] Simplify social links.
- [ ] Reduce footer.

## Phase 6 — Responsive

- [ ] Desktop review.
- [ ] Tablet review.
- [ ] Mobile composition review.
- [ ] Remove horizontal overflow.
- [ ] Check image crops.

## Phase 7 — Cleanup

- [ ] Remove unused effects.
- [ ] Remove unused dependencies after verifying usage.
- [ ] Remove dead CSS.
- [ ] Remove obsolete component logic.
- [ ] Run build and lint.
- [ ] Check accessibility.
- [ ] Check performance.

---

# 27. Final Review Checklist

## Visual

- [ ] The page feels quiet rather than empty.
- [ ] Typography carries the identity.
- [ ] Whitespace is intentional.
- [ ] Grid alignment is consistent.
- [ ] Black/white contrast feels art-directed.
- [ ] Accent color is restrained.
- [ ] Images are treated as content.
- [ ] Lines are structural rather than decorative.
- [ ] No unnecessary visual effects remain.

## Content

- [ ] Jessel's identity is immediately clear.
- [ ] Computer Engineering background is clear.
- [ ] Engineering breadth is visible.
- [ ] Selected projects are prioritized.
- [ ] Project descriptions explain actual work.
- [ ] Existing meaningful content is preserved.
- [ ] No unsupported claims were introduced.
- [ ] No project links were invented.

## Interaction

- [ ] Navigation is obvious.
- [ ] Links have clear states.
- [ ] Motion is subtle.
- [ ] No interaction is required to understand essential content.
- [ ] Reduced-motion support works.

## Responsive

- [ ] Desktop layout is intentionally composed.
- [ ] Tablet layout remains balanced.
- [ ] Mobile layout is intentionally redesigned.
- [ ] No horizontal overflow.
- [ ] Typography remains readable.
- [ ] Images remain useful.
- [ ] Touch targets are usable.

## Quality

- [ ] Accessibility checked.
- [ ] Performance checked.
- [ ] Build succeeds.
- [ ] Lint succeeds.
- [ ] Unused dependencies removed only after verification.
- [ ] No generic template patterns remain.
- [ ] The final page looks designed, not decorated.

---

# 28. North Star

The redesign succeeds when a visitor can look at the page and think:

> **This person builds real systems, and the portfolio was designed with the same care as the work.**

The interface should not compete with the projects.

It should create enough structure, contrast, whitespace, and typographic confidence that the work becomes the visual identity.

**Use less. Align better. Scale deliberately. Let the work carry the personality.**
