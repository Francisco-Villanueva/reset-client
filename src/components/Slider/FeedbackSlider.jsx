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
      <div className="absolute top-0 w-full h-full">
        <img
          src={"/landing/landing2.jpg"}
          alt={`reset salon hair studio`}
          className=" h-full w-full object-cover  z-0  "
        />
      </div>
      <div
        className="slide-wrapper flex h-full  w-full  z-30 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {feedbacks.map((feedback, i) => (
          <div
            className="min-w-full uppercase  py-20 flex flex-col justify-center items-center gap-8 text-white z-30  bg-black/80  "
            key={i}
          >
            <Stars stars={feedback.stars} />
            <p className="italic font-normal text-lg max-md:text-sm w-1/2 text-center  max-md:w-[80%]">
              " {feedback.feedback} "
            </p>
            <div className="flex flex-col items-center">
              <UserIcon className="w-14 max-md:w-10" />
              <p className="font-semibold text-xl max-md:text-md">
                {feedback.author}
              </p>
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
    </div>
  );
}
