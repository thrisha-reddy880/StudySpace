/* =========================================================
   StudySpace - Main JavaScript
   Mobile Navigation
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("#nav-menu");

    if (!menuToggle || !navMenu) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });


    /* Close menu after selecting a navigation link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });


    /* Close menu when Escape is pressed */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            navMenu.classList.contains("open")
        ) {
            navMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.focus();
        }
    });
});