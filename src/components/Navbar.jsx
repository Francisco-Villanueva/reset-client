import React, { useContext, useEffect, useState } from "react";
import logoLight from "../images/RESET_L_light.png";
import logoDark from "../images/RESET_L _dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../context/ThemeContext";
import SwitchTheme from "./SwitchTheme";
export default function Navbar({ className = "" }) {
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
    <nav
      className={`${className} flex  items-center w-[90%] m-auto  ${theme} ${
        scrolling ? "scrolling" : ""
      }`}
    >
      <div className="flex flex-1 flex-col h-full    gap-2  items-center font-montserrat ">
        <div className=" h-full flex items-center gap-2 ">
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
            className="h-[90%] "
          />
        </div>
        <div className="flex w-1/3   justify-around text-md">
          {["Home", "Nosotros", "Servicios", "Encontranos"].map((item, i) => (
            <p
              key={i}
              className="cursor-pointer  transition-all duration-150 hover:scale-[1.2]"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div
        className={`   text-2xl flex gap-2 ${
          scrolling ? "text-white" : "text-black"
        }`}
      >
        <a href="https://www.instagram.com/resetsalon_/">
          <FontAwesomeIcon icon={faInstagram} className="w-[1rem]" />
        </a>
        <a href="https://www.facebook.com/ResetHS/">
          <FontAwesomeIcon icon={faFacebook} className="w-[1rem]" />
        </a>
      </div>
    </nav>
  );
}
