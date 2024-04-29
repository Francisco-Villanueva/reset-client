import {
  ArrowDropDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@mui/x-date-pickers";
import { Slider } from "./Slider";

export default function LanandingPage() {
  const handleChangePhoto = () => {
    alert("hola");
  };
  return (
    <section className={`  h-full w-full    m-auto `} id="home">
      <div className="  h-[80%] w-full  relative flex justify-center items-center">
        <Slider
          images={[
            "/landing/landing1.jpg",
            "/landing/landing2.jpg",
            "/landing/landing3.jpg",
          ]}
        />

        <section className="flex flex-col gap-8 items-center justify-center h-full w-full outline  absolute bottom-0  bg-transparent text-white">
          <div className="">
            <img
              src={"/RESET_C.png"}
              alt="joaco"
              className=" h-52 aspect-square  "
            />
          </div>
          <div className="w-2/3 ">
            <p className="text-center font- uppercase">
              Somos un salón especializado en la imágen masculina. A través de
              un enfoque único que combina técnicas vanguardistas y un profundo
              dominio teórico, asesoramos a nuestros clientes para crear estilos
              que se adapten a sus necesidades y reflejen su personalidad y
              estilo de vida.
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
