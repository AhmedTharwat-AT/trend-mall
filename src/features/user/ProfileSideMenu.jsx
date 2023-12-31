import { NavLink } from "react-router-dom";

function ProfileSideMenu() {
  return (
    <div className="mx-5 h-fit w-full max-w-[350px] overflow-hidden rounded-md border border-gray-200 bg-gray-100 shadow-md md:mx-0 md:mt-8 md:w-fit md:max-w-full lg:mt-0 lg:w-60 ">
      <ul className="flex  flex-col divide-y divide-gray-300 text-base capitalize tracking-wider text-gray-800 md:flex-row lg:flex-col">
        <li>
          <NavLink
            className="block cursor-pointer p-4 hover:bg-gray-200 md:py-2 lg:p-4 [&.active]:bg-[var(--color-brand-500)] [&.active]:text-gray-50"
            to="profile"
          >
            personal info
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block cursor-pointer p-4 hover:bg-gray-200 md:py-2 lg:p-4 [&.active]:bg-[var(--color-brand-500)] [&.active]:text-gray-50"
            to="orders"
          >
            orders
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block cursor-pointer p-4 hover:bg-gray-200 md:py-2 lg:p-4 [&.active]:bg-[var(--color-brand-500)] [&.active]:text-gray-50"
            to="wishlist"
          >
            wishlist
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className="block cursor-pointer p-4 hover:bg-gray-200 md:py-2 lg:p-4 [&.active]:bg-[var(--color-brand-500)] [&.active]:text-gray-50"
            to="payment"
          >
            payment method
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
}

export default ProfileSideMenu;
