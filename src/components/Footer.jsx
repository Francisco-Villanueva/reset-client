import React from "react";
import Instagram from "../commons/Instagram";
import Whatsapp from "../commons/Whatsapp";
import { Map } from "./maps";

export default function Footer() {
  return (
    <footer className="p-10  bg-black text-white h-[40vh]">
      <div className=" flex gap-8 h-full">
        <section className="flex gap-6 items-center h-full">
          <div className="h-5/6">
            <img
              src="/RESET_C.png"
              className="h-full aspect-square object-cover "
            />
          </div>
          <div className="flex flex-col text-sm items-start justify-center gap-4">
            <a href="#home" className="uppercase">
              Home
            </a>
            <a href="#form" className="uppercase">
              Agendá tu turno
            </a>
            <a href="#nosotros" className="uppercase">
              Nosotros
            </a>
            <a href="#" className="uppercase">
              Contacto
            </a>
          </div>
        </section>
        <div className="h-full border"></div>
        <section className="flex flex-col gap-6">
          <div className="uppercase flex flex-col gap-2 items-start text-sm">
            <h2 className="font-semibold">horarios de atención</h2>
            <p>Martes a sábados : 10:00 - 20:00</p>
          </div>
          <div className="flex gap-2 text-xl">
            <Instagram />
            <Whatsapp />
          </div>
        </section>

        <section className="flex-grow">
          <Map />
        </section>
        <section className="flex flex-col text-white font-extralight text-xs uppercase justify-center gap-4">
          <h2 className="font-semibold">Contacto</h2>
          <section className="flex flex-col ">
            <h2 className="font-bold">Gorriti 61</h2>
            <span>Bahía Blanca</span>
            <span>Buenos Aires</span>
            <span>Argentina</span>
          </section>
          <span>+54 291 5779-365</span>
        </section>
      </div>

      {/* <a
        href="https://www.linkedin.com/in/francisco-villanueva-50708a226/"
        className="font-semibold flex gap-4 items-center"
      >
        <span className="border rounded-full w-[2.2rem] h-[2.2rem]  grid place-items-center transition-all duration-200  hover:bg-white hover:text-black">
          FV
        </span>
        <span className="font-extralight text-light-grey">
          Desarrollado por{" "}
          <strong className="font-bold"> Villanueva, Francisco</strong>
        </span>
      </a>

      <div className="flex flex-col items-center   w-full text-md text-light-grey opacity-60  ">
        <span>¿Problemas en el funcionamiento de la página?</span>
        <span>
          Reportar error a <strong>fvillanueva.dev@gmail.com</strong>
        </span>
      </div> */}
    </footer>
  );
}
