import { useSearchParams } from "react-router-dom";
import Search from "../../components/Search";
import ProductCategoriesList from "../../components/ProductCategoriesList";
import Select from "../../components/Select";

function ProductsCategories() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch(query) {
    if (!query) searchParams.delete("query");
    else searchParams.set("query", query);
    searchParams.delete("range");
    searchParams.delete("page");
    searchParams.delete("sort");
    setSearchParams(searchParams);
  }

  return (
    <div className="mb-16 w-full px-7 sm:px-20  lg:mb-0 lg:w-1/4 lg:px-6">
      <Select>
        <Search onSearch={handleSearch} />
        <ProductCategoriesList />
      </Select>
    </div>
  );
}

export default ProductsCategories;
