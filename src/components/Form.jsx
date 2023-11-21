import React, { useContext, useEffect, useState } from "react";
import "../styles/Form.scss";
import "react-datepicker/dist/react-datepicker.css";
import { BarberContext } from "../context/BarberContext";
import useDate from "../hooks/useDate";
import Calendar from "../commons/Calendar";
import Input from "../commons/Input";
import useInput from "../hooks/useInput";
import ProgressBar from "../commons/ProgressBar";
import { ArrowLeft, IconX, CheckIcon } from "../commons/Icons";
import ListOfBarbers from "./ListOfBarbers";
import ListOfHours from "./ListOfHours";
import Loader from "./Loader";
import Layout from "../commons/Layout";
import FormLayout from "../commons/FormLayout";
import resetLogo from "../images/RESET_L _dark.png";
import { Link } from "react-router-dom";

export default function Form({}) {
  const { setTurno, getHorarios, horarios, barberos } =
    useContext(BarberContext);
  const { currentDay, formatoFecha } = useDate();
  const nameInput = useInput("", "required");
  const mailInput = useInput("", "required");
  const phoneInput = useInput("", "required");
  const [progress, setProgress] = useState(0);
  const [client, setClient] = useState({
    date: currentDay,
    time: "",
    barberId: "",
  });
  const [step, setStep] = useState({
    step: 0,
    data: {
      date: currentDay,
      time: "",
      barberId: "",
    },
  });

  useEffect(() => {
    if (barberos.length) {
      getHorarios(client.barberId, client.date);
    }
  }, [client]);

  useEffect(() => {
    let count = 0;
    if (client.barberId !== "") {
      count += 100 / 6;
    }
    if (client.time !== "") {
      count += 100 / 6;
    }
    if (client.date !== "" && client.barberId !== "") {
      count += 100 / 6;
    }
    if (nameInput.value !== "") {
      count += 100 / 6;
    }
    if (mailInput.value !== "") {
      count += 100 / 6;
    }
    if (phoneInput.value !== "") {
      count += 100 / 6;
    }

    setProgress(count);
  }, [client, nameInput, mailInput, phoneInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...client,
      name: nameInput.value,
      email: mailInput.value,
      phone: phoneInput.value,
    };
    setTurno(data);
    setStep({ step: 3, data });

    nameInput.clarInput();
    mailInput.clarInput();
    phoneInput.clarInput();

    setClient({
      date: client.date,
      time: "",
      barberId: "",
    });
  };
  const handleDate = (date) => {
    setClient((state) => ({ ...state, date: formatoFecha(date) }));
  };
  const handleTime = (time) => {
    setClient((state) => ({ ...state, time: time }));
  };
  const handleBarber = (barberId) => {
    setClient((state) => ({ ...state, time: "" }));
    setClient((state) => ({ ...state, barberId }));
  };

  return (
    <Layout className=" h-[100vh]    flex justify-center items-center bg-[rgba(255,255,255,.7)] pt-5  ">
      {step.step !== 3 && (
        <form
          className="  border flex flex-col justify-between   h-[80%] w-[90%] md:w-[40rem] md:h-[90%]    bg-white shadow-lg    p-4 rounded-md "
          onSubmit={handleSubmit}
        >
          <header className="    ">
            <h2 className="text-[2rem] m-auto my-0">SACAR TURNO</h2>
            <ProgressBar progress={progress} />
          </header>

          <section className="   h-[85%]  ">
            {step.step === 0 && (
              <FormLayout
                className=" grid place-items-center h-[90%] "
                title={"Peluquero"}
              >
                {barberos.length ? (
                  <ListOfBarbers
                    className={"flex flex-col gap-2 w-[60%] m-auto   "}
                    barberos={barberos}
                    handleBarber={handleBarber}
                    client={client}
                  />
                ) : (
                  <Loader />
                )}
              </FormLayout>
            )}
            {step.step === 1 && (
              <FormLayout
                title={"Fecha y Horario"}
                className=" felx flex-col   "
              >
                <Calendar
                  value={client.date}
                  handleDate={handleDate}
                  disabled={client.barberId === ""}
                />

                <ListOfHours
                  client={client}
                  handleTime={handleTime}
                  horarios={horarios}
                />
              </FormLayout>
            )}

            {step.step === 2 && (
              <FormLayout
                className="p-5 h-full flex flex-col justify-center  "
                title={"Tus datos"}
              >
                <div className="flex flex-col gap-2 ">
                  <Input
                    {...nameInput}
                    title={"Nombre"}
                    type={"text"}
                    className="text-white bg-selected"
                    selcetdColors="text-white bg-selected"
                  />
                  <Input
                    {...mailInput}
                    title="Email"
                    type={"email"}
                    selcetdColors="text-white bg-selected"
                  />
                  <Input
                    {...phoneInput}
                    title="Telefono"
                    type={"text"}
                    selcetdColors="text-white bg-selected"
                  />
                </div>
              </FormLayout>
            )}
          </section>

          <footer className="  flex items-center justify-between  ">
            <button
              disabled={step.step === 0}
              type="button"
              className={` text-center  rounded-md ${
                step.step === 0
                  ? "text-disabled bg-disabled"
                  : " bg-selected text-white"
              } `}
              onClick={() => setStep((s) => ({ ...s, step: s.step - 1 }))}
            >
              <ArrowLeft />
            </button>
            {step.step === 2 && (
              <button
                type="submit"
                disabled={Math.trunc(progress) !== 100}
                className={` transition-all w-[40%] m-auto duration-200 rounded-md  p-0 ${
                  Math.trunc(progress) !== 100
                    ? "border  text-disabled "
                    : " border  text-selected border-selected   hover:text-white hover:bg-selected"
                }`}
              >
                Submit
              </button>
            )}
            <button
              disabled={step.step === 2}
              type="button"
              className={` text-center rounded-md ${
                step.step === 2
                  ? "text-disabled bg-disabled"
                  : "bg-selected text-white"
              } `}
              onClick={() => setStep((s) => ({ ...s, step: s.step + 1 }))}
            >
              <ArrowLeft className={"rotate-180"} />
            </button>
          </footer>
        </form>
      )}
      {step.step === 3 && (
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
                  Dia <strong>{step.data.date}</strong>
                </span>
                <span className="flex gap-2 w-full justify-between">
                  Hora<strong>{step.data.time}</strong>
                </span>
                <span className="flex gap-2 w-full justify-between">
                  {" "}
                  Peluquero<strong>{step.data.barberId}</strong>
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
      )}
    </Layout>
  );
}
