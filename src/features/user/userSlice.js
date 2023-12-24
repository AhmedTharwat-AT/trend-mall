import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: "",
  password: "",
  payments: [],
  cart: [],
  favourites: [],
  order: null,
  checkedOut: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
