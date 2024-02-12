import { useStore } from "../context/BarberContext";
import { UserIcon } from "./Icons";

export default function BarberCard({ barber, className = "", selected }) {
  const { handleTurnoData, setStep, setSelectedBarber } = useStore();
  const handleSelectBarber = () => {
    setStep(1);
    handleTurnoData("barberId", barber.id);
    setSelectedBarber(barber);
  };
  return (
    <article
      className={`flex   items-center gap-2 text-dark-grey border rounded-md transition-all duration-200 cursor-pointer  ${
        selected && "text-white bg-selected"
      }  ${className}`}
      onClick={handleSelectBarber}
    >
      <UserIcon className={`w-[3rem] `} />
      <p className="text-xl">{barber.name}</p>
    </article>
  );
}
