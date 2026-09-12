(() => {
    const preview = document.querySelector("[data-journal-preview]");
    const links = [...document.querySelectorAll("[data-preview]")];
    if (!preview || !links.length) return;
    const setPreview = (link) => {
        const src = link.dataset.preview;
        if (!src || preview.getAttribute("src") === src) return;
        preview.style.opacity = "0";
        setTimeout(() => {
            preview.src = src;
            preview.style.opacity = "1";
        }, 140);
    };
    links.forEach((link) => {
        link.addEventListener("mouseenter", () => setPreview(link));
        link.addEventListener("focus", () => setPreview(link));
    });
})();
