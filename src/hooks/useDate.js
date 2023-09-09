import { useState } from "react";

export default function useDate() {
  const dia = new Date();

  const año = dia.getFullYear(); // Obtiene el año (ejemplo: 2023)
  const mes = String(dia.getMonth() + 1).padStart(2, "0"); // Obtiene el mes (ejemplo: 08)
  const día = String(dia.getDate()).padStart(2, "0"); // Obtiene el día (ejemplo: 21)

  const currentDay = `${año}-${mes}-${día}`;
  // console.log(fechaEnFormatoDeseado); // Esto mostrará la fecha en el formato deseado, por ejemplo, "2023-08-21"

  function formatoFecha(fechaStr) {
    try {
      const fecha = new Date(fechaStr);
      const diasSemana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
      ];
      const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      const dia = diasSemana[fecha.getDay() + 1];
      const mes = meses[fecha.getMonth()];
      const numero = fechaStr.split("-")[2];
      const year = fecha.getFullYear();

      const respuest = `${dia} ${numero} ${mes}`;

      return respuest;
    } catch (error) {
      return "Fecha no válida";
    }
  }

  return { currentDay, formatoFecha };
}
