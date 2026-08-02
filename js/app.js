/* ============================================================
   APP LOGIC
   Reads content from data.js (PROFILE, SKILLS, TIMELINE,
   PROJECTS, CATEGORIES) and icons from icons.js.
   This file only renders — no content should be hardcoded here.
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- Small storage helper (never throws) ---------------- */
  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem(key);
        return v === null ? fallback : v;
      } catch (e) { return fallback; }
    },
    set(key, val) {
      try { localStorage.setItem(key, val); } catch (e) { /* ignore */ }
    },
  };

  /* ---------------- Theme ---------------- */
  function initTheme() {
    const saved = store.get("theme", null);
    const theme = saved || "light";
    document.documentElement.setAttribute("data-theme", theme);
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store.set("theme", next);
  }

  /* ---------------- Navbar scroll state + mobile menu ---------------- */
  function initNav() {
    const nav = document.querySelector(".navbar");
    const onScroll = () => {
      if (window.scrollY > 12) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
      updateActiveLink();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const burger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    burger.addEventListener("click", () => {
      const open = burger.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        burger.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");
      })
    );
  }

  function updateActiveLink() {
    const sections = ["home", "about", "projects", "skills", "experience", "contact"];
    let current = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 140) current = id;
    }
    document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------------- Hero circuit trace SVG ---------------- */
  function heroTracesSVG() {
    return `<svg class="traces" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <path class="trace-path" d="M0 60 H70 L95 85 V150" />
      <path class="trace-path copper" d="M300 90 H230 L205 115 V190 L180 215 H120" />
      <path class="trace-path" d="M40 300 V230 L65 205 H140" />
      <path class="trace-path copper" d="M300 230 H250 L225 255 V300" />
      <path class="trace-path" d="M0 180 H30 L55 155 V60 L80 35" />
      <circle class="trace-node" cx="95" cy="85" r="4"/>
      <circle class="trace-node" cx="205" cy="115" r="4"/>
      <circle class="trace-node" cx="140" cy="205" r="4"/>
      <circle class="trace-node" cx="55" cy="155" r="4"/>
      <circle class="trace-node" cx="225" cy="255" r="4"/>
      <circle class="trace-node" cx="80" cy="35" r="4"/>
    </svg>`;
  }

  /* ---------------- Project thumbnail (generated, no external images needed) ---------------- */
  const THUMB_ICONS = {
    bridge: "bridge", maze: "maze", oled: "chip", games: "gamepad",
    ride: "car", hospital: "clipboard", pharmacy: "pill", predictive: "trend",
    sinthana: "poll",
  };
  function projectThumbSVG(project) {
    if (project.thumbnail) {
      return `<img src="${project.thumbnail}" alt="${project.title} thumbnail" loading="lazy" onerror="this.closest('.project-thumb, .detail-hero-thumb').innerHTML = window.__fallbackThumb('${project.id}')" />`;
    }
    return buildGeneratedThumb(project);
  }

  function buildGeneratedThumb(project) {
    const iconKey = THUMB_ICONS[project.image] || "cpu";
    // deterministic-ish gradient angle from id so cards feel distinct, not random
    let hash = 0;
    for (let i = 0; i < project.id.length; i++) hash = (hash * 31 + project.id.charCodeAt(i)) % 360;
    return `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g-${project.id}" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(${hash},0.5,0.5)">
          <stop offset="0%" stop-color="#161b25"/>
          <stop offset="100%" stop-color="#0c0f16"/>
        </linearGradient>
        <pattern id="grid-${project.id}" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M22 0H0V22" fill="none" stroke="rgba(233,238,246,0.05)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="400" height="250" fill="url(#g-${project.id})"/>
      <rect width="400" height="250" fill="url(#grid-${project.id})"/>
      <circle cx="200" cy="125" r="54" fill="none" stroke="#c8793e" stroke-opacity="0.35" stroke-width="1.4"/>
      <circle cx="200" cy="125" r="72" fill="none" stroke="#5eead4" stroke-opacity="0.22" stroke-width="1.2"/>
      <g transform="translate(178,103)" color="#e8a565" stroke="#e8a565">
        <foreignObject width="44" height="44">
        </foreignObject>
      </g>
      <g transform="translate(178,103) scale(1.8)" fill="none" stroke="#e8a565" stroke-width="1.4">
        ${icon(iconKey).replace(/<svg[^>]*>/, "").replace("</svg>", "")}
      </g>
    </svg>`;
  }

  window.__fallbackThumb = function (id) {
    const proj = PROJECTS.find((p) => p.id === id);
    return proj ? buildGeneratedThumb(proj) : "";
  };

  /* ---------------- Skills ---------------- */
  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = SKILLS.map(
      (cat, i) => `
      <div class="skill-card glass reveal" style="transition-delay:${i * 60}ms">
        <div class="skill-card-head">
          <div class="skill-icon">${icon(cat.icon)}</div>
          <h3>${cat.category}</h3>
        </div>
        <div class="skill-chips">
          ${cat.items.map((s) => `<span class="skill-chip">${s}</span>`).join("")}
        </div>
      </div>`
    ).join("");
  }

  /* ---------------- Timeline ---------------- */
  function renderTimeline() {
    const el = document.getElementById("timelineList");
    const sorted = [...TIMELINE].sort((a, b) => a.order - b.order);
    el.innerHTML = sorted
      .map(
        (item, i) => `
      <div class="timeline-item type-${item.type} reveal" style="transition-delay:${i * 90}ms">
        <div class="timeline-period">${item.period} / ${item.type === "education" ? "Education" : "Experience"}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-org">${item.org}</div>
        <p class="timeline-desc">${item.description}</p>
        ${
          item.highlights
            ? `<div class="timeline-highlights">${item.highlights.map((h) => `<span>${h}</span>`).join("")}</div>`
            : ""
        }
      </div>`
      )
      .join("");
  }

  /* ---------------- Projects: grid, filters, search ---------------- */
  const state = { category: "all", query: "" };

  function statusClass(status) {
    return "status-" + status.toLowerCase().replace(/\s+/g, "-");
  }

  function projectCard(p, i) {
    return `
    <article class="project-card glass reveal" data-id="${p.id}" style="transition-delay:${(i % 9) * 55}ms">
      <div class="project-thumb">
        ${projectThumbSVG(p)}
        <span class="project-status ${statusClass(p.status)}">${p.status}</span>
      </div>
      <div class="project-body">
        <div class="project-category">${CATEGORIES.find((c) => c.key === p.category)?.label || p.category}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDescription}</p>
        <div class="project-tech">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
        <div class="project-actions">
          ${p.github ? `<a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener">${icon("github")} Code</a>` : `<span class="btn btn-ghost is-disabled">${icon("github")} Code</span>`}
          ${p.demo ? `<a class="btn btn-ghost" href="${p.demo}" target="_blank" rel="noopener">${icon("external")} Demo</a>` : `<span class="btn btn-ghost is-disabled">${icon("external")} Demo</span>`}
          <a class="btn btn-primary" href="#/project/${p.id}">${icon("arrowRight")} Details</a>
        </div>
      </div>
    </article>`;
  }

  function filteredProjects() {
    const q = state.query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesCat = state.category === "all" || p.category === state.category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }

  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    const list = filteredProjects();
    if (!list.length) {
      grid.innerHTML = `
        <div class="empty-state">
          ${icon("search")}
          <h3>No projects match</h3>
          <p>Try a different category or search term.</p>
        </div>`;
      return;
    }
    grid.innerHTML = list.map((p, i) => projectCard(p, i)).join("");
    initReveal();
  }

  function renderFilterChips() {
    const el = document.getElementById("filterChips");
    el.innerHTML = CATEGORIES.map(
      (c) => `<button class="filter-chip${c.key === state.category ? " active" : ""}" data-cat="${c.key}">${c.label}</button>`
    ).join("");
    el.querySelectorAll(".filter-chip").forEach((btn) =>
      btn.addEventListener("click", () => {
        state.category = btn.dataset.cat;
        renderFilterChips();
        renderProjects();
      })
    );
  }

  function initProjectSearch() {
    const input = document.getElementById("projectSearch");
    input.addEventListener("input", () => {
      state.query = input.value;
      renderProjects();
    });
  }

  /* ---------------- Project detail (hash route: #/project/:id) ---------------- */
  function detailBlock(title, content) {
    if (!content) return "";
    return `<div class="detail-block"><h3>${title}</h3>${content}</div>`;
  }
  function listBlock(title, items) {
    if (!items || !items.length) return "";
    return detailBlock(title, `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`);
  }

  function galleryBlock(p) {
    if (p.gallery && p.gallery.length) {
      const imgs = p.gallery
        .map((src, i) => `<img src="${src}" alt="${p.title} photo ${i + 1}" loading="lazy" class="gallery-img" onerror="this.style.display='none'" />`)
        .join("");
      return detailBlock("Gallery", `<div class="gallery-grid">${imgs}</div>`);
    }
    return detailBlock("Gallery", `<div class="gallery-placeholder">${icon("image")}<div style="margin-top:10px">Editable — add project photos here</div></div>`);
  }

  // Optional rich fields — only rendered when a project actually provides them,
  // so simpler project entries stay exactly as before.
  function optP(p, key, label) {
    return p[key] ? detailBlock(label, `<p>${p[key]}</p>`) : "";
  }
  function optList(p, key, label) {
    return p[key] && p[key].length ? listBlock(label, p[key]) : "";
  }

  function renderProjectDetail(id) {
    const overlay = document.getElementById("detailOverlay");
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) {
      overlay.classList.remove("is-open");
      window.location.hash = "#/404";
      return;
    }
    const content = document.getElementById("detailContent");
    content.innerHTML = `
      <div class="detail-hero-thumb">${projectThumbSVG(p)}</div>
      <div class="detail-eyebrow">${CATEGORIES.find((c) => c.key === p.category)?.label || p.category}</div>
      <h1 class="detail-title">${p.title}</h1>
      <div class="detail-meta-row">
        <span class="project-status ${statusClass(p.status)}">${p.status}</span>
        <div class="detail-tags">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
      </div>
      <div class="detail-links">
        ${p.github ? `<a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener">${icon("github")} View Repository</a>` : `<span class="btn btn-ghost is-disabled">${icon("github")} Repository not linked yet</span>`}
        ${p.demo ? `<a class="btn btn-primary" href="${p.demo}" target="_blank" rel="noopener">${icon("external")} Live Demo</a>` : `<span class="btn btn-primary is-disabled">${icon("external")} Demo not linked yet</span>`}
      </div>

      ${detailBlock("Overview", `<p>${p.overview}</p>`)}
      ${optP(p, "objective", "Objective")}
      ${detailBlock("Problem Statement", `<p>${p.problem}</p>`)}
      ${detailBlock("Solution", `<p>${p.solution}</p>`)}
      ${optP(p, "architecture", "Architecture")}
      ${optList(p, "workflow", "Workflow")}
      ${listBlock("Key Features", p.features)}
      ${optList(p, "questionTypes", "Question Types")}
      ${optList(p, "games", "Games Included")}
      ${optList(p, "roles", "User Roles")}
      ${listBlock("Hardware Used", p.hardware)}
      ${listBlock("Software Used", p.software)}
      ${detailBlock("How It Works", `<p>${p.howItWorks}</p>`)}
      ${optP(p, "scoringSystem", "Scoring System")}
      ${optP(p, "accessControl", "Access Control")}
      ${optList(p, "monitoringParameters", "Monitoring Parameters")}
      ${optList(p, "alertConditions", "Alert Conditions")}
      ${optList(p, "algorithms", "Algorithms Used")}
      ${galleryBlock(p)}
      ${detailBlock("Demo Video", `<div class="video-placeholder">${icon("play")}<div>Editable — embed a demo video link here</div></div>`)}
      ${detailBlock("Challenges", `<p>${p.challenges}</p>`)}
      ${optP(p, "learning", "What I Learned")}
      ${detailBlock("Future Improvements", `<p>${p.future}</p>`)}
    `;
    overlay.classList.add("is-open");
    overlay.scrollTop = 0;
    document.body.style.overflow = "hidden";
  }

  function closeProjectDetail() {
    document.getElementById("detailOverlay").classList.remove("is-open");
    document.body.style.overflow = "";
  }

  /* ---------------- Router (hash-based, keeps this a single static file set) ---------------- */
  function handleRoute() {
    const hash = window.location.hash;
    const match = hash.match(/^#\/project\/(.+)$/);
    const notFound = document.getElementById("notFoundOverlay");
    if (match) {
      notFound.classList.remove("is-open");
      renderProjectDetail(decodeURIComponent(match[1]));
    } else if (hash === "#/404") {
      closeProjectDetail();
      notFound.classList.add("is-open");
      document.body.style.overflow = "hidden";
    } else {
      closeProjectDetail();
      notFound.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  }

  /* ---------------- Contact form (front-end validation; wire to your backend/service of choice) ---------------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
    const submitBtn = form.querySelector("button[type='submit']");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const name = (data.get("name") || "").trim();
      const email = (data.get("email") || "").trim();
      const subject = (data.get("subject") || "").trim();
      const message = (data.get("message") || "").trim();

      // No endpoint configured — fall back to opening the visitor's email app with everything
      // pre-filled, so the form still works with zero setup.
      if (!PROFILE.formEndpoint) {
        const body = `${message}\n\n— ${name} (${email})`;
        const mailto = `mailto:${encodeURIComponent(PROFILE.email)}?subject=${encodeURIComponent(subject || "Portfolio contact form")}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        status.textContent = "Opening your email app to send this — no endpoint is configured yet (see js/data.js).";
        status.classList.remove("is-error");
        status.classList.add("is-visible");
        return;
      }

      const originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
      status.classList.remove("is-visible", "is-error");

      try {
        const res = await fetch(PROFILE.formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });

        if (res.ok) {
          status.textContent = "Message sent — thanks for reaching out, I'll get back to you soon.";
          status.classList.add("is-visible");
          form.reset();
        } else {
          throw new Error("Form endpoint returned an error");
        }
      } catch (err) {
        status.textContent = "Something went wrong sending that. Please email me directly instead.";
        status.classList.add("is-visible", "is-error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    });
  }

  /* ---------------- Hero role typewriter (cycles through the "|"-separated titles) ---------------- */
  function startRoleTypewriter(roleParts) {
    const el = document.getElementById("heroRole");
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || roleParts.length <= 1) {
      el.innerHTML = roleParts.map((r) => `<span>${r}</span>`).join('<span class="sep">/</span>');
      return;
    }

    let partIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const TYPE_MS = 45;
    const DELETE_MS = 28;
    const HOLD_MS = 1600;

    el.innerHTML = `<span class="type-text"></span><span class="type-cursor"></span>`;
    const textEl = el.querySelector(".type-text");

    function tick() {
      const current = roleParts[partIndex];
      if (!deleting) {
        charIndex++;
        textEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, HOLD_MS);
          return;
        }
        setTimeout(tick, TYPE_MS);
      } else {
        charIndex--;
        textEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          partIndex = (partIndex + 1) % roleParts.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, DELETE_MS);
      }
    }
    setTimeout(tick, TYPE_MS);
  }

  /* ---------------- Profile bindings (hero, about, contact, footer) ---------------- */
  function bindProfile() {
    document.querySelectorAll("[data-bind='year']").forEach((el) => (el.textContent = new Date().getFullYear()));

    document.getElementById("heroName").textContent = PROFILE.name;
    document.title = PROFILE.name + " — " + PROFILE.title.split("|")[0].trim();

    const roleParts = PROFILE.title.split("|").map((s) => s.trim());
    startRoleTypewriter(roleParts);

    document.getElementById("heroDesc").textContent = PROFILE.tagline;
    document.getElementById("resumeBtn").setAttribute("href", PROFILE.resumeUrl);

    document.querySelectorAll("[data-bind='github']").forEach((el) => el.setAttribute("href", PROFILE.github));
    document.querySelectorAll("[data-bind='linkedin']").forEach((el) => el.setAttribute("href", PROFILE.linkedin));
    document.querySelectorAll("[data-bind='email-link']").forEach((el) => el.setAttribute("href", "mailto:" + PROFILE.email));
    document.querySelectorAll("[data-bind='email-text']").forEach((el) => (el.textContent = PROFILE.email));

    document.getElementById("aboutText").innerHTML = PROFILE.about
      .split(/\n\s*\n|\r\n\r\n/)
      .map((p) => `<p>${p.trim()}</p>`)
      .join("");

    document.getElementById("interestTags").innerHTML = PROFILE.interests
      .map((i) => `<span class="interest-tag">${i}</span>`)
      .join("");

    document.getElementById("footerTagline").textContent = PROFILE.tagline;

    if (PROFILE.photo) {
      const frame = document.getElementById("portraitFrame");
      const original = frame.innerHTML;
      const img = document.createElement("img");
      img.src = PROFILE.photo;
      img.alt = PROFILE.name;
      img.loading = "lazy";
      img.onerror = () => { frame.innerHTML = original; };
      frame.innerHTML = "";
      frame.appendChild(img);
    }
  }

  /* ---------------- Ambient sound: plays audio/ambient-loop.(ogg|mp3) ----------------
     A real, downloadable audio file — a calm, seamlessly-looping ambient pad rendered
     to audio/ambient-loop.wav (lossless master) and encoded to .ogg (primary) and .mp3
     (fallback) for the <audio> element in index.html. Nothing here is copyrighted: the
     loop was synthesized from scratch (see the generation notes in the audio/ folder's
     README mention) so there's nothing to license or attribute. This function just
     handles the click-to-play/pause toggle and a smooth volume fade in both directions
     instead of an abrupt on/off. */
  function initAmbientSound() {
    const btn = document.getElementById("ambientToggle");
    const audio = document.getElementById("ambientAudio");
    if (!btn || !audio) return;

    btn.innerHTML = `<span class="ambient-icon">${icon("musicOff")}</span><span class="ambient-rings" aria-hidden="true"><span></span><span></span></span>`;
    const iconEl = () => btn.querySelector(".ambient-icon");

    const TARGET_VOLUME = 0.35;
    const FADE_MS = 1400;
    audio.volume = 0;

    let isPlaying = false;
    let fadeFrame = null;

    function fade(to, onDone) {
      if (fadeFrame) cancelAnimationFrame(fadeFrame);
      const from = audio.volume;
      const start = performance.now();
      function step(now) {
        const t = Math.min(1, (now - start) / FADE_MS);
        audio.volume = from + (to - from) * t;
        if (t < 1) {
          fadeFrame = requestAnimationFrame(step);
        } else {
          fadeFrame = null;
          if (onDone) onDone();
        }
      }
      fadeFrame = requestAnimationFrame(step);
    }

    function start() {
      if (isPlaying) return;
      const playPromise = audio.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch(() => { /* blocked without a user gesture; button click always provides one */ });
      }
      fade(TARGET_VOLUME);
      isPlaying = true;
      btn.classList.add("is-playing");
      btn.setAttribute("aria-pressed", "true");
      btn.setAttribute("aria-label", "Pause calm background ambience");
      iconEl().innerHTML = icon("musicOn");
    }

    function stop() {
      if (!isPlaying) return;
      fade(0, () => audio.pause());
      isPlaying = false;
      btn.classList.remove("is-playing");
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", "Play calm background ambience");
      iconEl().innerHTML = icon("musicOff");
    }

    btn.addEventListener("click", () => {
      if (isPlaying) stop();
      else start();
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
    document.getElementById("heroTraces").innerHTML = heroTracesSVG();

    initNav();
    renderSkills();
    renderTimeline();
    renderFilterChips();
    renderProjects();
    initProjectSearch();
    initContactForm();
    bindProfile();
    initReveal();
    initAmbientSound();

    document.querySelectorAll("[data-close-detail]").forEach((el) =>
      el.addEventListener("click", () => {
        history.pushState("", document.title, window.location.pathname + window.location.search);
        closeProjectDetail();
      })
    );

    window.addEventListener("hashchange", handleRoute);
    handleRoute();
  });
})();
