import React, { useContext, useEffect, useState } from "react";
import logoLight from "../images/RESET_C.png";
import logoDark from "../images/RESET_C_negro.png";
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
      className={`${className} flex   justify-between  items-center w-full px-[3rem] ${theme} ${
        scrolling ? "bg-white" : ""
      }`}
    >
      <div className="flex  h-full    gap-2  items-center font-montserrat ">
        <div className=" h-full flex items-center gap-2 ">
          <img
            src={theme === "dark" ? logoLight : logoDark}
            alt="logoNav"
            className="h-full "
          />
        </div>
      </div>
      {/* <div className="flex w-[40%] gap-2   justify-around text-md ">
        {["Home", "Nosotros", "Servicios", "Encontranos"].map((item, i) => (
          <p
            key={i}
            className="cursor-pointer  transition-all duration-150  font-semibold text-[1rem]  hover:scale-[1.2]"
          >
            {item}
          </p>
        ))}
      </div> */}

      <div className={`   text-2xl flex gap-2 "text-black" `}>
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
