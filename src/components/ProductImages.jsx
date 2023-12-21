import { useEffect, useState } from "react";

function ProductImages({ images }) {
  const [currImage, setCurrImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      currImage + 1 < images.length
        ? setCurrImage((c) => c + 1)
        : setCurrImage(0);
    }, 5000);

    return () => clearInterval(timer);
  }, [currImage, images]);

  return (
    <div className="flex w-full  animate-slideRight  flex-col items-center space-y-3 overflow-hidden  lg:w-1/2 ">
      <img
        alt="ecommerce"
        className="aspect-[4/3] w-full animate-slideRight object-cover object-center transition-all  "
        src={images[currImage]}
      />
      <div className="flex w-full items-center justify-start gap-5  py-2">
        {images.map((im, i) => (
          <img
            className={`h-20 w-20 cursor-pointer   transition-all hover:opacity-100 ${
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
