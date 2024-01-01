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
    threshold: 0.25,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-fit w-full bg-gray-100 py-20 md:pb-56 md:pt-16"
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
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto mt-20 grid max-w-5xl grid-cols-1 md:grid-cols-2">
          <HomeProduct
            className={`${
              isVisible
                ? "visible animate-[slideRight_0.8s_0.7s_both] "
                : "invisible "
            }  self-center text-center md:row-span-2 md:-mt-28 md:text-start`}
            product={products.filter((el) => el.category == "mens-shoes")[2]}
            key={products[0].id}
          />
          <HomeProduct
            className={`${
              isVisible
                ? "visible md:animate-[slideBottom_1s_0.1s_ease-in-out_both] "
                : "md:invisible "
            } md:col-span-2 md:row-start-1 md:mr-20 md:justify-self-end lg:mr-44`}
            textStyle="md:absolute text-center md:text-start md:top-16 md:right-52 w-full"
            product={products.filter((el) => el.category == "mens-shirts")[4]}
            key={products[1].id}
          />
          <HomeProduct
            className={`${
              isVisible ? "visible md:animate-slideLeft" : "md:invisible "
            }  md:mt-11`}
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
