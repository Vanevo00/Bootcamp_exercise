document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu-button");
  const menuLeft = document.querySelector("#menu-left");
  const links = document.querySelector("#links");
  const headline = document.querySelector("#headline");

  const toggleMenu = () => {
    menuLeft.classList.toggle("spread");
    links.classList.toggle("none");
    headline.classList.toggle("none");
  };

  menuButton.addEventListener("mouseenter", toggleMenu);
  menuLeft.addEventListener("mouseleave", toggleMenu);
});