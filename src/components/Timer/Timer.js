import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  let t = JSON.parse(localStorage.getItem("time"));
  if (t === null) {
    t = { minutes: 5, seconds: 0 };
  }
  const [seconds, setSeconds] = useState(t.seconds);
  const [minutes, setMinutes] = useState(t.minutes);

  useEffect(() => {
    let timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setMinutes(minutes > 0 ? minutes - 1 : 0);
        setSeconds(minutes > 0 ? 59 : 0);
      }
      window.localStorage.setItem("time", JSON.stringify({ minutes, seconds }));
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="timer display-4">
      <p>
        Timeout : {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
    </div>
  );
};

export default Timer;
