import { useQuery } from "react-query";
import { getAllProducts } from "../../services/apiProducts";

function useProducts() {
  const { data: products, isLoading } = useQuery(
    ["allProducts"],
    getAllProducts,
  );

  return { products, isLoading, count: products?.length };
}

export default useProducts;
