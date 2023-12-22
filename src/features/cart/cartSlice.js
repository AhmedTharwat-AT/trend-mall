import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartID: null,
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  checkedOut: false,
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // {item}
      const index = state.items.findIndex((el) => el.id === action.payload.id);
      if (index === -1) {
        state.items.push(action.payload);
        state.count += 1;
      } else {
        state.items[index].quantity += action.payload.quantity;
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
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
