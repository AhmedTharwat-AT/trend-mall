import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { decreaseQuantity, deleteItem, increaseQuantity } from "./cartSlice";
import { toast } from "react-hot-toast";

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
    toast.success("Item removed !");
  }

  return (
    <div className="grid grid-cols-miniCart items-center gap-6 px-0 py-2 sm:grid-cols-cart lg:gap-0">
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <img
          className="aspect-square w-16 rounded-sm object-cover sm:w-20"
          src={item.images[0]}
        />
        <div className="w-full sm:w-auto">
          <p className=" max-w-[100px] truncate whitespace-nowrap text-sm capitalize text-gray-700 md:max-w-[180px]">
            {item.title}
          </p>
          <h2 className="text-base font-medium text-gray-900 sm:text-lg">
            {formatCurrency(item.price)}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3 text-lg text-gray-600 disabled:bg-red-300 sm:gap-4">
        <button
          disabled={item.quantity === 1}
          onClick={decrease}
          className="cursor-pointer p-2 pl-0 text-xl"
        >
          &lt;
        </button>
        <p className="font-semibold">{item.quantity}</p>
        <button onClick={increase} className="cursor-pointer p-2 text-xl">
          &gt;
        </button>
      </div>

      <h2 className=" w-fit text-lg font-medium text-gray-900 ">
        {formatCurrency(item.quantity * item.price).split(".")[0]}
      </h2>

      <button
        onClick={deleteProducts}
        className="aspect-square w-8 cursor-pointer rounded-full bg-gray-200 text-2xl font-medium hover:bg-red-500 hover:text-white"
      >
        &times;
      </button>
    </div>
  );
}

export default CartItem;
