import { useState, useEffect } from "react";
import RewardTable from "../components/RewardTable";
import { getScoreGif } from "../api";
import Image from "next/image";

const TransitionResults = ({ score, time }) => {
  const [scoreGif, setScoreGif] = useState(null);
  useEffect(() => {
    getScoreGif(score).then((gifs) => {
      setScoreGif(gifs[0]);
    });
  }, []);

  const getRewardMessage = (score) => {
    if (score >= 41) {
      return (
        <div className="text-xl font-comic-neue mb-4 text-center text-yellow-300">
          <div className="text-3xl font-bold">
            Gran premio de San Valentín 2025 ❤️🏆
          </div>
          <div class="border-t border-gray-300 my-4"></div>
          <span className="text-yellow-300">
            {" "}
            Venga va no me lo creo, es que ni me voy a preocupar por escribir un
            mensaje gracioso, aqui no va a llegar nadie, y si llega es con
            trampa
          </span>
        </div>
      );
    } else if (score >= 30) {
      return (
        <div className="text-xl font-comic-neue mb-4 text-center text-yellow-300">
          <div className="text-3xl font-bold">Premio secreto 🎁🤫</div>
          <div class="border-t border-gray-300 my-4"></div>
          <span className="text-yellow-300">
            {" "}
            🎉 BUAAA REGALO SECRETO PFFF, SEGURO QUE HAS HECHO TRAMPAS VA, QUE
            NOS CONOCEMOS, BUA BUA BUA, VENGA VA, MAS DE 30 PUNTACOS UNA POLLA
            LOS HAS CONSEGIDO 🎉
          </span>
        </div>
      );
    } else if (score >= 10) {
      return (
        <div className="text-xl font-comic-neue mb-4 text-center text-yellow-300">
          <div className="text-3xl font-bold">Cenita romántica 🍽️✨</div>
          <div class="border-t border-gray-300 my-4"></div>
          <span className="text-yellow-300">
            {" "}
            Bueno bueno, cenita romantica que vamos a cocinar juntitos, menu
            ESPECIAL, y secreto jijijijiji. El dia estaria bien que fuera el
            viernes 14, pero bueno VV(vamos viendo)
          </span>
        </div>
      );
    } else if (score >= 0) {
      return (
        <div className="text-xl font-comic-neue mb-4 text-center text-yellow-300">
          <div className="text-3xl font-bold">Un beso en la boca 💋</div>
          <div class="border-t border-gray-300 my-4"></div>
          <span className="text-yellow-300">
            {" "}
            Bueno un beso en la boca, que bueno... una cosa normalita no?
            tampoco para tirar coetes pero bueno, un beso en la boca que te voy
            a dar
          </span>
        </div>
      );
    } else if (score < 0) {
      return (
        <div className="text-xl font-comic-neue mb-4 text-center text-yellow-300">
          <div className="text-3xl font-bold">Un beso 😘</div>
          <div class="border-t border-gray-300 my-4"></div>
          <span className="text-yellow-300">
            {" "}
            Bueno... un beso, a ver nada especial no? un beso, que ademas ni en
            la boca pfff un poco bajona no? Seguro que puedes ganar algo mas va,
            intentalo de nuevo.
          </span>
        </div>
      );
    }
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="text-6xl font-comic-neue mb-4 text-center">
          Resultados
        </div>
        <div className="flex justify-around w-full px-10 font-bold">
          <div>
            <RewardTable />
          </div>
          <div className="flex w-1/3">{getRewardMessage(score)}</div>
          <div>
            <div className="text-xl font-comic-neue mb-4 text-center text-yellow-300">
              Puntos: {score}
            </div>
            <div className="text-xl font-comic-neue mb-4 text-center text-yellow-300">
              Tiempo: {time / 1000} seg
            </div>
            {scoreGif && (
              <div>
                <Image
                  unoptimized
                  src={scoreGif.images.fixed_height_small.url}
                  alt={scoreGif.title}
                  width={200}
                  height={200}
                  className="w-full h-full rounded-xl border-4 border-pink-600"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransitionResults;
