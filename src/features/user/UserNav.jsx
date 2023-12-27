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
        <li>
          <Link
            to="/account/wishlist"
            className="items-ceenter relative mr-4  block cursor-pointer text-2xl text-red-500 "
          >
            <FaHeart className="cursor-pointer  hover:text-red-600" />
          </Link>
        </li>
      )}
      <UserNavMenu user={user} />
      <NavCart />
    </ul>
  );
}

export default UserNav;
