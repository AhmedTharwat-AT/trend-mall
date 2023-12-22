import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    addItem(state, action) {
      // {items }
      state = action.payload;
    },
    updateItem(state, action) {
      state = action.payload;
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
export const { addItem, updateItem, clearCart, checkoutCart } =
  cartSlice.actions;
