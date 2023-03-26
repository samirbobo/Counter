import { getElement } from "../utils.js";

const toggleCart = getElement(".toggle-cart");
const cartOverlay = getElement(".cart-overlay");
const toggleCartBtn = getElement(".cart-close");

toggleCart.addEventListener("click", _  => {
  cartOverlay.classList.add("show");
});
toggleCartBtn.addEventListener("click", _  => {
  cartOverlay.classList.remove("show");
});

export const openCart = () => {
  cartOverlay.classList.add('show');
};