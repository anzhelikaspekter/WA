(() => {
    const openButtons = document.querySelectorAll("[data-modal-open]");
    const body = document.body;
    let activeModal = null;
    let lastFocusedElement = null;

    function openModal(modal) {
        if (!modal) return;

        lastFocusedElement = document.activeElement;

        modal.hidden = false;
        modal.classList.add("modal--open");
        body.style.overflow = "hidden";
        activeModal = modal;

        const closeBtn = modal.querySelector("[data-modal-close]");
        if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
        if (!activeModal) return;

        const video = activeModal.querySelector(".modal__video-el");
        if (video && typeof video.pause === "function") {
            video.pause();
            video.currentTime = 0;
        }

        activeModal.classList.remove("modal--open");
        activeModal.hidden = true;
        body.style.overflow = "";
        activeModal = null;

        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }
    }

    openButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const modalId = btn.getAttribute("data-modal-open");
            const modal = document.getElementById(modalId);
            openModal(modal);
        });
    });

    document.addEventListener("click", (event) => {
        if (!activeModal) return;

        const closeTrigger = event.target.closest("[data-modal-close]");
        if (closeTrigger) {
            closeModal();
            return;
        }

        if (event.target.classList.contains("modal__overlay")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && activeModal) {
            event.preventDefault();
            closeModal();
        }
    });
})();