import { URL } from "./constants";

// if (Object.keys(options).length > 0)
//   url =
//     url +
//     `?${options.limit ? `limit=${options.limit}&` : ""}${
//       options.skip ? `skip=${options.skip}` : ""
//     }`;
export async function getProducts(options = "") {
  let url = URL;
  if (options.length > 0) url += options;

  const res = await fetch(url);
  const data = await res.json();
  return data.products;
}
