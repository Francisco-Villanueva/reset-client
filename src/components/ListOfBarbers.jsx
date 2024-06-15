import BarberCard from "../commons/BarberCard";
import { useStore } from "../context/BarberContext";

export default function ListOfBarbers({ barberos = [] }) {
  const { turnoData } = useStore();

  return (
    <div className={`  flex flex-col gap-2 w-[60%]  max-md:w-full   `}>
      {barberos
        .sort((a, b) => a.id - b.id)
        .map((barber) => (
          <BarberCard
            key={barber.id}
            barber={barber}
            selected={turnoData.barberId === barber.id}
          />
        ))}
    </div>
  );
}
