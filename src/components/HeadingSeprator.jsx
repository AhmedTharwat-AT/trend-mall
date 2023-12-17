function HeadingSeprator({ text = "default" }) {
  const textArray = Array(20).fill(text);

  return (
    <div className="relative my-6 flex h-20 w-screen items-center justify-center overflow-hidden bg-gray-200">
      <h1 className="relative z-10 text-3xl font-semibold uppercase text-gray-800 md:text-5xl">
        {text}
      </h1>
      <span className="z-1  absolute whitespace-nowrap text-7xl font-bold uppercase text-gray-300">
        {textArray.join(" ")}
      </span>
    </div>
  );
}
// animate-textRepeat
export default HeadingSeprator;
