function HeadingSeprator({ text = "default" }) {
  const textArray = Array(20).fill(text);

  return (
    <div className="relative flex h-20  items-center  justify-center overflow-hidden border-2 border-gray-600 bg-gray-200 py-6 outline outline-2 outline-offset-8 outline-gray-600">
      <h1 className="relative z-10 text-3xl font-semibold uppercase text-gray-800 md:text-5xl">
        {text}
      </h1>
      <span className="z-1 absolute animate-textRepeat whitespace-nowrap text-7xl font-bold uppercase text-gray-300">
        {textArray.join(" ")}
      </span>
    </div>
  );
}
// animate-textRepeat
export default HeadingSeprator;
