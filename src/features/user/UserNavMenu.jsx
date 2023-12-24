import { useState } from "react";
import { FaUser } from "react-icons/fa";

import useOutsideClicks from "../../hooks/useOutsideClicks";
import { Link } from "react-router-dom";

function UserNavMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const { ref } = useOutsideClicks(() => setShowMenu(false));

  return (
    <li
      onClick={() => setShowMenu((s) => !s)}
      className="items-ceenter relative  mr-4 cursor-pointer text-2xl text-gray-800 "
    >
      <FaUser
        className={`hover:text-[var(--color-brand-500)] ${
          showMenu && "text-[var(--color-brand-500)]"
        }`}
      />
      {showMenu && (
        <ul
          ref={ref}
          className="absolute right-0 top-8 w-48 rounded bg-gray-200 "
        >
          <li className="border-b border-gray-400 p-2 pl-3 text-lg font-medium">
            Welcome
          </li>
          <li>
            <Link
              className="ml-2 flex items-center gap-3 px-5 py-2 pl-4 text-sm uppercase hover:bg-gray-700 hover:text-white"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="ml-2 flex items-center gap-3 px-5 py-2 pl-4 text-sm uppercase hover:bg-gray-700 hover:text-white"
              to="/signup"
            >
              Sign up
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}

export default UserNavMenu;
