import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

function UserNav() {
  return (
    <ul className="ml-auto flex items-center gap-5 md:ml-0">
      <li className="cursor-pointer text-2xl text-gray-800 hover:text-[var(--color-brand-500)]">
        <FaUser />
      </li>
      <li className="cursor-pointer  text-3xl text-gray-800 hover:text-[var(--color-brand-500)]">
        <IoMdCart />
      </li>
      <li></li>
    </ul>
  );
}

export default UserNav;
