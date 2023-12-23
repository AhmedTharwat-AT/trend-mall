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
// const discount = price * (discountPercentage / 100);
// const originalPrice = price + discount;
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = product
      const index = state.items.findIndex((el) => el.id === action.payload.id);
      if (index === -1) {
        state.items.push(action.payload);
        state.count += 1;
      } else {
        state.items[index].quantity += action.payload.quantity;
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
      //calc subtotal price
      const priceBeforeDiscount = subTotalPrice(action.payload);
      state.subTotal += priceBeforeDiscount * action.payload.quantity;
    },
    decreaseQuantity(state, action) {
      //payload = item id
      if (action.payload.quantity == 1) return;
      const index = state.items.findIndex(
        (el) => el.id === action.payload.itemID,
      );
      state.items[index].quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= state.items[index].price;
      //calc subtotal price
      const priceBeforeDiscount = subTotalPrice(state.items[index]);
      state.subTotal -= priceBeforeDiscount;
    },
    increaseQuantity(state, action) {
      //payload = item id
      const index = state.items.findIndex(
        (el) => el.id === action.payload.itemID,
      );
      state.items[index].quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += state.items[index].price;
      //calc subtotal price
      const priceBeforeDiscount = subTotalPrice(state.items[index]);
      state.subTotal += priceBeforeDiscount;
    },
    deleteItem(state, action) {
      //payload = item id
      const index = state.items.findIndex(
        (el) => el.id === action.payload.itemID,
      );
      state.totalQuantity -= state.items[index].quantity;
      state.totalPrice -=
        state.items[index].price * state.items[index].quantity;
      const priceBeforeDiscount = subTotalPrice(state.items[index]);
      state.subTotal -= priceBeforeDiscount * state.items[index].quantity;

      state.items.splice(index, 1);
      state.count -= 1;
    },
    checkoutCart(state, action) {
      state = action.payload;
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  decreaseQuantity,
  increaseQuantity,
  deleteItem,
  clearCart,
  checkoutCart,
} = cartSlice.actions;
