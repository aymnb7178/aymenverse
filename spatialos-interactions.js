/* SpatialOS UI interaction layer — progressive enhancement only.
   No framework, no dependencies, no API calls. Existing site functions stay intact. */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Keep the floating dock and desktop navigation indicators synchronized.
  function syncNavigation(page) {
    document.querySelectorAll("[data-nav], [data-dock]").forEach((button) => {
      const active = button.dataset.nav === page || button.dataset.dock === page;
      button.classList.toggle("text-white", active);
      button.classList.toggle("font-extrabold", active);
      button.setAttribute("aria-current", active ? "page" : "false");
    });
  }

  // Observe the SPA page class changes without replacing the existing router.
  const pageObserver = new MutationObserver(() => {
    const active = document.querySelector(".page-view.active");
    if (active?.id?.startsWith("view-")) syncNavigation(active.id.replace("view-", ""));
  });

  function initNavigation() {
    document.querySelectorAll(".page-view").forEach((page) => {
      pageObserver.observe(page, { attributes: true, attributeFilter: ["class"] });
    });
    const active = document.querySelector(".page-view.active");
    if (active?.id) syncNavigation(active.id.replace("view-", ""));
    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-nav], [data-dock]");
      if (!trigger) return;
      const page = trigger.dataset.nav || trigger.dataset.dock;
      if (page) syncNavigation(page);
    });
  }

  // Add accessible labels to icon-only controls without altering their handlers.
  function improveIconButtons() {
    document.querySelectorAll("button").forEach((button) => {
      const hasText = (button.innerText || "").trim().length > 0;
      if (!hasText && !button.hasAttribute("aria-label") && !button.hasAttribute("title")) {
        const title = button.getAttribute("onclick") || "Control";
        button.setAttribute("aria-label", title.replace(/[()'"]/g, " ").replace(/\s+/g, " ").trim());
      }
    });
  }

  // Escape closes visible overlays through their existing close functions.
  function initEscapeClose() {
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const project = document.getElementById("projectModal");
      const account = document.getElementById("accountModal");
      if (project && !project.classList.contains("hidden") && typeof window.closeProjectModal === "function") {
        window.closeProjectModal();
      } else if (account && !account.classList.contains("hidden") && typeof window.closeAccountCenter === "function") {
        window.closeAccountCenter();
      }
    });
  }

  // Give in-page links a consistent focus and motion experience.
  function initSafeExternalLinks() {
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
      rel.add("noopener");
      rel.add("noreferrer");
      link.setAttribute("rel", [...rel].join(" "));
    });
  }

  function boot() {
    initNavigation();
    improveIconButtons();
    initEscapeClose();
    initSafeExternalLinks();
    document.documentElement.classList.add("sos-ui-ready");
    if (reduceMotion) document.documentElement.classList.add("sos-reduced-motion");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
