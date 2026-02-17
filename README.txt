================================================================================
  PROJECT ATLAS — Astro Website
  Temple City Unified School District Engineering Coalition
================================================================================

OVERVIEW
--------
This is the official website for Project Atlas, built with Astro for long-term
maintainability. The site builds to static HTML/CSS/JS.

TECH STACK
----------
  - Astro
  - HTML5 + Vanilla JS (scroll reveal, typewriter, counters)
  - CSS3
  - Google Fonts via CDN (Syne + Epilogue)
  - No runtime JavaScript frameworks

FILE STRUCTURE
--------------
  project-atlas-astro/
  ├── astro.config.mjs          ← Astro config (set your site URL here)
  ├── package.json
  ├── public/
  │   ├── styles/
  │   │   ├── main.css          ← Design system (colors, layout, nav, footer)
  │   │   └── animations.css    ← Keyframes, scroll reveal, badges
  │   └── assets/
  │       ├── js/
  │       │   └── main.js       ← Scroll reveal, typewriter, counters, form
  │       └── images/
  │           ├── logo-light.svg   ← REPLACE with your actual logo (light version)
  │           ├── logo-dark.svg    ← REPLACE with your actual logo (dark version)
  │           └── logo-placeholder.svg
  └── src/
      ├── data/
      │   ├── site.js           ← ★ EDIT: org name, links, social, stats
      │   └── teams.js          ← ★ EDIT: all six team names, descriptions, advisors
      ├── layouts/
      │   └── Layout.astro      ← Base HTML shell (head, nav, footer)
      ├── components/
      │   ├── Nav.astro         ← Navigation bar (edit navLinks array to add pages)
      │   ├── Footer.astro      ← Site footer
      │   ├── PageHero.astro    ← Reusable inner page hero section
      │   ├── CtaBanner.astro   ← Dark call-to-action section (used on home/purpose)
      │   └── TeamCard.astro    ← Individual team card (used on teams page)
      └── pages/
          ├── index.astro       ← Home / Landing page
          ├── purpose.astro     ← Mission, Vision, Values, Story
          ├── teams.astro       ← The six engineering teams
          ├── join.astro        ← For students & prospective families
          └── contact.astro     ← Contact info + contact form

HOW TO RUN LOCALLY
------------------
  Prerequisites: Node.js 18+ (https://nodejs.org)

  1. Install dependencies (only needed once):
       npm install

  2. Start development server:
       npm run dev

  3. Build for production:
       npm run build

  4. Preview the production build locally:
       npm run preview

HOW TO UPDATE CONTENT
---------------------
  STEP 1 — Site-wide settings (name, links, social, stats):
    Edit: src/data/site.js
    Changes appear automatically everywhere.

  STEP 2 — Team information (names, descriptions, advisors, tags):
    Edit: src/data/teams.js
    The teams page and home page preview both pull from this file.
    To add team photos, add a `photo: '/assets/images/teams/teamX.jpg'` key
    and drop the image in public/assets/images/teams/.

  STEP 3 — Page-specific copy (mission, story, FAQs, etc.):
    Each page has an "EDIT YOUR CONTENT HERE" section at the top of
    its frontmatter (the --- block). Edit variables there directly.


HOW TO CUSTOMIZE COLORS
------------------------
  All colors are CSS variables at the top of public/styles/main.css:

    --navy:   #1B2A4A;   ← Primary dark color
    --crimson: #A01830;   ← Accent red
    --green:  #2D5A45;   ← Accent green
    --bg:     #F5F4F0;   ← Page background

HOW TO ADD A PAGE
-----------------
  1. Create src/pages/my-new-page.astro (copy any page as a starting point)
  2. Add it to the navLinks array in src/components/Nav.astro:
       { href: '/my-new-page', label: 'My Page' }
  3. Done. The footer Navigate links are in src/components/Footer.astro.

HOW TO ENABLE CONTACT FORM EMAIL DELIVERY
------------------------------------------
  Forms are frontend-only by default. To activate real email delivery:

  Formspree:
    1. Sign up at https://formspree.io
    2. Create a form, copy your endpoint URL
    3. In src/data/site.js, set:
         formAction: 'https://formspree.io/f/YOUR_ID'
    4. The form action will be applied automatically to both forms.

DEPLOYMENT
----------
  The dist/ folder after `npm run build` is a static site. Deploy to:
    - GitHub Pages: push to a branch, configure Pages → Actions workflow
    - Netlify: drag-and-drop the dist/ folder, or connect your repo
    - Vercel: import your repo, set build command to `npm run build`

  GitHub Pages with Astro:
    If hosting at a subpath (e.g. github.io/project-atlas/), set:
      base: '/project-atlas'
    in astro.config.mjs before building.

CUSTOMIZING FONTS
-----------------
  Fonts are loaded from Google Fonts CDN in public/styles/main.css.

================================================================================
