document.addEventListener("DOMContentLoaded", () => {
    const slides = Array.from(document.querySelectorAll(".testimonials__gallery-inner .testimonial"));
    const btnPrev = document.querySelector(".testimonials__prev");
    const btnNext = document.querySelector(".testimonials__next");

    if (!slides.length) return;

    let current = slides.findIndex(slide =>
        slide.classList.contains("testimonial--anim-main")
    );
    if (current === -1) current = 0;

    let isForward = true;

    function isMobile() {
        return window.innerWidth <= 767.9;
    }

    function updateButtons() {
        if (btnPrev) btnPrev.disabled = current === 0;
        if (btnNext) btnNext.disabled = current === slides.length - 1;
    }

    function goTo(nextIndex, direction) {
        if (nextIndex < 0 || nextIndex > slides.length - 1) return;
        if (nextIndex === current) return;

        const from = slides[current];
        const to = slides[nextIndex];

        to.classList.add("testimonial--anim-main");

        if (direction === "prev") {
            to.classList.remove("testimonial--anim-fly-out");
        }

        requestAnimationFrame(() => {
            from.classList.remove("testimonial--anim-main");

            if (direction === "next") {
                from.classList.add("testimonial--anim-fly-out");
            } else {
                from.classList.remove("testimonial--anim-fly-out");
            }

            current = nextIndex;
            updateButtons();
        });
    }

    function goNext() {
        if (current >= slides.length - 1) return;
        goTo(current + 1, "next");
    }

    function goPrev() {
        if (current <= 0) return;
        goTo(current - 1, "prev");
    }

    btnNext?.addEventListener("click", goNext);
    btnPrev?.addEventListener("click", goPrev);

    slides.forEach((slide) => {
        slide.addEventListener("click", () => {
            if (!isMobile()) return;

            if (isForward) {
                if (current < slides.length - 1) {
                    goNext();
                } else {
                    isForward = false;
                    goPrev();
                }
            } else {
                if (current > 0) {
                    goPrev();
                } else {
                    isForward = true;
                    goNext();
                }
            }
        });
    });

    updateButtons();
});
