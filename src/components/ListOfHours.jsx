import React, { useEffect, useState } from "react";
import TimeCard from "../commons/TimeCard";
import NotWorkDay from "../commons/NotWorkDay";
import { useStore } from "../context/BarberContext";
import FormLayout from "../commons/FormLayout";
import { ApiServices } from "../services";
import Loader from "./Loader";

export default function ListOfHours() {
  const { turnoData, handleTurnoData } = useStore();
  const [horarios, setHorarios] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    ApiServices.getHorarios(turnoData.barberId, turnoData.date)
      .then((res) => {
        setHorarios(res.data);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <FormLayout>
      {loading ? (
        <Loader />
      ) : horarios ? (
        <div className=" grid grid-cols-2  gap-4 h-full  ">
          {horarios.map((time) => (
            <TimeCard
              key={time.hs}
              disabled={turnoData.barberId === ""}
              time={time}
              selected={turnoData.time === time.hs}
              handleTime={handleTurnoData}
            />
          ))}
        </div>
      ) : (
        <NotWorkDay />
      )}
    </FormLayout>
  );
}
