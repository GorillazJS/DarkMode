/* 
const $html = document.querySelector("html");
const $checkbox = document.querySelector(".switch");

$checkbox.addEventListener("change", () => {
  $html.classList.toggle("dark-mode");
});
 */

let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#c-switch-notification");

const enableDarkMode = () => {
  // checkbox
  document.getElementById("c-switch-notification").checked = true;
  // 1. Add the class to the body
  const $html = document.querySelector("html");
  const $checkbox = document.querySelector(".switch");
  $html.classList.toggle("dark-mode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  //checkbox
  document.getElementById("c-switch-notification").checked = false;

  // 1. Remove the class from the body
  const $html = document.querySelector("html");
  const $checkbox = document.querySelector(".switch");
  $html.classList.remove("dark-mode");

  //ignore
  //document.body.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
