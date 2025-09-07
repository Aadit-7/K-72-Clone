import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const LoaderStairs = (props) => {
  const curentPath = useLocation().pathname;
  console.log(curentPath);

  const loaderStairsParent = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(loaderStairsParent.current, {
      display: "block",
    });
    tl.from(".loader-stairs", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".loader-stairs", {
      y: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(loaderStairsParent.current, {
      display: "none",
    });
    tl.to(".loader-stairs", {
      y: "0%",
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.15,
      scale: 1.5,
    });
  }, [curentPath]);
  return (
    <div>
      <div
        ref={loaderStairsParent}
        className="h-screen w-full fixed top-0 z-20"
      >
        <div className="h-full w-full flex ">
          <div className="loader-stairs h-full w-1/6 bg-black"></div>
          <div className="loader-stairs h-full w-1/6 bg-black"></div>
          <div className="loader-stairs h-full w-1/6 bg-black"></div>
          <div className="loader-stairs h-full w-1/6 bg-black"></div>
          <div className="loader-stairs h-full w-1/6 bg-black"></div>
          <div className="loader-stairs h-full w-1/6 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default LoaderStairs;
