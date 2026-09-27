/* Lógica de la página: no hace falta tocar nada aquí para añadir contenido. */
(function () {
  const D = window.PORTFOLIO;
  const T = window.I18N;
  const LANGS = ["ca", "es", "en"];

  let lang = pickLang();

  // ---------- utilidades ----------
  function pickLang() {
    try {
      const saved = localStorage.getItem("lang");
      if (LANGS.includes(saved)) return saved;
    } catch (e) {}
    const nav = (navigator.language || "ca").slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : "ca";
  }
  const t = (key) => (T[lang] && T[lang][key]) || T.ca[key] || "";
  const tr = (v) => (v == null ? "" : typeof v === "string" ? v : v[lang] || v.ca || v.es || "");
  const has = (s) => typeof s === "string" && s.trim() !== "";
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel) => document.querySelector(sel);

  // ---------- cabecera, presentación, contacto ----------
  function renderStatic() {
    document.documentElement.lang = lang;
    const page = document.body.dataset.page || "home";
    document.title = t(page === "journey" ? "meta.journey" : page === "corner" ? "meta.corner" : "meta.title");
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.desc"));

    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    const p = D.person;
    if ($("#person-name")) $("#person-name").textContent = p.name;


    // El correo se muestra con espacios y el enlace solo se crea al hacer clic (anti-spam)
    const [user, domain] = [].concat(p.email);
    const mail = $("#contact-mail");
    mail.href = "#contact";
    mail.textContent = user + " @ " + domain;
    mail.onclick = (e) => { e.preventDefault(); window.location.href = "mailto:" + user + String.fromCharCode(64) + domain; };
    if ($("#hero-mail")) $("#hero-mail").href = "#contact";

    const cv = $("#hero-cv");
    if (cv) cv.hidden = !has(p.cv);
    if (cv && has(p.cv)) cv.href = p.cv;

    const photo = $("#hero-photo");
    if (photo) photo.hidden = !has(p.photo);
    if (photo && has(p.photo)) photo.querySelector("img").src = p.photo;

    const socials = [
      ["Amazon", p.amazon],
      ["Google Play", p.googlePlay],
      ["GitHub", p.github],
      ["LinkedIn", p.linkedin]
    ].filter(([, url]) => has(url));
    $("#socials").innerHTML = socials
      .map(([name, url]) => `<li><a class="btn btn--ghost" href="${esc(url)}" target="_blank" rel="noopener">${name}</a></li>`)
      .join("");
  }

  // ---------- apartados con tarjetas ----------
  function cardHTML(item, idx) {
    const title = tr(item.title);
    const sub = tr(item.subtitle);
    const isBook = item.section === "books";
    const links = (item.links || []).filter((l) => has(l.url));

    // Imagen: puede ser una ruta o una lista de rutas (se prueba en orden).
    // Si ninguna carga, se muestra el título o la letra/símbolo.
    const fallback = isBook
      ? `<span class="book-fallback">${esc(title)}</span>`
      : `<span class="flip__letter">${esc(item.glyph || title.charAt(0))}</span>`;
    const imgs = [].concat(item.image || []).filter(has);
    let visual = fallback;
    if (imgs.length) {
      const cls = item.fit === "logo" ? ' class="is-logo"'
        : !isBook && (/googleusercontent|icon/i.test(imgs[0])) ? ' class="is-icon"' : "";
      visual = `<img${cls} src="${esc(imgs[0])}" alt="" loading="lazy"
        data-next="${esc(JSON.stringify(imgs.slice(1)))}" data-fallback="${esc(fallback)}">`;
    }

    const actions = links.map((l, i) =>
      `<a class="btn ${i === 0 ? "btn--solid" : ""}" href="${esc(l.url)}" target="_blank" rel="noopener" tabindex="-1">${esc(t("link." + l.type))} ↗</a>`
    ).join("");

    const caption = `
            <span class="flip__caption">
              ${item.badge ? `<span class="flip__badge">${esc(tr(item.badge))}</span>` : ""}
              <span class="flip__title" style="display:block">${esc(title)}</span>
              ${sub ? `<span class="flip__sub" style="display:block">${esc(sub)}</span>` : ""}
            </span>`;

    // Tarjeta de enlace directo (webs y apps en línea): no se gira
    if (has(item.open)) {
      return `
      <div class="flip flip--link">
        <a class="flip__face flip__front" href="${esc(item.open)}" target="_blank" rel="noopener">
          <span class="flip__visual">${visual}<span class="flip__hint" aria-hidden="true">${esc(t("open.hint"))} ↗</span></span>
          ${caption}
        </a>
      </div>`;
    }

    const backId = `back-${item.section}-${idx}`;
    return `
      <div class="flip">
        <div class="flip__inner">
          <button type="button" class="flip__face flip__front" aria-expanded="false" aria-controls="${backId}"
                  aria-label="${esc(title)} — ${esc(t("flip.hint"))}">
            <span class="flip__visual">${visual}<span class="flip__hint" aria-hidden="true">${esc(t("flip.hint"))} ↻</span></span>
            <span class="flip__caption">
              ${item.badge ? `<span class="flip__badge">${esc(tr(item.badge))}</span>` : ""}
              <span class="flip__title" style="display:block">${esc(title)}</span>
              ${sub ? `<span class="flip__sub" style="display:block">${esc(sub)}</span>` : ""}
            </span>
          </button>
          <div class="flip__face flip__back" id="${backId}" aria-hidden="true">
            ${has(item.year) ? `<span class="year">${esc(item.year)}</span>` : ""}
            ${item.badge ? `<span class="flip__badge">${esc(tr(item.badge))}</span>` : ""}
            <div class="flip__title">${esc(tr(item.backTitle) || title)}</div>
            <p>${esc(tr(item.summary))}</p>
            <div class="flip__actions">
              ${actions || (item.section === "private" ? `<span class="flip__private">${esc(t("flip.private"))}</span>` : "")}
              <button type="button" class="flip__close" tabindex="-1">↺ ${esc(t("flip.back"))}</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  function renderShelves() {
    if (!$("#shelves")) return;
    $("#shelves").innerHTML = D.sections.map((s) => {
      const items = D.items.filter((it) => it.section === s.id);
      if (!items.length) return "";
      return `
        <section class="shelf shelf--${esc(s.id)} reveal" aria-labelledby="shelf-${esc(s.id)}">
          <div class="shelf__head">
            <h3 class="shelf__title" id="shelf-${esc(s.id)}">${esc(tr(s.title))}</h3>
            ${s.count === false ? "" : `<span class="shelf__count">${items.length}</span>`}
          </div>
          ${s.note ? `<p class="shelf__note">${esc(tr(s.note))}</p>` : ""}
          <div class="shelf__row">${items.map(cardHTML).join("")}</div>
        </section>`;
    }).join("");
  }

  function setFlipped(flip, on) {
    flip.classList.toggle("is-flipped", on);
    const front = flip.querySelector(".flip__front");
    const back = flip.querySelector(".flip__back");
    front.setAttribute("aria-expanded", String(on));
    front.tabIndex = on ? -1 : 0;
    back.setAttribute("aria-hidden", String(!on));
    back.querySelectorAll("a, button").forEach((el) => { el.tabIndex = on ? 0 : -1; });
    if (on) { const first = back.querySelector("a, button"); if (first) setTimeout(() => first.focus({ preventScroll: true }), 350); }
    else setTimeout(() => front.focus({ preventScroll: true }), 50);
  }

  // ---------- recorrido ----------
  function renderJourney() {
    const J = D.journey;
    if (!J || !$("#timeline")) return;
    const show = (id, list) => { const el = $(id); if (el) el.hidden = !list || list.length === 0; };

    // Ara, en paral·lel
    show("#j-now", J.now);
    $("#parallel").innerHTML = (J.now || []).map((n, i) => {
      const inner = `<h3>${esc(tr(n.title))}</h3>${tr(n.text) ? `<p>${esc(tr(n.text))}</p>` : ""}`;
      const ext = has(n.link) && /^https?:/.test(n.link) ? ' target="_blank" rel="noopener"' : "";
      return has(n.link)
        ? `<a class="note reveal" style="--r:${[-1.5, 1, -1, 1.5][i % 4]}deg" href="${esc(n.link)}"${ext}>${inner}<span class="note__go">↗</span></a>`
        : `<div class="note reveal" style="--r:${[-1.5, 1, -1, 1.5][i % 4]}deg">${inner}</div>`;
    }).join("");

    // Formació
    show("#j-edu", J.education);
    $("#timeline").innerHTML = (J.education || []).map((s) => `
      <li class="step step--study reveal">
        <span class="step__dot" aria-hidden="true"></span>
        ${has(s.when) ? `<div class="step__when">${esc(s.when)}</div>` : ""}
        <h3>${esc(tr(s.title))}${s.badge ? ` <span class="badge">${esc(tr(s.badge))}</span>` : ""}</h3>
        ${tr(s.text) ? `<p>${esc(tr(s.text))}</p>` : ""}
      </li>`).join("");

    // Experiència i cursos
    show("#j-work", J.work); show("#j-courses", J.courses);
    $("#work-list").innerHTML = (J.work || []).map((w) =>
      `<li class="reveal"><span>${esc(tr(w.title))}</span>${has(w.when) ? `<span class="hand">${esc(w.when)}</span>` : ""}</li>`).join("");
    $("#course-list").innerHTML = (J.courses || []).map((c) => `<li class="reveal"><span>${esc(tr(c))}</span></li>`).join("");
    show("#j-more", [].concat(J.work || [], J.courses || []));

    // Idiomes
    show("#j-lang", J.languages);
    $("#lang-list").innerHTML = (J.languages || []).map((l) => `
      <div class="lang-card reveal"><div class="lang-card__name">${esc(tr(l.name))}</div><div class="lang-card__level">${[].concat(l.level).map((x) => esc(tr(x))).join("<br>")}</div></div>`).join("");
  }



  // ---------- el meu racó ----------
  function renderCorner() {
    const P = D.personal;
    if (!P || !$("#fav")) return;

    // Proyecto preferido (el perro)
    const f = P.favorite || {};
    $("#fav-photo").innerHTML = has(f.photo)
      ? `<img src="${esc(f.photo)}" alt="${esc(f.name || "")}" data-soon="${esc(t("corner.fav.soon"))}">`
      : `<span class="polaroid__soon hand">${esc(t("corner.fav.soon"))}</span>`;
    $("#fav-name").textContent = f.name || "";
    $("#fav-name").hidden = !has(f.name);
    $("#fav-desc").textContent = tr(f.text);
    $("#fav-desc").hidden = !tr(f.text);
    $("#fav-more").innerHTML = (f.more || []).filter(has).map((src, i) => `
      <button type="button" class="polaroid polaroid--mini" style="--r:${[3, -2.5, 2][i % 3]}deg" data-cap="${esc(f.name || "")}">
        <img src="${esc(src)}" alt="${esc(f.name || "")}" loading="lazy" data-soon="">
      </button>`).join("");

    // Ara mateix
    const now = (P.now || []).filter((n) => tr(n.value));
    $("#now").hidden = now.length === 0;
    $("#now-list").innerHTML = now.map((n) =>
      `<li class="reveal"><span class="hand">${esc(tr(n.label))}</span><span>${esc(tr(n.value))}</span></li>`).join("");

    // Hobbies
    const hb = (P.hobbies || []).filter((x) => tr(x.name));
    $("#hobbies").hidden = hb.length === 0;
    $("#hobby-grid").innerHTML = hb.map((x, i) => `
      <button type="button" class="polaroid" style="--r:${[2, -2.5, 1.5, -1, 3, -2][i % 6]}deg" data-cap="${esc(tr(x.name))}">
        ${has(x.photo) ? `<img src="${esc(x.photo)}" alt="${esc(tr(x.name))}" loading="lazy" data-soon="${esc(t("corner.photo.soon"))}">`
                       : `<span class="polaroid__soon hand">${esc(t("corner.photo.soon"))}</span>`}
        <span class="hand">${esc(tr(x.name))}</span>
      </button>`).join("");

    // El jardí
    const g = (P.garden || []).filter((x) => has(x.photo));
    $("#garden").hidden = g.length === 0;
    $("#garden-grid").innerHTML = g.map((x, i) => `
      <button type="button" class="polaroid" style="--r:${[-3, 2, -1.5, 3, -2, 1.5][i % 6]}deg" data-cap="${esc(tr(x.caption))}">
        <img src="${esc(x.photo)}" alt="${esc(tr(x.caption))}" loading="lazy" data-soon="${esc(t("corner.photo.soon"))}">
        ${tr(x.caption) ? `<span class="hand">${esc(tr(x.caption))}</span>` : ""}
      </button>`).join("");

    const insta = $("#insta");
    insta.hidden = !has(P.instagram);
    if (has(P.instagram)) insta.querySelector("a").href = P.instagram;
  }

  // ---------- animación de entrada ----------
  let observer;
  function observeReveals() {
    const els = document.querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
    observer = observer || new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); observer.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => observer.observe(el));
  }

  function renderAll() {
    renderStatic();
    renderShelves();
    renderJourney();
    renderCorner();
    observeReveals();
  }

  // ---------- eventos ----------
  document.querySelector(".lang").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-lang]");
    if (!b || b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (err) {}
    renderAll();
  });

  if (document.getElementById("shelves")) document.getElementById("shelves").addEventListener("click", (e) => {
    const flip = e.target.closest(".flip");
    if (!flip) return;
    if (e.target.closest("a") || flip.classList.contains("flip--link")) return; // los enlaces funcionan normal
    if (e.target.closest(".flip__front")) {
      document.querySelectorAll(".flip.is-flipped").forEach((f) => { if (f !== flip) setFlipped(f, false); });
      setFlipped(flip, true);
    } else if (e.target.closest(".flip__back")) {
      setFlipped(flip, false);                                 // tocar el reverso vuelve a girarla
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const open = document.querySelector(".flip.is-flipped");
    if (open) setFlipped(open, false);
  });

  // ---------- imágenes que no cargan: probar la siguiente o mostrar el título ----------
  function nextImage(img) {
    const next = JSON.parse(img.dataset.next || "[]");
    if (next.length) {
      img.dataset.next = JSON.stringify(next.slice(1));
      img.classList.toggle("is-icon", !img.closest(".shelf--books") && /googleusercontent|icon/i.test(next[0]));
      img.src = next[0];
    }
    else if (img.dataset.fallback != null) { img.outerHTML = img.dataset.fallback; }
  }
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName !== "IMG") return;
    if (img.dataset.fallback != null) nextImage(img);
    else if (img.dataset.soon != null) {              // foto personal que aún no existe
      const holder = img.closest(".polaroid");
      if (holder) { holder.classList.add("is-empty"); holder.disabled = true; }
      img.outerHTML = `<span class="polaroid__soon hand">${esc(img.dataset.soon)}</span>`;
    }
  }, true);

  // Ver las fotos del jardín en grande
  const lb = document.getElementById("lightbox");
  if (lb) {
    document.getElementById("main").addEventListener("click", (e) => {
      const pol = e.target.closest("button.polaroid");
      const img = pol && pol.querySelector("img");
      if (!img) return;
      lb.querySelector("img").src = img.src;
      lb.querySelector(".lightbox__cap").textContent = pol.dataset.cap || "";
      lb.showModal();
    });
    lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  }
  document.addEventListener("load", (e) => {           // Amazon devuelve una imagen de 1px si no hay portada
    const img = e.target;
    if (img.tagName === "IMG" && img.dataset.fallback != null && img.naturalWidth < 20) nextImage(img);
  }, true);

  renderAll();
})();
