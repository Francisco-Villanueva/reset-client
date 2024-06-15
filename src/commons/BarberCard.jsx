import { useStore } from "../context/BarberContext";
import BarberImage from "./BarberImage";

export default function BarberCard({ barber, className = "", selected }) {
  const { handleTurnoData, setStep, setSelectedBarber } = useStore();
  const handleSelectBarber = () => {
    handleTurnoData("barberId", barber.id);
    setSelectedBarber(barber);
  };

  return (
    <article
      className={`flex   items-center gap-4 text-dark-grey  shadow-sm md:px-2  md:py-1  max-md:rounded-l-full border-r-transparent transition-all duration-200 cursor-pointer  ${
        selected ? "text-white bg-black" : " bg-light-grey"
      }  ${className}`}
      onClick={handleSelectBarber}
    >
      <div
        className={`w-[1rem]  max-md:w-[75px] rounded-full aspect-square  ${
          selected ? "bg-white text-black" : "bg-black"
        } rounded-full `}
      >
        <BarberImage
          barber={barber}
          className={
            "h-full rounded-full  aspect-square object-cover object-top  md:hidden  "
          }
        />
      </div>
      <p className="text-xl uppercase max-md:text-lg max-md:font-bold">
        {barber.name}
      </p>
    </article>
  );
}
