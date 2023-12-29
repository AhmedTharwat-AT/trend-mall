const URL = "https://dummyjson.com/products";

const PAGE_SIZE = 6;

const GRID_IMAGES = [
  "https://i0.wp.com/hqmanila.com/wp-content/uploads/2023/06/2024-mens-fashion-trends.png?resize=1200%2C675&ssl=1",
  "https://i0.wp.com/hqmanila.com/wp-content/uploads/2023/06/bold-colors.png?resize=768%2C430&ssl=1",
  "https://i0.wp.com/hqmanila.com/wp-content/uploads/2023/06/earthy-pallete.png?resize=768%2C430&ssl=1",
  "https://i0.wp.com/hqmanila.com/wp-content/uploads/2023/06/shacket.png?resize=768%2C430&ssl=1",
  "https://i0.wp.com/hqmanila.com/wp-content/uploads/2023/06/quiet-luxury.png?resize=768%2C430&ssl=1",
  "https://i0.wp.com/hqmanila.com/wp-content/uploads/2023/06/athleisure.png?resize=768%2C430&ssl=1",
];

const MEMBERS = [
  {
    name: "RON HOWELL",
    job: "Creative Director",
    img: "https://i0.wp.com/hqmanila.com/wp-content/uploads/2023/06/athleisure.png?resize=768%2C430&ssl=1",
  },
  {
    name: "KEITH BURNSON",
    job: "Managing Director",
    img: "https://i0.wp.com/hqmanila.com/wp-content/uploads/2023/06/quiet-luxury.png?resize=768%2C430&ssl=1",
  },
  {
    name: "FREDDY NOLAN",
    job: "Fashion Designer",
    img: "https://i0.wp.com/hqmanila.com/wp-content/uploads/2023/06/earthy-pallete.png?resize=768%2C430&ssl=1",
  },
];

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

export {
  URL,
  PAGE_SIZE,
  CATEGORIES,
  MEN_CATEGORIES,
  PRICES_RANGE,
  GRID_IMAGES,
  MEMBERS,
};

// const PRICES_RANGE = [
//   { from: 0, to: 50 },
//   { from: 50, to: 100 },
//   { from: 100, to: 150 },
//   { from: 150, to: 200 },
//   { from: 200, to: 250 },
//   { from: 250, to: null },
// ];
