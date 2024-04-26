import { ArrowDropDownIcon } from "@mui/x-date-pickers";

export default function LanandingPage() {
  return (
    <section className={`  h-full w-full    m-auto `}>
      <div className="  h-[80%] w-full bg-green relative">
        <img
          src={"/landing/landing1.jpg"}
          alt="joaco"
          className=" h-full aspect-video w-full  object-cover object-top  z-0   "
        />

        <section className="flex flex-col gap-8 items-center justify-center h-full w-full   absolute bottom-0  bg-black/80 text-white">
          <div className="">
            <img
              src={"/RESET_C.png"}
              alt="joaco"
              className=" h-52 aspect-square  "
            />
          </div>
          <div className="w-2/3 ">
            <p className="text-center font-semibold uppercase">
              Somos un salón especializado en la imágen masculina. A través de
              un enfoque único que combina técnias vanguardistas y un profundo
              dominio teórico. Asesoramos a nuestros clientes para crear estilos
              que se adapten a sus necesidades y reflejen su personalidad y
              estilo de vida
            </p>
          </div>
        </section>
      </div>
      <div className="bg white w-full flex flex-col justify-center items-center  h-[20%] border ">
        <div className="flex flex-col justify-center items-center gap-2  ">
          <p className="uppercase text-xl">Agendá tu Turno</p>
          <a
            href="#form"
            className="bg-black transition-all duration-150 text-white h-8 w-8 font-semibold  rounded-full grid  place-items-center"
          >
            <ArrowDropDownIcon className=" text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
