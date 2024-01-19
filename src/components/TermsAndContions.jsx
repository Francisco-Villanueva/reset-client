import React from "react";
import { InfoIcon } from "../commons/Icons";

export default function TermsAndContions() {
  return (
    <section className="flex flex-col  text-black  gap-2  border p-2 rounded-lg text-md w-full">
      <div className="flex gap-2">
        <InfoIcon className="w-6 text-blue" />
        <b>Términos y condiciones </b>
      </div>
      <div className="flex flex-col gap-2 transition-transform duration-300">
        <div className="flex flex-col">
          <i className="text-lg"> - ¿Hasta cuándo puedo cancelar el turno? </i>
          <span>
            Al menos <strong>4 horas </strong> de anticipacion
          </span>
        </div>
        <div className="flex flex-col">
          <i className="text-lg"> - ¿Dónde puedo cancelar el turno? </i>
          <span>
            En el <strong>mail</strong> donde recibe la información del turno
            hay un botón para canclear el mismo
          </span>
        </div>
        <div className="flex flex-col">
          <i className="text-lg"> - ¿Qué pasa si no asisto al turno? </i>
          <span>
            Se cobrará el <strong>50% del valor del corte</strong> a modo de
            multa
          </span>
        </div>
      </div>
    </section>
  );
}
