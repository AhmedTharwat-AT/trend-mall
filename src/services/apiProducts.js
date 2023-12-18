import { PAGE_SIZE, URL } from "./constants";
const menCategory = ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses"];
const menAndWomen = [
  "fragrances",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
];

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
    menAndWomen.includes(pro.category),
  );

  return products;
}

export async function getFilterProducts(page = 0) {
  // let url = "?limit=6&skip=0";
  // if (page > 0) url = `?limit=6&skip=${page * 6}`;

  const res = await fetch(URL + "?limit=0");
  const data = await res.json();

  const products = data.products.filter((pro) =>
    menAndWomen.includes(pro.category),
  );

  const filteredProducts = products.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );

  return filteredProducts;
}

export async function getAllBrands() {
  const res = await fetch(URL + "?limit=0");
  const data = await res.json();

  const products = data.products
    .filter((pro) => menAndWomen.includes(pro.category))
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
