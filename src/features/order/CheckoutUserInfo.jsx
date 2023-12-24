import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CheckoutUserInfo() {
  const user = useSelector((state) => state.user);

  if (!user.id)
    return (
      <div className="flex  w-2/3 flex-col">
        <div className="w-full bg-gray-100 p-3 text-xl font-semibold uppercase tracking-wider text-gray-800">
          <h1>BILLING DETAILS</h1>
        </div>
        <div className="mt-3 flex h-full bg-gray-100 p-3">
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
        </div>
      </div>
    );

  return <div className="w-2/3  ">user info</div>;
}

export default CheckoutUserInfo;
