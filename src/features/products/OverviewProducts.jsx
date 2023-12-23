import { useQuery } from "react-query";
import { getMenProducts } from "../../services/apiProducts";
import Product from "./Product";

function OverviewProducts({ limit = 8 }) {
  const { data: products, isLoading } = useQuery(
    ["menProducts"],
    getMenProducts,
  );

  if (isLoading) return null;

  return (
    <div className="container mx-auto grid grid-cols-1 items-center justify-center gap-7 gap-y-12 px-16 sm:grid-cols-2  sm:px-5 md:px-28 lg:grid-cols-4 lg:px-4">
      {products.slice(0, limit).map((pro) => (
        <Product product={pro} key={pro.id} />
      ))}
    </div>
  );
}

export default OverviewProducts;
