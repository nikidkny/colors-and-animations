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
});
