import React from "react";
import { CustomerForm } from "../components/customer";

export function NewsLetterPage() {
  return (
    <div className="  " id={"Customer"}>
      <section className=" h-full w-full px-10 py-4 max-lg:gap-4  bg-white relative flex max-lg:flex-col  items-center border-b   ">
        <div className="lg:flex-grow lg:max-w-[66%] text-[60px]  max-md:text-[25px] flex flex-col   lg:pl-20  max-lg:h-1/2 max-lg:justify-center max-lg:w-full">
          <p className="  ml-1">SUSCRIBITE </p>
          <p className="  ml-[50px]  lg:ml-[100px]"> PARA RECIBIR</p>
          <p className=" ml-[120px] lg:ml-[250px]"> LAS ÚLTIMAS </p>
          <p className=" ml-[30px] "> NOVEDADES</p>
        </div>
        <CustomerForm />
      </section>
    </div>
  );
}
