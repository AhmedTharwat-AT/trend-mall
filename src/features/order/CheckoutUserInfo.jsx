import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CheckoutUserInfo({ register, errors }) {
  const user = useSelector((state) => state.user);

  return (
    <div className="w-full grow md:w-3/5 lg:w-2/3">
      <div className="w-full bg-gray-100 p-3 py-4 text-xl font-semibold uppercase tracking-wider text-gray-800">
        <h1>BILLING DETAILS</h1>
      </div>
      <div className="mt-3 flex min-h-[85%] w-full flex-col bg-gray-100 p-3 pl-8">
        {!user.isLogged ? (
          <h1 className="text-base font-medium capitalize tracking-widest">
            please{" "}
            <Link
              className="border-gray-500 text-[var(--color-brand-500)] hover:border-b"
              to="/login"
            >
              Login
            </Link>{" "}
            first
          </h1>
        ) : (
          <>
            <form className="h-full space-y-4 py-5">
              <div className="flex items-center  gap-8 ">
                <label className="w-16 text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-2/3 rounded bg-gray-300 px-3 py-1 text-sm text-gray-800 opacity-70"
                  disabled
                  defaultValue={user.email}
                />
              </div>
              <div className="flex items-center  gap-8">
                <label className="w-16 text-sm" htmlFor="email">
                  Firstname
                </label>
                <input
                  className="w-2/3 rounded bg-gray-300 px-3 py-1 text-sm text-gray-800 opacity-70"
                  disabled
                  defaultValue={user.firstName}
                />
              </div>
              <div className="flex items-center  gap-8">
                <label className="w-16 text-sm" htmlFor="email">
                  Lastname
                </label>
                <input
                  className="w-2/3 rounded bg-gray-300 px-3 py-1 text-sm text-gray-800 opacity-70"
                  disabled
                  defaultValue={user.lastName}
                />
              </div>
              <div className="flex flex-col ">
                <div className="flex w-full items-center  gap-8">
                  <label className="relative w-16 text-sm" htmlFor="email">
                    City{" "}
                    <span className="relative right-0 top-0 text-red-500">
                      *
                    </span>
                  </label>
                  <input
                    className="w-2/3 rounded border border-gray-300 bg-white px-3 py-1 text-sm text-gray-800 focus:outline-[var(--color-brand-500)] "
                    {...register("city", {
                      required: "this field is required",
                    })}
                  />
                </div>
                <p className="ml-24 p-1 text-sm tracking-wide text-red-600 sm:text-xs">
                  {errors.city ? errors.city.message : ""}
                </p>
              </div>
              <div className="flex flex-col ">
                <div className="flex w-full items-center  gap-8">
                  <label className="relative w-16 text-sm" htmlFor="email">
                    Address{" "}
                    <span className="relative right-0 top-0 text-red-500">
                      *
                    </span>
                  </label>
                  <input
                    className="w-2/3 rounded border border-gray-300 bg-white px-3 py-1 text-sm text-gray-800 focus:outline-[var(--color-brand-500)] "
                    {...register("address", {
                      required: "this field is required",
                    })}
                  />
                </div>
                <p className="ml-24 p-1 text-sm tracking-wide text-red-600 sm:text-xs">
                  {errors.address ? errors.address.message : ""}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center  gap-8">
                  <label className="relative w-16 text-sm" htmlFor="email">
                    Phone{" "}
                    <span className="relative right-0 top-0 text-red-500">
                      *
                    </span>
                  </label>
                  <input
                    className="w-2/3 rounded border border-gray-300 bg-white px-3 py-1 text-sm text-gray-800 focus:outline-[var(--color-brand-500)] "
                    {...register("phone", {
                      required: "this field is required",
                      minLength: {
                        value: 5,
                        message: "number cant be less than 5 chars",
                      },
                      validate: (value) =>
                        isFinite(value) || "Enter valid number",
                    })}
                  />
                </div>
                <p className="ml-24 p-1 text-sm tracking-wide text-red-600 sm:text-xs">
                  {errors.phone ? errors.phone.message : ""}
                </p>
              </div>
              <div className=" flex flex-col items-start  ">
                <label className="relative  text-sm" htmlFor="email">
                  Payment method :
                </label>
                <div className="ml-24 flex gap-3 py-1">
                  <input
                    type="radio"
                    value={true}
                    defaultChecked
                    className=" rounded border  accent-[var(--color-brand-500)] checked:disabled:!accent-red-400  "
                  />
                  <p className="text-sm text-gray-700">Cash on delivery</p>
                </div>
                <div className="ml-24 flex gap-3 py-1">
                  <input
                    type="radio"
                    disabled
                    checked
                    className=" rounded border px-3 py-1 accent-gray-950  "
                  />
                  <div className="flex gap-2 text-sm text-gray-700">
                    <p className=" line-through">Credit card </p>
                    <span className="text-gray-400 "> (comming soon)</span>
                  </div>
                </div>
              </div>
              <div className="flex  items-start gap-4 ">
                <label className="relative w-20   text-sm" htmlFor="email">
                  Order notes :
                </label>
                <textarea
                  type=""
                  className="w-2/3 rounded border border-gray-300 bg-white px-3 py-1 text-sm text-gray-800 focus:outline-[var(--color-brand-500)] "
                  {...register("notes")}
                />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default CheckoutUserInfo;
