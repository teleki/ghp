const themeToggle = document.querySelector(".theme-toggle");
const themeLight = document.querySelector(".theme-light");
const themeDark = document.querySelector(".theme-dark");
const themeSystem = document.querySelector(".theme-system");

function setToggleButtonState() {
  if (localStorage.theme === "light") {
    themeLight.setAttribute("data-visible", "true");
    themeDark.setAttribute("data-visible", "false");
    themeSystem.setAttribute("data-visible", "false");
  } else if (localStorage.theme === "dark") {
    themeLight.setAttribute("data-visible", "false");
    themeDark.setAttribute("data-visible", "true");
    themeSystem.setAttribute("data-visible", "false");
  } else {
    themeLight.setAttribute("data-visible", "false");
    themeDark.setAttribute("data-visible", "false");
    themeSystem.setAttribute("data-visible", "true");
  }
}

function applyTheme() {
  // console.log("applyTheme()");
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light"); // setAttribute("data-theme", "light")
  }
}

matchMedia("(prefers-color-scheme: dark)").addEventListener(
  "change",
  applyTheme,
);

themeToggle.addEventListener("click", () => {
  // console.log("theme toggle clicked");
  if (localStorage.theme === "light") {
    // console.log("switch to dark");
    localStorage.theme = "dark";
  } else if (localStorage.theme === "dark") {
    // console.log("switch to system");
    localStorage.removeItem("theme");
  } else {
    // console.log("switch to light");
    localStorage.theme = "light";
  }
  setToggleButtonState();
  applyTheme();
});

applyTheme();
setToggleButtonState();
