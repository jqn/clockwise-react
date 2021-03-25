import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const timerStyle = {
  color: "#FF6B01",
  fontSize: "150px",
  marginBottom: "22px",
};

const buttonStyle = {
  outline: "none",
  border: "none",
  fontSize: "24px",
  background: "#f7fca0",
  color: "#878b32",
  borderRadius: "5px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  padding: "15px 30px",
  cursor: "pointer",
  transition: "0.3s ease all",
  ":hover": {
    borderRadius: "10px",
    background: "#f5f8ca",
  },
  ":last-child": {
    marginRight: "10px",
  },
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

    setTitle(`You're doing great!`);
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        return timeLeft + 1;
        // if (timeLeft <= 1) return timeLeft + 1;
        // resetTimer();
        // return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Keep it up!");
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle("Ready to go another round?");
    setTimeLeft(0 * 60);
    setIsRunning(false);
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft + minutes * 60);
  return (
    <Card className="text-center p-2">
      <h2>{title}</h2>
      <div className="timer" style={timerStyle}>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && (
          <button onClick={startTimer} style={buttonStyle}>
            Start
          </button>
        )}
        {isRunning && (
          <button onClick={stopTimer} style={buttonStyle}>
            Stop
          </button>
        )}
        <button onClick={resetTimer} style={buttonStyle}>
          Reset
        </button>
      </div>
    </Card>
  );
};

Timer.defaultProps = {};

Timer.propTypes = {};

export default Timer;
