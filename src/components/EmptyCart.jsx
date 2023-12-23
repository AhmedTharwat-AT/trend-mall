import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

function EmptyCart({ setShowMenu }) {
  return (
    <div className="mt-40 flex  flex-col items-center justify-start gap-6  ">
      <BsCartPlus className="text-9xl text-gray-400" />

      <h1 className="text-5xl font-semibold uppercase text-gray-700">
        Empty cart
      </h1>
      <Link
        onClick={() => setShowMenu(false)}
        className="border-b-2 bg-gray-800 px-4 py-2  text-lg font-medium capitalize tracking-wider text-white hover:bg-gray-700"
        to="/shop"
      >
        Add items to you cart
      </Link>
    </div>
  );
}

export default EmptyCart;
