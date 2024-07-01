import React from "react";
import { InfoIcon } from "../commons/Icons";

export default function TermsAndContions() {
  return (
    <section className="flex flex-col gap-1    text-md w-full">
      <div className="flex gap-2">
        <InfoIcon className="w-6 text-blue" />
        <b>Términos y condiciones </b>
      </div>
      <div className="flex flex-col gap-2  ml-4  text-black">
        <div className="flex flex-col">
          <li className="">¿Hasta cuándo puedo cancelar el turno? </li>
          <span className="text-sm text-dark-grey">
            Al menos <strong>4 horas </strong> de anticipacion
          </span>
        </div>
        <div className="flex flex-col">
          <li className="">¿Dónde puedo cancelar el turno? </li>
          <span className="text-sm text-dark-grey">
            En el <strong>mail</strong> donde recibe la información del turno
            hay un botón para canclear el mismo
          </span>
        </div>
        <div className="flex flex-col">
          <li className="">¿Qué pasa si no asisto al turno? </li>
          <span className="text-sm text-dark-grey">
            Se cobrará el <strong>50% del valor del corte</strong> a modo de
            multa
          </span>
        </div>
      </div>
    </section>
  );
}
