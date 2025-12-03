document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.querySelector(".lang-select");
    if (!langSelect) return;

    const toggle = langSelect.querySelector(".lang-select__toggle");
    const list = langSelect.querySelector(".lang-select__list");
    const valueLabel = langSelect.querySelector(".lang-select__value");
    const options = langSelect.querySelectorAll(".lang-select__option");

    function toggleSelect() {
        const isOpen = toggle.classList.contains("active");

        if (isOpen) {
            closeSelect();
        } else {
            openSelect();
        }
    }

    function openSelect() {
        toggle.classList.add("active");
        toggle.setAttribute("aria-expanded", "true");
        list.hidden = false;
        langSelect.classList.add("lang-select--open");
    }

    function closeSelect() {
        toggle.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
        list.hidden = true;
        langSelect.classList.remove("lang-select--open");
    }

    function selectOption(option) {
        options.forEach(opt => {
            opt.classList.remove("active");
            opt.setAttribute("aria-selected", "false");
        });

        option.classList.add("active");
        option.setAttribute("aria-selected", "true");

        valueLabel.textContent = option.dataset.lang;

        closeSelect();
    }

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSelect();
    });

    options.forEach(option => {
        option.addEventListener("click", (e) => {
            e.stopPropagation();
            selectOption(option);
        });
    });

    document.addEventListener("click", (e) => {
        if (!langSelect.contains(e.target)) {
            closeSelect();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeSelect();
        }
    });
});
