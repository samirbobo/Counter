import { getElement } from "../utils.js";
import display from "../displayProducts.js";
import {maxPrice} from '../filters/price.js'

const priceInput = getElement(".price-filter");
const priceValue = getElement(".price-value");
const searchInput = getElement(".search-input");

const setupCompanies = (store) => {
  // : يوجد طريقتان للوصول الي نفس الفكره الاولي 
  // let companies = ['all', ...new Set(store.map((product) => product.company))];
  // الطريقه الثانيه
  let arr = [];
  const companies = store.map((product) => {
    let {company} = product;
    arr.push(company);
  })
  arr = ["all", ... new Set(arr)];
  const companiesDOM = getElement(".companies");
  companiesDOM.innerHTML = arr.map((btn) => {
    return `<button class="company-btn">${btn}</button>`
  }).join("");

  companiesDOM.addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains('company-btn')) {
      let newStore = [];
      if (element.textContent === 'all') {
        searchInput.value = "";
        maxPrice(store, priceInput, priceValue);
        newStore = [...store];
      } else {
        searchInput.value = "";
        maxPrice(store, priceInput, priceValue);
        newStore = store.filter(
          (product) => product.company === e.target.textContent
        );
      }

      display(newStore, getElement('.products-container'), true);
    }
  });
}
export default setupCompanies;
// companies