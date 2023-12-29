import { IoBagHandleOutline, IoShirtOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { CiShoppingTag } from "react-icons/ci";
import useObserverState from "../hooks/useObserverState";
import { useEffect, useState } from "react";

function Statistics() {
  const { ref, isVisible } = useObserverState();
  console.log(isVisible);

  return (
    <section className=" bg-gray-50 py-24">
      <div className="container flex flex-wrap items-center justify-between gap-20 sm:gap-10 sm:px-6 lg:flex-nowrap">
        <>
          <h1 className="w-full text-center text-3xl text-gray-800 sm:w-fit sm:text-start ">
            Doing the{" "}
            <span className="font-medium text-red-500">right thing</span>, at
            the right time.
          </h1>
          <div
            ref={ref}
            className="ml-auto flex w-full flex-wrap justify-evenly gap-y-8 sm:gap-16 lg:w-3/5 lg:justify-end"
          >
            <Status target={isVisible ? 658 : 0} name="customers">
              <GoPeople className="mx-auto text-6xl text-indigo-500" />
            </Status>

            <Status target={isVisible ? 132 : 0} name="brands">
              <CiShoppingTag className="mx-auto text-6xl text-indigo-500" />
            </Status>

            <Status target={isVisible ? 22 : 0} name="stores">
              <IoBagHandleOutline className="mx-auto text-6xl text-indigo-500" />
            </Status>

            <Status target={isVisible ? 712 : 0} name="products">
              <IoShirtOutline className="mx-auto text-6xl text-indigo-500" />
            </Status>
          </div>
        </>
      </div>
    </section>
  );
}

function Status({ target = 0, children, name }) {
  const [count, setCount] = useState(0);
  const frameDuration = 2500 / target;

  useEffect(() => {
    if (target == 0) return;
    let progress = 0;
    const timer = setInterval(() => {
      setCount((c) => c + 1);
      progress++;
      if (progress === target) clearInterval(timer);
    }, frameDuration);

    return () => clearInterval(timer);
  }, [target, frameDuration]);

  return (
    <div className="flex w-1/2 flex-col gap-4 text-center sm:w-auto">
      {children}
      <div>
        <h1 className="text-4xl font-medium text-gray-700">{count}</h1>
        <h2 className="text-sm font-medium uppercase text-gray-500">{name}</h2>
      </div>
    </div>
  );
}

export default Statistics;
