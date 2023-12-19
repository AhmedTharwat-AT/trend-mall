import { useSearchParams } from "react-router-dom";
import useProducts from "./useProducts";
import { useEffect, useState } from "react";

function useFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = +searchParams.get("page") || 0;
  const sort = searchParams.get("sort") || "def";
  const [currPage, setCurrPage] = useState(page);
  const [currSort, setSort] = useState(sort);

  function handleSelecting(e) {
    setSort(e.target.value);
    searchParams.set("sort", e.target.value);
    searchParams.set("page", 0);
    setSearchParams(searchParams);
  }

  useEffect(() => {
    console.log(page, currPage);
    if (currPage === page) return;
    searchParams.set("page", currPage);
    setSearchParams(searchParams);
  }, [currPage, searchParams, page, setSearchParams]);
}

export default useFilter;
