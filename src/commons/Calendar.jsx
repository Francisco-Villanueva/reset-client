import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useStore } from "../context/BarberContext";
import useDate from "../hooks/useDate";

export default function Calendar({ value, disabled }) {
  const [localDate, setValue] = React.useState(dayjs(value));
  const { handleTurnoData, setStep } = useStore();
  const { getWeeksDay } = useDate();
  const handleDisableDates = (date) => {
    const condition_1 = date.$W === 0 || date.$W === 1;

    return condition_1;
  };

  const handleSelectDate = (newValue) => {
    console.log({ DATE: newValue.$d });
    handleTurnoData("date", newValue.$d);
    setValue(newValue);
    setStep(2);
  };

  return (
    <div className=" h-[full]  w-full   overflow-hidden ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          shouldDisableDate={handleDisableDates}
          dayOfWeekFormatter={(date) => getWeeksDay(date)}
          value={localDate}
          onChange={handleSelectDate}
          disabled={disabled}
          minDate={dayjs(new Date())}
          className="w-full h-1/2 "
        />
      </LocalizationProvider>
    </div>
  );
}
