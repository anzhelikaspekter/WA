document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".tours__list");
    const inner = document.querySelector(".tours__list-inner");
    const cards = Array.from(document.querySelectorAll(".tours__card"));

    if (!list || !inner || cards.length === 0) return;

    let isScrolling = false;

    function getStep() {
        const card = cards[0];
        if (!card) return 0;

        const style = window.getComputedStyle(inner);
        const gap = parseFloat(style.columnGap || style.gap || 0);

        return card.offsetWidth + gap;
    }

    function scrollToStep(delta) {
        if (isScrolling) return;
        isScrolling = true;

        const step = getStep();
        list.scrollBy({
            left: delta * step,
            behavior: "smooth"
        });

        setTimeout(() => (isScrolling = false), 350);
    }

    let startX = 0;
    let startY = 0;

    list.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });

    list.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = endX - startX;

        if (Math.abs(diff) < 50) return;

        if (diff < 0) scrollToStep(1);
        else scrollToStep(-1);
    });

    list.addEventListener("touchmove", (e) => {
        const dx = Math.abs(e.touches[0].clientX - startX);
        const dy = Math.abs(e.touches[0].clientY - startY);

        if (dx > dy) {
            e.preventDefault();
        }
    }, { passive: false });
});
