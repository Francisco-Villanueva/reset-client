import React from "react";
import FormLayout from "../commons/FormLayout";
import ListOfBarbers from "./ListOfBarbers";
import { useStore } from "../context/BarberContext";
import Loader from "./Loader";

export default function SelectBarber({ client }) {
  const { barberos, handleTurnoData } = useStore();
  return (
    <FormLayout
      className=" grid place-items-center h-[90%] "
      title={"Peluquero"}
    >
      {barberos.length ? (
        <ListOfBarbers
          className={"flex flex-col gap-2 w-[60%] m-auto   "}
          barberos={barberos}
        />
      ) : (
        <Loader />
      )}
    </FormLayout>
  );
}
