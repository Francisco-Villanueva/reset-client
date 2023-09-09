import React, { useContext } from "react";
import "../styles/Navbar.scss";
import logoNav from "../images/RESET_C.png";
import logoNavDark from "../images/RESET_C_negro.png";
import {} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../context/ThemeContext";
import SwitchTheme from "./SwitchTheme";
export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      {theme === "dark" ? (
        <img src={logoNav} alt="logoNav" className="logoNav" />
      ) : (
        <img src={logoNavDark} alt="logoNav" className="logoNav" />
      )}

      <div className="nav_items">
        <p>Home</p>
        <p>Contacto</p>
        <p>Nosotros</p>
        <p>Servicios</p>
      </div>
      <div className="nav_redes">
        <a>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>

      <SwitchTheme />
    </nav>
  );
}
