history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

const navLinks = document.querySelectorAll('.nav-link');
const menu = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});
