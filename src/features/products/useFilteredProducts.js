import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { getFilterProducts } from "../../services/apiProducts";

function useFilteredProducts() {
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;
  const sort = searchParams.get("sort") || "def";
  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "All";
  const brand = searchParams.get("brand") || "";

  const { data: { filteredProducts: products, count } = {}, isLoading } =
    useQuery(
      [
        "filterdProducts",
        `page=${page}`,
        `sort=${sort}`,
        `query=${query}`,
        `category=${category}`,
        `brand=${brand}`,
      ],
      () => getFilterProducts({ page, sort, query, category, brand }),
    );

  return { products, isLoading, count };
}

export default useFilteredProducts;
