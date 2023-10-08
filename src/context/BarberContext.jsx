import { Alert } from "@mui/material";
import axios from "axios";
import { createContext, useState } from "react";
import { message } from "antd";
import Swal from "sweetalert2";
const initialState = {
  barbers: [],
  horarios: [],
};
const API_URL = "http://localhost:4000/api";
export const BarberContext = createContext(initialState);

export function BarberProvider({ children }) {
  const [state, setState] = useState({
    barberos: [],
    horarios: [],
    singleBarber: [],
    turnoData: {},
  });

  const getAllBarbers = async () => {
    try {
      const barbers_res = await axios.get(`${API_URL}/barbers`);
      setState((state) => ({ ...state, ["barberos"]: barbers_res.data }));
      return barbers_res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const setTurno = async (data) => {
    try {
      const res_turno = await axios.post(`${API_URL}/appointment`, data);

      const { barberId, date } = data;

      await getHorarios(barberId, date);

      message.success(`Turno agendado! ${data.date} a las ${data.time} hs `, 5);

      return true;
    } catch (error) {
      message.error(`Hubo un error en la carga del turno!`, 5);
      console.log(error);
      return false;
    }
  };

  const getHorarios = async (barberId, date) => {
    try {
      const allHorarios = await axios.get(
        `${API_URL}/hours/${barberId}/${date}`
      );
      setState((state) => ({
        ...state,
        horarios: allHorarios.data,
      }));

      return allHorarios.data;
    } catch (error) {
      console.log({ error });
    }
  };

  const getOneTurno = async (id, navTo) => {
    try {
      const turno = await axios.get(
        `http://localhost:4000/api/appointment/${id}`
      );

      setState((s) => ({ ...s, turnoData: turno.data }));

      if (!turno.data) {
        navTo("/");
      }

      return turno.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTurno = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/appointment/${id}`);

      message.info("Turno cancelado!", 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BarberContext.Provider
      value={{
        ...state,
        getAllBarbers,
        setTurno,
        getHorarios,
        getOneTurno,
        deleteTurno,
      }}
    >
      {children}
    </BarberContext.Provider>
  );
}
