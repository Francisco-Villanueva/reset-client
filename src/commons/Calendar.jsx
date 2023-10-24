import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function Calendar({ handleDate, value, disabled }) {
  const [localDate, setValue] = React.useState(dayjs(value));

  return (
    <div className=" ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={localDate}
          onChange={(newValue) => {
            handleDate(newValue.$d);
            setValue(newValue);
          }}
          disabled={disabled}
          minDate={dayjs(new Date())}
        />
      </LocalizationProvider>
    </div>
  );
}
