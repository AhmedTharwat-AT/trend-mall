import { useEffect, useState } from "react";
import useObserverState from "../hooks/useObserverState";

import { IoBagHandleOutline, IoShirtOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { LiaAwardSolid } from "react-icons/lia";

function Statistics() {
  const { ref, isVisible } = useObserverState({ threshold: 0.4 });

  return (
    <section className=" bg-gray-100 py-20 shadow-md">
      <div className="container flex flex-col flex-wrap items-center justify-between gap-14 sm:gap-10 sm:px-6 lg:flex-nowrap">
        <>
          <h1 className="w-full text-center text-4xl tracking-wider text-gray-800 sm:w-fit sm:text-start ">
            Doing the{" "}
            <span className="font-medium capitalize text-indigo-500">
              right thing
            </span>
            , at the right time.
          </h1>
          <div
            ref={ref}
            className="flex w-full flex-wrap justify-evenly gap-y-8 sm:gap-16 lg:w-3/5 "
          >
            <Status target={isVisible ? 658 : 0} name="customers">
              <GoPeople className="mx-auto text-6xl text-gray-500" />
            </Status>

            <Status target={isVisible ? 132 : 0} name="brands">
              <LiaAwardSolid className="mx-auto text-6xl text-gray-500" />
            </Status>

            <Status target={isVisible ? 22 : 0} name="stores">
              <IoBagHandleOutline className="mx-auto text-6xl text-gray-500" />
            </Status>

            <Status target={isVisible ? 512 : 0} name="products">
              <IoShirtOutline className="mx-auto text-6xl text-gray-500" />
            </Status>
          </div>
        </>
      </div>
    </section>
  );
}

function Status({ target = 0, children, name }) {
  const [count, setCount] = useState(0);
  const frameDuration = 2800 / target;

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
        <h1 className="text-4xl font-medium text-indigo-500">{count}</h1>
        <h2 className="text-sm font-medium uppercase text-gray-400">{name}</h2>
      </div>
    </div>
  );
}

export default Statistics;
