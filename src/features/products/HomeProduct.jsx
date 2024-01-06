import { Link } from "react-router-dom";

function HomeProduct({ product, className = "", textStyle = "" }) {
  return (
    <div
      className={
        className + " group relative mb-10 px-6  sm:px-20 md:mb-0 md:px-0"
      }
    >
      <div className="relative mx-auto h-[25rem] w-full transition-all before:absolute before:bottom-5 before:right-5 before:-z-10 before:h-full before:w-full before:transition-all md:w-3/4 md:border md:border-gray-300 md:before:border md:before:border-gray-500 md:before:content-['']">
        <img
          className=" mx-auto h-full rounded-2xl object-cover transition-all   md:rounded-none  "
          src={product.images.at(0)}
          alt={product.title}
        />
      </div>
      <div className={`p-5 px-0 md:px-5 ${textStyle}`}>
        <h2 className="mb-3 text-2xl font-semibold capitalize text-gray-900 md:text-3xl">
          {product.title}
        </h2>

        <Link
          onClick={() => window.scrollTo(0, 0)}
          className="relative text-sm font-medium uppercase tracking-[7px] before:absolute before:left-0 before:top-6 before:h-[2px] before:w-28 before:bg-black before:transition-all before:duration-300 before:content-[''] group-hover:before:w-10 
          group-hover:before:bg-[var(--color-brand-500)] "
          to={`/shop/${product.id}`}
        >
          shop now
        </Link>
      </div>
    </div>
  );
}

export default HomeProduct;
