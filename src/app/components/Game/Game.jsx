import React, { useCallback, useEffect, useState } from "react";
import { getGifs } from "../../api";
import { dupliclateAndShuffle, generateGifMatrix } from "../../utils";
import Image from "next/image";
import interrogante from "@/gifs/interrogante.svg";
import loadingHeart from "@/gifs/heart-loading.svg";

const Game = ({ setScore, isRunning, setShowResults }) => {
  const [gifs, setGifs] = useState([]);
  const [gifMatrix, setGifMatrix] = useState({});
  const [guess, setGuess] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs().then((gifs) => {
      const finalGifs = dupliclateAndShuffle(gifs);
      const gifMatrix = generateGifMatrix(finalGifs);
      setGifMatrix(gifMatrix);
      setLoading(false);
      return setGifs(finalGifs);
    });
  }, []);

  useEffect(() => {
    if (guess.length === 2) {
      compareGuess(guess);
    }
  }, [guess]);

  useEffect(() => {
    if (Object.values(gifMatrix).length > 0) {
      const allGuessed = Object.values(gifMatrix).every(
        (card) => card.selected === true
      );
      if (allGuessed) {
        setTimeout(() => setShowResults(true), 0); // Previene error de actualización en render
      }
    }
  }, [gifMatrix]);

  const handleClick = useCallback((key) => {
    setGifMatrix((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }));
  }, []);

  const compareGuess = (guess) => {
    if (guess.length !== 2) return;

    const [firstGuess, secondGuess] = guess;
    const isMatch = firstGuess.id === secondGuess.id;

    if (isMatch) {
      setScore((prevScore) => prevScore + 10);
    } else {
      setScore((prevScore) => prevScore - 5);

      setTimeout(() => {
        setGifMatrix((prevMatrix) => ({
          ...prevMatrix,
          [firstGuess.key]: { ...prevMatrix[firstGuess.key], selected: false },
          [secondGuess.key]: {
            ...prevMatrix[secondGuess.key],
            selected: false,
          },
        }));
      }, 1000);
    }

    setGuess([]);
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center rounded-full">
        <Image unoptimized src={loadingHeart} alt={"Loading..."} width={100} />
        <p className="text-center text-lg">Espera que carge el juegito...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-8 gap-4">
      {gifs.map((gif, index) => {
        const key = gif.id + index;
        return (
          <div
            key={key}
            className="aspect-square bg-rose-700 cursor-pointer rounded-xl"
          >
            <Image
              unoptimized
              src={gif.images.fixed_height_small.url}
              alt={gif.title}
              width={200}
              height={200}
              className="w-full h-full rounded-xl border-4 border-pink-600"
              style={{ display: gifMatrix[key]?.selected ? "" : "none" }}
              onClick={() => {
                if (!gifMatrix[key]?.selected) {
                  handleClick(key);
                }
              }}
            />

            <Image
              src={interrogante}
              alt={"¿Que será?"}
              className="w-full h-full rounded-xl border-4 border-pink-400 shadow-lg transform transition-all hover:scale-105"
              style={{ display: gifMatrix[key]?.selected ? "none" : "" }}
              onClick={async () => {
                if (isRunning) {
                  handleClick(key);
                  setGuess((prevGuess) => [...prevGuess, { key, id: gif.id }]);
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Game;
