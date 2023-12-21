import { useSearchParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PAGE_SIZE } from "../services/constants";
import useFilteredProducts from "../features/products/useFilteredProducts";

function Pagination({ css }) {
  const { count, isLoading } = useFilteredProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const currPage = +searchParams.get("page") || 1;
  const pageNum = Math.ceil(count / PAGE_SIZE);

  function handleNextPage() {
    if (currPage + 1 > pageNum) return;
    searchParams.set("page", currPage + 1);
    setSearchParams(searchParams);
  }

  function handlePerviousPage() {
    if (currPage - 1 < 1) return;
    searchParams.set("page", currPage - 1);
    setSearchParams(searchParams);
  }

  return (
    <div className={`flex ${css ? css : ""}`}>
      <IoIosArrowBack
        onClick={handlePerviousPage}
        className={`${
          currPage === 1 || isLoading
            ? "cursor-not-allowed text-gray-500 "
            : "cursor-pointer hover:-translate-x-1"
        }  transition-all `}
      />
      <IoIosArrowForward
        onClick={handleNextPage}
        className={`${
          currPage === pageNum || isLoading
            ? "cursor-not-allowed text-gray-500 "
            : "cursor-pointer hover:translate-x-1"
        }  transition-all `}
      />
    </div>
  );
}

export default Pagination;
