import { useState } from "react";

function Slider() {
  const [fromPrice, setFrom] = useState(0);
  const [toPrice, setTo] = useState(0);

  function handleFromPrice(e) {
    if (+e.target.value > toPrice) return;
    setFrom(+e.target.value);
  }
  function handleToPrice(e) {
    if (+e.target.value < fromPrice) return;
    setTo(+e.target.value);
  }

  return (
    <div>
      <h1 className="mt-3 text-base font-medium uppercase tracking-wide">
        Prices Range
      </h1>
      <div className=" mt-3 flex justify-between gap-5">
        <label htmlFor="from" className=" text-base capitalize">
          from
        </label>
        <input
          className="w-full p-1"
          type="range"
          id="from"
          min="0"
          step="10"
          max="200"
          value={fromPrice}
          onChange={handleFromPrice}
        />
      </div>
      <div className="flex flex justify-between">
        <label htmlFor="to" className=" text-base capitalize">
          to
        </label>
        <input
          type="range"
          id="to"
          min="0"
          step="10"
          max="200"
          value={toPrice}
          onChange={handleToPrice}
        />
      </div>
    </div>
  );
}

export default Slider;
