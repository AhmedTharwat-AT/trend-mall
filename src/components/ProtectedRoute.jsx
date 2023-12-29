import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../features/user/userSlice";
import { setUserCart } from "../features/user/userSlice";
import { linkToUser, updateCart } from "../features/cart/cartSlice";

import { updateLocalStorageUser } from "../utils/helpers";

function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const userID = localStorage.getItem("user");
  const cart = useSelector((state) => state.cart);
  const isLogged = useSelector((state) => state.user.isLogged);

  //auto login user if he didnt logout and visited the site again
  useEffect(() => {
    if (!userID || isLogged) return;
    const users = JSON.parse(localStorage.getItem("users"));
    if (!users) return;
    const user = users.find((el) => el.id === userID);

    dispatch(loginUser(user));
  }, [dispatch, userID, isLogged]);

  //set cart to user cart if it has items
  useEffect(() => {
    if (!userID || cart.cartID) return;
    const users = JSON.parse(localStorage.getItem("users"));
    if (!users) return;
    const user = users.find((el) => el.id === userID);

    if (cart?.totalQuantity > 0) {
      dispatch(setUserCart({ ...cart, cartID: userID }));
      dispatch(linkToUser(userID));
      updateLocalStorageUser(cart, "cart");
      return;
    }
    if (user?.cart?.count > 0) {
      dispatch(updateCart({ ...user.cart, cartID: userID }));
    }
  }, [userID, dispatch, cart]);

  //protected routes
  useEffect(() => {
    if (
      userID &&
      (location.pathname == "/login" ||
        location.pathname == "/signup" ||
        location.pathname.includes("password"))
    ) {
      navigate("/home");
    }
    if (!cart.count && location.pathname.includes("/order/")) {
      navigate("/home");
    }
    if (!userID && location.pathname.includes("/account")) {
      navigate("/home");
    }
  }, [location, navigate, userID, cart.count]);

  return <>{children}</>;
}

export default ProtectedRoute;
