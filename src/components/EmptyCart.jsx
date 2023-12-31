import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="my-20 flex flex-col items-center justify-start gap-6  ">
      <BsCartPlus className="text-9xl text-gray-400" />

      <h1 className="text-5xl font-semibold uppercase text-gray-700">
        Empty cart
      </h1>
      <Link
        className="border-b-2 bg-[var(--color-brand-500)] px-4 py-2  text-lg font-medium capitalize tracking-wider text-white hover:bg-[var(--color-brand-600)]"
        to="/shop"
      >
        go shopping
      </Link>
    </div>
  );
}

export default EmptyCart;
