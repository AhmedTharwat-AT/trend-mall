import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getFilterProducts } from "../../services/apiProducts";

function useFilteredProducts() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 0;
  const { data: products, isLoading } = useQuery(
    ["filterdProducts", page],
    () => getFilterProducts(page),
  );

  return { products, isLoading };
}

export default useFilteredProducts;
