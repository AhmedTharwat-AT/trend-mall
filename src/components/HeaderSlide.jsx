import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HeaderSlide({ className = "" }) {
  return (
    <div
      className={
        className +
        " h-full bg-cover bg-[55%_center] py-7 sm:bg-center md:py-28"
      }
    >
      <div className=" container mx-auto h-full py-24 sm:px-6 ">
        <div className="slide-content flex max-w-fit  flex-col items-start justify-center  md:mb-0 md:w-3/5 lg:flex-grow">
          <h1 className="mb-4 text-sm font-medium uppercase tracking-wider text-red-500 sm:text-base">
            summer collection
          </h1>

          <p className="mb-7 max-w-[300px] text-4xl font-medium capitalize leading-relaxed text-gray-950 sm:max-w-[400px] sm:text-5xl lg:mb-8 lg:text-5xl">
            Fall - Winter Collections 2030
          </p>
          <p className="mb-7 max-w-[500px] font-thin leading-8 text-gray-700">
            A specialist label creating luxury essentials. Ethically crafted
            with an unwavering commitment to exceptional quality.
          </p>

          <div className="flex !h-auto animate-slideRight justify-center  ">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/shop"
              className="flex items-center gap-3 border-0 bg-gray-950 px-7 py-4 text-sm font-medium uppercase tracking-widest text-gray-200 hover:bg-gray-700 "
            >
              shop now{" "}
              <span className="text-lg font-bold">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlide;
