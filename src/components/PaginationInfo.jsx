import { useSearchParams } from "react-router-dom";
import useProducts from "../features/products/useProducts";
import { PAGE_SIZE } from "../services/constants";

function PaginationInfo() {
  const { isLoading, count } = useProducts();
  const [searchParams] = useSearchParams();
  const currPage = +searchParams.get("page") || 1;

  const from = (currPage - 1) * PAGE_SIZE + 1;
  const to = currPage * PAGE_SIZE > count ? count : currPage * PAGE_SIZE;

  if (isLoading) return null;

  return (
    <div>
      <p className="text-sm font-thin tracking-wider opacity-90">
        Showing {from} &mdash; {to} of {count} results
      </p>
    </div>
  );
}

export default PaginationInfo;
