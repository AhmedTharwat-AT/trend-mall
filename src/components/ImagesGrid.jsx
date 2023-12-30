import useObserverState from "../hooks/useObserverState";
import { GRID_IMAGES } from "../services/constants";

function ImagesGrid({ imgs = [] }) {
  const { isVisible, ref } = useObserverState({ threshold: 0.3 });

  const images = imgs.length == 0 ? GRID_IMAGES : imgs;
  return (
    <div
      ref={ref}
      className={`${
        isVisible ? "visible animate-slideLeft " : "invisible "
      } grid w-full  sm:grid-cols-3 sm:grid-rows-3 sm:gap-1  `}
    >
      {images.slice(0, 5).map((el, i) => (
        <img
          src={el}
          key={i}
          className={`mx-auto aspect-video h-full w-full max-w-[490px] object-cover transition-all duration-300 hover:scale-105  hover:grayscale sm:mx-0 sm:max-w-full ${
            i === 0 ? "sm:col-span-2 sm:row-span-2 " : ""
          } ${i === 2 ? " sm:row-span-2 " : ""}`}
        />
      ))}
    </div>
  );
}

export default ImagesGrid;
