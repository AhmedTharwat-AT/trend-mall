import useObserverState from "../hooks/useObserverState";
import ImagesGrid from "./ImagesGrid";

function AboutHead() {
  const { isVisible, ref } = useObserverState({ rootMargin: "-100px" });

  return (
    <section className="py-24 ">
      <div className=" container mx-auto flex flex-wrap items-center gap-14 px-5 ">
        <div
          ref={ref}
          className={`${
            isVisible ? "visible animate-slideRight " : " invisible "
          }   lg:pr-8`}
        >
          <div className="flex flex-wrap gap-1 sm:flex-nowrap sm:gap-6">
            <span className="mt-3 block h-[3px] w-24 bg-indigo-500"></span>
            <div className="flex w-full flex-col justify-start  gap-2">
              <h2 className=" text-lg capitalize text-indigo-500">
                our history
              </h2>
              <h1 className="text-3xl font-medium capitalize text-gray-900 sm:text-4xl">
                We Are A Lifestyle Brand
              </h1>
            </div>
          </div>
          <p className="mt-8 whitespace-pre-wrap text-sm leading-8 text-gray-900 sm:mt-10 ">
            It is accompanied by a case that can contain up to three different
            diffusers and can be used for dry storage of loose tea. The perfect
            way to enjoy brewing tea on low hanging fruit to identify. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, velillum dolore eu feugiat nulla facilisis.
            <span className="mt-2 block ">
              The perfect way to enjoy brewing tea on low hanging fruit to
              identify. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis. For me, the most important part of
              improving at photography has been sharing it.
            </span>
          </p>
        </div>
        <ImagesGrid />
      </div>
    </section>
  );
}

export default AboutHead;
