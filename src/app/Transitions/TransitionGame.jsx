import { useState } from "react";
import { COLORS } from "@/enums/colors";
import Game from "../components/Game/Game";
import Timer from "../components/Game/Timer";

const TransitionGame = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showResults, setShowResults] = useState(false);

  return (
    <div
      style={{ backgroundColor: COLORS.primary }}
      className="grid gap-4 w-full h-full rounded-3xl text-sky-50 p-6 justify-items-center"
    >
      {showResults ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-6xl font-comic-neue mb-4 text-center">
            Resultados
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col w-full items-center">
            <div className="text-6xl font-comic-neue mb-4 text-center">
              El juego del AMOR
            </div>

            <div className="flex justify-between w-full px-10 text-xl font-bold">
              <div>Puntos: {score}</div>
              <div>
                <button
                  type="button"
                  className="rounded-lg py-1 px-2 font-semibold bg-yellow-600 transform transition-all hover:scale-105"
                  onClick={() => setIsRunning(true)}
                >
                  {isRunning ? "VAMOOOS" : "Dale para comenzar"}
                </button>
              </div>
              <div className="flex gap-3">
                Tiempo:{" "}
                <Timer time={time} isRunning={isRunning} setTime={setTime} />
              </div>
            </div>
          </div>

          <div className="w-full h-full flex items-center justify-center">
            <Game
              isRunning={isRunning}
              setScore={setScore}
              setShowResults={setShowResults}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TransitionGame;
