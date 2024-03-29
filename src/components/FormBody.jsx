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
    if (barberos.length) {
      getHorarios(turnoData.barberId, turnoData.date);
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
          className=" relative border flex flex-col justify-between   h-[80%] w-[90%] md:w-[40rem] md:h-[80%]    bg-white shadow-lg    p-4 rounded-md "
          onSubmit={handleSubmit}
        >
          <header className="    ">
            <h2 className="text-[2rem] m-auto my-0">SACAR TURNO</h2>
            <ProgressBar />
          </header>

          <section className="   h-[85%]  ">{children}</section>
          <Pagination
            step={step}
            limit={turnoProgress}
            handleStep={handleStep}
          />
          {loading && (
            <div className="top-0 left-0 h-full w-full  backdrop-blur-[4px] bg-[rgba(255,255,255,.1)] absolute grid place-items-center ">
              <div>
                <Loader />
                <strong className="text-selected">Cargando truno </strong>
              </div>
            </div>
          )}
        </form>
      ) : null}
    </>
  );
}
