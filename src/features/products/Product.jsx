import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import StarRating from "../../components/StarRating";
import SideProductMenu from "../../components/SideProductMenu";

function Product({ product, responsive = " w-full sm:w-60 md:w-64 lg:w-60" }) {
  return (
    <div
      className={`group relative mx-auto flex flex-col gap-5 overflow-hidden  rounded-md border border-gray-100 p-2 transition-all hover:shadow-lg  ${responsive}`}
    >
      {product.discountPercentage > 15 && (
        <span className="absolute left-0 top-5 z-10 bg-black px-3 text-sm font-medium uppercase tracking-widest text-white">
          sale
        </span>
      )}

      <SideProductMenu className="group-hover:right-3" />

      <div className="group relative h-60 w-full">
        <Link onClick={() => window.scrollTo(0, 0)} to={`/shop/${product.id}`}>
          <img
            className="h-full w-full object-cover transition-all duration-500 group-hover:grayscale"
            src={product.images[0]}
            alt={product.title}
          />
          <div className="absolute inset-0 z-40 flex items-center justify-center">
            <div className=" flex aspect-square w-0  items-center justify-center overflow-hidden rounded-full bg-gray-300  bg-opacity-80 text-2xl font-medium uppercase tracking-widest text-black opacity-0 transition-all delay-75 duration-300 ease-out hover:bg-gray-800 hover:bg-opacity-80 hover:text-white group-hover:w-24 group-hover:opacity-100">
              <span>view</span>
            </div>
          </div>
        </Link>
      </div>

      <div className=" flex flex-1 flex-col justify-between gap-2">
        <Link
          onClick={() => window.scrollTo(0, 0)}
          className="absolute -z-50 -translate-y-4 font-medium text-[var(--color-brand-500)] opacity-0 transition-all duration-300 group-hover:z-10  group-hover:-translate-y-1 group-hover:opacity-100 "
          to={`/shop/${product.id}`}
        >
          Add to chart{" "}
          <span className="animate-pulse text-lg font-bold">&rarr;</span>{" "}
        </Link>

        <h3 className="truncate text-sm capitalize group-hover:opacity-0">
          {product.title}
        </h3>

        <StarRating rating={Math.floor(product.rating)} />

        <p className="text-lg font-semibold tracking-wider opacity-80">
          {formatCurrency(product.price)}
        </p>
      </div>
    </div>
  );
}

export default Product;
