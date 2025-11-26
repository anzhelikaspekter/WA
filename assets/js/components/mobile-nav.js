document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const overlay = document.querySelector(".mobile-nav-overlay");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".mobile-nav__close");

    if (!burger || !overlay || !mobileNav || !closeBtn) return;

    function openMenu() {
        overlay.hidden = false;
        burger.setAttribute("aria-expanded", "true");

        overlay.classList.add("active");
        document.body.classList.add("no-scroll");
    }

    function closeMenu() {
        burger.setAttribute("aria-expanded", "false");
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");

        setTimeout(() => {
            overlay.hidden = true;
        }, 300);
    }

    burger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = burger.getAttribute("aria-expanded") === "true";
        isOpen ? closeMenu() : openMenu();
    });

    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeMenu();
    });

    overlay.addEventListener("click", (e) => {
        if (!mobileNav.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });
});