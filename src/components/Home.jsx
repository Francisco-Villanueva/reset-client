import React, { useContext } from "react";
import "../styles/Home.scss";
import joaco from "../images/joaco2.png";
import resetDark from "../images/RESET_L _dark.png";
import resetLigth from "../images/RESET_L_light.png";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className=" home section_page">
      {/* <div className="separator"></div> */}
      <div className="home_main">
        <div className="home_imgContainer">
          <img src={joaco} alt="joaco" className="home_joacoImg" />
        </div>
        <div className="home_imgContainer">
          {theme === "dark" ? (
            <img src={resetLigth} alt="joaco" className="home_resetImg" />
          ) : (
            <img src={resetDark} alt="joaco" className="home_resetImg" />
          )}
        </div>
      </div>
    </section>
  );
}
