import React from "react";
import Video1 from "./assest/K72.mp4";
const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        loop
        muted
        autoPlay
        src={Video1}
      ></video>
    </div>
  );
};

export default Video;
