import { Link } from "react-router-dom";

function EmptyList({ message }) {
  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <h1 className="text-center text-lg font-medium uppercase tracking-wider text-gray-800 sm:text-2xl">
          {message}
        </h1>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/shop"
          className="mx-auto mt-6 block w-fit rounded bg-[var(--color-brand-500)] px-3 py-2 text-sm capitalize tracking-wide text-white sm:text-lg"
        >
          start shopping
        </Link>
      </div>
    </div>
  );
}

export default EmptyList;
