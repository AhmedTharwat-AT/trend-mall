import { Link } from "react-router-dom";
import CountDownTimer from "./CountDownTimer";
import useObserverState from "../hooks/useObserverState";

function HomeSales() {
  const { ref, isVisible } = useObserverState({ threshold: 0.8 });
  return (
    <section className="overflow-hidden bg-[var(--color-brand-50)]">
      <div className="group container mx-auto flex  flex-wrap items-center space-y-8  px-5 py-36 sm:px-5 lg:py-24 ">
        <div className="relative mb-5 space-y-2 whitespace-nowrap pl-16 text-2xl tracking-widest text-gray-500 sm:pl-32 sm:text-3xl lg:w-1/5 lg:pl-1">
          <span className="absolute -left-3 top-[-45px] z-[5] h-52 w-44 rounded-lg bg-white sm:w-64 lg:-left-96 lg:w-[500px]"></span>
          <p className="relative z-10">Clothings Hot</p>
          <p className="relative z-10 text-black">Shoe Collection</p>
          <p className="z relative z-10">Men-Watchs</p>
        </div>

        <div
          ref={ref}
          className={`${
            isVisible ? "visible animate-slideTop " : "invisible "
          } relative mx-auto w-full sm:px-10  lg:w-2/5`}
        >
          <p className="absolute -top-5 right-0 flex h-32 w-32 scale-50 flex-col items-center justify-center rounded-full bg-black text-xl font-semibold tracking-widest text-gray-50 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 sm:right-10 sm:h-36 sm:w-36 md:right-28 lg:right-0 lg:h-28  lg:w-28">
            %SALE
            <span className="text-xs font-normal tracking-wider opacity-80">
              Limited time
            </span>
          </p>
          <img alt="watch" className="mx-auto rounded-3xl" src="/assets/thumbnail.jpg" />
        </div>

        <div className="mx-auto space-y-10 lg:w-2/5 lg:pl-5 ">
          <h3 className="text-lg font-medium uppercase tracking-widest text-[var(--color-brand-700)]">
            deal of the week
          </h3>
          <h1 className="!mt-5 text-4xl font-semibold tracking-widest">
            Waterproof Leather Brand Watch
          </h1>
          <CountDownTimer />
          <Link
            to="/shop"
            className="inline-flex border-0 bg-[var(--color-brand-500)] px-8 py-3 text-base font-medium uppercase tracking-wider text-white hover:bg-[var(--color-brand-700)]"
          >
            shop now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeSales;
