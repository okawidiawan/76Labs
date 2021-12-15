const menuToggle = document.querySelector(".menu-toggle");
const toggleLine = document.querySelectorAll(".menu-toggle span");
const navLinks = document.querySelector(".navLinks");
export const menu = menuToggle.addEventListener("click", () => {
  toggleLine.forEach((item, index) => {
    item.classList.toggle(`rotate-${index + 1}`);
    navLinks.classList.toggle("showNav");
    menuToggle.classList.toggle("posfix");
    document.body.classList.toggle("ovHidden");
  });
});
