import React from "react";
import Video from "./Video";

const HomeTopText = () => {
  return (
    <div className="font-[font1] lg:pt-5 pt-72 text-center">
      <div className="lg:text-[9.5vw] text-[11vw] uppercase lg:leading-[9vw] leading-[12vw] flex items-center justify-center ">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[11vw] uppercase lg:leading-[9vw] leading-[12vw] flex items-center justify-center ">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[11vw] uppercase lg:leading-[9vw] leading-[12vw] flex items-center justify-center ">
        la créativité
      </div>
      <div className="absolute lg:left-[80%] left-28 lg:text-sm text-xs lg:pt-5 pt-7 text-start lg:p-2 p-1 lg:pl-0  lg:leading-5">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          K72 est une agence qui pense chaque action pour nourrir la marque.
          Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
          l’étincelle pour générer de l’émotion. Pour assurer une relation
          honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
          qui doit être fait.
        </p>
      </div>
    </div>
  );
};

export default HomeTopText;
