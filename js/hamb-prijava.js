

const hamburgerPrijava = document.querySelector(".hamburger-prijava");
const navmenu = document.querySelector(".nav-menu");

hamburgerPrijava.addEventListener("click", () => {
    hamburgerPrijava.classList.toggle("acitve");
    navmenu.classList.toggle("active");
});