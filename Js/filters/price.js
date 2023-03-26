import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const searchInput = getElement(".search-input");

const maxPrice = (store, priceInput, priceValue) => {
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $${maxPrice}`;
}

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");
  maxPrice(store, priceInput, priceValue);
  /* الحدث الي اسمه انبوت بيخلي اي فعل بعمله علي الانبوت بتاعي بيخلني اقدر انفذ الي انا عايزه من العمليات */ 
  priceInput.addEventListener("input", _ => {
    searchInput.value = "";
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;
    let newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, getElement('.products-container'), true);
    if (newStore.length < 1) {
      const products = getElement('.products-container');
      products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    };
  });
};
export { setupPrice, maxPrice };