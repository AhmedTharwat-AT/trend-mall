import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useProducts from "../features/products/useProducts";
import { PAGE_SIZE } from "../services/constants";

function Pagination() {
  const { count = 20, isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currPage, setCurrPage] = useState(+searchParams.get("page") || 0);
  const pageNum = Math.floor(count / PAGE_SIZE);

  useEffect(() => {
    const urlPage = searchParams.get("page") || 0;
    if (currPage === urlPage) return;

    searchParams.set("page", currPage);
    setSearchParams(searchParams);
  }, [currPage, searchParams, setSearchParams]);

  if (isLoading) return null;

  return (
    <div className="mt-auto flex justify-center space-x-8 p-3 pt-10 text-4xl">
      <IoIosArrowBack
        onClick={() => setCurrPage((c) => (c - 1 < 0 ? c : c - 1))}
        className={`${
          currPage === 0
            ? "cursor-not-allowed text-gray-500 "
            : "cursor-pointer hover:-translate-x-1"
        }  transition-all `}
      />
      <IoIosArrowForward
        onClick={() => setCurrPage((c) => (c + 1 > pageNum ? c : c + 1))}
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
