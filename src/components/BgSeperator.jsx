function BgSeperator({
  src = "./src/assets/carousel/img-1.jpg",
  alt = "Heading",
}) {
  return (
    <div className="relative h-32 w-full overflow-hidden sm:h-40 xl:h-48 2xl:h-56">
      <img
        className="object h-full w-full object-cover object-top grayscale filter"
        alt={alt}
        src={src}
      />
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-2 text-3xl font-semibold uppercase mix-blend-screen sm:px-4 sm:text-5xl">
        {alt}
      </h1>
    </div>
  );
}

export default BgSeperator;
