import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { toggleWishlist } from "../user/userSlice.js";
import { addItem } from "./cartSlice";

import { FaHeartBroken } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

function SideProductMenu({ product, className = "" }) {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const wishlist = useSelector((state) => state.user.wishlist);

  function addToCart() {
    dispatch(addItem({ ...product, quantity: 1 }));
    toast.success("Item added to the cart!");
  }

  function addToWishlist() {
    if (!isLogged) {
      toast.error("Please login first!");
      return;
    }
    dispatch(toggleWishlist({ ...product }));
  }

  return (
    <div
      className={`absolute -right-12 top-5 z-40 flex flex-col gap-4 text-2xl text-gray-900 transition-all delay-300  duration-500  ${className}`}
    >
      <div
        onClick={() => addToWishlist()}
        title="Add to favourites"
        className="group/btn flex aspect-square w-11 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-50 text-xl transition-all  hover:text-[var(--color-brand-500)] "
      >
        {wishlist.map((el) => el.id === product.id).includes(true) ? (
          <FaHeartBroken className=" text-2xl text-gray-500 group-hover/btn:text-red-500" />
        ) : (
          <FaHeart className=" text-gray-500 transition-all group-hover/btn:text-2xl group-hover/btn:text-red-500" />
        )}
      </div>
      <div
        onClick={() => addToCart()}
        title="Add to cart"
        className="group/btn duration-50 flex aspect-square w-11 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-50  transition-all  hover:text-[var(--color-brand-500)]"
      >
        <BsCartPlus className="transition-all group-hover/btn:text-3xl" />
      </div>
    </div>
  );
}

export default SideProductMenu;
