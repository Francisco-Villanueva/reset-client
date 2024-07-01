import React, { useEffect, useState } from "react";
import FormLayout from "../commons/FormLayout";
import { CheckIcon, InfoIcon } from "../commons/Icons";
import resetLogo from "/RESET_C_negro.png";
import { useStore } from "../context/BarberContext";
import { ApiServices } from "../services";
import useDate from "../hooks/useDate";
import TermsAndContions from "./TermsAndContions";
export default function ConfirmationAlert() {
  const { turnoData, clearTurnoData, setStep } = useStore();
  const { formatToYMD } = useDate();
  const [barberName, setBarberName] = useState("");
  useEffect(() => {
    ApiServices.getBarberById(turnoData.barberId).then((res) => {
      setBarberName(res.data.name);
    });
  }, []);

  const handleFinish = () => {
    clearTurnoData();
    setStep(0);
  };
  return (
    <section className="  flex flex-col justify-between  h-[100%]  max-lg:w-full w-[40%]  p-4 rounded-md ">
      <FormLayout className=" h-full flex flex-col justify-center   ">
        <div className="flex flex-col text-black gap-6 items-center  border m-auto p-4 rounded-md  bg-white w-full  ">
          <header className="text-2xl  flex items-center gap-4 font-semibold  p-2  border-selected border-b w-full">
            <CheckIcon className="text-black w-[2rem]" />
            <h2>Turno confirmado</h2>
          </header>

          <section className="flex flex-col gap-2 w-full m-auto  text-dark-grey  ">
            <span className="flex gap-2 w-full justify-between">
              Día <strong>{formatToYMD(turnoData.date)}</strong>
            </span>
            <span className="flex gap-2 w-full justify-between">
              Hora<strong>{turnoData.time}</strong>
            </span>
            <span className="flex gap-2 w-full justify-between">
              {" "}
              Peluquero<strong>{barberName}</strong>
            </span>
          </section>

          <TermsAndContions />

          <button
            onClick={handleFinish}
            className="bg-black text-grey p-4 py-1 rounded-sm "
          >
            Back
          </button>
        </div>
      </FormLayout>
    </section>
  );
}
