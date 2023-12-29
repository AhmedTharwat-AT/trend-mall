import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { toggleWishlist } from "../user/userSlice.js";
import { addItem } from "./cartSlice";

import { BsCartPlus } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

function SideProductMenu({ product, className = "" }) {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const wishlist = useSelector((state) => state.user.wishlist);
  const isInList = wishlist.map((el) => el.id === product.id).includes(true);

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
      className={`absolute -right-16 top-5 z-40 flex flex-col gap-4 text-2xl text-gray-900 transition-all delay-300  duration-500  ${className}`}
    >
      <div
        onClick={() => addToWishlist()}
        title="Add to favourites"
        className="group/btn flex aspect-square w-14 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-50 text-3xl transition-all hover:text-[var(--color-brand-500)] sm:w-12  sm:text-2xl "
      >
        <FaHeart
          className={`${
            isInList ? "text-red-500" : ""
          } text-gray-500 transition-all group-hover/btn:text-4xl group-hover/btn:text-red-500 sm:group-hover/btn:text-3xl`}
        />
      </div>
      <div
        onClick={() => addToCart()}
        title="Add to cart"
        className="group/btn duration-50 flex aspect-square w-14 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-50 text-[2.2rem] transition-all hover:text-[var(--color-brand-500)] sm:w-12  sm:text-2xl"
      >
        <BsCartPlus className="transition-all group-hover/btn:text-[2.5rem] sm:group-hover/btn:text-3xl" />
      </div>
    </div>
  );
}

export default SideProductMenu;
