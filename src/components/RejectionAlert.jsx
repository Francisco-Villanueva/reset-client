import React, { useEffect, useState } from "react";
import { ErrorIcon } from "../commons/Icons";
import FormLayout from "../commons/FormLayout";
import { useStore } from "../context/BarberContext";
import useDate from "../hooks/useDate";
import resetLogo from "../images/RESET_L _dark.png";
import { ApiServices } from "../services";

export default function RejectionAlert({ setStep }) {
  const { turnoData, clearTurnoData } = useStore();
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
    <section className="  flex flex-col justify-between  h-[100%]  max-lg:w-full w-1/3  p-4 rounded-md">
      <FormLayout className=" h-full flex flex-col justify-center   ">
        <div className="flex flex-col text-error gap-6 items-center  border m-auto p-4 rounded-md bg-white  w-full ">
          <section className="w-1/2 m-auto  absolute top-2">
            <img src={resetLogo} alt="logo reste" />
          </section>
          <header className="text-2xl  flex items-center gap-4 font-semibold  p-2  border-error border-b-2 w-full">
            <ErrorIcon className="text-error w-[2rem]" />
            <h2>No se pudo agendar el turno</h2>
          </header>

          <section className="flex flex-col gap-4 w-full m-auto  text-black  ">
            <i className="text-dark-grey">
              Puede que otro cliente haya sacado un turno con en la misma fecha
              y horario . Por favor,{" "}
              <strong className="">
                {" "}
                recargue la página y vuelva a intentar{" "}
              </strong>
            </i>
            <div className="w-[90%] m-auto border rounded-md  shadow-md  border-error p-2">
              <span className="flex gap-2 w-full justify-between">
                Dia <strong>{formatToYMD(turnoData.date)}</strong>
              </span>
              <span className="flex gap-2 w-full justify-between">
                Hora<strong>{turnoData.time}</strong>
              </span>
              <span className="flex gap-2 w-full justify-between">
                {" "}
                Peluquero<strong>{barberName}</strong>
              </span>
            </div>
          </section>

          <button
            onClick={handleFinish}
            className="bg-error text-white px-3 py-1 rounded-md "
          >
            Home
          </button>
        </div>
      </FormLayout>
    </section>
  );
}
