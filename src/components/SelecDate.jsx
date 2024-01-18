import React, { useEffect } from "react";
import FormLayout from "../commons/FormLayout";
import Calendar from "../commons/Calendar";
import ListOfHours from "./ListOfHours";
import { useStore } from "../context/BarberContext";

export default function SelecDate() {
  const { turnoData } = useStore();

  return (
    <FormLayout title={"Fecha "} className=" flex flex-col ">
      <Calendar value={turnoData.date} disabled={turnoData.barberId === ""} />
    </FormLayout>
  );
}
