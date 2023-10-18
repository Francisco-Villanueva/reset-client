import React, { useContext, useEffect, useState } from "react";
import "../styles/Navbar.scss";
import logoLight from "../images/RESET_L_light.png";
import logoDark from "../images/RESET_L _dark.png";
import {} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../context/ThemeContext";
import SwitchTheme from "./SwitchTheme";
export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar ${theme} ${scrolling ? "scrolling" : ""}`}>
      <div className="nav_items">
        <p>Home</p>
        <p>Nosotros</p>
      </div>
      <img
        src={
          !(theme === "dark")
            ? !scrolling
              ? logoDark
              : logoLight
            : !scrolling
            ? logoLight
            : logoDark
        }
        alt="logoNav"
        className="logoNav"
      />

      <div className="nav_items">
        <p>Servicios</p>
        <p>Encontranos</p>
      </div>

      <div
        className={`absolute  right-10 text-2xl flex gap-2 ${
          scrolling ? "text-white" : "text-black"
        }`}
      >
        <a href="https://www.instagram.com/resetsalon_/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/ResetHS/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </nav>
  );
}
