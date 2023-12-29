function BgSeperator({
  src = "./src/assets/carousel/img-1.jpg",
  alt = "Heading",
}) {
  return (
    <div className="relative h-96 w-full overflow-hidden ">
      <img
        className="object h-full w-full object-cover object-top grayscale filter"
        alt={alt}
        src={src}
      />
      <h1 className="absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white px-3 py-2 text-5xl font-semibold uppercase mix-blend-screen sm:px-4 sm:text-7xl  lg:text-8xl">
        {alt}
      </h1>
    </div>
  );
}

export default BgSeperator;
