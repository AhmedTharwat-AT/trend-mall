import { FaHeart } from "react-icons/fa";
import UserNavMenu from "./UserNavMenu";

import NavCart from "../cart/NavCart";

function UserNav() {
  return (
    <ul className="ml-auto flex items-center justify-between  md:ml-0">
      {/* <li className="items-ceenter cursor-pointer text-2xl text-gray-800 hover:text-red-500">
        <FaHeart />
      </li> */}
      <UserNavMenu />
      <NavCart />

      <li></li>
    </ul>
  );
}

export default UserNav;
