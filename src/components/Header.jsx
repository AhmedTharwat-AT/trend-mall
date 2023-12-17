function Header() {
  return (
    <header className=" mt-20 flex h-[calc(100vh-80px)] items-center justify-center bg-[url('/src/assets/carousel/img-2.jpg')] bg-cover bg-right-top text-gray-600">
      <div className="container mx-auto  px-5 py-24 ">
        <div className="animate-slideRight flex flex-col items-start md:mb-0 md:w-3/4 md:pr-16 lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-normal uppercase  text-[var(--color-grey-900)] lg:text-5xl">
            Trend Mall
          </h1>

          <p className="mb-8 text-4xl font-bold uppercase leading-relaxed text-gray-50 lg:text-6xl">
            where <span className="text-gray-50 mix-blend-overlay">trends</span>{" "}
            come to life
          </p>
          <div className="flex justify-center ">
            <button className="inline-flex  border-0 bg-[var(--color-grey-900)] px-6 py-2 text-lg font-semibold uppercase tracking-wider  text-white hover:bg-[var(--color-grey-50)]  hover:text-[var(--color-grey-900)] focus:outline-none">
              start shopping
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
