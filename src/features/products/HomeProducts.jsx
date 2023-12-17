import { useQuery } from "react-query";
import { getProducts } from "../../services/apiProducts";
import HomeProduct from "./HomeProduct";

function HomeProducts() {
  const { data: products, isLoading } = useQuery(["allProducts"], () =>
    getProducts(),
  );

  if (isLoading) return null;

  console.log(products);
  return (
    <section className="mx-auto  grid max-w-5xl  grid-cols-1 md:my-28 md:grid-cols-2">
      <HomeProduct
        className="animate-slideRight self-center md:row-span-2 md:-mt-28"
        product={products.filter((el) => el.category == "mens-shoes")[2]}
        key={products[0].id}
      />
      <HomeProduct
        className="animate-slideBottom   md:col-span-2 md:row-start-1 md:mr-20 md:justify-self-end lg:mr-44"
        textStyle="md:absolute md:top-16 md:right-52 w-full"
        product={products.filter((el) => el.category == "mens-shirts")[4]}
        key={products[1].id}
      />
      <HomeProduct
        className=" animate-slideLeft md:mt-11"
        textStyle="md:absolute  md:right-28 w-full"
        product={products.filter((el) => el.category == "mens-watches")[2]}
        key={products[2].id}
      />
    </section>
  );
}

export default HomeProducts;
