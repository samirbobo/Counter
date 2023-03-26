import { getElement } from "./utils.js";

const toggleNav = getElement(".toggle-nav");
const overlay  = getElement(".sidebar-overlay");
const closeBtn  = getElement(".sidebar-close");

toggleNav.addEventListener("click", _ => {
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", _ => {
  overlay.classList.remove("show");
});