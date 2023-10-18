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

export default function Form({ barberos, closeModal }) {
  const { setTurno, getHorarios, horarios } = useContext(BarberContext);
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
    <form
      className="  flex flex-col border gap-2  w-[60%] p-4 rounded-md relative"
      onSubmit={handleSubmit}
    >
      <header>
        <h2 className="text-[2rem] m-auto my-0">SACAR TURNO</h2>
        <ProgressBar progress={progress} />
      </header>
      <section className="flex justify-around ">
        <aside className="flex flex-col max-w-[60%]">
          <ListOfBarbers
            barberos={barberos}
            handleBarber={handleBarber}
            client={client}
          />
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
        </aside>

        <aside className="flex flex-col gap-4">
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
  );
}
