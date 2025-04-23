const burger = document.querySelector(".header__burger-menu");
const headerMenu = document.querySelector(".header__menu");

burger.addEventListener("click", function () {
  headerMenu.classList.toggle("header__menu-active");
  document.body.classList.toggle("lock");
});
