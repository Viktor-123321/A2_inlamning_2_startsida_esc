const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
    burger.classList.toggle("hamburger--cross");
    nav.classList.toggle("nav--remove");
    body.classList.toggle("body--blur");
});
