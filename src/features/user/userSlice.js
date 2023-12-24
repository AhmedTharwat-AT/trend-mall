import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: "",
  password: "",
  payments: [],
  cart: [],
  favourites: [],
  orders: [],
  checkedOut: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
