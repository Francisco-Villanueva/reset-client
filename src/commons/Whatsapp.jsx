import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Whatsapp() {
  const phoneNumber = "+5492915779365";
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  return (
    <a href={whatsappURL}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
}
