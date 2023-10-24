import React, { useContext, useEffect, useState } from "react";
import "../styles/Form.scss";
import "react-datepicker/dist/react-datepicker.css";
import { BarberContext } from "../context/BarberContext";
import useDate from "../hooks/useDate";
import Calendar from "../commons/Calendar";
import BarberCard from "../commons/BarberCard";
import TimeCard from "../commons/TimeCard";
import Input from "../commons/Input";
import useInput from "../hooks/useInput";
import { isAnyPropertyEmpty } from "../utils/isObjectEmpty";
import ProgressBar from "../commons/ProgressBar";
import { IconX } from "../commons/Icons";
import ListOfBarbers from "./ListOfBarbers";
import ListOfHours from "./ListOfHours";
import Layout from "../commons/Layout";

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

  useEffect(() => {
    getHorarios(client.barberId, client.date);
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
    <Layout className="grid place-items-center ">
      <form
        className="  flex flex-col  justify-between border gap-4 w-[80%] h-full  p-4 rounded-md "
        onSubmit={handleSubmit}
      >
        <header>
          <h2 className="text-[2rem] m-auto my-0">SACAR TURNO</h2>
          <ProgressBar progress={progress} />
        </header>

        <section className="flex h-[90%]  justify-around gap-4">
          <aside className=" h-full">
            <ListOfBarbers
              className={"flex flex-col gap-2 "}
              barberos={barberos}
              handleBarber={handleBarber}
              client={client}
            />
          </aside>
          <aside className="flex h-full   w-[50%] flex-col gap-5">
            <Calendar
              value={client.date}
              handleDate={handleDate}
              disabled={client.barberId === ""}
            />
            <hr className="w-1/3 " />
            <strong>Horarios disponibles</strong>
            <ListOfHours
              client={client}
              handleTime={handleTime}
              horarios={horarios}
            />
          </aside>

          <aside className="flex flex-col gap-4  w-[35%]">
            <h3 className="text-[1.1rem]">Tus datos</h3>
            <hr />
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
                type={"number"}
                selcetdColors="text-white bg-selected"
              />
            </div>
          </aside>
        </section>

        <button
          type="submit"
          disabled={Math.trunc(progress) !== 100}
          className={` transition-all w-[40%] m-auto duration-200 rounded-md  p-4  ${
            Math.trunc(progress) !== 100
              ? "border  text-disabled "
              : " border  text-selected border-selected   hover:text-white hover:bg-selected"
          }`}
        >
          Submit
        </button>
      </form>
    </Layout>
  );
}
