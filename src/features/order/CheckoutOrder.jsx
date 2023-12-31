import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { FaCheckDouble } from "react-icons/fa6";
import OrderSummary from "./OrderSummary";

function CheckoutOrder({ handleSubmit, onSuccess, isChecked }) {
  const user = useSelector((state) => state.user);
  const { items, totalPrice, subTotal } = useSelector((state) => state.cart);

  return (
    <div className="h-fit w-full divide-y divide-gray-300 border border-gray-200 bg-gray-100 p-7 md:w-2/5 lg:w-1/3">
      <h1 className="text-2xl font-medium uppercase tracking-wide text-gray-800">
        your order
      </h1>

      <div className="mt-8 flex flex-col gap-2 py-6">
        <OrderSummary items={items} />
      </div>

      <div>
        <div className="flex flex-col py-6 ">
          <div className="flex items-center justify-between capitalize tracking-wide text-gray-800">
            <h3>subtotal</h3>
            <p className="font-medium ">{formatCurrency(subTotal)}</p>
          </div>
          <div className="flex items-center justify-between pt-2 capitalize tracking-wide text-gray-800">
            <h3>total</h3>
            <p className="font-medium ">{formatCurrency(totalPrice)}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-4 capitalize">
        <FaCheckDouble className="text-blue-900" />
        <h1 className="font-medium text-blue-900">free shipping</h1>
      </div>

      <div className="border-none pt-3">
        <button
          disabled={!user.id || isChecked}
          onClick={handleSubmit(onSuccess)}
          className="w-full bg-[var(--color-brand-500)] px-6 py-3 text-base font-medium uppercase tracking-widest text-white hover:bg-[var(--color-brand-600)] disabled:bg-gray-500"
        >
          {isChecked ? "CHECKED-OUT" : "place order"}
        </button>
      </div>
    </div>
  );
}

export default CheckoutOrder;
