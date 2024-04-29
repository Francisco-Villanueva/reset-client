import React from "react";
import { useStore } from "../context/BarberContext";
import useDate from "../hooks/useDate";
import { CalendarIcon, ClockIcon, PersonIcon } from "./Icons";

export default function ProgressBar() {
  const { turnoProgress, turnoData, step, selectedBarber } = useStore();

  const { slashedDate } = useDate();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full h-1 bg-gray-200 rounded-lg">
        <div
          className="h-full bg-black rounded-lg transition-all duration-200"
          style={{ width: `${turnoProgress}%` }}
        ></div>
      </div>

      <div className="w-full flex justify-between border rounded-md p-2">
        <div className="flex gap-1 ">
          <PersonIcon className="w-4  text-dark-grey" />
          <p className="font-semibold text-dark-grey">
            {selectedBarber.name ? selectedBarber.name : "-"}
          </p>
        </div>
        <div className="flex gap-1 ">
          <CalendarIcon className="w-4  text-dark-grey" />

          <p className="font-semibold text-dark-grey">
            {turnoData.date && step > 1 ? slashedDate(turnoData.date) : "-"}
          </p>
        </div>
        <div className="flex gap-1 ">
          <ClockIcon className="w-4  text-dark-grey" />
          <p className="font-semibold text-dark-grey">
            {turnoData.time ? turnoData.time : "-"}
          </p>
        </div>
      </div>
    </div>
  );
}
