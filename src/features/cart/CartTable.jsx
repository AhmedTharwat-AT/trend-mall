import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

function CartTable() {
  const { totalPrice, items } = useSelector((state) => state.cart);

  return (
    <div className="flex w-full flex-wrap gap-4 py-4 lg:flex-nowrap lg:justify-between">
      <div className="w-full lg:w-3/4 lg:pr-10">
        <div className="sm:grid-cols-cart grid-cols-miniCart grid gap-2 border-b pb-5 text-sm font-medium uppercase tracking-wide text-gray-800 sm:text-base lg:gap-0">
          <h1 className="sm:col-span-2">product</h1>
          <h1>quantity</h1>
          <h1 className="col-span-2">total</h1>
        </div>
        <div className="space-y-6 py-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="sm:grid-cols-cart grid-cols-miniCart grid items-center gap-2 px-0 py-2 lg:gap-0"
            >
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <img
                  className="aspect-square w-16 rounded-sm object-cover sm:w-20"
                  src={item.images[0]}
                />
                <div>
                  <p className=" max-w-[100px] truncate whitespace-nowrap text-sm capitalize text-gray-700 md:max-w-[180px]">
                    {item.title}
                  </p>
                  <h2 className="text-lg font-medium text-gray-800">
                    {formatCurrency(item.price)}
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-3 text-lg text-gray-600  sm:gap-4">
                <span className="cursor-pointer  p-2 pl-0">&lt;</span>
                <p>{item.quantity}</p>
                <span className="cursor-pointer p-2">&gt;</span>
              </div>
              <h2 className="text-lg font-medium text-gray-800">
                {formatCurrency(item.quantity * item.price)}
              </h2>
              <button className="aspect-square w-8 cursor-pointer rounded-full bg-gray-200 text-2xl font-medium">
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/4">
        <div>
          <h1>discount codes</h1>
          <div>
            <input placeholder="coupon code" />
            <button>apply</button>
          </div>
        </div>
        <div>
          <h2>cart total</h2>
          <div>
            <div>
              <h3>subtotal</h3>
              <p>169</p>
            </div>
            <div>
              <h3>total</h3>
              <p>156</p>
            </div>
          </div>
          <button>proceed checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
