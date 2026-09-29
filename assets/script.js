(function () {
  "use strict";

  var root = document.documentElement;

  /* Theme -------------------------------------------------------------- */
  var themeToggle = document.querySelector(".theme-toggle");

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("asd-theme", theme); } catch (e) {}
    if (themeToggle) themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(currentTheme() === "dark"));
    themeToggle.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  /* Mobile contents ---------------------------------------------------- */
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("primary-nav");

  function closeMenu() {
    if (!nav || !menuBtn) return;
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  /* Contents scroll-spy ------------------------------------------------ */
  var links = Array.prototype.slice.call(nav ? nav.querySelectorAll('a[href^="#"]') : []);
  var sections = links.map(function (link) {
    return document.getElementById(link.getAttribute("href").slice(1));
  });

  if ("IntersectionObserver" in window && sections.filter(Boolean).length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (section) { if (section) spy.observe(section); });
  }

  /* Reveal on scroll --------------------------------------------------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reveals.length && "IntersectionObserver" in window) {
    var show = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          show.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.05 });
    reveals.forEach(function (el) { show.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Year --------------------------------------------------------------- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
