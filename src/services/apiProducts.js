import { sortArray } from "../utils/helpers";
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

export async function getProduct(id) {
  const res = await fetch(URL + `/${id}`);
  const data = await res.json();
  return data;
}

export async function getFilterProducts({
  page,
  sort,
  query,
  category,
  brand,
  range,
}) {
  //search
  let res = null;
  if (query) {
    res = await fetch(URL + `/search?q=${query}&limit=0&`);
  }
  if (!query) {
    res = await fetch(URL + `?limit=0`);
  }
  const data = await res.json();
  let products = [...data.products];

  //category
  if (category != "All") {
    products = products.filter((pro) => category === pro.category);
  }
  if (category == "All") {
    products = products.filter((pro) => allCategories.includes(pro.category));
  }
  //brands
  if (brand) {
    products = products.filter((pro) => brand === pro.brand);
  }

  //range
  if (range) {
    const [from, to] = range.split("-");
    products = products.filter(
      (pro) => +pro.price > +from && (+to ? +pro.price < +to : true),
    );
  }

  //sort
  let sortedProducts = sortArray(products, sort, "price");
  const count = sortedProducts.length;

  //results per page
  const filteredProducts = sortedProducts.slice(
    (page - 1) * PAGE_SIZE,
    (page - 1) * PAGE_SIZE + PAGE_SIZE,
  );

  return { filteredProducts, count };
}

export async function getBrands(category) {
  const res = await fetch(URL + "?limit=0");
  const data = await res.json();
  let products = [];

  if (category == "All")
    products = data.products.filter((pro) =>
      allCategories.includes(pro.category),
    );

  if (category != "All")
    products = data.products.filter((pro) => category === pro.category);

  products = products.map((el) => el.brand);
  const brands = [...new Set(products)];

  return brands;
}

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
