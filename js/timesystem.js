function setThemeByHour() {
  const date = new Date();
  const currentHour = date.getHours();
  const bodyElement = document.querySelector("body");

  if (currentHour >= 20 || currentHour < 6) {
    bodyElement.classList.add("night-theme");
    document.querySelector("#icon").setAttribute("class", "bi bi-moon");
  } else {
    document.querySelector("#icon").setAttribute("class", "bi bi-sun");
    bodyElement.classList.remove("night-theme");
  }
}

window.addEventListener("DOMContentLoaded", function () {
  setThemeByHour();
});

setInterval(setThemeByHour, 60000);
