import { useQuery } from "react-query";
import { getProducts } from "../../services/apiProducts";
import HomeProduct from "./HomeProduct";
import { useEffect, useRef, useState } from "react";

function HomeProducts() {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);
  const { data: products, isLoading } = useQuery(["allProducts"], getProducts);

  useEffect(() => {
    if (isLoading) return;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.01,
      },
    );

    observer.observe(ref.current);
  }, [isLoading]);

  if (isLoading) return null;

  return (
    <section
      ref={ref}
      className="mx-auto grid max-w-5xl grid-cols-1 md:mb-36  md:mt-28 md:grid-cols-2"
    >
      <HomeProduct
        className={`${
          isVisible ? "md:animate-slideRight " : ""
        } animate-none self-center md:row-span-2 md:-mt-28`}
        product={products.filter((el) => el.category == "mens-shoes")[2]}
        key={products[0].id}
      />
      <HomeProduct
        className={`${
          isVisible ? "md:animate-slideBottom" : ""
        }  animate-none  md:col-span-2 md:row-start-1 md:mr-20 md:justify-self-end lg:mr-44`}
        textStyle="md:absolute md:top-16 md:right-52 w-full"
        product={products.filter((el) => el.category == "mens-shirts")[4]}
        key={products[1].id}
      />
      <HomeProduct
        className={`${
          isVisible ? "md:animate-slideLeft" : ""
        }  animate-none  md:mt-11`}
        textStyle="md:absolute  md:right-28 w-full"
        product={products.filter((el) => el.category == "mens-watches")[2]}
        key={products[2].id}
      />
    </section>
  );
}

export default HomeProducts;
