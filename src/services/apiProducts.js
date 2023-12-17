import { URL } from "./constants";
const categories = ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses"];

// if (Object.keys(options).length > 0)
//   url =
//     url +
//     `?${options.limit ? `limit=${options.limit}&` : ""}${
//       options.skip ? `skip=${options.skip}` : ""
//     }`;
export async function getProducts() {
  const res = await fetch(URL + "?limit=0");
  const data = await res.json();

  const cloths = data.products.filter((pro) =>
    categories.includes(pro.category),
  );
  return cloths;
}

export async function getFilterProducts(options = "") {
  let url = URL;
  if (options.length > 0) url += options;

  const res = await fetch(url);
  const data = await res.json();
  return data.products;
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
