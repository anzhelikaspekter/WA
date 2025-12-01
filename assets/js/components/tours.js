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

    // ------- TOUCH-SCROLL (only by step) -------
    let startX = 0;
    let endX = 0;

    list.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    list.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = endX - startX;

        if (Math.abs(diff) < 50) return; // защита от случайных слабых свайпов

        if (diff < 0) scrollToStep(1);   // свайп влево → следующий
        else scrollToStep(-1);          // свайп вправо → предыдущий
    });


    // Отключаем нативный «инерционный» горизонтальный скролл,
    // чтобы не было свободного перетягивания
    list.addEventListener("touchmove", (e) => {
        e.preventDefault();   // но работает только с passive: false
    }, { passive: false });
});
