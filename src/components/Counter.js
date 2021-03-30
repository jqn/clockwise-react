import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const timerStyle = {
  color: "#FF6B01",
  fontSize: "96px",
  marginBottom: "22px",
};

function padTime(time) {
  return time.toString().padStart(2, "0");
}

const Timer = () => {
  const [title, setTitle] = useState("Work on ClockWise");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        return timeLeft + 1;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeLeft(0 * 60);
    setIsRunning(false);
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft + minutes * 60);

  return (
    <div className="card h-100 text-center p-2">
      <h5 className="card-title">{title}</h5>
      <div className="timer" style={timerStyle}>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && (
          <button onClick={startTimer} className="btn btn-success mr-2">
            Start
          </button>
        )}
        {isRunning && (
          <button onClick={stopTimer} className="btn btn-warning mr-2">
            Stop
          </button>
        )}
        <button onClick={resetTimer} className="btn btn-dark">
          Reset
        </button>
      </div>
    </div>
  );
};

Timer.defaultProps = {};

Timer.propTypes = {};

export default Timer;
