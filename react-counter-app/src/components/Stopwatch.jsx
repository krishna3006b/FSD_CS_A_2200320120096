import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const handleRestart = () => {
    setTime(0);
    setIsRunning(false);
  };

  const handleStart = () => {
    setIsRunning((prev) => !prev);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Stop Watch App</h1>
      <h1>{time}</h1>
      <br />
      <button onClick={handleStart}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleRestart}>Reset</button>
    </div>
  );
};

export default Stopwatch;