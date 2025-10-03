import React from "react";
import img1 from "../assets/Project-images/1.jpg";
import img2 from "../assets/Project-images/2.jpg";
import img3 from "../assets/Project-images/3.jpg";
import img4 from "../assets/Project-images/4.jpg";
import img5 from "../assets/Project-images/5.jpg";
import img6 from "../assets/Project-images/6.jpg";
import img7 from "../assets/Project-images/7.jpg";
import img8 from "../assets/Project-images/8.jpg";
import img9 from "../assets/Project-images/9.jpg";
import img10 from "../assets/Project-images/10.jpg";
import img11 from "../assets/Project-images/11.jpg";
import img12 from "../assets/Project-images/12.jpg";
import img13 from "../assets/Project-images/13.jpg";
import img14 from "../assets/Project-images/14.jpg";
import img15 from "../assets/Project-images/15.jpg";
import img16 from "../assets/Project-images/16.jpg";
import ProjecrCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projectsImages = [
    { img1: img1, img2: img2 },
    { img1: img3, img2: img4 },
    { img1: img5, img2: img6 },
    { img1: img7, img2: img8 },
    { img1: img9, img2: img10 },
    { img1: img11, img2: img12 },
    { img1: img13, img2: img14 },
    { img1: img15, img2: img16 },
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".hero", {
      height: "0px",
      stagger: {
        amount: 0.8,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -100%",
        scrub: true,
      },
    });
  });

  return (
    <div className="p-4">
      <div className=" pt-[40vh]">
        <h2 className="uppercase font-[font2] text-[12vw] tracking-wider">
          projets
        </h2>
      </div>
      <div className="-mt-18 lol">
        {projectsImages.map((elem, idx) => {
          return (
            <div key={idx} className="hero w-full h-[570px] mb-3 flex gap-3">
              <ProjecrCard img1={elem.img1} img2={elem.img2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
