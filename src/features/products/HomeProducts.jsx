import { useQuery } from "react-query";
import { getMenProducts } from "../../services/apiProducts";
import HomeProduct from "./HomeProduct";
import useObserverState from "../../hooks/useObserverState";
import Spinner from "../../components/Spinner";

function HomeProducts() {
  const { ref, isVisible } = useObserverState({
    threshold: 0.25,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-fit w-full bg-white py-20 md:pb-40 md:pt-16"
    >
      <div className="text-center">
        <h3 className="font-semibold uppercase tracking-widest text-[var(--color-brand-500)]">
          new trends
        </h3>
        <h1 className="relative my-5 text-3xl font-medium capitalize tracking-widest  md:text-4xl">
          trending fashion products
          <span className="absolute -top-4 left-1/2 w-full -translate-x-1/2 text-4xl capitalize opacity-20  md:text-5xl ">
            trending fashion products
          </span>
        </h1>
      </div>

      <div className="container mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-x-8 md:grid-cols-2">
        <HomeProduct
          className={`${
            isVisible
              ? "visible animate-[slideRight_0.8s_0.7s_both] "
              : "invisible "
          }  self-center sm:row-span-2 md:mt-40 lg:-mt-28 `}
          head="Accessories"
          src="https://preview.colorlib.com/theme/malefashion/img/banner/banner-2.jpg.webp"
          key={0}
        />
        <HomeProduct
          className={`${
            isVisible
              ? "visible md:animate-[slideBottom_1s_0.1s_ease-in-out_both] "
              : "md:invisible "
          } md:mr-10 lg:col-span-2 lg:row-start-1 lg:mr-16 lg:justify-self-end`}
          textStyle="md:absolute text-start md:top-16 md:right-52 w-full"
          head="Clothing Collections 2030"
          src="https://preview.colorlib.com/theme/malefashion/img/banner/banner-1.jpg.webp"
          key={1}
        />
        <HomeProduct
          className={`${
            isVisible ? "visible md:animate-slideLeft" : "md:invisible "
          }  md:ml-12 md:mt-16`}
          textStyle="md:absolute text-start md:right-28 w-full md:absolute text-start md:top-28 md:right-28"
          head="Shoes Spring 2030"
          src="https://preview.colorlib.com/theme/malefashion/img/banner/banner-3.jpg.webp"
          key={2}
        />
      </div>
    </section>
  );
}

export default HomeProducts;
