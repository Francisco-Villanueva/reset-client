import React from "react";
import Instagram from "../commons/Instagram";
import Whatsapp from "../commons/Whatsapp";
import { Map } from "./maps";

export default function Footer() {
  return (
    <footer
      className="p-10 max-md:p-4  bg-black text-white h-[40vh] max-md:h-[100vh] max-md:pt-20 relative"
      id="footer"
    >
      <div className=" flex max-md:flex-col gap-8 h-full">
        <section className="flex max-md:flex-col  md:gap-6 items-center md:h-full   max-md:justify-center ">
          <div className="h-[70%] max-md:h-40 flex items-center">
            <img
              src="/resetLargoBlanco.png"
              className="h-full w-full max-md:h-[100%] aspect-square object-contain "
            />
          </div>
          <div className="flex md:flex-col text-sm md:items-start justify-center   gap-4">
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

        <div className="h-full border max-md:hidden"></div>

        <div className="flex gap-8 h-full  max-md:flex-col  max-md:justify-center max-md:gap-14 flex-grow">
          <section className="flex max-md:items-center max-md:justify-around md:flex-col gap-6">
            <div className="uppercase flex flex-col gap-2 items-start text-sm">
              <h2 className="font-semibold">horarios de atención</h2>
              <p>Martes a sábados : 10:00 - 20:00</p>
            </div>
            <div className="flex gap-2 text-xl">
              <Instagram />
              <Whatsapp />
            </div>
          </section>

          <section className="md:flex-grow max-md:h-44">
            <Map />
          </section>
          <section className="flex flex-col gap-2 ">
            <div className="flex md:flex-col max-md:justify-around  text-white font-extralight text-xs uppercase justify-start gap-4">
              <h2 className="font-semibold max-md:hidden">Contacto</h2>
              <section className="flex flex-col  ">
                <h2 className="font-bold">Gorriti 61</h2>
                <span>Bahía Blanca</span>
                <span>Buenos Aires</span>
                <span>Argentina</span>
              </section>
              <span>+54 9 291 419-1087</span>
            </div>
            <div className="md:h-full items-center justify-center flex">
              <a
                href="https://www.linkedin.com/in/francisco-villanueva-50708a226/"
                className="font-semibold flex gap-4 justify-center items-center"
              >
                <span className="font-extralight text-light-grey">
                  Desarrollado por{" "}
                  <strong className="font-bold"> Villanueva, Francisco</strong>
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
