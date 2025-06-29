import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./pages.css";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 200);
    }

    if (timeLeft === 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (timeLeft > 0) setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(30);
    clearInterval(intervalRef.current);
  };

  return (
    <div className="timer">
      <h1>⏳ Timer App</h1>
      <p>Here we will have a timer app</p>
      <div className="time">{timeLeft} sec</div>

      <div className="btn">
        <button
          className="btn btn-primary"
          onClick={handleStart}
          disabled={isRunning || timeLeft === 0}
        >
          ▶️ Start
        </button>
        <button
          className="btn btn-primary"
          onClick={handlePause}
          disabled={!isRunning}
        >
          ⏸ Pause
        </button>
        <button className="btn btn-primary" onClick={handleReset}>
          🔁 Reset
        </button>
      </div>
      <div className="home">
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
    </div>
  );
};
export default Timer;
