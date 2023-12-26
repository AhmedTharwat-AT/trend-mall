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
    updateOrders(state, action) {
      state.orders = action.payload;
    },
    logoutUser() {
      return initialState;
    },
    checkout(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { loginUser, logoutUser, checkout, updateOrders } =
  userSlice.actions;
