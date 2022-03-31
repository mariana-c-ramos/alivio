const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav__menu");
const navButtons = document.querySelector(".btn-js");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav__item").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll(".btn-js").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
    navButtons.classList.remove("active");
}))