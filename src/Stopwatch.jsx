import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false); // Track watch is running or not
  const [elapsedTime, setElapsedTime] = useState(0); // Track k kitna waqt Guzr gia he
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0); // Track watch starting time
  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }
  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }
  return (
    <>
      <div className="flex flex-col align-items-center mt-28 border-[5px] border-solid border-black rounded-[50px] bg-white p-[50px]">
        <div className="text-[80px] text-center font-mono font-bold text-gray-800 [text-shadow:2px_2px_2px_hsla(0,0%,0%,0.75)] mb-[25px]">
          {formatTime()}
        </div>
        {/* Button */}
        <div className="controls">
          <Button
            onClick={start} // Pass the start function here
            text={"Start"}
            color="bg-[hsl(115,100%,40%)]"
          />
          <Button onClick={stop} text={"Stop"} color="bg-[hsl(10,90%,50%)]" />
          <Button
            onClick={reset}
            text={"Reset"}
            color="bg-[hsl(205,90%,60%)]"
          />
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
