import React, { useContext } from "react";
import "../styles/Home.scss";
import joaco from "../images/joaco.png";

import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className=" home section_page">
      <div className="home_main">
        <div className="home_imgContainer">
          <img src={joaco} alt="joaco" className="home_joacoImg" />
        </div>
        <div className=" h-full  flex flex-col gap-2 justify-center items-end pr-[10vw]">
          <h2 className="text-[3rem]">Award Winning Male Grooming</h2>
          <span className="text-xl">
            MENSPIRE presents the revolutionary transition between precision
            barbering and contemporary hairdressing.
          </span>
        </div>
      </div>
    </section>
  );
}
