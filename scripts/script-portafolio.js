document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
        const clickMessage = section.querySelector(".click-message");

        section.addEventListener("click", () => {
            sections.forEach((s) => s.classList.remove("show", "ready-to-show"));
            section.classList.add("show");

            document.getElementById("clickHereMessage").style.display = "none";
            clickMessage.style.display = "none";
        });

        // Añadir la clase "ready-to-show" a todas las secciones excepto la primera
        if (index > 0) {
            section.classList.add("ready-to-show");
        }
    });

    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    var headerDropdown = document.querySelector(".header-dropdown");
    var overlay = document.querySelector(".overlay");

    function closeHeaderDropdown() {
        headerDropdown.classList.remove("open");
        overlay.style.display = "none";
        document.body.classList.remove("overlay-open");
    }

    document.addEventListener("click", function (event) {
        var isClickInsideDropdown = headerDropdown.contains(event.target);
        var isClickOnMenuIcon = event.target.classList.contains("menu-icon");

        if (!isClickInsideDropdown && !isClickOnMenuIcon) {
            closeHeaderDropdown();
        }
    });

    document.querySelector(".click-indicator").addEventListener("click", function () {
        const currentReadySection = document.querySelector(".ready-to-show");
        if (currentReadySection) {
            currentReadySection.classList.remove("ready-to-show");
            const nextReadySection = currentReadySection.nextElementSibling;
            if (nextReadySection) {
                nextReadySection.classList.add("show", "ready-to-show");
            }
        }
    });

    document.querySelector(".menu-icon").addEventListener("click", function () {
        console.log("Menu icon clicked");
        toggleMenu();
    });
});
