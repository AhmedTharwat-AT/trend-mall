import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SortFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currSort, setSort] = useState("def");

  useEffect(() => {
    const currSort = searchParams.get("sort") || "def";
    setSort(currSort);
  }, [searchParams]);

  function handleSelecting(e) {
    setSort(e.target.value);
    searchParams.set("sort", e.target.value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center justify-center gap-2 ">
      <p className=" text-sm">Sort By Price </p>
      <select
        name="sort"
        onChange={handleSelecting}
        value={currSort}
        className="text-sm font-medium  focus:outline-none "
      >
        <option value="asc">Low to high</option>
        <option value="desc">High to low</option>
        <option value="def">Default</option>
      </select>
    </div>
  );
}

export default SortFilter;
