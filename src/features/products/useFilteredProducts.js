import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getFilterProducts } from "../../services/apiProducts";

function useFilteredProducts() {
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;
  const sort = searchParams.get("sort") || "def";
  const query = searchParams.get("query") || "";

  const { data: { filteredProducts: products, count } = {}, isLoading } =
    useQuery(
      ["filterdProducts", `page=${page}`, `sort=${sort}`, `query=${query}`],
      () => getFilterProducts({ page, sort, query }),
    );

  return { products, isLoading, count };
}

export default useFilteredProducts;
