import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

function CheckoutOrder() {
  const user = useSelector((state) => state.user);
  const { items, totalPrice, subTotal } = useSelector((state) => state.cart);

  function handleCheckout() {}

  return (
    <div className="w-1/3 divide-y divide-gray-300 border border-gray-200 bg-gray-100 p-7">
      <h1 className="text-2xl font-medium uppercase tracking-wide text-gray-800">
        your order
      </h1>
      <div className="mt-8 flex flex-col gap-2 py-6">
        <div className="flex justify-between text-lg tracking-wide">
          <h3 className="capitalize">product</h3>
          <h3 className="capitalize">total</h3>
        </div>
        {items.map((item, i) => (
          <div key={item.id} className="flex justify-between text-gray-700">
            <h3 className="max-w-[50%] truncate capitalize">
              <span>{`${i + 1}`.padStart(2, 0)}.</span>
              {item.title}
            </h3>
            <p>{formatCurrency(item.price * item.quantity)}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-col  py-6 text-lg">
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
      <div className="pt-7">
        <button
          disabled={!user.id}
          onClick={handleCheckout}
          className="w-full bg-gray-900 px-6 py-3 text-base font-medium uppercase tracking-widest text-white hover:bg-gray-800 disabled:bg-gray-500"
        >
          place order
        </button>
      </div>
    </div>
  );
}

export default CheckoutOrder;
