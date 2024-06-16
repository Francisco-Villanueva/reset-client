// Importa React
import React, { useEffect, useRef } from "react";
import "./video.css";

// Crea un componente funcional para el video
const VideoBackground = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playVideo = () => {
      if (videoElement) {
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // El video se reproduce automáticamente
            })
            .catch((error) => {
              // Reintentar la reproducción
              videoElement.muted = true;
              videoElement.play();
            });
        }
      }
    };

    playVideo();

    window.addEventListener("resize", playVideo);
    return () => window.removeEventListener("resize", playVideo);
  }, [videoSrc]);
  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay loop muted className="video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// Exporta el componente
export default VideoBackground;
