import useObserverState from "../hooks/useObserverState";
import Trend from "./Trend";

function HomeTrends() {
  const { ref, isVisible } = useObserverState({
    threshold: 0,
    rootMargin: "-20px",
  });

  return (
    <section ref={ref} className="mb-40 mt-16 ">
      <div className="container mx-auto flex flex-col items-center gap-5 px-2 py-4">
        <div className="text-center">
          <h3 className="font-semibold uppercase tracking-widest text-[var(--color-brand-500)]">
            LATEST NEWS
          </h3>
          <h1 className="relative my-5  text-4xl font-medium tracking-widest">
            Fashion New Trends
            <span className="absolute -top-4 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-5xl opacity-20 sm:block ">
              Fashion New Trends
            </span>
          </h1>
        </div>
        <div
          className={`${
            isVisible ? "animate-slideRight" : ""
          } flex w-full flex-col flex-wrap items-start justify-center gap-y-20 sm:flex-row`}
        >
          <Trend src="https://preview.colorlib.com/theme/malefashion/img/blog/blog-2.jpg" />
          <Trend src="https://preview.colorlib.com/theme/malefashion/img/blog/blog-3.jpg.webp" />
          <Trend src="https://preview.colorlib.com/theme/malefashion/img/blog/blog-1.jpg" />
        </div>
      </div>
    </section>
  );
}

export default HomeTrends;
