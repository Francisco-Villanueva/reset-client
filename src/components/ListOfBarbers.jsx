import React, { useEffect } from "react";
import BarberCard from "../commons/BarberCard";
import { useStore } from "../context/BarberContext";

export default function ListOfBarbers({ className = "", barberos = [] }) {
  const { turnoData } = useStore();

  return (
    <div className={`  ${className} scrollStyle `}>
      {barberos
        .sort((a, b) => a.id - b.id)
        .map((barber) => (
          <BarberCard
            key={barber.id}
            barber={barber}
            selected={turnoData.barberId === barber.id}
          />
        ))}
    </div>
  );
}
