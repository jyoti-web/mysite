import React, { useEffect, useState } from "react";

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2020-01-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        DAYS : Math.floor(difference / (1000 * 60 * 60 * 24)),
        HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
        MIN: Math.floor((difference / 1000 / 60) % 60),
        SEC: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className="timer-class">
        <div className="time">{timeLeft[interval]}</div><div className="day"> {interval}{" "}</div>
        <br></br></span>
    );
  });

  return (
    <div className="finish text-center">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}
export default CountdownTimer;
