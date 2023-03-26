const allProductsUrl = "https://course-api.com/javascript-store-products";

const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`error in name section ${selection}`);
};

const formatPrice = (price) => {
  /* بتخلني اغير الرقم الي كتبه ع شكل لغه البلد الي بتكتب نفس الرقم مثال
  12345 en 
  ١٢٣٤٥٦٫٧٨٩ ar/ egypt
  */
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};
export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  getStorageItem,
  setStorageItem,
  formatPrice,
};
