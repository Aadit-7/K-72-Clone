import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex justify-center items-center gap-2">
      <div className="border-3 flex items-center px-10 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6vw] mt-2 leading-[6vw]" to={"/projects"}>
          projects{" "}
        </Link>
      </div>
      <div className="border-3 flex items-center px-10 border-white rounded-full uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[6vw] mt-2 leading-[6vw]" to={"/agences"}>
          agences{" "}
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
