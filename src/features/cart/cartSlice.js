import { createSlice } from "@reduxjs/toolkit";
import { updateLocalStorageUser } from "../../utils/helpers";

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
    updateCart(_, action) {
      return { ...action.payload };
    },
    clearCart() {
      return initialState;
    },
    linkToUser(state, action) {
      //payload = userId
      state.cartID = action.payload;
    },
  },
});

function getValues(getState, itemID) {
  const cart = { ...getState().cart };
  const items = [...cart.items];
  const index = items.findIndex((el) => el.id === itemID);
  items[index] = { ...items[index] };
  return { cart, items, index };
}

function updateStates(dispatch, data) {
  dispatch({ type: "cart/updateCart", payload: data });
  const user = localStorage.getItem("user");
  const isLogged = user ?? null;
  if (isLogged) {
    dispatch({ type: "user/setUserCart", payload: { ...data, cartID: user } });
  }
  updateLocalStorageUser({ ...data, cartID: user }, "cart");
}

export function addItem(action) {
  const product = action;
  const { id: itemID } = product;
  return (dispatch, getState) => {
    const { cart, items, index } = getValues(getState, itemID);

    if (index === -1) {
      items.push(product);
      cart.count += 1;
    } else {
      items[index].quantity += product.quantity;
    }
    cart.totalQuantity += product.quantity;
    cart.totalPrice += product.price * product.quantity;
    //calc subtotal price
    const priceBeforeDiscount = subTotalPrice(product);
    cart.subTotal += priceBeforeDiscount * product.quantity;

    updateStates(dispatch, { ...cart, items });
  };
}

export function decreaseQuantity(info) {
  const { itemID } = info;
  return (dispatch, getState) => {
    const { cart, items, index } = getValues(getState, itemID);

    if (items[index].quantity == 1) return;

    items[index].quantity -= 1;
    cart.totalQuantity -= 1;
    cart.totalPrice -= items[index].price;
    //calc subtotal price
    const priceBeforeDiscount = subTotalPrice(cart.items[index]);
    cart.subTotal -= priceBeforeDiscount;

    updateStates(dispatch, { ...cart, items });
  };
}

export function increaseQuantity(info) {
  const { itemID } = info;
  return (dispatch, getState) => {
    const { cart, items, index } = getValues(getState, itemID);

    items[index].quantity += 1;
    cart.totalQuantity += 1;
    cart.totalPrice += items[index].price;
    //calc subtotal price
    const priceBeforeDiscount = subTotalPrice(items[index]);
    cart.subTotal += priceBeforeDiscount;

    updateStates(dispatch, { ...cart, items });
  };
}

export function deleteItem(info) {
  const { itemID } = info;
  return (dispatch, getState) => {
    const { cart, items, index } = getValues(getState, itemID);

    cart.totalQuantity -= items[index].quantity;
    cart.totalPrice -= items[index].price * items[index].quantity;
    const priceBeforeDiscount = subTotalPrice(items[index]);
    cart.subTotal -= priceBeforeDiscount * items[index].quantity;
    items.splice(index, 1);
    cart.count -= 1;

    updateStates(dispatch, { ...cart, items });
  };
}

export function deleteCart() {
  return (dispatch) => {
    updateLocalStorageUser({}, "cart");
    dispatch({ type: "cart/clearCart" });
    dispatch({ type: "user/setUserCart", payload: {} });
  };
}

export default cartSlice.reducer;
export const { updateCart, clearCart, linkToUser } = cartSlice.actions;
