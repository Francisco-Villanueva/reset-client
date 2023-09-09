import React from "react";
import "./TurnoCard.scss";
export default function TurnoCard({ turno }) {
  const {
    client_email: email,
    client_name: name,
    client_number: number,
    time,
  } = turno;
  return (
    <div className="turno_card_container">
      <span>{time}</span>
      <span>{name}</span>
      <span>{number}</span>
      <span>{email}</span>
    </div>
  );
}
