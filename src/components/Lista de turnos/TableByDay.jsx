import React from "react";
import useDate from "../../hooks/useDate";
import TurnoCard from "./TurnoCard";

import "./TableDay.scss";

export default function TableByDay({ day }) {
  const { day_date, day_turno } = day;
  const { formatoFecha } = useDate();
  console.log("DAY : ", day);
  return (
    <div className="table_day_container">
      <h4>{formatoFecha(day_date)}</h4>
      <div className="table_turnos">
        {day_turno.map((turno) => (
          <TurnoCard turno={turno} />
        ))}
      </div>
    </div>
  );
}
