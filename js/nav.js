const primaryNav = document.querySelector(".header-nav-primary");
const navToggle = document.querySelector(".header-title-mobile-nav-toggle");
const navIcon = document.querySelector(".mobile-nav-icon");
const closingModal = document.querySelector(
  ".header-nav-mobile-menu-closing-modal",
);
const gotoTop = document.querySelector(".goto-top-btn");
// const gotoNext = document.querySelector(".goto-next");

// Temporary removing "Services" from the menu
// const servicesMenu = document.querySelector("#services-menu-id");
// const scheduleMenu = document.querySelector("#schedule-menu-id");

closingModal.addEventListener("click", () => {
  closingModal.setAttribute("data-visible", "false");
  primaryNav.setAttribute("data-visible", "false");
  navIcon.innerHTML = "≡";
});

function NavClicked() {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    closingModal.setAttribute("data-visible", "true");
    primaryNav.setAttribute("data-visible", "true");
    navIcon.innerHTML = "ⓧ";
  } else if (visibility === "true") {
    closingModal.setAttribute("data-visible", "false");
    primaryNav.setAttribute("data-visible", "false");
    navIcon.innerHTML = "≡";
  }
}
navToggle.addEventListener("click", NavClicked);
// servicesMenu.addEventListener("click", NavClicked);
// scheduleMenu.addEventListener("click", NavClicked);

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    gotoTop.setAttribute("data-visible", "true");
    // gotoNext.setAttribute("data-visible", "false");
  } else {
    gotoTop.setAttribute("data-visible", "false");
    // gotoNext.setAttribute("data-visible", "true");
  }
});

// console.log("nav.js ran!");
