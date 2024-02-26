import { Link } from "react-router-dom";

function HomeProduct({ className = "", textStyle = "", src, head }) {
  return (
    <div
      className={
        className + " group relative mb-10 px-6  sm:px-20 md:mb-0 md:px-0"
      }
    >
      <div className="relative mx-auto aspect-square w-full  transition-all md:aspect-auto md:h-[25rem] md:max-w-[400px]">
        <img
        alt="product"
          className=" mx-auto h-full w-full  object-cover transition-all "
          src={src}
        />
      </div>
      <div className={`p-5 px-0 md:px-5 ${textStyle}`}>
        <h2 className="mb-3 text-2xl font-semibold capitalize text-gray-900 md:text-4xl">
          {head}
        </h2>

        <Link
          onClick={() => window.scrollTo(0, 0)}
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
