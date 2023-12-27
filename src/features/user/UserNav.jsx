import UserNavMenu from "./UserNavMenu";

import NavCart from "../cart/NavCart";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserNav() {
  const user = useSelector((state) => state.user);

  return (
    <ul className="ml-auto flex items-center justify-between  md:ml-0">
      {user.isLogged && (
        <li className="text-end">
          <Link
            to="/account/wishlist"
            className="relative mr-3  block cursor-pointer  items-center p-1  "
          >
            <FaHeart className="block cursor-pointer text-2xl text-red-500 hover:text-red-600" />
          </Link>
        </li>
      )}
      <UserNavMenu user={user} />
      <NavCart />
    </ul>
  );
}

export default UserNav;
