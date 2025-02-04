import React from "react";
import { COLORS } from "@/enums/colors";
import Image from "next/image";
import sendKiss from "@/gifs/send-kiss.gif";

const TransitionGameExplain = () => {
  return (
    <div
      style={{ backgroundColor: COLORS.primary }}
      className=" grid w-full h-full rounded-3xl text-sky-50 p-5 justify-items-center"
    >
      <div className="text-6xl font-[family-name:var(--font-comic-neue)]">
        {" "}
        El juego del AMOR{" "}
      </div>
      <div className="text-xl font-[family-name:var(--font-montserrat)]">
        Basicamente es un juego de encontrar parejas jiji.
        <br />
        <p>
          {"->"} Selecciona{" "}
          <span className="font-bold text-yellow-400">2 cartas</span>,
          dependiendo si son iguales ganaras o perderas puntos
        </p>
        <p>
          {"->"} Si aciertas, ganas{" "}
          <span className="font-bold text-green-500">10 puntos</span>
        </p>
        <p>
          {"->"} Si fallas, perderas{" "}
          <span className="font-bold text-red-500">5 puntos</span>
        </p>
        <p>
          {"->"} El tiempo empezara a contar una vez le des al boton {"("} En la
          siguiente pantalla {")"}
        </p>
        <p>
          {"->"} Al terminar el juego me pasas captura/foto de tu resultado para
          verificar
        </p>
        <p>
          {"->"} Y lo mas <span className="font-bold">importante</span>, si no
          estas conforme con el resultado,{" "}
          <span className="font-bold text-green-500">
            puedes repetirlo las veces que quieras
          </span>
          , me quedare con tu mejor puntuacion ;)
        </p>
      </div>
      <div>Venga va mucho animo y al toro</div>
      <div>
        <Image
          className="rounded-full"
          src={sendKiss}
          alt="Tio Idle"
          width={200}
        />
      </div>
    </div>
  );
};

export default TransitionGameExplain;
