import React from "react";
import TimeCard from "../commons/TimeCard";
import { useStore } from "../context/BarberContext";

export default function ListOfHours() {
  const { horarios, turnoData, handleTurnoData } = useStore();
  return (
    <div className=" grid grid-cols-4 gap-2  ">
      {horarios.map((time) => (
        <TimeCard
          key={time.hs}
          disabled={turnoData.barberId === ""}
          time={time}
          selected={turnoData.time === time.hs}
          handleTime={handleTurnoData}
          className="p-2 "
        />
      ))}
    </div>
  );
}
