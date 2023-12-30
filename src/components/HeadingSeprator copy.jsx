function HeadingSeprator({ text = "default" }) {
  const textArray = Array(20).fill(text);

  return (
    <div className="relative flex h-20  items-center  justify-center overflow-hidden border-2 border-gray-400 bg-gray-200 py-10  ">
      <h1 className="relative z-10 text-3xl font-semibold uppercase text-gray-700 md:text-5xl">
        {text}
      </h1>
      <span className="z-1 absolute animate-textRepeat whitespace-nowrap text-7xl font-bold uppercase text-gray-300">
        {textArray.join(" ")}
      </span>
    </div>
  );
}

export default HeadingSeprator;
