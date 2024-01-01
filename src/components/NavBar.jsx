import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import useNavBarPosition from "../hooks/useNavBarPosition";
import MenuBtn from "./MenuBtn";
import UserNav from "../features/user/UserNav";
import useOutsideClicks from "../hooks/useOutsideClicks";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const { ref } = useNavBarPosition();
  const { ref: refPhone } = useOutsideClicks(() => setShowMenu(false));

  function handleLinkClick(e) {
    if (e.target.closest("a")) {
      setShowMenu(false);
      window.scrollTo(0, 0);
    }
  }

  return (
    <nav
      ref={ref}
      className="absolute left-0 top-0 z-50 flex h-16 w-full items-center justify-center bg-gray-200 max-nav:h-20 sm:h-20 "
      onClick={handleLinkClick}
    >
      <div className="container mx-auto flex  h-full w-full items-center justify-between py-3  max-nav:flex-wrap sm:px-6 md:gap-4">
        <Logo />

        <ul
          ref={refPhone}
          className={`${
            showMenu ? "max-h-44 py-12" : "max-md:max-h-0 "
          } max-md:drop-menu text-lg font-medium capitalize tracking-wider transition-all duration-500 md:flex md:animate-none md:space-x-4 lg:gap-x-8  `}
        >
          <li className="w-full">
            <NavLink
              to="/home"
              className="block p-1 text-[var(--color-grey-900)]  transition-all max-md:hover:translate-x-2 md:hover:text-[var(--color-brand-500)] [&.active]:text-[var(--color-brand-500)]"
            >
              Home
            </NavLink>
          </li>

          <li className="w-full">
            <NavLink
              to="/shop"
              className="block p-1 text-[var(--color-grey-900)]  transition-all max-md:hover:translate-x-2 md:hover:text-[var(--color-brand-500)] [&.active]:text-[var(--color-brand-500)]"
            >
              Shop
            </NavLink>
          </li>

          <li className="w-full">
            <NavLink
              to="/about"
              className="block p-1 text-[var(--color-grey-900)]  transition-all max-md:hover:translate-x-2 md:hover:text-[var(--color-brand-500)] [&.active]:text-[var(--color-brand-500)]"
            >
              About
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/contact"
              className="block p-1 text-[var(--color-grey-900)]  transition-all max-md:hover:translate-x-2 md:hover:text-[var(--color-brand-500)] [&.active]:text-[var(--color-brand-500)]"
            >
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
