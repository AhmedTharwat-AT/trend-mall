import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../features/user/userSlice";

function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const userID = localStorage.getItem("user");
  const count = useSelector((state) => state.cart.count);

  useEffect(() => {
    const usersStored = localStorage.getItem("users");
    if (!userID) return;
    if (usersStored == "undefined") return;
    const users = JSON.parse(usersStored);
    const user = users.find((el) => el.id === userID);
    dispatch(loginUser(user));
  }, [dispatch, userID]);

  useEffect(() => {
    if (
      userID &&
      (location.pathname == "/login" || location.pathname == "/signup")
    ) {
      navigate("/home");
    }
    if (!count && location.pathname.includes("/order/")) {
      navigate("/home");
    }
    if (!userID && location.pathname.includes("/account")) {
      navigate("/home");
    }
  }, [location, navigate, userID, count]);

  return <>{children}</>;
}

export default ProtectedRoute;
