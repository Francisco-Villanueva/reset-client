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
import Loader from "./Loader";

export default function Form({}) {
  const { getHorarios, barberos, turnoData, turnoProgress, setTurno } =
    useStore();

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (barberos.length) {
      getHorarios(turnoData.barberId, turnoData.date);
    }
  }, [turnoData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isOK = setTurno();
    if (isOK) {
      setStep(3);
    }
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
          className=" relative border flex flex-col justify-between   h-[80%] w-[90%] md:w-[40rem] md:h-[80%]    bg-white shadow-lg    p-4 rounded-md "
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
          {loading && (
            <div
              className="top-0 left-0 h-full w-full backdrop-blur-[4px] bg-[rgba(255,255,255,.1)] absolute grid place-items-center
              
             "
            >
              <div>
                <Loader />

                <strong className="text-dark-grey">Cargando truno ...</strong>
              </div>
            </div>
          )}
        </form>
      )}
      {step === 3 && <ConfirmationAlert setStep={setStep} />}
    </Layout>
  );
}
