# RCBNM Portfolio

A single-page portfolio built as a "draftsman's blueprint" — no framework,
no build step, no template. Open index.html directly or serve the folder
with any static server.

## Editing content
Everything you'd want to change lives in js/data.js — name, roles, bio,
experience, projects, skills, patents, education, certifications,
achievements, and contact links. The page renders itself from that file,
so editing content never requires touching HTML or CSS.

## Editing design
- css/style.css — layout, color tokens (top of the file under :root),
  and typography.
- css/animations.css — every motion effect: the self-drawing trace
  spine, reveal-on-scroll, hover states, and the terminal typewriter.
- js/main.js — renders data.js into the DOM and wires up the custom
  cursor, scroll-linked trace spine, 3D hero tilt, lightbox, signature
  pad, and the live GitHub feed.

## Swapping the resume
Replace assets/resume.pdf. Every "Download resume" link and button
points at the single path set in data.js (meta.resumePdf), so there's
nothing else to update.

## Notes
- Fonts (Instrument Serif, Source Serif 4, IBM Plex Mono) load from Google
  Fonts via @import in style.css.
- The custom cursor and 3D tilt auto-disable on touch devices.
- Respects prefers-reduced-motion.
