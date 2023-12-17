import { useQuery } from "react-query";
import { getProducts } from "../../services/apiProducts";
import OverviewProduct from "./OverviewProduct";

function OverviewProducts() {
  const { data: products, isLoading } = useQuery(["allProducts"], getProducts);

  if (isLoading) return null;

  return (
    <section className=" my-12 py-12">
      <div className="container  mx-auto grid grid-cols-1 items-center justify-center gap-7 gap-y-12 px-5 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 lg:px-4">
        {products.slice(0, 8).map((pro) => (
          <OverviewProduct product={pro} key={pro.id} />
        ))}
      </div>
    </section>
  );
}

export default OverviewProducts;
