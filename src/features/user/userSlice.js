import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: "",
  password: "",
  cart: {},
  favourites: [],
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
    checkout(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { loginUser, logoutUser, checkout } = userSlice.actions;
