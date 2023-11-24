import { useStore } from "../context/BarberContext";
import { UserIcon } from "./Icons";

export default function BarberCard({ barber, className = "", selected }) {
  const { handleTurnoData } = useStore();
  return (
    <article
      className={`flex   items-center gap-2 border rounded-md transition-all duration-200 cursor-pointer  ${
        selected && "text-white bg-selected"
      }  ${className}`}
      onClick={() => handleTurnoData("barberId", barber.id)}
    >
      <UserIcon className={`w-[3rem] `} />
      <p className="text-xl">{barber.name.toUpperCase()}</p>
    </article>
  );
}
