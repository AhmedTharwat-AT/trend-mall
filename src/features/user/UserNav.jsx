import UserNavMenu from "./UserNavMenu";

import NavCart from "../cart/NavCart";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserNav() {
  const user = useSelector((state) => state.user);

  return (
    <ul className="ml-auto flex items-center justify-between space-x-2 max-md:mr-4  sm:space-x-2  md:ml-0">
      {user.isLogged && (
        <li className="text-end">
          <Link
            aria-label="wishlist"
            to="/account/wishlist"
            className="relative  block cursor-pointer  items-center p-1  "
          >
            <FaHeart className="block cursor-pointer text-xl text-red-500 hover:text-red-600 sm:text-2xl" />
          </Link>
        </li>
      )}
      <UserNavMenu user={user} />
      <NavCart />
    </ul>
  );
}

export default UserNav;
