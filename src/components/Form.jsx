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
import RejectionAlert from "./RejectionAlert";
import { ApiServices } from "../services";
import { message } from "antd";

export default function Form({}) {
  const {
    getHorarios,
    barberos,
    turnoData,
    turnoProgress,
    setTurno,
    setSelectedBarber,
  } = useStore();

  const [step, setStep] = useState(4);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (barberos.length) {
      getHorarios(turnoData.barberId, turnoData.date);
    }
  }, [turnoData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    ApiServices.setTurno(turnoData)
      .then(() => {
        ApiServices.getBarberById(turnoData.barberId).then((res) => {
          setStep(3);

          setSelectedBarber(res.data);
        });
      })
      .catch(() => {
        message.error(`Hubo un error en la carga del turno!`, 5);
        setStep(4);
      });
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
      {step !== 3 && step !== 4 && (
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
      {step === 4 && <RejectionAlert setStep={setStep} />}
    </Layout>
  );
}
