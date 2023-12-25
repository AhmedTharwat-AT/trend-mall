import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: "",
  password: "",
  payments: [],
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
  },
});

export default userSlice.reducer;
export const { loginUser, logoutUser } = userSlice.actions;
