import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useStore } from "../context/BarberContext";

export default function Calendar({ value, disabled }) {
  const [localDate, setValue] = React.useState(dayjs(value));
  const { handleTurnoData, setStep } = useStore();
  return (
    <div className="">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
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
