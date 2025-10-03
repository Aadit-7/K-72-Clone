import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex justify-center items-center lg:gap-2 gap-1 lg:mb-0 mb-2">
      <div className="lg:border-3 border-2 flex items-center lg:px-10 px-6 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6vw] lg:mt-2 mt-1 leading-[6vw]" to={"/projects"}>
          projects{" "}
        </Link>
      </div>
      <div className="lg:border-3 border-2 flex items-center lg:px-10 px-6 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6vw] lg:mt-2 mt-1 leading-[6vw]" to={"/agences"}>
          agences{" "}
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
