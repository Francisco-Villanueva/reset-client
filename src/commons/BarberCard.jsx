import { useStore } from "../context/BarberContext";

export default function BarberCard({ barber, className = "", selected }) {
  const { handleTurnoData, setStep, setSelectedBarber } = useStore();
  const handleSelectBarber = () => {
    setStep(1);
    handleTurnoData("barberId", barber.id);
    setSelectedBarber(barber);
  };
  return (
    <article
      className={`flex   items-center gap-4 text-dark-grey border border-black px-2 py-1 transition-all duration-200 cursor-pointer  ${
        selected && "text-white bg-black"
      }  ${className}`}
      onClick={handleSelectBarber}
    >
      <div
        className={`w-[1rem] aspect-square  ${
          selected ? "bg-white" : "bg-black"
        } rounded-full `}
      ></div>
      <p className="text-xl uppercase ">{barber.name}</p>
    </article>
  );
}
