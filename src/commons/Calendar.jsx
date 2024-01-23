import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useStore } from "../context/BarberContext";
import { ApiServices } from "../services";
import useDate from "../hooks/useDate";

export default function Calendar({ value, disabled }) {
  const [localDate, setValue] = React.useState(dayjs(value));
  const { handleTurnoData, setStep, turnoData } = useStore();
  const { getWeeksDay } = useDate();
  const handleDisableDates = (date) => {
    const condition_1 = date.$W === 0 || date.$W === 1;
    // if (!condition_1) {
    //   ApiServices.getHorarios(turnoData.barberId, date.$d).then((res) => {
    //     console.log(res.data.some((hs) => hs.avaliable));
    //     return res.data.some((hs) => hs.avaliable);
    //   });
    // }

    return condition_1;
  };

  return (
    <div className="">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          shouldDisableDate={handleDisableDates}
          dayOfWeekFormatter={(date) => getWeeksDay(date)}
          value={localDate}
          onChange={(newValue) => {
            handleTurnoData("date", newValue.$d);
            setValue(newValue);
            setStep(2);
          }}
          disabled={disabled}
          minDate={dayjs(new Date())}
          sx={{
            width: "100%",
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
