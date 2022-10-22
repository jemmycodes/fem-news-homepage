"use strict";

const hamburger = document.querySelector("#hamburger");
const overlay = document.querySelector("#overlay");
const menuBar = document.querySelector("#menu-bar");
const bar1 = document.querySelector("#bar-1");
const bar2 = document.querySelector("#bar-2");
const bar3 = document.querySelector("#bar-3");

// open nav-bar and overlay modal
const openNav = () => {
  overlay.classList.toggle("hidden");
  menuBar.classList.toggle("hidden");
  bar1.classList.toggle("bar-1");
  bar3.classList.toggle("bar-3");
  bar2.classList.toggle("hidden");
};

hamburger.addEventListener("click", openNav);
