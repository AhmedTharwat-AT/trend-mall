import { useQuery } from "react-query";
import { CATEGORIES } from "../services/constants";
import Select from "./Select";
import { getAllBrands } from "../services/apiProducts";
import { useSearchParams } from "react-router-dom";

function ProductCategories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: brands, isLoading } = useQuery(["brands"], getAllBrands);

  function handleSelectingGategory(option) {
    searchParams.set("category", option);
    searchParams.delete("brand");
    setSearchParams(searchParams);
  }
  function handleSelectingBrand(option) {
    searchParams.set("brand", option);
    searchParams.delete("category");
    setSearchParams(searchParams);
  }
  function handleClear() {
    searchParams.set("category", "All");
    searchParams.delete("brand");
    setSearchParams(searchParams);
  }

  return (
    <div className="mt-10 [&>div]:border-b-2 [&>div]:pb-2">
      <Select>
        <Select.Head onClick={handleClear}>
          <h1 className="mb-6 cursor-pointer text-lg font-medium tracking-wide transition-all hover:opacity-80">
            All Products
          </h1>
        </Select.Head>
        <div>
          <Select.Toggle title="categories" />
          <Select.Options
            onClick={handleSelectingGategory}
            title="categories"
            options={CATEGORIES}
          />
        </div>
        {!isLoading && (
          <div>
            <Select.Toggle title="brands" />
            <Select.Options
              onClick={handleSelectingBrand}
              title="brands"
              options={brands}
            />
          </div>
        )}
      </Select>
    </div>
  );
}

export default ProductCategories;
