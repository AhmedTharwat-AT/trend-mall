import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getFilterProducts } from "../../services/apiProducts";

function useFilteredProducts() {
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;
  const sort = searchParams.get("sort") || "def";

  const { data: products, isLoading } = useQuery(
    ["filterdProducts", `page=${page}`, `sort=${sort}`],
    () => getFilterProducts({ page, sort }),
  );

  return { products, isLoading };
}

export default useFilteredProducts;
