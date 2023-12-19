import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SortFilter() {
  const [currSort, setSort] = useState("def");
  const [searchParams, setSearchParams] = useSearchParams();

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
        <option value="low">Low to high</option>
        <option value="high">High to low</option>
        <option value="def">Default</option>
      </select>
    </div>
  );
}

export default SortFilter;
