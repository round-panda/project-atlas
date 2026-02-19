# Project Atlas — Astro Website

Temple City Unified School District STEM Coalition

---

## Overview

This is the official website for Project Atlas, built with Astro for long-term maintainability.

The site builds to static HTML, CSS, and JavaScript.

---

## Tech Stack

* Astro
* HTML5 + Vanilla JavaScript (scroll reveal, typewriter, counters)
* CSS3
* Google Fonts via CDN (Syne + Epilogue)
* No runtime JavaScript frameworks

---

## How to Run Locally

**Prerequisites:**
Node.js 18+ — [https://nodejs.org](https://nodejs.org)

### 1. Install dependencies (only needed once)

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build locally

```bash
npm run preview
```

---

## How to Update Content

### Team Information

Names, descriptions, advisors, and tags:

Edit:

```
src/data/teams.js
```

Both the Teams page and Home page preview pull from this file.

To add team photos:

1. Add a key to the team object:

   ```js
   photo: '/assets/images/teams/teamX.jpg'
   ```
2. Place the image in:

   ```
   public/assets/images/teams/
   ```

---

## How to Add a Page

1. Create a new file:

   ```
   src/pages/my-new-page.astro
   ```

   (Copy any existing page as a starting point.)

2. Add it to the navigation in:

   ```
   src/components/Nav.astro
   ```

   Add to the `navLinks` array:

   ```js
   { href: '/my-new-page', label: 'My Page' }
   ```

3. Update footer links in:

   ```
   src/components/Footer.astro
   ```

---

## How to Enable Contact Form Email Delivery

To activate email delivery:

### Using Formspree

1. Sign up at: [https://formspree.io](https://formspree.io)
2. Create a form and copy your endpoint URL
3. In:

   ```
   src/data/site.js
   ```

   Set:

   ```js
   formAction: 'https://formspree.io/f/YOUR_ID'
   ```
4. The form action will automatically apply to both forms.

---

## Deployment

After running:

```bash
npm run build
```

The `dist/` folder contains a fully static site.

You can deploy to:

* GitHub Pages — Push to a branch and configure Pages via Actions workflow
* Netlify — Drag and drop the `dist/` folder or connect your repository
* Vercel — Import your repository and set the build command to:

  ```bash
  npm run build
  ```

---

## GitHub Pages with Astro

If hosting at a subpath (for example: `github.io/project-atlas/`), set the following in `astro.config.mjs` before building:

```js
base: '/project-atlas'
```
