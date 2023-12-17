function Header() {
  return (
    <header className=" mt-20 flex h-[calc(100vh-80px)] items-center justify-center bg-[url('/src/assets/carousel/img-2.jpg')] bg-cover bg-right-top text-gray-600">
      <div className="container mx-auto  px-5 py-24 ">
        <div className="flex max-w-[900px] animate-textslide flex-col items-start text-start md:mb-0 md:w-3/4 md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-normal uppercase text-gray-900 sm:text-4xl">
            Trend Mall
          </h1>

          <p className="mb-8 text-4xl font-bold uppercase leading-relaxed text-gray-50">
            where trends come to life
          </p>
          <div className="flex justify-center ">
            <button className="inline-flex  border-0 bg-[var(--color-brand-500)] px-6 py-2 text-lg font-semibold uppercase tracking-wider  text-white  hover:bg-[var(--color-grey-900)] focus:outline-none">
              start shopping
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
