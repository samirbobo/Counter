// global imports
import '../toggleSidebar.js';
import '../Cart/toggleCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import {setupPrice} from '../filters/price.js';

// specific imports
import display from '../displayProducts.js'; 
import {store} from '../store.js'; 
import {getElement} from '../utils.js'

const init = async () => {
  display(store, getElement(".products-container"));
  const loading = getElement(".page-loading");
  loading.style.display = 'none';
  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);
}
window.addEventListener("DOMContentLoaded", init);