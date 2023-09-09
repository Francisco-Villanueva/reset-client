import { Alert } from "@mui/material";
import axios from "axios";
import { createContext, useState } from "react";
import { message } from "antd";
import Swal from "sweetalert2";
const initialState = {
  barbers: [],
  horarios: [],
  singleBarber: [],
};

export const BarberContext = createContext(initialState);

export function BarberProvider({ children }) {
  const [state, setState] = useState({
    barberos: [],
    horarios: [],
    singleBarber: [],
    dayByBarber: [],
  });

  const getAllBarbers = async () => {
    try {
      const barbers_res = await axios.get("http://localhost:3000/barbers");
      // console.log("EN CONTEXT : ", barbers_res);
      setState((state) => ({ ...state, ["barberos"]: barbers_res.data }));
      return barbers_res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getBarber_byId = async (id) => {
    try {
      const barbers_res = await axios.get(
        `http://localhost:3000/barbers/${id}`
      );
      // console.log("EN CONTEXT : ", barbers_res.data);
      setState((state) => ({ ...state, ["singleBarber"]: barbers_res.data }));

      return barbers_res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const setTurno = async (data) => {
    try {
      const res_turno = await axios.post("http://localhost:3000/turnos", data);

      /*  res_truno.data: 
     
          {
        "id": 1,
        "client_name": "Pancho",
        "client_email": "franciscovillanuevaj99@gmail.com",
        "client_number": "2915275753",
        "time": "18:00",
        "date": "2023-11-02",
        "barberId": 1,
        "dayId": 5,
        "isBooked": true
      }
          */

      const { barberId, date } = res_turno.data;

      getHorarios(barberId, date);

      message.success(`Turno agendado! ${data.date} a las ${data.time} hs `, 5);

      return true;
    } catch (error) {
      message.error(`Hubo un error en la carga del turno!`, 5);
      console.log(error);
      return false;
    }
  };

  const getHorarios = async (barberId, day) => {
    try {
      const allHorarios = await axios.get(
        `http://localhost:3000/horarios/${barberId}/${day}`
      );

      // console.log("GET HORARIOS: ", allHorarios.data);

      setState((state) => ({
        ...state,
        ["horarios"]: allHorarios.data.sort((a, b) => a.id - b.id),
      }));

      return allHorarios.data;
    } catch (error) {
      console.log({ error });
    }
  };

  const getDaysByBarberId = async (id) => {
    try {
      const days_byBarber = await axios.get(
        `http://localhost:3000/days_barber/${id}`
      );

      // console.log({days_byBarber});

      const response = days_byBarber.data.sort(
        (a, b) => new Date(a.day_date) - new Date(b.day_date)
      );
      setState((state) => ({ ...state, ["dayByBarber"]: response }));
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <BarberContext.Provider
      value={{
        ...state,
        getAllBarbers,
        setTurno,
        getHorarios,
        getBarber_byId,
        getDaysByBarberId,
      }}
    >
      {children}
    </BarberContext.Provider>
  );
}
