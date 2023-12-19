import { PAGE_SIZE, URL, CATEGORIES, MEN_CATEGORIES } from "./constants";

const menCategory = [...MEN_CATEGORIES];
const allCategories = [...CATEGORIES];

export async function getMenProducts() {
  const res = await fetch(URL + "?limit=0");
  const data = await res.json();

  const cloths = data.products.filter((pro) =>
    menCategory.includes(pro.category),
  );

  return cloths;
}

export async function getAllProducts() {
  const res = await fetch(URL + "?limit=0");
  const data = await res.json();

  const products = data.products.filter((pro) =>
    allCategories.includes(pro.category),
  );

  return products;
}

export async function getFilterProducts({ page, sort, query, category }) {
  //search
  let res = null;
  if (query) {
    res = await fetch(URL + `/search?q=${query}&limit=0&`);
  }
  if (!query) {
    res = await fetch(URL + `?limit=0`);
  }

  const data = await res.json();
  const products = data.products.filter((pro) =>
    allCategories.includes(pro.category),
  );
  const count = products.length;

  //sort
  let sortedProducts = [...products];
  if (sort == "low") {
    sortedProducts.sort((a, b) => +a.price - +b.price);
  }
  if (sort == "high") {
    sortedProducts.sort((a, b) => +b.price - +a.price);
  }

  //results per page
  const filteredProducts = sortedProducts.slice(
    (page - 1) * PAGE_SIZE,
    (page - 1) * PAGE_SIZE + PAGE_SIZE,
  );

  return { filteredProducts, count };
}

export async function getAllBrands() {
  const res = await fetch(URL + "?limit=0");
  const data = await res.json();

  const products = data.products
    .filter((pro) => allCategories.includes(pro.category))
    .map((el) => el.brand);

  const brands = [...new Set(products)];

  return brands;
}

// export async function getFilterProducts(options = "") {
//   let url = URL;
//   if (options.length > 0) url += options;

//   const res = await fetch(url);
//   const data = await res.json();
//   return data.products;
// }

// const categories = [
//   "fragrances",
//   "tops",
//   "womens-dresses",
//   "womens-shoes",
//   "mens-shirts",
//   "mens-shoes",
//   "mens-watches",
//   "womens-watches",
//   "womens-bags",
//   "womens-jewellery",
//   "sunglasses",
// ];
