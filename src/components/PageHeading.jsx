import { Link, useNavigate } from "react-router-dom";

function PageHeading({ path = [], current }) {
  const navigate = useNavigate();

  return (
    <section role="heading" className=" bg-[var(--color-head-100)] py-10">
      <div className="container mx-auto  sm:px-6 ">
        <div className="mb-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold capitalize tracking-wider">
            {current}
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="group cursor-pointer text-lg capitalize hover:text-[var(--color-brand-500)]"
          >
            <span className="mr-2 group-hover:animate-pulse">&larr;</span> back
          </button>
        </div>
        <div className="space-x-2 capitalize">
          {path.map((el, i) => (
            <span className="space-x-2" key={i}>
              <Link to={`/${el}`}>
                <span>{el}</span>
              </Link>
              <span>&gt;</span>
              {path.length - 1 === i && (
                <span className="opacity-50">{current}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PageHeading;
