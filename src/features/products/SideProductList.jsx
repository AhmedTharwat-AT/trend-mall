import { CiHeart } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";

function SideProductList({ className = "" }) {
  return (
    <div
      className={`absolute -right-12 top-5 flex flex-col gap-4 text-2xl text-gray-900 transition-all delay-300  duration-500  ${className}`}
    >
      <div
        title="add to wishlist"
        className="cursor-pointer border border-gray-200 bg-gray-50 p-2 hover:text-[var(--color-brand-500)] "
      >
        <CiHeart />
      </div>
      <div
        title="add to cart"
        className="cursor-pointer border  border-gray-200 bg-gray-50 p-2 hover:text-[var(--color-brand-500)]"
      >
        <BsCartPlus />
      </div>
    </div>
  );
}

export default SideProductList;
