import { useQuery } from "react-query";
import { getMenProducts } from "../../services/apiProducts";
import HomeProduct from "./HomeProduct";
import useObserverState from "../../hooks/useObserverState";
import Spinner from "../../components/Spinner";

function HomeProducts() {
  const { data: products, isLoading } = useQuery(
    ["menProducts"],
    getMenProducts,
  );
  const { ref, isVisible } = useObserverState({
    threshold: 0,
    rootMargin: "-180px",
  });

  return (
    <section
      ref={ref}
      className="relative w-full bg-gray-100 py-20 md:pb-56 md:pt-16"
    >
      <h1 className="relative mx-auto my-5 mb-16 w-fit border-b-2 border-gray-400 pb-2 text-3xl font-semibold tracking-widest text-gray-800 sm:text-4xl md:mb-20">
        Trending Products
        <span className="absolute -top-4 left-1/2  -translate-x-1/2 whitespace-nowrap text-4xl opacity-20 sm:text-5xl ">
          Trending Products
        </span>
      </h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto grid  max-w-5xl grid-cols-1 md:grid-cols-2">
          <HomeProduct
            className={`${
              isVisible
                ? "animate-[slideRight_0.8s_0.6s_both] "
                : "animate-none"
            }  self-center text-center md:row-span-2 md:-mt-28 md:text-start`}
            product={products.filter((el) => el.category == "mens-shoes")[2]}
            key={products[0].id}
          />
          <HomeProduct
            className={`${
              isVisible
                ? "animate-[slideBottom_1s_1s_ease-in-out_both] "
                : "animate-none"
            }    md:col-span-2 md:row-start-1 md:mr-20 md:justify-self-end lg:mr-44`}
            textStyle="md:absolute text-center md:text-start md:top-16 md:right-52 w-full"
            product={products.filter((el) => el.category == "mens-shirts")[4]}
            key={products[1].id}
          />
          <HomeProduct
            className={`${
              isVisible ? "animate-slideLeft" : ""
            }  animate-none  md:mt-11`}
            textStyle="md:absolute text-center md:text-start md:right-28 w-full"
            product={products.filter((el) => el.category == "mens-watches")[2]}
            key={products[2].id}
          />
        </div>
      )}
    </section>
  );
}

export default HomeProducts;
