export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value,
  );

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export function updateLocalStorageUser(newCart, property) {
  const users = JSON.parse(localStorage.getItem("users"));
  const user = localStorage.getItem("user");
  if (!users || !user) return;
  const index = users.findIndex((el) => el.id === user);
  users[index][property] = newCart;
  localStorage.setItem("users", JSON.stringify(users));
}

export function sortArray(array, sort, value) {
  let sortedProducts = [...array];
  if (sort == "asc") {
    sortedProducts.sort((a, b) => +a?.[value] - +b?.[value]);
    return sortedProducts;
  }
  if (sort == "desc") {
    sortedProducts.sort((a, b) => +b?.[value] - +a?.[value]);
    return sortedProducts;
  }
  return sortedProducts;
}
