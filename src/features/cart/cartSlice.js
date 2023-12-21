import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userID: null,
  cartID: null,
  items: [],
  totalQuantity: 0,
  totalPrice: null,
  checkedOut: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      return state;
    },
    updateCart(state, action) {
      return state;
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

export default cartSlice.reducer;
export const { getCart, addCart, updateCart, clearCart } = cartSlice.actions;
