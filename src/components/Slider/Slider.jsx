import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers";
import "./slider.css";

export const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const prevSlide = () => {
    if (!transitioning) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTransitioning(true);
    }
  };

  const nextSlide = () => {
    if (!transitioning) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTransitioning(true);
    }
  };
  useEffect(() => {
    const transitionEndListener = () => {
      setTransitioning(false);
    };

    document
      .querySelector(".slide-wrapper")
      ?.addEventListener("transitionend", transitionEndListener);

    return () => {
      document
        .querySelector(".slide-wrapper")
        ?.removeEventListener("transitionend", transitionEndListener);
    };
  }, []);

  const buttonStyle = "transition-all duration-150 p-2 z-10 bg-blur-black ";
  return (
    <div className="slider  w-full h-full  ">
      <div
        className="slide-wrapper flex h-full w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, i) => (
          <div className="slide grid place-items-center h-full" key={i}>
            <img
              src={image}
              alt={`Slide ${currentIndex}`}
              className="h-full aspect-video md:w-full   object-cover object-top  z-0 "
            />
          </div>
        ))}
      </div>
      <div className="flex  gap-8 items-center justify-between h-full w-full   absolute top-0  bg-black/80 max-md:bg-black/60 text-white">
        <button onClick={prevSlide} className={buttonStyle}>
          <ArrowLeftIcon />
        </button>
        <button onClick={nextSlide} className={buttonStyle}>
          <ArrowRightIcon />
        </button>
      </div>

      <div className="flex  gap-1 items-center justify-center h-5 w-full   absolute bottom-0   text-white">
        {images.map((image, i) => (
          <div
            className={`border  w-10 transition-all duration-300 ${
              i === currentIndex
                ? "scale-y-125 scale-x-105 border-white"
                : "border-dark-grey"
            } `}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};
