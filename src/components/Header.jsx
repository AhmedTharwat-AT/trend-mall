import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="max-nav:h-[calc(100vh-96px)] relative flex h-[calc(100vh-80px)] animate-slideTop items-center justify-center overflow-hidden  text-gray-600">
      <div className="absolute inset-0  -z-[100] bg-[url('/assets/carousel/img-2.jpg')] bg-cover bg-right-top "></div>

      <div className=" container mx-auto  py-24 ">
        <div className="flex max-w-fit animate-slideRight flex-col items-start  sm:p-10 md:mb-0 md:w-2/3 lg:flex-grow">
          <h1 className="mb-4 bg-clip-text text-4xl font-semibold uppercase tracking-wider text-gray-950 backdrop-blur-sm  lg:text-7xl">
            Trend <span className="text-gray-200">Mall</span>
          </h1>

          <p className="mb-5 text-2xl font-medium capitalize leading-relaxed tracking-wide text-gray-100 lg:mb-8 lg:text-4xl">
            where{" "}
            <span className=" !font-bold uppercase text-gray-950 ">trends</span>{" "}
            come to life
          </p>

          <div className="flex justify-center ">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/shop"
              className="inline-flex border-0  bg-gray-950 px-6 py-2 text-xs font-medium uppercase tracking-wider text-gray-200 hover:bg-[var(--color-grey-50)]  hover:text-black sm:text-sm lg:text-base "
            >
              start shopping
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
