import { Link } from "react-router-dom";
import StarRating from "../../components/StarRating";
import { formatCurrency } from "../../utils/helpers";

function OverviewProduct({ product }) {
  return (
    <div className="group relative mx-auto flex w-full flex-col gap-5 border border-gray-100 sm:w-60 md:w-60">
      {product.discountPercentage > 15 && (
        <span className="absolute left-0 top-5 z-10 bg-black px-3 text-sm font-medium uppercase tracking-widest text-white">
          sale
        </span>
      )}

      <img
        className="h-64 w-full object-cover"
        src={product.thumbnail}
        alt={product.title}
      />

      <div className=" flex flex-1 flex-col justify-between gap-2">
        <Link
          className="absolute -z-50 -translate-y-4 font-medium text-[var(--color-brand-500)] opacity-0 transition-all duration-300 group-hover:z-10  group-hover:-translate-y-1 group-hover:opacity-100 "
          to="/cart"
        >
          Add to chart{" "}
          <span className="animate-pulse text-lg font-bold">&rarr;</span>{" "}
        </Link>

        <h3 className="text-sm  capitalize group-hover:opacity-0">
          {product.title.split(" ").slice(0, 3).join(" ")}
        </h3>

        <StarRating rating={Math.floor(product.rating)} />

        <p className="text-md font-semibold tracking-wider">
          {formatCurrency(product.price)}
        </p>
      </div>
    </div>
  );
}

export default OverviewProduct;
// discountPercentage
