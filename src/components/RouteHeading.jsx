import { Link, useNavigate } from "react-router-dom";

function RouteHeading({ head, sup }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[var(--color-head-100)] py-10">
      <div className="container mx-auto max-w-conatin px-7 ">
        <div className="mb-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold capitalize tracking-wider">
            {sup}
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="group cursor-pointer text-lg capitalize hover:text-[var(--color-brand-500)]"
          >
            <span className="mr-2 group-hover:animate-pulse">&larr;</span> back
          </button>
        </div>
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
