import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import EmptyCart from "../../components/EmptyCart";

function CartTable() {
  const { totalPrice, subTotal, items, count } = useSelector(
    (state) => state.cart,
  );

  if (count == 0) return <EmptyCart />;

  return (
    <div className="flex w-full flex-wrap justify-center gap-4 py-4 lg:flex-nowrap lg:justify-between">
      <div className="mx-auto flex w-full flex-col lg:w-4/6 lg:pr-4">
        <div className="-mr-2 grid grid-cols-miniCart gap-6 border-b pb-5 pr-3 text-base font-medium uppercase tracking-wide text-gray-800 sm:grid-cols-cart  lg:gap-0">
          <h1 className="sm:col-span-2">product</h1>
          <h1>quantity</h1>
          <h1 className="col-span-2">total</h1>
        </div>

        <div className="-mr-3 max-h-[700px] space-y-6 overflow-y-scroll border-b py-6 sm:max-h-[510px]">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-8">
          <Link
            className="border-2 px-5 py-4 text-base font-medium uppercase text-gray-800  hover:bg-gray-800 hover:text-gray-50"
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
              className="h-full w-full border-2 pl-3 outline-none focus:border-gray-400 lg:w-2/3"
              type="text"
              placeholder="Enter Code"
            />
            <button className="h-full bg-[var(--color-brand-500)] px-7 py-3 text-base font-medium uppercase text-white hover:bg-[var(--color-brand-600)]">
              apply
            </button>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col gap-4 bg-gray-100 p-7">
          <h2 className="text-lg font-medium uppercase tracking-wide text-gray-700">
            cart summary
          </h2>
          <div className="flex flex-col gap-2 divide-y-2 text-base">
            <div className="flex items-center justify-between capitalize tracking-wide text-gray-800">
              <h3>subtotal</h3>
              <p className="text-lg font-medium text-gray-900">
                {formatCurrency(subTotal)}
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 capitalize tracking-wide text-gray-800">
              <h3>total</h3>
              <p className="text-lg font-medium text-gray-900">
                {formatCurrency(totalPrice)}
              </p>
            </div>
          </div>
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to={`/order/checkout`}
            className="mt-2 w-full bg-[var(--color-brand-500)] px-7 py-3 text-center font-medium uppercase tracking-wider text-white hover:bg-[var(--color-brand-600)]"
          >
            proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
