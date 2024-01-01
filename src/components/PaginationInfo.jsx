import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../services/constants";
import useFilteredProducts from "../features/products/useFilteredProducts";

function PaginationInfo() {
  const { isLoading, count } = useFilteredProducts();
  const [searchParams] = useSearchParams();
  const currPage = +searchParams.get("page") || 1;

  const from = (currPage - 1) * PAGE_SIZE + 1;
  const to = currPage * PAGE_SIZE > count ? count : currPage * PAGE_SIZE;

  return (
    <div>
      <p className="font-thin tracking-wider opacity-90 max-[381px]:text-xs sm:text-sm">
        {isLoading
          ? "Loading ..."
          : `Showing ${from} \u2014 ${to} of ${count} results`}
      </p>
    </div>
  );
}

export default PaginationInfo;
