import React, { useContext, useEffect, useState } from "react";
import logoLight from "../images/RESET_C.png";
import logoDark from "../images/RESET_C_negro.png";
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
      className={`flex   h-[10vh] fixed p-2 rounded-sm shadow-2xl  z-10  justify-between  items-center w-full px-[3rem]  transition-all duration-300 ${
        scrolling
          ? "bg-white border-b translate-y-[0%]"
          : " text-white bg-transparent translate-y-[-100%]"
      }`}
    >
      <div className="flex  h-full   max-md:w-full max-md:justify-center   gap-2  items-center font-montserrat ">
        <div className=" h-full flex items-center gap-2 max-md:hidden ">
          <img
            src={theme === "dark" ? logoLight : logoDark}
            alt="logoNav"
            className="h-full aspect-square"
          />
        </div>
        <div className="  md:hidden ">
          <img
            src={"/resetLargo.png"}
            alt="reset Logo"
            className=" h-10     "
          />
        </div>
      </div>

      <div className="flex items-center gap-16 text-sm max-md:gap-4 max-md:flex-row-reverse max-md:absolute max-md:right-4 ">
        <NavbarSidebar className="md:hidden " hidden={false} />
        <NavbarSidebar className="max-md:hidden " hidden={true} />
        <Instagram />
      </div>
    </nav>
  );
}
