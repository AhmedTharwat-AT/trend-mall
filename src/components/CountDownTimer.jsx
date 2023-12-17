import { useEffect, useState } from "react";

const INITIAL_SECONDS = 60 * 60 * 24 * 5;

function CountDownTimer() {
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  const days = Math.floor(seconds / (60 * 60 * 24));
  const remainingHours = seconds % (60 * 60 * 24);
  const hours = Math.floor(remainingHours / (60 * 60));
  const remainingMinutes = remainingHours % (60 * 60);
  const minutes = Math.floor(remainingMinutes / 60);
  const secs = remainingMinutes % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-evenly gap-5 text-4xl font-medium lg:justify-start">
      <div className="flex flex-col items-center ">
        <h3>{days <= 9 ? "0" + days : days}</h3>
        <h3 className="text-sm font-normal">Days</h3>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <h3>{hours <= 9 ? "0" + hours : hours}</h3>
        <h3 className="text-sm font-normal">Hours</h3>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <h3>{minutes <= 9 ? "0" + minutes : minutes}</h3>
        <h3 className="text-sm font-normal">Minutes</h3>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <h3>{secs <= 9 ? "0" + secs : secs}</h3>
        <h3 className="text-sm font-normal">Seconds</h3>
      </div>
    </div>
  );
}

export default CountDownTimer;
