import React, { useCallback, useEffect, useState } from "react";
import { getGifs } from "../api";
import { dupliclateAndShuffle, generateGifMatrix } from "../utils";
import Image from "next/image";
import interrogante from "@/gifs/interrogante.svg";
const Game = () => {
  const [gifs, setGifs] = useState([]);
  const [gifMatrix, setGifMatrix] = useState({});
  const [guess, setGuess] = useState([]);

  useEffect(() => {
    getGifs().then((gifs) => {
      const finalGifs = dupliclateAndShuffle(gifs);
      const gifMatrix = generateGifMatrix(finalGifs);
      setGifMatrix(gifMatrix);
      return setGifs(finalGifs);
    });
  }, []);

  const handleClick = useCallback(
    (key) => {
      setGifMatrix((prevState) => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          selected: !prevState[key].selected,
        },
      }));
    },
    [gifMatrix]
  );

  const compareGuess = () => {
    console.log(guess.length);
    if (guess.length === 2) {
      if (guess[0].id === guess[1].id) {
        // TODO: SUMAR PUNTOS CON RESPECTO AL TIEMPO (CUANTO MENOS TIEMPO MAS PUNTOS)
      } else {
        setGifMatrix({
          ...gifMatrix,
          [guess[0].key]: { selected: false },
          [guess[1].key]: { selected: false },
        });
      }
      setGuess([]);
    }
  };

  return (
    <div className="grid grid-cols-8 gap-4">
      {gifs.map((gif, index) => {
        const key = gif.id + index;
        return (
          <div
            key={key}
            className="aspect-square bg-rose-700 cursor-pointer rounded-xl"
          >
            {gifMatrix[key].selected ? (
              <Image
                src={gif.images.fixed_height_small.url}
                alt={gif.title}
                width={200}
                height={200}
                className="w-full h-full rounded-xl border-4 border-pink-600"
                onClick={() => {
                  handleClick(key);
                }}
              />
            ) : (
              <Image
                src={interrogante}
                alt={"¿Que será?"}
                className="w-full h-full rounded-xl border-4 border-pink-400 shadow-lg transform transition-all hover:scale-105"
                onClick={() => {
                  handleClick(key);
                  setGuess([...guess, { key, id: gif.id }]);
                  compareGuess();
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Game;
