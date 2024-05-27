import { ArrowDropDownIcon } from "@mui/x-date-pickers";
import { Slider } from "./Slider";

export default function LanandingPage() {
  return (
    <section
      className={`  h-full w-full max-md:flex max-md:flex-col    m-auto `}
      id="home"
    >
      <div className=" max-md:h-[90%] h-[80%]  w-full  relative flex justify-center items-center max-md:flex-col">
        <div className="h-full flex items-center justify-center">
          <Slider
            images={[
              "/landing/landing1.jpg",
              "/landing/landing2.jpg",
              "/landing/landing3.jpg",
            ]}
          />
        </div>
        <section className="flex flex-col gap-8 items-center justify-center md:h-full w-full   bg-transparent text-white  absolute bottom-0  m  max-md:h-1/4">
          <div className="max-md:hidden">
            <img
              src={"/resetLargoBlanco.png"}
              alt="reset Logo"
              className=" h-36   "
            />
          </div>
          <div className="w-2/3 max-md:w-5/6 max-md:text-sm py-2 ">
            <p className="text-center max-md:font-light max-md:text-[10px] uppercase">
              Somos un salón especializado en la imágen masculina. A través de
              un enfoque único que combina técnicas vanguardistas y un profundo
              dominio teórico, asesoramos a nuestros clientes para crear estilos
              que se adapten a sus necesidades y reflejen su personalidad y
              estilo de vida.
            </p>
          </div>
        </section>
      </div>
      <div className="bg white  w-full flex flex-col justify-center items-center md:h-[20%]  flex-grow  ">
        <div className="flex flex-col justify-center items-center gap-2 max-md:gap-0  ">
          <p className="uppercase text-xl max-md:text-md">Agendá tu Turno</p>
          <a
            href="#form"
            className="bg-black max-md:bg-black/80 transition-all duration-150 text-white h-8 w-8 max-md:h-6 max-md:w-6 font-semibold  rounded-full grid  place-items-center"
          >
            <ArrowDropDownIcon className=" text-white " />
          </a>
        </div>
      </div>
    </section>
  );
}
