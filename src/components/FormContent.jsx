import React from "react";
import { useStore } from "../context/BarberContext";
import SelectBarber from "./SelectBarber";
import SelecDate from "./SelecDate";
import ListOfHours from "./ListOfHours";
import ClientDataForm from "./ClientDataForm";

export default function FormContent() {
  const { step } = useStore();
  switch (step) {
    case 0:
      return <SelectBarber />;
    case 1:
      return <SelecDate />;
    case 2:
      return <ListOfHours />;
    case 3:
      return <ClientDataForm />;
  }
}
