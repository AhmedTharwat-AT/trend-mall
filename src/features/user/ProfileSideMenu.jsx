import { NavLink } from "react-router-dom";

function ProfileSideMenu() {
  return (
    <div className="mx-5 h-fit w-full overflow-hidden rounded-md border border-gray-300 bg-gray-100 md:mx-0 md:w-fit lg:w-60 ">
      <ul className="flex flex-col divide-y divide-gray-300 text-base capitalize tracking-wider text-gray-800 md:flex-row lg:flex-col">
        <li>
          <NavLink
            className="block cursor-pointer p-4 hover:bg-gray-200 [&.active]:bg-[var(--color-brand-500)] [&.active]:text-gray-50"
            to="profile"
          >
            personal info
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block cursor-pointer p-4  hover:bg-gray-200 [&.active]:bg-[var(--color-brand-500)] [&.active]:text-gray-50"
            to="orders"
          >
            orders
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block cursor-pointer p-4  hover:bg-gray-200 [&.active]:bg-[var(--color-brand-500)] [&.active]:text-gray-50"
            to="wishlist"
          >
            wishlist
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block cursor-pointer p-4 hover:bg-gray-200 [&.active]:bg-[var(--color-brand-500)] [&.active]:text-gray-50"
            to="payment"
          >
            payment method
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ProfileSideMenu;
