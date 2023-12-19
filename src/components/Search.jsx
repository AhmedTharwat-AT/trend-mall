import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";

function Search({ onSearch }) {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  function clear() {
    setQuery("");
  }

  return (
    <div className="relative">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch(query, clear);
        }}
        className="w-full rounded border-2 bg-gray-50 px-2 py-2 pr-6 text-sm focus:outline-none"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span
        onClick={() => onSearch(query, clear)}
        className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer p-1 text-lg opacity-50 transition-all hover:opacity-100 [&>svg]:stroke-1 hover:[&>svg]:stroke-[var(--color-brand-500)]"
      >
        <CiSearch />
      </span>
    </div>
  );
}

export default Search;
