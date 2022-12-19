"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".header_text");
  const btnProp = {
    duration: 800,
    iterations: 1,
    direction: "alternate",
    easing: "ease-in",
  };
  const btnKeyf = [{ transform: `translateX(-50vw)` }, { transform: `translateX(0vw)` }];
  const btnAni = button.animate(btnKeyf, btnProp);

  const ship = document.querySelector(".header_graphics");
  const properties = {
    duration: 800,
    iterations: 1,
    direction: "alternate",
    easing: "ease-in",
  };

  const keyframes = [{ transform: `translate(0,40.25vw)` }, { transform: `translate(0,0)` }];
  const animation = ship.animate(keyframes, properties);
  let theme = localStorage.getItem("data-theme");
  const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
    localStorage.setItem("data-theme", "dark"); // save theme to local storage
  };
  const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light"); // set theme light
    localStorage.setItem("data-theme", "light"); // save theme to local storage
  };
  const checkbox = document.getElementById("switch");
  // Apply retrived them to the website
  checkbox.addEventListener("change", () => {
    let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
    if (theme === "dark") {
      changeThemeToLight();
    } else {
      changeThemeToDark();
    }
  });
});
