import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PAGE_SIZE } from "../services/constants";
import useFilteredProducts from "../features/products/useFilteredProducts";

function Pagination() {
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

  if (isLoading) return null;

  return (
    <div className="mt-auto flex justify-center space-x-8 p-3 pt-10 text-4xl">
      <IoIosArrowBack
        onClick={handlePerviousPage}
        className={`${
          currPage === 1
            ? "cursor-not-allowed text-gray-500 "
            : "cursor-pointer hover:-translate-x-1"
        }  transition-all `}
      />
      <IoIosArrowForward
        onClick={handleNextPage}
        className={`${
          currPage === pageNum
            ? "cursor-not-allowed text-gray-500 "
            : "cursor-pointer hover:translate-x-1"
        }  transition-all `}
      />
    </div>
  );
}

export default Pagination;
