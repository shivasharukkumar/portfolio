# Shiva Sharuk Kumar — Engineering Portfolio

A static, dependency-free portfolio site (plain HTML/CSS/JS — no build step, no framework).
Open `index.html` in a browser, or deploy the folder as-is to GitHub Pages, Netlify, or Vercel.

## Structure

```
index.html          Page markup for every section (hero, about, projects, skills, contact, etc.)
404.html             Standalone not-found page for hosts that support a custom 404 (e.g. GitHub Pages)
css/style.css        All styling — design tokens (colors/fonts) live at the top as CSS variables
js/data.js           ALL editable content: your profile, skills, timeline, achievements, and projects
js/icons.js          Small hand-built icon set (no external icon font dependency)
js/app.js            Rendering logic — reads data.js and builds the page. You shouldn't need to
                     touch this file just to add/edit content.
favicon.svg          Site icon
```

## How to edit your content

Everything you'll want to change day-to-day lives in **`js/data.js`**:

- `PROFILE` — your name, title, tagline, email, GitHub/LinkedIn links, resume link, about text
- `SKILLS` — skill categories and chips
- `TIMELINE` — education + experience entries (shown in the About section timeline)
- `ACHIEVEMENTS` — certifications, workshops, hackathons, awards (placeholders are clearly marked)
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

## Notes

- All project technical details in `data.js` are placeholders marked `EDITABLE` — replace them with
  your real project write-ups. No fake achievements or statistics have been included anywhere.
- Project thumbnails are generated with inline SVG (schematic-style icon + grid), so there are no
  broken image links before you add real photos. Add real images/screenshots inside each project's
  "Gallery" section when ready (see the `gallery-placeholder` block in `js/app.js`).
- Dark mode is default; the theme toggle in the navbar switches to light mode and remembers the
  choice for return visits.
