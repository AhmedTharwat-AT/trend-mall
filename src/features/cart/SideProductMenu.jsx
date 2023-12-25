import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import { BsCartPlus } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { addItem } from "./cartSlice";

function SideProductMenu({ product, className = "" }) {
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addItem({ ...product, quantity: 1 }));
    toast.success("Item added to the cart!");
  }

  return (
    <div
      className={`absolute -right-12 top-5 z-40 flex flex-col gap-4 text-2xl text-gray-900 transition-all delay-300  duration-500  ${className}`}
    >
      <div
        title="Add to favourites"
        className="group/btn flex cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-50 p-2 text-xl  hover:text-[var(--color-brand-500)] "
      >
        <FaHeart className="text-gray-500 group-hover/btn:text-red-500" />
      </div>
      <div
        onClick={() => addToCart()}
        title="Add to cart"
        className="cursor-pointer rounded-md border border-gray-300 bg-gray-50 p-2 hover:text-[var(--color-brand-500)]"
      >
        <BsCartPlus />
      </div>
    </div>
  );
}

export default SideProductMenu;
