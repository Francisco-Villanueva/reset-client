import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BarberContext } from "../context/BarberContext";

export default function DeleteTurno() {
  const [turno, setTurno] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    time: "",
    date: "",
    barberId: "",
  });
  const { getOneTurno, turnoData, deleteTurno } = useContext(BarberContext);
  const { id } = useParams();
  const navTo = useNavigate();
  console.log({ turnoData });
  useEffect(() => {
    getOneTurno(id, navTo);
  }, [id]);

  const handleDelete = () => {
    deleteTurno(id);
    setTimeout(() => {
      navTo("/");
    }, 1000);
  };
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        gap: "1em",
        height: "100vh",
        width: "100vw",
        background: "#cecece",
      }}
    >
      {turnoData.id ? (
        <div
          style={{
            boxShadow: "1px 1px 5px rgba(0,0,0,.5)",
            borderRadius: "8px",
            padding: "1em",
            margin: "auto",
            background: "#fff",
          }}
        >
          <h2>Cancelacion de turno | RESET - Hair Studio</h2>

          <i>Una vez cancelado el turno no hay vuelta atras pa!</i>
          <hr />
          <p>
            Nombre: <b> {turnoData.name}</b>
          </p>
          <p>
            Fehca: <b> {turnoData.date}</b>
          </p>
          <p>
            Horario: <b> {turnoData.time}</b>
          </p>
          <p>
            Peluquero:{" "}
            <b> {turnoData.barberId === 1 ? "Lautaro" : "Nahuel"} </b>
          </p>

          <button
            onClick={handleDelete}
            style={{
              border: "1px solid #cecece",
              fontFamily: "inherit",
              width: "100%",
              padding: ".5em",
              borderRadius: "5px",
              background: "#fe0000",
              fontWeight: 600,
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Eliminar
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
