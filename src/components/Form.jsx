import React, { useEffect, useState } from "react";
import "../styles/Form.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useStore } from "../context/BarberContext";
import ProgressBar from "../commons/ProgressBar";
import Layout from "../commons/Layout";
import SelectBarber from "./SelectBarber";
import SelecDate from "./SelecDate";
import ClientDataForm from "./ClientDataForm";
import ConfirmationAlert from "./ConfirmationAlert";
import Pagination from "./Pagination";

export default function Form({}) {
  const { setTurno, getHorarios, barberos, turnoData, turnoProgress } =
    useStore();

  const [step, setStep] = useState(0);

  useEffect(() => {
    if (barberos.length) {
      getHorarios(turnoData.barberId, turnoData.date);
    }
  }, [turnoData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTurno();
    setStep(3);
  };

  const handleStep = (move) => {
    if (move === "next") {
      setStep((s) => s + 1);
    } else if (move === "prev") {
      setStep((s) => s - 1);
    }
  };

  return (
    <Layout className=" h-[100vh]    flex justify-center items-center bg-[rgba(255,255,255,.7)] pt-5  ">
      {step !== 3 && (
        <form
          className="  border flex flex-col justify-between   h-[80%] w-[90%] md:w-[40rem] md:h-[90%]    bg-white shadow-lg    p-4 rounded-md "
          onSubmit={handleSubmit}
        >
          <header className="    ">
            <h2 className="text-[2rem] m-auto my-0">SACAR TURNO</h2>
            <ProgressBar />
          </header>

          <section className="   h-[85%]  ">
            {step === 0 && <SelectBarber />}
            {step === 1 && <SelecDate />}
            {step === 2 && <ClientDataForm />}
          </section>
          <Pagination
            step={step}
            limit={turnoProgress}
            handleStep={handleStep}
          />
        </form>
      )}
      {step === 3 && <ConfirmationAlert />}
    </Layout>
  );
}
