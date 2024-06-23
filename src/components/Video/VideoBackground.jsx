// Importa React
import React, { useEffect, useRef } from "react";
import "./video.css";

// Crea un componente funcional para el video
const VideoBackground = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("El video no pudo reproducirse automáticamente:", error);
      });
    }
  }, []);
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video" playsInline ref={videoRef}>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

// Exporta el componente
export default VideoBackground;
