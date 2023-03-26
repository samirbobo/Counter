// global imports
import './Js/toggleSidebar.js';
import './Js/Cart/toggleCart.js';
/*
*******************
// specific imports
*/
import fetchProducts from './Js/fetchProducts.js';
import {store, setupStore} from './Js/store.js';
import display from './Js/displayProducts.js';
import { getElement } from "./Js/utils.js";

const init = async () => {
  const products = await fetchProducts();
  if(products) {
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement(".featured-center"));
  }
}
window.addEventListener("DOMContentLoaded", init);
