import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers";
import "./slider.css";
import { feedbacks } from "../../mocks/feedback.json";
import { UserIcon } from "../../commons/Icons";
import Stars from "../../commons/Stars";
export function FeedbackSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const buttonStyle = "transition-all duration-150 p-2 z-10 bg-blur-black ";
  return (
    <div className="slider  w-full h-full relative   ">
      <div className="absolute top-0 w-full">
        <img
          src={"/landing/landing2.jpg"}
          alt={`reset salon hair studio`}
          className="h-full aspect-video w-full  object-cover object-top  z-0  "
        />
      </div>
      <div
        className="slide-wrapper flex h-full  w-full  z-30 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {feedbacks.map((feedback, i) => (
          <div
            className="min-w-full uppercase  flex flex-col justify-center items-center gap-8 text-white z-30  bg-black/80  "
            key={i}
          >
            <Stars stars={feedback.stars} />
            <p className="italic font-normal text-xl w-1/2 text-center">
              {" "}
              " {feedback.feedback} "
            </p>
            <div className="flex flex-col items-center">
              <UserIcon className="w-14 " />
              <p className="font-semibold text-2xl">{feedback.author}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex  gap-8 items-center justify-between h-full w-full  absolute top-0  text-white">
        <button onClick={prevSlide} className={buttonStyle}>
          <ArrowLeftIcon />
        </button>
        <button onClick={nextSlide} className={buttonStyle}>
          <ArrowRightIcon />
        </button>
      </div>

      <div className="flex  gap-1 items-center justify-center h-5 w-full   absolute bottom-0   text-white">
        {feedbacks.map((image, i) => (
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
}
