import { createContext, useContext, useState } from "react";
import { message } from "antd";
import { ApiServices } from "../services";
import useDate from "../hooks/useDate";
const initialState = {
  barbers: [],
  horarios: [],
  selectedBarber: {},
  turnoData: {},
};

export const BarberContext = createContext(initialState);

export function BarberProvider({ children }) {
  const { currentDay } = useDate();
  const [state, setState] = useState({
    barberos: [],
    horarios: [],
    selectedBarber: {},
    turnoData: {
      date: currentDay,
      time: "",
      barberId: "",
      clientName: "",
      clientEmail: "",
      clientPhone: "",
    },
  });

  const getAllBarbers = async () => {
    try {
      const barbers_res = await ApiServices.getAllBarbers();
      setState((state) => ({ ...state, ["barberos"]: barbers_res.data }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleTurnoData = (key, value) => {
    setState((s) => ({
      ...s,
      turnoData: { ...s.turnoData, [key]: value },
    }));
  };
  const setTurno = async () => {
    try {
      const data = {
        date: state.turnoData.date,
        time: state.turnoData.time,
        barberId: state.turnoData.barberId,
        name: state.turnoData.clientName,
        email: state.turnoData.clientEmail,
        phone: state.turnoData.clientPhone,
      };
      await ApiServices.setTurno(data);
      const barber = await ApiServices.getBarberById(data);

      console.log({ barber });
      setState((state) => ({
        ...state,
        selectedBarber: barber,
      }));

      const { barberId, date } = data;
      await getHorarios(barberId, date);
      return true;
    } catch (error) {
      message.error(`Hubo un error en la carga del turno!`, 5);
      return false;
    }
  };

  const getHorarios = async (barberId, date) => {
    try {
      const allHorarios = await ApiServices.getHorarios(barberId, date);

      console.log({ allHorarios });
      setState((state) => ({
        ...state,
        horarios: allHorarios.data,
      }));
    } catch (error) {
      console.log({ error });
    }
  };

  const getOneTurno = async (turnoId, navTo) => {
    try {
      const turno = await ApiServices.getTurnoById(turnoId);

      const barber = turno.data
        ? await ApiServices.getBarberById(turno.data.barberId)
        : null;

      setState((s) => ({
        ...s,
        turnoData: { ...turno.data, barber: barber?.data.name },
      }));

      if (!turno.data) {
        navTo("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTurno = async (turnoId) => {
    try {
      await ApiServices.deletTurno(turnoId);

      message.info("Turno cancelado!");
    } catch (error) {
      console.log(error);
    }
  };

  const getProgress = () => {
    const count = Object.values(state.turnoData).filter(
      (value) => value !== ""
    ).length;

    return count * (100 / Object.values(state.turnoData).length);
  };

  return (
    <BarberContext.Provider
      value={{
        ...state,
        turnoProgress: getProgress(),
        getAllBarbers,
        setTurno,
        getHorarios,
        getOneTurno,
        deleteTurno,
        handleTurnoData,
      }}
    >
      {children}
    </BarberContext.Provider>
  );
}

export const useStore = () => useContext(BarberContext);
