document.addEventListener("DOMContentLoaded", () => {
    const ticker = document.querySelector(".tricker__content");

    if (!ticker) return;

    const clone = ticker.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");

    ticker.parentNode.appendChild(clone);
});
