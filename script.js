document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ANIMAȚIE LA INTRARE BARA DE SUS ---
    const navbar = document.getElementById("navbar");
    if (navbar) {
        setTimeout(() => {
            navbar.classList.add("opened");
        }, 150);
    }

    // --- 2. TRANSFORMARE ELEMENTE LA SCROLL ---
    const revealElements = document.querySelectorAll(".reveal");
    
    const revealOptions = {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // --- 3. SISTEM SCHIMBARE LIMBĂ (RO / EN) ---
    const btnRo = document.getElementById("lang-ro");
    const btnEn = document.getElementById("lang-en");
    const translatableElements = document.querySelectorAll("[data-ro]");

    function switchLanguage(lang) {
        translatableElements.forEach(el => {
            if (lang === "ro") {
                el.textContent = el.getAttribute("data-ro");
            } else if (lang === "en") {
                el.textContent = el.getAttribute("data-en");
            }
        });

        if (lang === "ro") {
            btnRo.classList.add("active");
            btnEn.classList.remove("active");
            document.documentElement.setAttribute("lang", "ro");
        } else {
            btnEn.classList.add("active");
            btnRo.classList.remove("active");
            document.documentElement.setAttribute("lang", "en");
        }
    }

    btnRo.addEventListener("click", () => switchLanguage("ro"));
    btnEn.addEventListener("click", () => switchLanguage("en"));
});
