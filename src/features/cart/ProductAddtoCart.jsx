import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./cartSlice";

import Quantity from "../../components/Quantity";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { toggleWishlist } from "../user/userSlice";

function ProductAddtoCart({ product }) {
  const isLogged = useSelector((state) => state.user.isLogged);
  const wishlist = useSelector((state) => state.user.wishlist);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addItem({ ...product, quantity }));
    toast.success("Added item successfully");
  }

  function addToWishlist() {
    if (!isLogged) {
      toast.error("Please login first!");
      return;
    }
    dispatch(toggleWishlist({ ...product }));
  }

  return (
    <div>
      <div className="flex items-center justify-between py-3">
        <Quantity
          quantity={quantity}
          onIncrease={() => setQuantity((q) => q + 1)}
          onDecrease={() => setQuantity((q) => (q == 1 ? q : q - 1))}
        />
        <p className="select-none text-lg font-medium">
          Total price :{" "}
          <span className="font-semibold">
            {formatCurrency(product.price * quantity)}
          </span>
        </p>
      </div>
      <div className="mt-2 flex items-center gap-3 transition-all">
        <button
          onClick={handleAddToCart}
          className="ml-auto flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none"
        >
          Add to cart
        </button>
        <button
          onClick={addToWishlist}
          className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 bg-gray-300 text-lg transition-all duration-75 hover:text-2xl hover:text-red-600"
        >
          {wishlist.map((el) => el.id === product.id).includes(true) ? (
            <FaHeartBroken className="text-2xl " />
          ) : (
            <FaHeart />
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductAddtoCart;
