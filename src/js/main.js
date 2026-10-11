import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "../scss/app.scss";

console.log("Nexora initialized");



const faqItems = document.querySelectorAll(".nx-faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".nx-faq-question");

    if (!question) return;

    const icon = question.querySelector("i");
    const answer = item.querySelector(".nx-faq-answer");

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        item.classList.toggle("active");

        if (icon) {
            if (isOpen) {
                icon.classList.remove("bi-dash");
                icon.classList.add("bi-plus");
            } else {
                icon.classList.remove("bi-plus");
                icon.classList.add("bi-dash");
            }
        }
    });
});

const navbarToggle = document.querySelector(".nx-navbar-toggle");
const navbarMenu = document.querySelector(".nx-navbar-menu");

if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () => {
        const isOpen = navbarMenu.classList.toggle("is-open");

        navbarToggle.setAttribute("aria-expanded", isOpen);

        const icon = navbarToggle.querySelector("i");

        if (isOpen) {
            icon.classList.remove("bi-list");
            icon.classList.add("bi-x-lg");
        } else {
            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");
        }
    });
}