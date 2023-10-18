export default function useDate() {
  const dia = new Date();

  const año = dia.getFullYear(); // Obtiene el año (ejemplo: 2023)
  const mes = String(dia.getMonth() + 1).padStart(2, "0"); // Obtiene el mes (ejemplo: 08)
  const día = String(dia.getDate()).padStart(2, "0"); // Obtiene el día (ejemplo: 21)

  const currentDay = `${año}-${mes}-${día}`;
  // console.log(fechaEnFormatoDeseado); // Esto mostrará la fecha en el formato deseado, por ejemplo, "2023-08-21"

  function formatoFecha(fechaStr) {
    try {
      let fecha = fechaStr;
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
      if (!typeof fechaStr === "object") {
        fecha = new Date(fechaStr);
      }

      const mes = fecha.getMonth() + 1;
      const numero = fechaStr.getDate();
      const year = fecha.getFullYear();

      const res = `${year}-${mes}-${numero}`;

      return res;
    } catch (error) {
      console.log(error);
      return "Fecha no válida";
    }
  }

  return { currentDay, formatoFecha };
}
