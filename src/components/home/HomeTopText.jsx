import React from "react";
import Video from "./Video";

const HomeTopText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center ">
        L'étincelle
      </div>
      <div className="text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center ">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center ">
        la créativité
      </div>
    </div>
  );
};

export default HomeTopText;
