import { useQuery } from "react-query";
import { CATEGORIES } from "../services/constants";
import Select from "./Select";
import { getAllBrands } from "../services/apiProducts";

function ProductCategories() {
  const { data: brands, isLoading } = useQuery(["brands"], getAllBrands);

  return (
    <div className="mt-12 [&>div]:border-b-2 [&>div]:pb-2">
      <Select>
        <div>
          <Select.Toggle title="categories" />
          <Select.Options title="categories" options={CATEGORIES} />
        </div>
        {!isLoading && (
          <div>
            <Select.Toggle title="brand" />
            <Select.Options title="brand" options={brands} />
          </div>
        )}
      </Select>
    </div>
  );
}

export default ProductCategories;
