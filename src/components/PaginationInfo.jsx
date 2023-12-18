import { useSearchParams } from "react-router-dom";
import useProducts from "../features/products/useProducts";
import { PAGE_SIZE } from "../services/constants";

function PaginationInfo() {
  const { isLoading, count } = useProducts();
  const [searchParams] = useSearchParams();
  const currPage = +searchParams.get("page") || 0;

  const from = currPage * PAGE_SIZE + 1;
  const to =
    (currPage + 1) * PAGE_SIZE > count ? count : (currPage + 1) * PAGE_SIZE;

  if (isLoading) return null;

  return (
    <div className="pb-10 ">
      <p className="text-sm font-thin tracking-wider opacity-90">
        Showing {from} &mdash; {to} of {count} results
      </p>
    </div>
  );
}

export default PaginationInfo;
