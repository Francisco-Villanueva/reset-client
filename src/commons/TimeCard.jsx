import React from "react";

export default function TimeCard({
  className = "",
  time,
  selected,
  handleTime,
  disabled,
}) {
  return (
    <button
      type="button"
      disabled={!time.avaliable || disabled}
      className={`border p-4 rounded-md  ${disabled && "text-disabled "} ${
        !time.avaliable && "text-disabled"
      }  ${className} ${selected && "text-white bg-selected"}`}
      onClick={() => handleTime(time.hs)}
    >
      {time.hs}
    </button>
  );
}
