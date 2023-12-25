import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CheckoutUserInfo() {
  const user = useSelector((state) => state.user);

  return (
    <div className="w-2/3">
      <div className="w-full bg-gray-100 p-3 py-4 text-xl font-semibold uppercase tracking-wider text-gray-800">
        <h1>BILLING DETAILS</h1>
      </div>
      <div className="mt-3 flex h-full bg-gray-100 p-3">
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
          <></>
        )}
      </div>
    </div>
  );
}

export default CheckoutUserInfo;
