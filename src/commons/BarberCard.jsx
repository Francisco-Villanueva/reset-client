import React from "react";
import { UserIcon } from "./Icons";

export default function BarberCard({
  handleBarber,
  barber,
  className = "",
  selected,
}) {
  return (
    <article
      className={`flex flex-col  items-center gap-2 border rounded-md transition-all duration-200 cursor-pointer  ${
        selected && "text-white bg-selected"
      }  ${className}`}
      onClick={() => handleBarber(barber.id)}
    >
      <UserIcon className={`w-[3rem] `} />
      <p className="text-xl">{barber.name.toUpperCase()}</p>
    </article>
  );
}
