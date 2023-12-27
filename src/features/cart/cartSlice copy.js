import { createSlice } from "@reduxjs/toolkit";

function subTotalPrice(item) {
  //calc subtotal price
  const discountAmount = item.price * (item.discountPercentage / 100);
  const priceBeforeDiscount = discountAmount + item.price;
  return priceBeforeDiscount;
}

const initialState = {
  cartID: null,
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  subTotal: 0,
  checkedOut: false,
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart(state, action) {
      return { ...action.payload };
    },
    clearCart() {
      return initialState;
    },
  },
});

export function addItem(action) {
  const product = action;
  return (dispatch, getState) => {
    const cartState = getState().cart;
    const cart = { ...cartState };
    const items = [...cart.items];
    const index = items.findIndex((el) => el.id === product.id);
    if (index === -1) {
      items.push(product);
      cart.count += 1;
    } else {
      items[index] = { ...items[index] };
      items[index].quantity += product.quantity;
    }
    cart.totalQuantity += product.quantity;
    cart.totalPrice += product.price * product.quantity;
    //calc subtotal price
    const priceBeforeDiscount = subTotalPrice(product);
    cart.subTotal += priceBeforeDiscount * product.quantity;

    dispatch({ type: "cart/updateCart", payload: { ...cart, items } });
    const isLogged = localStorage.getItem("user") ?? null;
    if (isLogged) {
      dispatch({ type: "user/setUserCart", payload: { ...cart, items } });
    }
  };
}

export function decreaseQuantity(info) {
  const { itemID } = info;
  return (dispatch, getState) => {
    const cartState = getState().cart;
    const cart = { ...cartState };
    const items = [...cart.items];
    const index = items.findIndex((el) => el.id === itemID);
    if (items[index].quantity == 1) return;
    items[index] = { ...items[index] };

    items[index].quantity -= 1;
    cart.totalQuantity -= 1;
    cart.totalPrice -= items[index].price;
    //calc subtotal price
    const priceBeforeDiscount = subTotalPrice(cart.items[index]);
    cart.subTotal -= priceBeforeDiscount;

    dispatch({ type: "cart/updateCart", payload: { ...cart, items } });
    const isLogged = localStorage.getItem("user") ?? null;
    if (isLogged) {
      dispatch({ type: "user/setUserCart", payload: { ...cart, items } });
    }
  };
}

export function increaseQuantity(info) {
  const { itemID } = info;
  return (dispatch, getState) => {
    const cartState = getState().cart;
    const cart = { ...cartState };
    const items = [...cart.items];
    const index = items.findIndex((el) => el.id === itemID);
    items[index] = { ...items[index] };

    items[index].quantity += 1;
    cart.totalQuantity += 1;
    cart.totalPrice += items[index].price;
    //calc subtotal price
    const priceBeforeDiscount = subTotalPrice(items[index]);
    cart.subTotal += priceBeforeDiscount;

    dispatch({ type: "cart/updateCart", payload: { ...cart, items } });
    const isLogged = localStorage.getItem("user") ?? null;
    if (isLogged) {
      dispatch({ type: "user/setUserCart", payload: { ...cart, items } });
    }
  };
}
export function deleteItem(info) {
  const { itemID } = info;
  return (dispatch, getState) => {
    const cartState = getState().cart;
    const cart = { ...cartState };
    const items = [...cart.items];
    const index = items.findIndex((el) => el.id === itemID);
    items[index] = { ...items[index] };

    cart.totalQuantity -= items[index].quantity;
    cart.totalPrice -= items[index].price * items[index].quantity;
    const priceBeforeDiscount = subTotalPrice(items[index]);
    cart.subTotal -= priceBeforeDiscount * items[index].quantity;

    items.splice(index, 1);
    cart.count -= 1;

    dispatch({ type: "cart/updateCart", payload: { ...cart, items } });
    const isLogged = localStorage.getItem("user") ?? null;
    if (isLogged) {
      dispatch({ type: "user/setUserCart", payload: { ...cart, items } });
    }
  };
}

export default cartSlice.reducer;
export const { clearCart } = cartSlice.actions;

// addItem(state, action) {
//   // payload = product
//   const index = state.items.findIndex((el) => el.id === action.payload.id);
//   if (index === -1) {
//     state.items.push(action.payload);
//     state.count += 1;
//   } else {
//     state.items[index].quantity += action.payload.quantity;
//   }
//   state.totalQuantity += action.payload.quantity;
//   state.totalPrice += action.payload.price * action.payload.quantity;
//   //calc subtotal price
//   const priceBeforeDiscount = subTotalPrice(action.payload);
//   state.subTotal += priceBeforeDiscount * action.payload.quantity;
// },

// decreaseQuantity(state, action) {
//   //payload = item id
//   const index = state.items.findIndex(
//     (el) => el.id === action.payload.itemID,
//   );
//   if (state.items[index].quantity == 1) return;

//   state.items[index].quantity -= 1;
//   state.totalQuantity -= 1;
//   state.totalPrice -= state.items[index].price;
//   //calc subtotal price
//   const priceBeforeDiscount = subTotalPrice(state.items[index]);
//   state.subTotal -= priceBeforeDiscount;
// },

// increaseQuantity(state, action) {
//   //payload = item id
//   const index = state.items.findIndex(
//     (el) => el.id === action.payload.itemID,
//   );
//   state.items[index].quantity += 1;
//   state.totalQuantity += 1;
//   state.totalPrice += state.items[index].price;
//   //calc subtotal price
//   const priceBeforeDiscount = subTotalPrice(state.items[index]);
//   state.subTotal += priceBeforeDiscount;
// },

// deleteItem(state, action) {
//   //payload = item id
//   const index = state.items.findIndex(
//     (el) => el.id === action.payload.itemID,
//   );
//   state.totalQuantity -= state.items[index].quantity;
//   state.totalPrice -=
//     state.items[index].price * state.items[index].quantity;
//   const priceBeforeDiscount = subTotalPrice(state.items[index]);
//   state.subTotal -= priceBeforeDiscount * state.items[index].quantity;

//   state.items.splice(index, 1);
//   state.count -= 1;
// },
