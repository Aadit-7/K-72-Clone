import React from "react";
import Img1 from "../../assets/Nav-images/fullNav-1.jpg";
import Img2 from "../../assets/Nav-images/fullNav-2.jpg";
import Img3 from "../../assets/Nav-images/fullNav-3.jpg";
import Img4 from "../../assets/Nav-images/fullNav-4.jpg";
import Img5 from "../../assets/Nav-images/fullNav-5.gif";
import Img6 from "../../assets/Nav-images/fullNav-6.png";
import hert from "../../assets/Nav-images/heart.png";

const FullScreenNav = () => {
  return (
    <div
      id="fullScreenNav"
      className="text-white h-screen w-full absolute py-40"
    >
      <div id="all-links">
        <div id="links" className=" link relative border-t-1 border-white">
          <h1 className="font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
            projects
          </h1>
          <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
            <div className="moveX flex items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour tout voir
              </h2>
              <img
                src={Img1}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour tout voir
              </h2>
              <img
                src={Img2}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
            </div>
            <div className="moveX flex items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour tout voir
              </h2>
              <img
                src={Img1}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour tout voir
              </h2>
              <img
                src={Img2}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
            </div>
          </div>
        </div>
        <div id="links" className=" link relative border-t-1 border-white">
          <h1 className="font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
            agence
          </h1>
          <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
            <div className="moveX flex items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour tout savoir
              </h2>
              <img
                src={Img3}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour tout savoir
              </h2>
              <img
                src={Img4}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
            </div>
            <div className="moveX flex items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour tout savoir
              </h2>
              <img
                src={Img3}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour tout savoir
              </h2>
              <img
                src={Img4}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
            </div>
          </div>
        </div>
        <div id="links" className=" link relative border-t-1 border-white">
          <h1 className="font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
            contact
          </h1>
          <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
            <div className="moveX flex items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour envoyer un fax
              </h2>
              <img src={hert} alt="" className=" h-24 w-80 px-7 fill-black" />
              {/* className="h-24 w-80 rounded-full shrink-0 object-cover */}

              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour tout voir
              </h2>
              <img src={hert} alt="" className=" h-24 w-80 px-7 fill-black" />
              {/* className="h-24 w-80 rounded-full shrink-0 object-cover */}
            </div>
            <div className="moveX flex items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour tout voir
              </h2>
              <img src={hert} alt="" className=" h-24 w-80 px-7 fill-black" />
              {/* className="h-24 w-80 rounded-full shrink-0 object-cover */}
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                pour tout voir
              </h2>
              <img src={hert} alt="" className=" h-24 w-80 px-7 fill-black" />
              {/* className="h-24 w-80 rounded-full shrink-0 object-cover */}
            </div>
          </div>
        </div>
        <div id="links" className=" link relative border-t-1 border-white">
          <h1 className="font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
            blogue
          </h1>
          <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
            <div className="moveX flex items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                lire les articles
              </h2>
              <img
                src={Img6}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                lire les articles
              </h2>
              <img
                src={Img5}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
            </div>
            <div className="moveX flex items-center ">
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                lire les articles
              </h2>
              <img
                src={Img6}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
              <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-center leading-[0.8] pt-3.5">
                lire les articles
              </h2>
              <img
                src={Img5}
                alt=""
                className="h-24 w-80 rounded-full shrink-0 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
