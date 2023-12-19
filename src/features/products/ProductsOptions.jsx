import { useSearchParams } from "react-router-dom";
import Search from "../../components/Search";
import ProductCategories from "../../components/ProductCategories";

function ProductsOptions() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(query, clear) {
    searchParams.set("query", query);
    setSearchParams(searchParams);
    clear();
  }

  return (
    <div className="mb-16 w-full px-16 lg:mb-0 lg:w-1/4 lg:px-6">
      <Search onSearch={handleSearch} />
      <ProductCategories />
    </div>
  );
}

export default ProductsOptions;
