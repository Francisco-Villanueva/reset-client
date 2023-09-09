import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ListaTurnos.scss";
import { BarberContext } from "../../context/BarberContext";
import TableByDay from "./TableByDay";
export default function ListaTurnos() {
  const { id } = useParams();
  const { dayByBarber, singleBarber, getDaysByBarberId, getBarber_byId } =
    useContext(BarberContext);

  // const context = useContext(BarberContext);
  useEffect(() => {
    getBarber_byId(id);
    getDaysByBarberId(id);
  }, [id]);

  // console.log("BARBERSTATE ==> ", id, singleBarber);

  return (
    <section className="section_page">
      <h1>{singleBarber[0]?.barber_firstName}</h1>
      {dayByBarber?.map((day) => (
        <TableByDay key={day.id} day={day} />
      ))}
    </section>
  );
}
