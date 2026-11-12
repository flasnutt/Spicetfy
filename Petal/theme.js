// Removes the big video / announcement banner at the top of Home.
// Needs:  spicetify config inject_theme_js 1
(function removeHeroBanner() {
  var STOP = ".main-home-content, .main-view-container, .main-view-container__scroll-node, .Root__main-view, [data-overlayscrollbars-viewport]";
  function onHome() {
    try { return Spicetify.Platform.History.location.pathname === "/"; } catch (e) { return true; }
  }
  function sweep() {
    if (!onHome()) return;
    document.querySelectorAll(".main-view-container video").forEach(function (v) {
      var el = v;
      while (el && el.parentElement) {
        if (el.matches && el.matches(STOP)) return;
        if (el.querySelector && el.querySelector(".main-card-card, [data-encore-id='card']")) return; // never hide real content
        if ((el.textContent || "").trim().length > 10) {
          el.style.setProperty("display", "none", "important");
          return;
        }
        el = el.parentElement;
      }
    });
  }
  var queued = false;
  new MutationObserver(function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; sweep(); });
  }).observe(document.body, { childList: true, subtree: true });
  sweep();
})();
