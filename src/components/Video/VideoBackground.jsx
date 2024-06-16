// Importa React
import React from "react";
import ReactPlayer from "react-player";
import "./video.css";

// Crea un componente funcional para el video
const VideoBackground = ({ videoSrc }) => {
  return (
    <div className="">
      <div>
        <ReactPlayer
          url={videoSrc}
          width="100%"
          height="100%"
          loop
          muted
          playing
        />
      </div>
      {/* <video autoPlay loop muted className="video">
        <source src={videoSrc} type="video/mp4" />
      </video> */}
    </div>
  );
};

// Exporta el componente
export default VideoBackground;
