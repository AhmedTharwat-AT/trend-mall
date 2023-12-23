import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function CartTable() {
  const { totalPrice, subTotal, items } = useSelector((state) => state.cart);

  return (
    <div className="flex w-full flex-wrap gap-4 py-4 lg:flex-nowrap lg:justify-between">
      <div className="flex w-full flex-col lg:w-4/6 lg:pr-4">
        <div className="sm:grid-cols-cart grid-cols-miniCart grid gap-2 border-b pb-5 pr-3 text-sm font-medium uppercase tracking-wide text-gray-800 sm:text-base lg:gap-0">
          <h1 className="sm:col-span-2">product</h1>
          <h1>quantity</h1>
          <h1 className="col-span-2">total</h1>
        </div>

        <div className="max-h-[500px] space-y-6 overflow-y-scroll border-b py-6">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="ml-auto mt-8">
          <Link
            className="border-2 px-4 py-3 text-lg font-medium uppercase text-gray-800  hover:bg-gray-800 hover:text-gray-50"
            to="/shop"
          >
            continue shopping
          </Link>
        </div>
      </div>
      <div className="mt-6 w-full overflow-hidden border-t-2 pt-6 lg:mt-0 lg:w-2/6 lg:border-none lg:pt-0">
        <div>
          <h1 className=" text-lg  font-medium uppercase tracking-wide text-gray-800">
            discount codes
          </h1>
          <div className="mt-5 flex h-12 w-full items-center  ">
            <input
              className="h-full w-full border-2 pl-3 outline-none lg:w-2/3"
              type="text"
              placeholder="Enter Code"
            />
            <button className="h-full bg-gray-900 px-7 py-3 text-base font-medium uppercase text-white hover:bg-gray-800">
              apply
            </button>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col gap-4 bg-gray-100 p-7">
          <h2 className="text-xl font-medium uppercase tracking-wide text-gray-700">
            cart total
          </h2>
          <div className="flex flex-col gap-1 divide-y-2 text-base">
            <div className="flex items-center justify-between capitalize tracking-wide text-gray-800">
              <h3>subtotal</h3>
              <p className="text-lg font-medium text-gray-900">
                {formatCurrency(subTotal)}
              </p>
            </div>
            <div className="flex items-center justify-between capitalize tracking-wide text-gray-800">
              <h3>total</h3>
              <p className="text-lg font-medium text-gray-900">
                {formatCurrency(totalPrice)}
              </p>
            </div>
          </div>
          <button className="mt-2 w-full bg-gray-900 px-7 py-3 font-medium uppercase tracking-wider text-white hover:bg-gray-800">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
