import { NavLink, Outlet } from "react-router-dom";

function Account() {
  return (
    <section className="my-10 py-7">
      <div className="container px-6">
        <div className="flex flex-wrap justify-center gap-5 md:flex-nowrap">
          <div className="mx-5 h-fit w-full overflow-hidden rounded-md bg-gray-200 md:mx-0 md:w-60 ">
            <ul className="flex flex-col  divide-y divide-gray-300 text-base capitalize tracking-wider text-gray-800">
              <li>
                <NavLink
                  className="block cursor-pointer p-4 hover:bg-gray-100 [&.active]:bg-[var(--color-brand-500)] [&.active]:text-gray-50"
                  to="personal"
                >
                  personal info
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block cursor-pointer p-4  hover:bg-gray-100 [&.active]:bg-[var(--color-brand-500)] [&.active]:text-gray-50"
                  to="orders"
                >
                  orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block cursor-pointer p-4 hover:bg-gray-100 [&.active]:bg-[var(--color-brand-500)] [&.active]:text-gray-50"
                  to="payment"
                >
                  payment method
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="min-h-[300px] grow rounded-md bg-gray-100 p-5 sm:p-7">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
