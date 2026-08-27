(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  function closeNav() {
    nav.setAttribute("data-open", "false");
    toggle.setAttribute("aria-expanded", "false");
  }

  function isDesktop() {
    return window.matchMedia("(min-width: 1024px)").matches;
  }

  toggle.addEventListener("click", function () {
    var open = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", open ? "false" : "true");
    toggle.setAttribute("aria-expanded", String(!open));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (!isDesktop()) closeNav();
    });
  });

  window.addEventListener("resize", function () {
    if (isDesktop()) closeNav();
  });
})();
