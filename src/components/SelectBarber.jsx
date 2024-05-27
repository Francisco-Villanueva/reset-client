import React from "react";
import FormLayout from "../commons/FormLayout";
import ListOfBarbers from "./ListOfBarbers";
import { useStore } from "../context/BarberContext";
import Loader from "./Loader";

export default function SelectBarber() {
  const { barberos } = useStore();
  return (
    <FormLayout className=" flex items-center h-[90%]   ">
      {barberos ? (
        barberos.length === 0 ? (
          <Loader />
        ) : (
          <ListOfBarbers barberos={barberos} />
        )
      ) : (
        <Loader />
      )}

      {/* <div className="absolute h-32 max-md:h-14 aspect-square  top-0 right-10 ">
        <img src="/RESET_C_negro.png" className="h-full w-full" />
      </div> */}
    </FormLayout>
  );
}
