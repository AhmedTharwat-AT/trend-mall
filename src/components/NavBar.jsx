import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import useNavBarPosition from "../hooks/useNavBarPosition";
import MenuBtn from "./MenuBtn";
import UserNav from "../features/user/UserNav";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const { ref } = useNavBarPosition();

  return (
    <nav
      ref={ref}
      className="absolute left-0 top-0 z-50 w-full min-w-[375px] bg-gray-200 bg-opacity-40 bg-none"
    >
      <div className="container mx-auto flex h-20 w-full   items-center justify-between  px-6 py-3 md:gap-4">
        <Logo />

        <ul
          className={`${
            showMenu ? " animate-gradHeight" : "animate-decHeight "
          } max-md:drop-menu text-base font-medium capitalize tracking-wider md:flex md:animate-none md:space-x-4`}
        >
          <li className=" text-[var(--color-grey-900)]  transition-all max-md:hover:translate-x-2 md:hover:text-[var(--color-brand-500)]">
            <NavLink to="/home" className="w-full">
              Home
            </NavLink>
          </li>

          <li className="text-[var(--color-grey-900)] transition-all max-md:hover:translate-x-2 md:hover:text-[var(--color-brand-500)]">
            <NavLink to="/products" className="w-full">
              Shop
            </NavLink>
          </li>

          <li className="text-[var(--color-grey-900)]  transition-all max-md:hover:translate-x-2 md:hover:text-[var(--color-brand-500)]">
            <NavLink to="/about" className="w-full">
              About
            </NavLink>
          </li>
          <li className="text-[var(--color-grey-900)] transition-all max-md:hover:translate-x-2 md:hover:text-[var(--color-brand-500)]">
            <NavLink to="/contact" className="w-full">
              Contact
            </NavLink>
          </li>
        </ul>

        <UserNav />

        <MenuBtn showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </nav>
  );
}

export default NavBar;
