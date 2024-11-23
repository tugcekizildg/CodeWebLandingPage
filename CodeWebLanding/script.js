const navMenuEl = document.querySelector(".nav__menu");
const navOpenEl = document.querySelector(".nav__menu-open");
const navCloseEl = document.querySelector(".nav__menu-close");

navOpenEl.addEventListener("click", () => {
    navMenuEl.style.display = "flex";
    navOpenEl.style.display = "none";
    navCloseEl.style.display = "inline-block";
});

navCloseEl.addEventListener("click", () => {
    navMenuEl.style.display = "none";
    navCloseEl.style.display = "none";
    navOpenEl.style.display = "inline-block";
});