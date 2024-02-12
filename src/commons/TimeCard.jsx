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
    <button
      type="button"
      disabled={!time.avaliable || disabled}
      onClick={handleSelectHour}
      className={`  flex gap-2 border rounded-md items-center p-4 ${
        time.avaliable
          ? " text-black font-semibold hover:shadow-lg transition-all duration-300"
          : "text-disabled"
      } ${selected && "text-white bg-selected"} relative `}
    >
      <div
        className={`font-bold ${disabled && "text-disabled "} ${
          !time.avaliable && "text-disabled"
        }  ${className} `}
      >
        {time.hs}hs
      </div>
      <p className={`text-md ${selected ? "" : "text-dark-grey"} `}>
        {time.avaliable ? "Disponible" : "Ocupado"}
      </p>

      {selected && (
        <span className="absolute -top-1 -left-1 text-sm bg-white rounded-full text-selected p-0">
          <CheckIcon className="w-5" />
        </span>
      )}
    </button>
  );
}
