import { useEffect, useState } from "react";

function ProductImages({ product }) {
  const [currImage, setCurrImage] = useState(0);
  const [hovered, setHovered] = useState(false);
  const { images, discountPercentage } = product;

  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      currImage + 1 < images.length
        ? setCurrImage((c) => c + 1)
        : setCurrImage(0);
    }, 5000);

    return () => clearInterval(timer);
  }, [currImage, images, hovered]);

  return (
    <div className="flex w-full  animate-slideRight  flex-col items-center space-y-3 overflow-hidden  lg:w-1/2 ">
      {discountPercentage > 15 && (
        <div className="absolute left-5 top-0 z-10  bg-black px-0 py-8  text-white">
          <p className="rotate-90 text-base font-medium uppercase tracking-widest">
            sale
          </p>
        </div>
      )}
      <img
      
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        alt="ecommerce"
        className="aspect-[4/3] w-full animate-slideRight object-cover object-center transition-all hover:object-contain  "
        src={images[currImage]}
      />
      <div className="flex w-full items-center justify-start gap-5 overflow-x-auto py-2  ">
        {images.map((im, i) => (
          <img
            className={`h-16 w-16 cursor-pointer transition-all hover:opacity-100   sm:h-20 sm:w-20 ${
              images[currImage] == im ? " opacity-100 shadow-md" : "opacity-50"
            }`}
            onClick={() => setCurrImage(i)}
            src={im}
            key={i}
            alt="product-img"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
