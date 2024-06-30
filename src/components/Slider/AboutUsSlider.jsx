import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { aboutus } from "../../mocks/about.us.json";
export function AboutUsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? aboutus.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === aboutus.length - 1 ? 0 : prevIndex + 1
    );
  };
  const buttonStyle =
    "transition-all duration-150 p-2  bg-black/50 rounded-full ";
  return (
    <div className="slider  w-full h-full relative bg-white    ">
      <div
        className="slide-wrapper flex h-full  w-full  z-30 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {aboutus.map((about, i) => (
          <div className="  min-w-full  flex justify-center ">
            <div className="flex flex-col    max-md:items-center gap-4 pb-10 w-2/3 border justify-center ">
              <img
                src={about.image}
                className="h-32 aspect-square   max-md:h-24"
              />
              <div className="flex flex-col items-center gap-4 max-md:gap-1 text-md  ">
                <h2 className="uppercase font-bold text-start ">
                  {about.title}
                </h2>
                <p className=" w-full pb-1">{about.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex  gap-8 items-center justify-between h-full w-full  absolute top-0   text-white">
        <button onClick={prevSlide} className={buttonStyle}>
          <ArrowLeftIcon />
        </button>
        <button onClick={nextSlide} className={buttonStyle}>
          <ArrowRightIcon />
        </button>
      </div>

      <div className="flex  gap-1 items-center justify-center h-5 w-full   absolute bottom-0   text-white">
        {aboutus.map((image, i) => (
          <div
            className={`border  w-10 transition-all duration-300 ${
              i === currentIndex
                ? "scale-y-125 scale-x-105  border-black"
                : "  border-grey"
            } `}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
