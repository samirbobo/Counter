// global imports
import "../toggleSidebar.js";
import "../Cart/toggleCart.js";

// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

// cart product
let productID;

window.addEventListener("DOMContentLoaded", async function () {
  const urlID = window.location.search;
  try {
    const respons = await fetch(`${singleProductUrl}${urlID}`);
    if (respons.status >= 200 && respons.status <= 299) {
      const product = await respons.json();
      const {id, fields} = product;
      productID = id;
      const { name, company, price, colors, description } = fields;
      const image = fields.image[0].thumbnails.large.url;
      document.title = `${name.toUpperCase()} | Comfy`;
      pageTitleDOM.textContent = `Home / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      colors.forEach((color) => {
        const span = document.createElement("span");
        span.classList.add('product-color');
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span)
      });
    }else {
      console.log(respons.status, respons.statusText);
      centerDOM.innerHTML = `
    <div>
    <h3 class="error">sorry, something went wrong</h3>
    <a href="home.html" class="btn">back home</a>
    </div> 
      `;
    }
  }catch (err) {
    console.log(err)
  }
  loading.style.display = "none";
});
cartBtn.addEventListener("click", (_) => {
  addToCart(productID);
});
