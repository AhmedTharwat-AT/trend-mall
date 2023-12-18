import { useQuery } from "react-query";
import { getMenProducts } from "../../services/apiProducts";
import Product from "./Product";

function OverviewProducts() {
  const { data: products, isLoading } = useQuery(
    ["menProducts"],
    getMenProducts,
  );

  if (isLoading) return null;

  return (
    <section className=" my-12 py-12">
      <div className="container  mx-auto grid grid-cols-1 items-center justify-center gap-7 gap-y-12 px-5 sm:grid-cols-2 md:px-28 lg:grid-cols-4 lg:px-4">
        {products.slice(0, 8).map((pro) => (
          <Product product={pro} key={pro.id} />
        ))}
      </div>
    </section>
  );
}

export default OverviewProducts;
