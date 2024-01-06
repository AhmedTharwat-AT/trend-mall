import { useEffect, useState } from "react";

function OrderTimeLeft({ secondsPassed, handleTimeEnd }) {
  const [seconds, setSeconds] = useState(10 * 60 - secondsPassed);

  const secondsTime = (seconds % 60) + "";
  const minutes = Math.floor(seconds / 60);
  const minutesTime = (minutes % 60) + "";

  useEffect(() => {
    if (minutes <= 0 && seconds <= 0) {
      handleTimeEnd();
      return;
    }
    const timer = setInterval(() => {
      console.log("timer :", seconds);
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes, handleTimeEnd]);

  return (
    <div className="flex gap-1 text-xs sm:text-sm">
      <p className="whitespace-nowrap text-gray-700">
        time left to cancel order :
      </p>{" "}
      <span className="whitespace-nowrap font-medium">
        ({minutesTime.padStart(2, 0) + " : " + secondsTime.padStart(2, 0)})
      </span>
    </div>
  );
}

export default OrderTimeLeft;
