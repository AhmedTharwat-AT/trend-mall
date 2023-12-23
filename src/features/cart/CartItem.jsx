import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { decreaseQuantity, deleteItem, increaseQuantity } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  function increase() {
    dispatch(increaseQuantity({ itemID: item.id }));
  }
  function decrease() {
    if (item.quantity == 1) return;
    dispatch(decreaseQuantity({ itemID: item.id }));
  }
  function deleteProducts() {
    dispatch(deleteItem({ itemID: item.id }));
  }
  return (
    <div className="sm:grid-cols-cart grid-cols-miniCart grid items-center gap-2 px-0 py-2 lg:gap-0">
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <img
          className="aspect-square w-16 rounded-sm object-cover sm:w-20"
          src={item.images[0]}
        />
        <div className="w-full sm:w-auto">
          <p className=" max-w-[100px] truncate whitespace-nowrap text-sm capitalize text-gray-700 md:max-w-[180px]">
            {item.title}
          </p>
          <h2 className="text-lg font-medium text-gray-800">
            {formatCurrency(item.price)}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3 text-lg text-gray-600 disabled:bg-red-300 sm:gap-4">
        <button
          disabled={item.quantity === 1}
          onClick={decrease}
          className="cursor-pointer  p-2 pl-0"
        >
          &lt;
        </button>
        <p>{item.quantity}</p>
        <button onClick={increase} className="cursor-pointer p-2">
          &gt;
        </button>
      </div>

      <h2 className="text-lg font-medium text-gray-800">
        {formatCurrency(item.quantity * item.price)}
      </h2>

      <button
        onClick={deleteProducts}
        className="aspect-square w-8 cursor-pointer rounded-full bg-gray-200 text-2xl font-medium"
      >
        &times;
      </button>
    </div>
  );
}

export default CartItem;
