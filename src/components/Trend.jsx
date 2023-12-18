function Trend({ src }) {
  return (
    <div className="group relative w-full px-2 sm:w-1/2 sm:px-4 lg:w-1/3 ">
      <img className="h-64 w-full object-cover" src={src} />
      <div className="absolute -bottom-16 left-[50%] z-10 w-4/5 -translate-x-1/2 space-y-2 bg-gray-50 p-5 transition-all duration-300 group-hover:-bottom-12  ">
        <p className="text-sm text-gray-700">16 feburary 2020</p>
        <h3 className="font-medium tracking-wide">
          What Curling Irons Are The Best Ones
        </h3>
        <h2 className="relative cursor-pointer text-sm tracking-widest">
          READ MORE{" "}
          <span className="absolute -bottom-1 left-0 h-[2px] w-20 bg-black  transition-all duration-300 group-hover:w-5 group-hover:bg-[var(--color-brand-500)]"></span>
        </h2>
      </div>
    </div>
  );
}

export default Trend;
