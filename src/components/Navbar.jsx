import React, { useContext, useEffect, useState } from "react";
import logoLight from "../images/RESET_C.png";
import logoDark from "../images/RESET_C_negro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../context/ThemeContext";
import Instagram from "../commons/Instagram";
import { NavbarSidebar } from "./sidebar";

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
    <nav
      className={`flex  bg-white h-[10vh] fixed p-2 rounded-sm shadow-2xl border-b z-10  justify-between  items-center w-full px-[3rem] ${theme} ${
        scrolling ? "bg-white" : ""
      }`}
    >
      <div className="flex  h-full    gap-2  items-center font-montserrat ">
        <div className=" h-full flex items-center gap-2 ">
          <img
            src={theme === "dark" ? logoLight : logoDark}
            alt="logoNav"
            className="h-full aspect-square"
          />
        </div>
      </div>

      <div className="flex items-center gap-16 text-sm max-md:gap-4 max-md:flex-row-reverse  ">
        <NavbarSidebar className="md:hidden " hidden={false} />
        <NavbarSidebar className="max-md:hidden " hidden={true} />
        <Instagram />
      </div>
    </nav>
  );
}
