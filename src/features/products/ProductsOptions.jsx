import { useSearchParams } from "react-router-dom";
import Search from "../../components/Search";
import ProductCategories from "../../components/ProductCategories";

function ProductsOptions() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(query, clear) {
    if (!query) searchParams.delete("query");
    else searchParams.set("query", query);
    searchParams.delete("category");
    searchParams.delete("brand");
    setSearchParams(searchParams);
    clear();
  }

  return (
    <div className="mb-16 w-full px-7 sm:px-20  lg:mb-0 lg:w-1/4 lg:px-6">
      <Search onSearch={handleSearch} />
      <ProductCategories />
    </div>
  );
}

export default ProductsOptions;
