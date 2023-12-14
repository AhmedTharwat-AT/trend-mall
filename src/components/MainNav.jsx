import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useEffect, useRef } from "react";

function MainNav() {
  const ref = useRef();
  useEffect(() => {
    function handleNavBg() {
      if (window.scrollY > 300) {
        ref.current.classList.remove("absolute");
        ref.current.classList.add("fixed", "bg-gray-200", "bg-opacity-70");
      } else {
        ref.current.classList.remove("fixed", "bg-gray-200", "bg-opacity-70");
        ref.current.classList.add("absolute");
      }
    }
    document.addEventListener("scroll", handleNavBg);

    return () => document.removeEventListener("scroll", handleNavBg);
  }, []);

  return (
    <nav
      ref={ref}
      className="absolute flex items-center justify-between gap-4  bg-none px-6 py-3 "
    >
      <NavLink className="basis-60" to="/home">
        <Logo />
      </NavLink>
      <ul className="flex space-x-4 text-lg font-semibold uppercase">
        <li className="transition-all hover:-translate-y-1">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="transition-all hover:-translate-y-1">
          <NavLink to="/products">Shop</NavLink>
        </li>
        <li className="transition-all hover:-translate-y-1">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="transition-all hover:-translate-y-1">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
