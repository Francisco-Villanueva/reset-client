import React from "react";
import joaco from "../images/joaco.png";
export default function LanandingPage({ className = "" }) {
  return (
    <div className={` ${className} `}>
      <div className="flex items-center h-full ">
        <div className="  h-full ">
          <img src={joaco} alt="joaco" className="h-full object-cover " />
        </div>
        <div className=" h-full  flex flex-col gap-2 justify-center items-end pr-[10vw]">
          <h2 className="text-[3rem]">Award Winning Male Grooming</h2>
          <span className="text-xl">
            MENSPIRE presents the revolutionary transition between precision
            barbering and contemporary hairdressing.
          </span>
        </div>
      </div>
    </div>
  );
}
