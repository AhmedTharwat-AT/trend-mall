import { useEffect, useState } from "react";

function OrderTimeLeft({ secondsPassed, handleShowCancel }) {
  const [seconds, setSeconds] = useState(10 * 60 - secondsPassed);

  const secondsTime = (seconds % 60) + "";
  const minutes = Math.floor(seconds / 60);
  const minutesTime = (minutes % 60) + "";

  useEffect(() => {
    if (minutes <= 0 && seconds <= 0) {
      handleShowCancel();
    }
    const timer = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, handleShowCancel, minutes]);

  return (
    <div className="flex gap-1 text-xs sm:text-sm">
      <p className="whitespace-nowrap text-gray-700">
        minutes left to cancel :
      </p>{" "}
      <span className="font-medium">
        ({minutesTime.padStart(2, 0) + " : " + secondsTime.padStart(2, 0)})
      </span>
    </div>
  );
}

export default OrderTimeLeft;
