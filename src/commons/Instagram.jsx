import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Instagram() {
  return (
    <a href="https://www.instagram.com/resetsalon_/">
      <FontAwesomeIcon icon={faInstagram} className="h-5" />
    </a>
  );
}
