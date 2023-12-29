function Newsletter() {
  return (
    <section className="bg-gray-100 px-5 py-20 sm:px-10 ">
      <div className="containe flex flex-col items-center justify-center text-center">
        <div>
          <h1 className="mb-2 text-3xl font-semibold tracking-wider  text-gray-600 sm:text-4xl">
            Sign up for Newsletter
          </h1>
          <p className="text-sm font-normal text-gray-500 sm:text-base">
            Wants to get latest updates! sign up for Free
          </p>
        </div>
        <div className="relative mt-10 flex w-full md:w-[600px]   ">
          <input
            className="w-full rounded-full bg-white px-5 py-3 pr-10 outline-none focus:shadow-md sm:py-4"
            type="text"
            placeholder="Your email address"
          />
          <button className="absolute right-0 top-1/2 z-10 h-full -translate-y-1/2 rounded-full bg-gray-600 px-4 text-sm uppercase tracking-wider text-gray-100 hover:bg-gray-800 sm:px-7 sm:text-lg ">
            subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
