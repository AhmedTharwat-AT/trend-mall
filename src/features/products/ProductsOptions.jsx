import { useSearchParams } from "react-router-dom";
import Search from "../../components/Search";

function ProductsOptions() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(query, clear) {
    searchParams.set("query", query);
    setSearchParams(searchParams);
    clear();
  }

  return (
    <div className="w-full px-6 lg:w-1/4">
      <Search onSearch={handleSearch} />
    </div>
  );
}

export default ProductsOptions;
