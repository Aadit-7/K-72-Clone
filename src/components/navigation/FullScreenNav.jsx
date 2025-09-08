import React, { useRef } from "react";
import Img1 from "../../assets/Nav-images/fullNav-1.jpg";
import Img2 from "../../assets/Nav-images/fullNav-2.jpg";
import Img3 from "../../assets/Nav-images/fullNav-3.jpg";
import Img4 from "../../assets/Nav-images/fullNav-4.jpg";
import Img5 from "../../assets/Nav-images/fullNav-5.gif";
import Img6 from "../../assets/Nav-images/fullNav-6.png";
import hert from "../../assets/Nav-images/heart.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".loader-stairs", {
      delay: 1,
      height: 0,
      stagger: {
        amount: -1,
      },
    });
    tl.from(fullNavLinksRef.current, {
      opacity: 0,
    });
  });

  return (
    <div
      id="fullScreenNav"
      className="text-white h-screen w-full absolute overflow-hidden"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex ">
          <div className="loader-stairs h-full w-1/6 bg-red-500"></div>
          <div className="loader-stairs h-full w-1/6 bg-red-500"></div>
          <div className="loader-stairs h-full w-1/6 bg-red-500"></div>
          <div className="loader-stairs h-full w-1/6 bg-red-500"></div>
          <div className="loader-stairs h-full w-1/6 bg-red-500"></div>
          <div className="loader-stairs h-full w-1/6 bg-red-500"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="fixed flex w-full justify-between p-4 items-start">
          <div className="">
            <div className=" w-30 ">
              <svg
                className=" w-full text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fill-rule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="h-28 w-28 relative cursor-pointer">
            <div className=" h-40 w-0.5 bg-white absolute -rotate-45 origin-top"></div>
            <div className=" h-40 w-0.5 bg-white absolute right-0 rotate-45 origin-top"></div>
          </div>
        </div>
        <div id="all-links" className="py-40">
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
          <div id="links" className=" link relative border-y-1 border-white">
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
    </div>
  );
};

export default FullScreenNav;
