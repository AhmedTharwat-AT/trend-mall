import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: "",
  password: "",
  cart: {},
  Wishlist: [],
  orders: [],
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      return { ...state, ...action.payload, isLogged: true };
    },
    logoutUser() {
      return initialState;
    },
    updateOrders(state, action) {
      state.orders = action.payload;
    },
    checkout(state, action) {
      state.orders.push(action.payload);
    },
    setUserCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { loginUser, logoutUser, checkout, updateOrders, setUserCart } =
  userSlice.actions;
