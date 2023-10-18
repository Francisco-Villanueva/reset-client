import React from "react";
import BarberCard from "../commons/BarberCard";

export default function ListOfBarbers({ barberos = [], handleBarber, client }) {
  return (
    <div className="flex    overflow-x-auto  scrollStyle ">
      {barberos
        .sort((a, b) => a.id - b.id)
        .map((barber) => (
          <BarberCard
            className="w-1/2 px-6"
            barber={barber}
            handleBarber={handleBarber}
            selected={client.barberId === barber.id}
          />
        ))}
    </div>
  );
}
