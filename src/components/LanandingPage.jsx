import React from "react";
import joaco from "../images/RESET_L _dark.png";
export default function LanandingPage({ className = "" }) {
  return (
    <section className={` ${className}   h-full w-[90%]  m-auto`}>
      <div className="  h-full flex justify-center items-center">
        <img
          src={joaco}
          alt="joaco"
          className="w-1/2 m-auto  object-cover fixed z-[-2]"
        />
      </div>
    </section>
  );
}
