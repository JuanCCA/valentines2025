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
    if (Object.values(gifMatrix).length > 0) {
      const allGuessed = Object.values(gifMatrix).every(
        (card) => card.selected === true
      );
      if (allGuessed) {
        setShowResults(true);
      }
    }
  }, [gifMatrix]);

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

  const compareGuess = useCallback(() => {
    // Verificar que guess tenga exactamente 2 elementos
    if (guess.length !== 2) return;

    const [firstGuess, secondGuess] = guess;

    // Comparar los IDs de las dos selecciones
    const isMatch = firstGuess.id === secondGuess.id;

    console.log({ guess, isMatch });

    if (isMatch) {
      // Incrementar el puntaje si hay coincidencia
      setScore((prevScore) => Math.max(prevScore + 10, 0)); // Asegurar que el puntaje no sea negativo
    } else {
      // Decrementar el puntaje si no hay coincidencia
      setScore((prevScore) => Math.max(prevScore - 5, 0)); // Asegurar que el puntaje no sea negativo

      // Actualizar el estado de las cartas seleccionadas
      console.log(gifMatrix);
      setGifMatrix((prevMatrix) => ({
        ...prevMatrix,
        [firstGuess.key]: { selected: false },
        [secondGuess.key]: { selected: false },
      }));
    }

    // Reiniciar las selecciones
    setGuess([]);
  }, [guess, setScore, setGifMatrix, setGuess]);

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
              style={{ display: !gifMatrix[key].selected ? "none" : "" }}
              onClick={() => {
                if (!gifMatrix[key].selected) {
                  handleClick(key);
                }
              }}
            />

            <Image
              src={interrogante}
              alt={"¿Que será?"}
              className="w-full h-full rounded-xl border-4 border-pink-400 shadow-lg transform transition-all hover:scale-105"
              style={{ display: gifMatrix[key].selected ? "none" : "" }}
              onClick={() => {
                if (isRunning) {
                  handleClick(key);
                  setGuess([...guess, { key, id: gif.id }]);
                  compareGuess();
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
