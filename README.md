# Shiva Sharuk Kumar — Engineering Portfolio

A static, dependency-free portfolio site (plain HTML/CSS/JS — no build step, no framework).
Open `index.html` in a browser, or deploy the folder as-is to GitHub Pages, Netlify, or Vercel.

## Structure

```
index.html          Page markup for every section (hero, about, projects, skills, contact, etc.)
404.html             Standalone not-found page for hosts that support a custom 404 (e.g. GitHub Pages)
css/style.css        All styling — design tokens (colors/fonts) live at the top as CSS variables
js/data.js           ALL editable content: your profile, skills, timeline, and projects
js/icons.js          Small hand-built icon set (no external icon font dependency)
js/app.js            Rendering logic — reads data.js and builds the page. You shouldn't need to
                     touch this file just to add/edit content.
favicon.svg          Site icon
```

## How to add photos

The site ships with generated schematic placeholders (no broken image icons) so it looks
finished before you add real photos. There are three places to add them, all in `js/data.js`:

**1. Your profile photo (hero section)**
- Put your photo in the `images/` folder, e.g. `images/profile.jpg`
- In `js/data.js`, set: `photo: "images/profile.jpg"` inside the `PROFILE` object
- Square-ish photos (close to 1:1) look best — the frame crops to fill it

**2. A project's card thumbnail**
- Put the image in `images/projects/`, e.g. `images/projects/maze-solver.jpg`
- Find that project in the `PROJECTS` array in `js/data.js` and set:
  `thumbnail: "images/projects/maze-solver.jpg"`
- Landscape photos around 16:10 work best (that's the card's crop ratio)
- Leave `thumbnail: ""` to keep the generated schematic icon for that project

**3. A project's detail-page gallery**
- Add multiple images to `images/projects/`, e.g. `maze-solver-1.jpg`, `maze-solver-2.jpg`
- On that same project, set:
  ```js
  gallery: ["images/projects/maze-solver-1.jpg", "images/projects/maze-solver-2.jpg"]
  ```
- They'll render as a photo grid on the project's detail page instead of the placeholder

**Notes**
- Paths are relative to `index.html`, so keep images inside this folder (or a subfolder) —
  don't reference files elsewhere on your computer.
- If a path is wrong/missing, the thumbnail automatically falls back to the generated icon
  instead of showing a broken image.
- Compress photos before adding them (aim under ~300–500 KB each) so the site stays fast —
  tools like squoosh.app or TinyPNG work well.
- Supported formats: `.jpg`, `.png`, `.webp` (webp gives the smallest file size for the same quality).

## How to edit your content

Everything you'll want to change day-to-day lives in **`js/data.js`**:

- `PROFILE` — your name, title, tagline, email, GitHub/LinkedIn links, resume link, about text
- `SKILLS` — skill categories and chips
- `TIMELINE` — education + experience entries (shown in the About section timeline)
- `PROJECTS` — every project card **and** its detail page content
- `CATEGORIES` — the filter chips shown above the project grid

### Adding a new project

Copy an existing object inside the `PROJECTS` array in `js/data.js`, give it a unique `id`,
and fill in the fields. A project detail page (`#/project/your-id`) is generated automatically —
no new HTML file or route needs to be created.

### Adding a resume file

Drop your resume PDF into this folder (e.g. `resume.pdf`) and set `PROFILE.resumeUrl = "resume.pdf"`.

### Wiring up the contact form

The form currently validates and shows a confirmation message client-side only. To actually send
messages, connect it to a form backend of your choice (e.g. Formspree, EmailJS, or your own API) —
see the `initContactForm` function in `js/app.js`.

## Deploying it live (free static hosting)

This is a static site — plain HTML/CSS/JS with no build step and no database — so any static
host works. No backend or database (Neon, etc.) is needed for the portfolio itself; that's
only relevant for full-stack projects like Sinthana, which has its own separate deploy notes.

**GitHub Pages** (simplest, free forever)
1. Create a new GitHub repo and push this folder's contents to it.
2. Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main` → `/ (root)`.
3. Your site goes live at `https://<username>.github.io/<repo-name>/` within a minute or two.

**Netlify**
1. Sign in at netlify.com → "Add new site" → "Deploy manually" (drag-and-drop this folder), or
   "Import from Git" if you pushed it to GitHub.
2. No build command needed — leave "Publish directory" as the repo root.
3. Netlify gives you a live `*.netlify.app` URL immediately; add a custom domain under
   Site settings → Domain management if you have one.

**Vercel**
1. Sign in at vercel.com → "Add New… → Project" → import the GitHub repo.
2. Framework preset: "Other" (static). Leave build command empty, output directory as `.`
3. Deploy — you'll get a `*.vercel.app` URL.

**Cloudflare Pages**
1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
2. Build command: none. Build output directory: `/` (root).
3. Deploy — you'll get a `*.pages.dev` URL.

Whichever you pick, once it's live: update `PROFILE.resumeUrl` and any project `github`/`demo`
links in `js/data.js`, then redeploy (pushing to the connected repo is enough for Netlify/
Vercel/Cloudflare/GitHub Pages to auto-rebuild).

## Notes

- All project technical details in `data.js` are placeholders marked `EDITABLE` — replace them with
  your real project write-ups. No fake achievements or statistics have been included anywhere.
- Project thumbnails are generated with inline SVG (schematic-style icon + grid), so there are no
  broken image links before you add real photos. Add real images/screenshots inside each project's
  "Gallery" section when ready (see the `gallery-placeholder` block in `js/app.js`).
- Dark mode is default; the theme toggle in the navbar switches to light mode and remembers the
  choice for return visits.
