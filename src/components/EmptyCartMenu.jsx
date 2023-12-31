import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

function EmptyCartMenu({ setShowMenu }) {
  return (
    <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2  flex-col items-center justify-start gap-6 text-center  ">
      <BsCartPlus className="text-9xl text-gray-400" />

      <h1 className="text-2xl font-medium uppercase text-gray-700 md:text-3xl">
        your cart is Empty
      </h1>
      <Link
        onClick={() => setShowMenu(false)}
        className="border-b-2 bg-[var(--color-brand-500)] px-4 py-2  text-sm font-medium capitalize tracking-wider text-white hover:bg-[var(--color-brand-600)] md:text-lg"
        to="/shop"
      >
        start shopping
      </Link>
    </div>
  );
}

export default EmptyCartMenu;
