import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../features/user/userSlice";

function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const userID = localStorage.getItem("user");

  useEffect(() => {
    if (!userID) return;
    const users = JSON.parse(localStorage.getItem("users"));
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
  }, [location, navigate, userID]);

  return <>{children}</>;
}

export default ProtectedRoute;
