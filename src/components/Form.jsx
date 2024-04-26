import React from "react";

import Layout from "../commons/Layout";
import FormContent from "./FormContent";
import AlertContent from "./AlertContent";
import FormBody from "./FormBody";
import { useStore } from "../context/BarberContext";

export default function Form() {
  const { selectedBarber, barberos } = useStore();

  const barberImage = selectedBarber.id
    ? `/barbers/barber${barberos.indexOf(selectedBarber) + 1}.jpg`
    : "/barbers/barber1.jpg";

  return (
    <Layout
      className=" h-[100vh]  relative   flex justify-center items-center gap-4   pt-5  "
      id={"form"}
    >
      <div className="h-full absolute w-full">
        <div className="h-[20%] bg-black"></div>
        <div className="h-[40%] bg-white"></div>
        <div className="h-[40%]  bg-black"></div>
      </div>
      <div className=" h-[75%]">
        <img src={barberImage} className="h-full grayscale " />
      </div>
      <FormBody>
        <FormContent />
      </FormBody>
      <AlertContent />

      <div className=" m-auto w-2/3 absolute bottom-0">
        <p className="text-center text-white font-light uppercase">
          Nuestro compromiso por ofrecer un servicio de alta calidad nos impulsa
          a superar y redefinir los estándares de la industria. Somos reset, el
          nuevo paradigma de la peluquería moderna.
        </p>
      </div>
    </Layout>
  );
}
