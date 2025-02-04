import React from "react";
import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false); // Track watch is running or not
  const [elapsedTime, setElapsedTime] = useState(0); // Track k kitna waqt Guzr gia he
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0); // Track watch starting time
  useEffect(() => {}, [isRunning]);

  function start() {}
  function stop() {}
  function reset() {}
  function formatTime() {
    return "00:00:00";
  }
  return (
    <>
      <div className="flex flex-col align-items-center border-[5px] border-solid border-black rounded-[50px] bg-white p-[50px]">
        <div className="text-[80px] font-mono font-bold text-gray-800 [text-shadow:2px_2px_2px_hsla(0,0%,0%,0.75)] mb-[25px]">
          {formatTime()}
        </div>
        {/* Button */}
        <div className="controls">
          <button onClick={start} className="start-button">
            Start
          </button>
          <button onClick={stop} className="stop-button">
            Stop
          </button>
          <button onClick={reset} className="reset-button">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
