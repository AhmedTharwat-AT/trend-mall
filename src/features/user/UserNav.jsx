import UserNavMenu from "./UserNavMenu";

import NavCart from "../cart/NavCart";

function UserNav() {
  return (
    <ul className="ml-auto flex items-center justify-between  md:ml-0">
      <UserNavMenu />
      <NavCart />

      <li></li>
    </ul>
  );
}

export default UserNav;
