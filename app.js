const $ = (id) => document.getElementById(id);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function link(href, label) {
  const a = el("a", "", label);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener";
  return a;
}

function tagList(items) {
  const tags = el("div", "tags");
  (items || []).forEach((t) => tags.append(el("span", "tag", t)));
  return tags;
}

// ---------- Theme ----------
function currentTheme() {
  const set = document.documentElement.getAttribute("data-theme");
  if (set) return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function initTheme() {
  const btn = $("themeToggle");
  const paint = () => { btn.textContent = currentTheme() === "dark" ? "☀ Light" : "☾ Dark"; };
  btn.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    paint();
  });
  paint();
}

// ---------- Sections ----------
function renderProfile() {
  document.title = `${PROFILE.name} – Portfolio`;
  $("name").textContent = PROFILE.name;
  $("role").textContent = PROFILE.title;
  $("location").textContent = PROFILE.location || "";
  $("bio").textContent = PROFILE.bio;
  $("year").textContent = new Date().getFullYear();
  $("footerName").textContent = PROFILE.name;

  const links = $("links");
  const cta = el("a", "btn primary", "Contact me");
  cta.href = "#contact";
  links.append(cta);
  if (PROFILE.cv) {
    const cv = link(PROFILE.cv, "View CV");
    cv.className = "btn";
    links.append(cv);
  }
}

function contactCard(label, value, href, external) {
  const a = el("a", "contact-card");
  a.href = href;
  if (external) { a.target = "_blank"; a.rel = "noopener"; }
  a.append(el("span", "contact-label", label), el("span", "contact-value", value));
  return a;
}

function renderContact() {
  const box = $("contact-list");
  if (PROFILE.email) box.append(contactCard("Email", PROFILE.email, `mailto:${PROFILE.email}`));
  (PROFILE.phones || []).forEach((n) => {
    box.append(contactCard("Phone", n.replace(/^\+20(\d+)$/, "+20 $1"), `tel:${n}`));
  });
  if (PROFILE.linkedin) box.append(contactCard("LinkedIn", PROFILE.linkedin.replace(/^https?:\/\/(www\.)?/, ""), PROFILE.linkedin, true));
  if (PROFILE.github) box.append(contactCard("GitHub", PROFILE.github.replace(/^https?:\/\/(www\.)?/, ""), PROFILE.github, true));
  if (PROFILE.location) {
    const loc = el("div", "contact-card static");
    loc.append(el("span", "contact-label", "Location"), el("span", "contact-value", PROFILE.location));
    box.append(loc);
  }
}

function renderSkills() {
  const box = $("skills");
  Object.entries(SKILLS).forEach(([group, items]) => {
    const g = el("div", "skill-group");
    g.append(el("h3", "", group), tagList(items));
    box.append(g);
  });
}

function renderExperience() {
  const box = $("experience");
  EXPERIENCE.forEach((e) => {
    const item = el("article", "job");
    const head = el("div", "job-head");
    head.append(el("h3", "", e.role), el("span", "period", e.period));
    item.append(head, el("p", "company", e.company));
    const ul = el("ul", "points");
    e.points.forEach((p) => ul.append(el("li", "", p)));
    item.append(ul, tagList(e.tech));
    box.append(item);
  });
}

function renderEducation() {
  const ul = $("education");
  EDUCATION.forEach((e) => ul.append(el("li", "", `${e.title} – ${e.place} (${e.year})`)));
  LANGUAGES.forEach((l) => ul.append(el("li", "", l)));
}

function renderCard(p) {
  const card = el("article", "card");

  const meta = el("div", "meta");
  meta.append(el("span", `badge ${p.category}`, p.category));
  if (p.company) meta.append(el("span", "company", p.company));
  card.append(meta, el("h3", "", p.title), el("p", "desc", p.description), tagList(p.tech));

  const actions = el("div", "actions");
  if (p.link) actions.append(link(p.link, "Visit"));
  if (p.github) actions.append(link(p.github, "Code"));
  if (actions.children.length) card.append(actions);

  return card;
}

function renderGrid(category) {
  const grid = $("grid");
  grid.replaceChildren();
  PROJECTS
    .filter((p) => category === "all" || p.category === category)
    .forEach((p) => grid.append(renderCard(p)));
}

function renderFilters() {
  const box = $("filters");
  CATEGORIES.forEach((c, i) => {
    const count = c.key === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c.key).length;
    const btn = el("button", i === 0 ? "active" : "", `${c.label} (${count})`);
    btn.addEventListener("click", () => {
      box.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid(c.key);
    });
    box.append(btn);
  });
}

initTheme();
renderProfile();
renderSkills();
renderExperience();
renderFilters();
renderGrid("all");
renderEducation();
renderContact();
