(() => {
  "use strict";

  const destinations = window.KOBRA_LINKS || {};
  const notice = document.getElementById("link-notice");
  let noticeTimer;

  function showPendingNotice() {
    clearTimeout(noticeTimer);
    notice.textContent = "Este link estará disponível em breve.";
    notice.classList.add("is-visible");
    noticeTimer = setTimeout(() => notice.classList.remove("is-visible"), 3500);
  }

  function validDestination(value) {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const target = new URL(value.trim(), document.baseURI);
      return ["https:", "http:"].includes(target.protocol) ? target : null;
    } catch {
      return null;
    }
  }

  document.querySelectorAll("[data-link]").forEach((link) => {
    const target = validDestination(destinations[link.dataset.link]);
    if (target) {
      link.href = target.href;
      link.removeAttribute("aria-disabled");
      link.removeAttribute("role");
      link.removeAttribute("tabindex");
      const external = target.origin !== window.location.origin;
      if (external) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      link.setAttribute("aria-label", link.getAttribute("aria-label").replace(" — link em breve", external ? " — abre em nova aba" : ""));
      return;
    }

    link.addEventListener("click", (event) => {
      event.preventDefault();
      showPendingNotice();
    });
    link.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showPendingNotice();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      notice.classList.remove("is-visible");
      clearTimeout(noticeTimer);
    }
  });
})();
