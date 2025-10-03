import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import img1 from "../assets/Agence-images/1.jpg";
import img2 from "../assets/Agence-images/2.jpg";
import img3 from "../assets/Agence-images/3.jpg";
import img4 from "../assets/Agence-images/4.jpg";
import img5 from "../assets/Agence-images/5.jpg";
import img6 from "../assets/Agence-images/6.jpg";
import img7 from "../assets/Agence-images/7.jpg";
import img8 from "../assets/Agence-images/8.jpg";
import img9 from "../assets/Agence-images/9.jpg";
import img10 from "../assets/Agence-images/10.jpg";
import img11 from "../assets/Agence-images/11.jpg";
import img12 from "../assets/Agence-images/12.jpg";
import img13 from "../assets/Agence-images/13.jpg";
import img14 from "../assets/Agence-images/14.jpg";

const Agences = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imgDivRef = useRef(null);
  const imgRef = useRef(null);

  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top -40%",
        end: "top -180%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate: (elem) => {
          // console.log(elem.progress * imgArray.length);
          // console.log(imgRef.current.src);
          let imgIndex;
          if (elem.progress < 1) {
            imgIndex = Math.floor(elem.progress * imgArray.length);
          } else {
            imgIndex = imgArray.length - 1;
          }
          imgRef.current.src = imgArray[imgIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className="section1 py-1 ">
        <div
          ref={imgDivRef}
          className="absolute lg:h-[20vw] h-30 lg:w-[15vw] w-20 lg:rounded-3xl rounded-xl lg:top-40 top-22 lg:left-[30vw] left-20 overflow-hidden bg-red-500"
        >
          <img
            ref={imgRef}
            className="h-full w-full object-cover"
            src={img1}
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[50vh] mt-40">
            <h1 className="lg:text-[19vw] text-7xl text-center leading-[18vw] uppercase">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] pl-30 lg:pt-0 pt-14 ">
            <p className="lg:text-5xl text-sm ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C'est pour ça qu'on s'engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agences;
