import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { FaHeart } from "react-icons/fa";

import Quantity from "../../components/Quantity";

function ProductAdd({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="flex items-center justify-between py-3">
        <Quantity quantity={quantity} setQuantity={setQuantity} />
        <p className="select-none text-lg font-medium">
          Total price :{" "}
          <span className="font-semibold">
            {formatCurrency(product.price * quantity)}
          </span>
        </p>
      </div>
      <div className="mt-2 flex gap-5 transition-all">
        <button className="ml-auto flex rounded border-0 bg-indigo-500 px-6 py-2 text-white hover:bg-indigo-600 focus:outline-none">
          Add to cart
        </button>
        <button className="group flex items-center rounded bg-gray-500 px-2 py-1 text-base text-white hover:bg-red-500">
          Favourite
          <span className="text-md ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-0 bg-gray-200  text-red-500">
            <FaHeart />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProductAdd;
