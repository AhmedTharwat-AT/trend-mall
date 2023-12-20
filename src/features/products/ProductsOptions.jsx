import { useSearchParams } from "react-router-dom";
import Search from "../../components/Search";
import ProductCategories from "../../components/ProductCategories";
import Select from "../../components/Select";

function ProductsOptions() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(query) {
    if (!query) searchParams.delete("query");
    else searchParams.set("query", query);
    searchParams.delete("category");
    searchParams.delete("brand");
    searchParams.delete("range");
    searchParams.delete("page");
    setSearchParams(searchParams);
  }

  return (
    <div className="mb-16 w-full px-7 sm:px-20  lg:mb-0 lg:w-1/4 lg:px-6">
      <Select>
        <Search onSearch={handleSearch} />
        <ProductCategories />
      </Select>
    </div>
  );
}

export default ProductsOptions;
