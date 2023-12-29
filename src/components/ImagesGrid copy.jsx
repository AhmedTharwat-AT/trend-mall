import { GRID_IMAGES } from "../services/constants";

function ImagesGrid({ imgs = [] }) {
  const images = imgs.length == 0 ? GRID_IMAGES : imgs;
  return (
    <div className="grid w-full animate-slideLeft grid-cols-3 grid-rows-3 gap-1 lg:h-[310px] lg:w-1/2">
      {images.slice(0, 5).map((el, i) => (
        <img
          src={el}
          key={i}
          className={`aspect-video h-full  object-cover ${
            i === 0 ? "col-span-2 row-span-2 " : ""
          } ${i === 2 ? " row-span-2  h-full" : ""}`}
        />
      ))}
    </div>
  );
}

export default ImagesGrid;
