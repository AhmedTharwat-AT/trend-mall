import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: "",
  password: "",
  cart: [],
  favourites: [],
  checkedOut: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
