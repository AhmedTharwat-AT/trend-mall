import { createSlice } from "@reduxjs/toolkit";
import { updateLocalStorageUser } from "../../utils/helpers";

const initialState = {
  id: null,
  email: "",
  password: "",
  cart: {},
  wishlist: [],
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
    toggleWishlist(state, action) {
      state.wishlist = action.payload;
    },
  },
});

export function toggleWishlist(item) {
  return (dispatch, getState) => {
    const wishlist = [...getState().user.wishlist];
    const index = wishlist.findIndex((el) => el.id === item.id);
    const isAdded = index >= 0;

    if (isAdded) {
      wishlist.splice(index, 1);
    } else {
      wishlist.push(item);
    }
    updateLocalStorageUser(wishlist, "wishlist");
    dispatch({ type: "user/toggleWishlist", payload: wishlist });
  };
}

export default userSlice.reducer;
export const { loginUser, logoutUser, checkout, updateOrders, setUserCart } =
  userSlice.actions;
