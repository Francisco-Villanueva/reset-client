import React from "react";
import TimeCard from "../commons/TimeCard";

export default function ListOfHours({ horarios = [], client, handleTime }) {
  return (
    <div className="grid grid-cols-4 gap-2 ">
      {horarios.map((time) => (
        <TimeCard
          disabled={client.barberId === ""}
          time={time}
          selected={client.time === time.hs}
          handleTime={handleTime}
        />
      ))}
    </div>
  );
}
