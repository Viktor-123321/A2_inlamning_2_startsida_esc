const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
    burger.classList.toggle("hamburger--cross");
    nav.classList.toggle("nav--remove");
});
