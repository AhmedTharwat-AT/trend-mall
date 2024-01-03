import { useState } from "react";
import { FaUser } from "react-icons/fa";

import useOutsideClicks from "../../hooks/useOutsideClicks";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "./userSlice";
import { clearCart } from "../cart/cartSlice";

function UserNavMenu({ user }) {
  const [showMenu, setShowMenu] = useState(false);
  const { ref } = useOutsideClicks(() => setShowMenu(false), false);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
    dispatch(clearCart());
    localStorage.removeItem("user");
  }

  return (
    <li className="items-ceenter relative cursor-pointer p-1 text-xl text-gray-800 sm:text-2xl ">
      <FaUser
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu((s) => !s);
        }}
        className={`hover:text-[var(--color-brand-500)] ${
          showMenu && "text-[var(--color-brand-500)]"
        }`}
      />
      {showMenu && (
        <ul
          ref={ref}
          className="absolute right-0 top-8 w-48 overflow-hidden rounded bg-gray-200 bg-opacity-90"
        >
          {user.isLogged ? (
            <>
              <li className="cursor-default truncate border-b border-gray-400 p-2 pl-3 text-lg font-medium">
                Welcome , {user.firstName}
              </li>
              <li>
                <Link
                  onClick={() => setShowMenu(false)}
                  className="ml-2 flex items-center gap-3 px-5 py-2 pl-4 text-sm uppercase hover:bg-gray-700 hover:text-white"
                  to="/account"
                >
                  account
                </Link>
              </li>
              <li onClick={handleLogout}>
                <Link
                  onClick={() => setShowMenu(false)}
                  className="ml-2 flex items-center gap-3 px-5 py-2 pl-4 text-sm uppercase hover:bg-gray-700 hover:text-white"
                  to="/home"
                >
                  logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="cursor-default border-b border-gray-400 p-2 pl-3 text-lg font-medium">
                Welcome
              </li>
              <li>
                <Link
                  onClick={() => setShowMenu(false)}
                  className="ml-2 flex items-center gap-3 px-5 py-2 pl-4 text-sm uppercase hover:bg-gray-700 hover:text-white"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setShowMenu(false)}
                  className="ml-2 flex items-center gap-3 px-5 py-2 pl-4 text-sm uppercase hover:bg-gray-700 hover:text-white"
                  to="/signup"
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </li>
  );
}

export default UserNavMenu;
