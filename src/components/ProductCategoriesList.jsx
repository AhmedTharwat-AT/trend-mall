import { useQuery } from "react-query";
import { CATEGORIES, PRICES_RANGE } from "../services/constants";
import Select from "./Select";
import { getBrands } from "../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import Option from "./Option";
import { formatCurrency } from "../utils/helpers";

function ProductCategoriesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currCategory = searchParams.get("category") || "All";
  const currBrand = searchParams.get("brand") || "";
  const currRange = searchParams.get("range") || "";
  const { data: brands, isLoading: isLoadingBrands } = useQuery(
    ["brands", currCategory],
    () => getBrands(currCategory),
  );

  function handleSelectingGategory(option) {
    if (option === currCategory) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", option);
    }
    searchParams.delete("range");
    searchParams.delete("brand");
    searchParams.delete("query");
    setSearchParams(searchParams);
  }
  function handleSelectingBrand(option) {
    if (option === currBrand) {
      searchParams.delete("brand");
    } else {
      searchParams.set("brand", option);
    }
    searchParams.delete("range");
    searchParams.delete("query");
    setSearchParams(searchParams);
  }
  function handlePriceRange(option) {
    if (`${option.from}-${option.to}` === currRange) {
      searchParams.delete("range");
    } else {
      searchParams.set("range", `${option.from}-${option.to}`);
    }
    setSearchParams(searchParams);
  }
  function handleReset() {
    searchParams.delete("category");
    searchParams.delete("brand");
    searchParams.delete("range");
    searchParams.delete("page");
    searchParams.delete("sort");
    searchParams.delete("query");
    setSearchParams(searchParams);
  }

  return (
    <div className="mt-10 [&>div]:border-b-2 [&>div]:pb-2">
      <Select.Head onClick={handleReset}>
        <h1 className="mb-6 cursor-pointer text-lg font-medium tracking-wide transition-all hover:opacity-80">
          All Products
        </h1>
      </Select.Head>
      <div>
        <Select.Toggle title="categories" />
        <Select.Options title="categories">
          {CATEGORIES.map((option, i) => (
            <Option
              onClick={() => handleSelectingGategory(option)}
              isActive={option === currCategory}
              key={i}
            >
              {option.replace("-", " ")}
            </Option>
          ))}
        </Select.Options>
      </div>
      {!isLoadingBrands && brands.length > 0 && (
        <div>
          <Select.Toggle title="brands" />
          <Select.Options title="brands">
            {brands.map((option, i) => (
              <Option
                onClick={() => handleSelectingBrand(option)}
                isActive={option === currBrand}
                key={i}
              >
                {option.replace("-", " ")}
              </Option>
            ))}
          </Select.Options>
        </div>
      )}

      <div>
        <Select.Toggle title="price" />
        <Select.Options title="price">
          {PRICES_RANGE.map((option, i) => (
            <Option
              onClick={() => handlePriceRange(option)}
              isActive={`${option.from}-${option.to}` === currRange}
              key={i}
            >
              <div>
                <span>
                  {formatCurrency(option.from)}
                  {option.to ? "" : "+"}{" "}
                </span>
                {option.to ? <span> - {formatCurrency(option.to)}</span> : ""}
              </div>
            </Option>
          ))}
        </Select.Options>
      </div>
    </div>
  );
}

export default ProductCategoriesList;
