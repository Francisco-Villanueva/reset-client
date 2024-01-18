import React from "react";
import { useStore } from "../context/BarberContext";
import { CheckIcon } from "./Icons";

export default function TimeCard({
  className = "",
  time,
  selected,
  handleTime,
  disabled,
}) {
  const { setStep } = useStore();
  const handleSelectHour = () => {
    handleTime("time", time.hs);
    setStep(3);
  };
  return (
    <article
      onClick={handleSelectHour}
      className={` cursor-pointer flex gap-2 border rounded-md items-center p-4 ${
        time.avaliable ? " text-selected" : "text-disabled"
      } ${selected && "text-white bg-selected"} relative`}
    >
      <div
        type="button"
        disabled={!time.avaliable || disabled}
        className={`    ${disabled && "text-disabled "} ${
          !time.avaliable && "text-disabled"
        }  ${className} `}
      >
        {time.hs}
      </div>
      <i className="text-sm">{time.avaliable ? "Disponible" : "Ocupado"}</i>

      {selected && (
        <span className="absolute -top-1 -left-1 text-sm bg-white rounded-full text-selected p-0">
          <CheckIcon className="w-5" />
        </span>
      )}
    </article>
  );
}
