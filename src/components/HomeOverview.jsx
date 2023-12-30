import useObserverState from "../hooks/useObserverState";

function HomeOverview({ children }) {
  const { ref, isVisible } = useObserverState({ threshold: 0.8 });
  return (
    <div className=" overflow-hidden bg-[linear-gradient(to_right_,#000000aa,#07656c3d),url('/assets/grid-1.png')] bg-cover bg-fixed  bg-center bg-no-repeat grayscale-[0.2] ">
      <div className="relative flex h-full w-full flex-col justify-center gap-20 py-16 text-center backdrop-blur-[2px] ">
        <p className="text-3xl font-bold uppercase text-gray-300 sm:text-5xl md:text-6xl lg:text-7xl ">
          products overview
        </p>
        <div
          ref={ref}
          className={isVisible ? "visible animate-slideTop" : "invisible"}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default HomeOverview;
