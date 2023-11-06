import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BarberContext } from "../context/BarberContext";
import logoCircular from "../images/RESET_C_negro.png";

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
    <div className="grid place-items-center  h-[100vh] w-full">
      {turnoData.id ? (
        <div className="flex flex-col gap-4 max-md:w-[95%] w-[50%] h-[50%] max-md:h-[40%] border rounded-md p-4 justify-around relative">
          <div className="flex items-center gap-4">
            <img
              src={logoCircular}
              alt="logoCircular"
              className="w-[10%] max-md:w-[20%] "
            />
            <h2 className="text-3xl max-md:text-2xl">
              Cancelacion de turno | RESET - Hair Studio
            </h2>
          </div>

          <hr />

          <div className="text-xl max-md:text-lg">
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
              Peluquero: <b> {turnoData.barber} </b>
            </p>
          </div>
          <button
            onClick={handleDelete}
            className="border bg-selected w-full p-4 max-md:p-2 rounded-md text-white"
          >
            Canelar turno
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
