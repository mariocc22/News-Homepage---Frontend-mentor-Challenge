"use strict";

const primaryNav = document.getElementById("primary-nav");
const hamburgerMenu = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");

const openMenu = function (e) {
  e.preventDefault();
  hamburgerMenu.classList.toggle("is-active");
  hamburgerMenu.classList.toggle("mobile-menu-btn");
  primaryNav.classList.toggle("hide-nav");
  overlay.classList.toggle("hidden");
};

hamburgerMenu.addEventListener("click", openMenu);
