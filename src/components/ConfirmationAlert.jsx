import React, { useEffect, useState } from "react";
import FormLayout from "../commons/FormLayout";
import { CheckIcon } from "../commons/Icons";
import resetLogo from "../images/RESET_L _dark.png";
import { useStore } from "../context/BarberContext";
import { Link } from "react-router-dom";
import { ApiServices } from "../services";
export default function ConfirmationAlert() {
  const { turnoData } = useStore();
  const [barberName, setBarberName] = useState("");
  useEffect(() => {
    ApiServices.getBarberById(turnoData.barberId).then((res) => {
      setBarberName(res.data.name);
    });
  }, []);
  return (
    <section className="  flex flex-col justify-between  h-[90%]  max-md:w-full w-1/3  p-4 rounded-md">
      <FormLayout className=" h-full flex flex-col justify-center   ">
        <div className="flex flex-col text-selected gap-2 items-center  border m-auto p-4 rounded-md bg-white h-[50%] w-full ">
          <section className="w-1/2 m-auto  absolute top-2">
            <img src={resetLogo} alt="logo reste" />
          </section>
          <header className="text-3xl  flex items-center gap-4 font-semibold  p-2  border-selected border-b-2 w-full">
            <CheckIcon className="text-selected w-[3rem]" />
            <h2>Turno confirmado</h2>
          </header>

          <section className="flex flex-col gap-2 w-2/3 m-auto text-xl text-black ">
            <span className="flex gap-2 w-full justify-between">
              Dia <strong>{turnoData.date}</strong>
            </span>
            <span className="flex gap-2 w-full justify-between">
              Hora<strong>{turnoData.time}</strong>
            </span>
            <span className="flex gap-2 w-full justify-between">
              {" "}
              Peluquero<strong>{barberName}</strong>
            </span>
          </section>

          <Link
            to={"/"}
            className="bg-selected text-white px-3 py-1 rounded-md "
          >
            Home
          </Link>
        </div>
      </FormLayout>
    </section>
  );
}
