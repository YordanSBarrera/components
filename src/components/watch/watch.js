import "./watch.css";
import { useState } from "react";

export default function Watch() {
  const [clock, setClock] = useState(74);
  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setClock((clock) => clock + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    clearInterval(window.myTimer);
    setClock(0);
  };
  return (
    <div className="containerWatch">
      <div className="texto">
        <h1>
          Timer:
          <span> {Math.floor(clock / 60)} mins </span>
          <span> {clock % 60} secs</span>
        </h1>
      </div>
      <div className="buttons">
        <button onClick={startTimer} className="btn b1">
          Start
        </button>
        <button onClick={stopTimer} className="btn b2">
          Stop
        </button>
        <button onClick={resetTimer} className="btn b3">
          Reset
        </button>
      </div>
    </div>
  );
}
