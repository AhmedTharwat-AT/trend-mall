import { Link } from "react-router-dom";

function HomeProduct({ product, className = "", textStyle = "" }) {
  return (
    <div className={className + " group relative mb-10 md:mb-0"}>
      <div className="img-wrapper relative mx-auto border transition-all before:absolute before:bottom-5 before:right-5 before:h-full before:w-full before:border-gray-500 before:transition-all md:w-3/4 md:border-black md:before:border md:before:content-['']">
        <img
          className=" h-[25rem] w-full object-cover transition-all  "
          src={product.images.at(0)}
          alt={product.title}
        />
      </div>
      <div className={`p-5 ${textStyle}`}>
        <h2 className="mb-3 text-3xl font-semibold capitalize text-gray-900">
          {product.title}
        </h2>

        <Link
          className="relative text-sm font-medium uppercase tracking-[7px] before:absolute before:left-0 before:top-6 before:h-[2px] before:w-28 before:bg-black before:transition-all before:duration-300 before:content-[''] group-hover:before:w-10 
          group-hover:before:bg-[var(--color-brand-500)] "
          to="/shop"
        >
          shop now
        </Link>
      </div>
    </div>
  );
}

export default HomeProduct;
