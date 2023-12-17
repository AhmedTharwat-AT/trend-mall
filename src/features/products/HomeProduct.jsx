import { Link } from "react-router-dom";

function HomeProduct({ product, className = "", textStyle = "" }) {
  return (
    <div className={className + " product mb-10 md:mb-0"}>
      <div className="img-wrapper relative mx-auto border md:w-3/4 md:border-black md:before:content-['']">
        <img
          className="  h-[25rem] w-full  object-cover "
          src={product.images.at(0)}
          alt={product.title}
        />
      </div>
      <div className={`p-5 ${textStyle}`}>
        <h2 className="mb-3 text-3xl font-semibold capitalize text-gray-900">
          {product.title}
        </h2>

        <Link
          className="relative text-sm font-medium uppercase tracking-[7px] before:absolute before:left-0 before:top-6 before:h-[2px] before:w-28 before:bg-black before:transition-all before:duration-300 before:content-['']  "
          to="/products"
        >
          shop now
        </Link>
      </div>
    </div>
  );
}

export default HomeProduct;
