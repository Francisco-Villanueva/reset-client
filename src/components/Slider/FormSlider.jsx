import "./slider.css";
import { useStore } from "../../context/BarberContext";
import FormContent from "../FormContent";

export function FormSlider() {
  const { step } = useStore();

  return (
    <div className="slider  w-full h-full relative   ">
      <div
        className=" flex h-full  w-full  z-30 "
        style={{
          transform: `translatex(-${step * 100}%)`,
          transition: "transform 0.1s ease",
        }}
      >
        {[1, 2, 3, 4].map((index) => (
          <div className="min-w-full   " key={index}>
            <FormContent />
          </div>
        ))}
      </div>
    </div>
  );
}
