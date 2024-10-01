import React, { useEffect, useState } from "react";
import ProgressBar from "../commons/ProgressBar";
import { useStore } from "../context/BarberContext";
import { ApiServices } from "../services";
import { message } from "antd";
import Loader from "./Loader";
import Pagination from "./Pagination";

export default function FormBody({ children }) {
  const { step, turnoProgress, turnoData, barberos, getHorarios, setStep } =
    useStore();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (barberos.length && turnoData.barberId && turnoData.date) {
      // getHorarios(turnoData.barberId, turnoData.date);
    }
  }, [turnoData]);
  const handleStep = (move) => {
    if (move === "next") {
      setStep(step + 1);
    } else if (move === "prev") {
      setStep(step - 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    ApiServices.setTurno(turnoData)
      .then(() => {
        ApiServices.getBarberById(turnoData.barberId).then((res) => {
          setStep(4);
          setSelectedBarber(res.data);
        });
      })
      .catch(() => {
        message.error(`Hubo un error en la carga del turno!`, 5);
        setStep(5);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {step !== 4 && step !== 5 ? (
        <form
          className=" relative border flex flex-col justify-between    h-full max-md:h-[80%]  w-[90%]  md:w-[40rem] max-md:text-sm     bg-white shadow-lg    p-4 "
          onSubmit={handleSubmit}
        >
          <header className="  h-[20%]   ">
            <h2 className="text-2xl max-md:text-lg  my-0 font-light uppercase">
              Agendá tu turno
            </h2>
            <div className="border border-black w-1/2 mb-1 max-md:w-1/3" />
            <ProgressBar />
          </header>

          <section className="   h-[80%]  ">{children}</section>
          <Pagination
            step={step}
            limit={turnoProgress}
            handleStep={handleStep}
          />
          {loading && (
            <div className="top-0 left-0 h-full w-full  backdrop-blur-[4px] bg-[rgba(255,255,255,.8)] absolute grid place-items-center ">
              <div className="flex flex-col gap-4">
                <Loader />
                <strong className="text-dark-grey uppercase font-normal">
                  Cargando turno
                </strong>
              </div>
            </div>
          )}
        </form>
      ) : null}
    </>
  );
}
