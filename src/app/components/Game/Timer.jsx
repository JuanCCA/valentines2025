import { useState, useEffect } from "react";

const Timer = ({ time, isRunning, setTime }) => {
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // Formatear tiempo en segundos y milisegundos
  const seconds = Math.floor(time / 1000); // Segundos completos

  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-bold text-yellow-300">{seconds}s</div>
      {/* <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Pausar" : "Reanudar"}
        </button>
        <button
          className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reiniciar
        </button>
      </div> */}
    </div>
  );
};

export default Timer;
