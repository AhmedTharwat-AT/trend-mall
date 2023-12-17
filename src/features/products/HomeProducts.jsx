import { useQuery } from "react-query";
import { getProducts } from "../../services/apiProducts";
import HomeProduct from "./HomeProduct";

function HomeProducts() {
  const { data: products, isLoading } = useQuery(["homeProducts"], () =>
    getProducts("/category/womens-bags?limit=4"),
  );

  if (isLoading) return null;

  console.log(products);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {products.map((product) => (
        <HomeProduct product={product} key={product.id} />
      ))}
    </section>
  );
}

export default HomeProducts;
