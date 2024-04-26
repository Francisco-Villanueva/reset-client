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
      className={`  flex gap-2 border border-black items-center p-4 ${
        time.avaliable
          ? " text-black font-semibold hover:shadow-lg transition-all duration-300"
          : "text-disabled "
      } ${
        selected && "text-white bg-black"
      } relative max-sm:flex-col max-sm:justify-center max-sm:gap-0 `}
    >
      <div
        className={`font-bold  ${disabled && "text-disabled "} ${
          !time.avaliable && "text-disabled"
        }  ${className} `}
      >
        {time.hs}hs
      </div>

      {selected && (
        <span className="absolute -top-1 -left-1 text-sm bg-white rounded-full text-black p-0">
          <CheckIcon className="w-5" />
        </span>
      )}
    </button>
  );
}
