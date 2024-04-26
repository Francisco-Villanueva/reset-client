import React, { useEffect } from "react";
import FormLayout from "../commons/FormLayout";
import Calendar from "../commons/Calendar";
import { useStore } from "../context/BarberContext";
import "../styles/Form.scss";
import "react-datepicker/dist/react-datepicker.css";
export default function SelecDate() {
  const { turnoData, handleTurnoData } = useStore();

  useEffect(() => {
    handleTurnoData("time", "");
  }, []);
  return (
    <FormLayout>
      <Calendar value={turnoData.date} disabled={turnoData.barberId === ""} />
    </FormLayout>
  );
}
