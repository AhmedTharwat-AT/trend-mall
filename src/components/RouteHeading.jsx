import { Link } from "react-router-dom";

function RouteHeading({ head, sup }) {
  return (
    <div className="bg-[var(--color-head-100)] py-10">
      <div className="container mx-auto max-w-conatin px-7 ">
        <h1 className="mb-3 text-2xl font-bold capitalize tracking-wider">
          {sup}
        </h1>
        <div className="space-x-2 capitalize">
          <Link to={`/${head}`}>
            <span>{head}</span>
          </Link>
          <span>&gt;</span>
          <span className="opacity-50">{sup}</span>
        </div>
      </div>
    </div>
  );
}

export default RouteHeading;
