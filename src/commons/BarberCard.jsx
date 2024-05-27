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
      className={`flex   items-center gap-4 text-dark-grey border border-black/50 md:px-2 md:py-1  max-md:rounded-l-full transition-all duration-200 cursor-pointer  ${
        selected && "text-white bg-black"
      }  ${className}`}
      onClick={handleSelectBarber}
    >
      <div
        className={`w-[1rem]  max-md:w-[75px] rounded-full aspect-square  ${
          selected ? "bg-white" : "bg-black"
        } rounded-full `}
      >
        <img
          src="/barbers/barber1.jpg"
          className="h-full rounded-full aspect-square object-cover object-top  md:hidden "
        />
      </div>
      <p className="text-xl uppercase max-md:text-lg ">{barber.name}</p>
    </article>
  );
}
