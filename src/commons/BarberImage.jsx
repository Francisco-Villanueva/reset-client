import React from "react";

export default function BarberImage({ barber, className }) {
  if (!barber.name) return null;
  return (
    <img
      src={`/barbers/${barber.name.toLowerCase().trim()}.jpg`}
      className={className}
    />
  );
}
