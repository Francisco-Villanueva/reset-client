import React from "react";
import { ArrowLeft } from "../commons/Icons";

export default function Pagination({ step, limit, handleStep }) {
  return (
    <section className="  flex items-center justify-between  ">
      <button
        disabled={step === 0}
        type="button"
        className={` text-center  rounded-md ${
          step === 0 ? "text-disabled bg-disabled" : " bg-black text-white"
        } `}
        onClick={() => handleStep("prev")}
      >
        <ArrowLeft />
      </button>
      {step === 3 && (
        <button
          type="submit"
          disabled={Math.trunc(limit) !== 100}
          className={` transition-all w-[40%] m-auto duration-200 rounded-md p-1 ${
            Math.trunc(limit) !== 100
              ? "border  text-disabled "
              : " border  text-black border-black   hover:text-white hover:bg-black"
          }`}
        >
          Cargar
        </button>
      )}
      <button
        disabled={step === 3}
        type="button"
        className={` text-center rounded-md  ${
          step === 3 ? "text-disabled bg-disabled" : "bg-black text-white"
        } `}
        onClick={() => handleStep("next")}
      >
        <ArrowLeft className={"rotate-180"} />
      </button>
    </section>
  );
}
