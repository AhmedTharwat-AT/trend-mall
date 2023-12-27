import { Link } from "react-router-dom";

function EmptyList({ message }) {
  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <h1 className="text-center text-2xl font-medium uppercase tracking-wider text-gray-800">
          {message}
        </h1>
        <Link
          to="/shop"
          className="mx-auto mt-6 block w-fit rounded bg-[var(--color-brand-500)] px-3 py-2 text-lg capitalize tracking-wide text-white"
        >
          start shopping
        </Link>
      </div>
    </div>
  );
}

export default EmptyList;
