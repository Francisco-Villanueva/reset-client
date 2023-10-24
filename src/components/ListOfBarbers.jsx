import React from "react";
import BarberCard from "../commons/BarberCard";

export default function ListOfBarbers({
  className = "",
  barberos = [],
  handleBarber,
  client,
}) {
  return (
    <div className={`  ${className}     scrollStyle `}>
      {barberos
        .sort((a, b) => a.id - b.id)
        .map((barber) => (
          <BarberCard
            className=" px-6 "
            barber={barber}
            handleBarber={handleBarber}
            selected={client.barberId === barber.id}
          />
        ))}
    </div>
  );
}
