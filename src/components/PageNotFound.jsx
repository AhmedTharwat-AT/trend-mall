import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-200">
      <div className="w-full items-center justify-center bg-[var(--color-brand-500)]  py-10">
        <div className="mx-auto w-fit space-y-2 text-center text-gray-50">
          <h1 className="text-2xl font-semibold tracking-wider md:text-4xl">
            🚨 PAGE WAS NOT FOUND 🚨
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="group cursor-pointer text-lg capitalize hover:text-gray-800 md:text-2xl"
          >
            <span className="mr-2 group-hover:animate-pulse">&larr;</span> back
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
