import React, { useContext, useEffect, useState } from "react";
import "../styles/Form.scss";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import Loadingbutton from "../commons/LoadingButton";
import { BarberContext } from "../context/BarberContext";
import Cards from "./Trunos/Cards";
import useDate from "../hooks/useDate";
import ClientForm from "./ClientForm/ClientForm";
export default function Form({ barberos }) {
  const { setTurno, getHorarios, horarios } = useContext(BarberContext);
  const { currentDay } = useDate();
  const [client, setClient] = useState({
    client_name: "",
    client_email: "",
    client_number: "",
    date: currentDay,
    time: "",
    barberId: 1,
  });

  useEffect(() => {
    getHorarios(client.barberId, client.date);
    // console.log(client);
  }, [client]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setClient({
      client_name: "",
      client_email: "",
      client_number: "",
      date: client.date,
      time: "",
      barberId: 1,
    });
    return setTurno(client);
  };

  const handleInputChange = (e) => {
    console.log({ value: e.target.value, name: e.target.name });
    setClient((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleTime = (time) => {
    // console.log("handleTime : ", time);
    setClient((state) => ({ ...state, ["time"]: time }));
  };
  const handleBarber = (barb) => {
    // console.log({ barb });
    setClient((state) => ({ ...state, ["barberId"]: barb }));
  };

  return (
    <div className="section_page">
      <form action="" className="form_main" onSubmit={handleSubmit}>
        <h1>PEDIR TURNO</h1>
        <div>
          <Cards
            barbers={barberos}
            handleBarber={handleBarber}
            client={client}
          />
        </div>
        <input
          type="date"
          name="date"
          defaultValue={client.date} // Formato YYYY-MM-DD
          onChange={handleInputChange}
        />

        <Cards turnos={horarios} handleTime={handleTime} client={client} />

        <div className="client_data">
          <ClientForm handleInputChange={handleInputChange} client={client} />
        </div>

        <button type="submit" className="btn_submit">
          Submit
        </button>

        <Loadingbutton handler={handleSubmit} />
      </form>
    </div>
  );
}
