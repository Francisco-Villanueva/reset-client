export default function useDate() {
  const dia = new Date();

  const año = dia.getFullYear(); // Obtiene el año (ejemplo: 2023)
  const mes = String(dia.getMonth() + 1).padStart(2, "0"); // Obtiene el mes (ejemplo: 08)
  const día = String(dia.getDate()).padStart(2, "0"); // Obtiene el día (ejemplo: 21)

  const currentDay = `${año}-${mes}-${día}`;

  function slashedDate(inputDate){
    const date = new Date(inputDate);

    const year = date.getFullYear(); // Obtiene el año (ejemplo: 2023)
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Obtiene el mes (ejemplo: 08)
    const day = String(date.getDate()).padStart(2, "0"); // Obtiene el día (ejemplo: 21)
  
    return `${day}/${month}/${year} `
  }
  function formatToYMD(fechaStr) {
    let fecha = new Date(fechaStr);
    try {
      const dias = [
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

      const mes = fecha.getMonth();
      const dia = fecha.getDay();
      const numero = fecha.getDate();
      const year = fecha.getFullYear();

      const res = `${dias[dia]} ${numero} de ${meses[mes]} | ${year}`;

      return res;
    } catch (error) {
      console.log(error);
      return "Fecha no válida";
    }
  }

  function getWeeksDay (date){
   switch (date) {
    case 'Su': return 'Dom'
    case 'Mo': return 'Lun'
    case 'Tu': return 'Mar'
    case 'We': return 'Mie'
    case 'Th': return 'Jue'
    case 'Fr': return 'Vie'
    case 'Sa': return 'Sab'
   }
  }
  return { currentDay, formatToYMD, getWeeksDay, slashedDate };
}
