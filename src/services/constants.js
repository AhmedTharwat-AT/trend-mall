const URL = "https://dummyjson.com/products";

const PAGE_SIZE = 6;

const CATEGORIES = [
  "fragrances",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
];

const MEN_CATEGORIES = [
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "sunglasses",
];

const PRICES_RANGE = [
  { from: 0, to: 50 },
  { from: 50, to: 100 },
  { from: 100, to: null },
];

export { URL, PAGE_SIZE, CATEGORIES, MEN_CATEGORIES, PRICES_RANGE };

// const PRICES_RANGE = [
//   { from: 0, to: 50 },
//   { from: 50, to: 100 },
//   { from: 100, to: 150 },
//   { from: 150, to: 200 },
//   { from: 200, to: 250 },
//   { from: 250, to: null },
// ];
