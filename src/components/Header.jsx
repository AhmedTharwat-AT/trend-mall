import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" flex h-[calc(100vh-80px)] animate-slideTop items-center justify-center overflow-hidden bg-[url('/assets/carousel/img-2.jpg')] bg-cover bg-right-top text-gray-600">
      <div className=" container mx-auto px-5 py-24 ">
        <div className="flex w-2/3 min-w-[300px] animate-slideRight flex-col items-start md:mb-0 md:pr-16 lg:flex-grow lg:pr-24">
          <h1 className="mb-4 bg-clip-text text-8xl font-semibold uppercase text-[var(--color-grey-900)] lg:text-9xl ">
            Trend Mall
          </h1>

          <p className="mb-8 text-4xl font-bold uppercase leading-relaxed text-gray-100 lg:text-6xl">
            where <span className=" font-semibold text-gray-900 ">trends</span>{" "}
            come to life
          </p>

          <div className="flex justify-center ">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/shop"
              className="inline-flex  border-0 bg-[var(--color-grey-900)] px-6 py-2 text-lg font-medium uppercase tracking-wider  text-gray-200 hover:bg-[var(--color-grey-50)] hover:text-black "
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
