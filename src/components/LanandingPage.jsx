import { ArrowDropDownIcon } from "@mui/x-date-pickers";
import VideoBackground from "./Video/VideoBackground";
import useWindowWidth from "../hooks/useWindowWidth";

export default function LanandingPage() {
  const windowWidth = useWindowWidth();
  return (
    <section
      className={`  h-full w-full max-md:flex max-md:flex-col   `}
      id="home"
    >
      <div className="  h-full  w-full    flex justify-center items-center max-md:flex-col">
        <div className="h-[100vh] w-[100vw] fixed top-0   ">
          {windowWidth > 600 && (
            <VideoBackground videoSrc={"/landing/wide.mp4"} />
          )}
          {windowWidth <= 600 && (
            <VideoBackground videoSrc={"/landing/vertical.mp4"} />
          )}
        </div>

        <section className=" absolute top-0  h-full flex flex-col gap-8 items-center justify-center   w-full     text-white    ">
          <div className="">
            <img
              src={"/resetLargoBlanco.png"}
              alt="reset Logo"
              className=" h-36   "
            />
          </div>
          <div className=" w-5/6  py-2 ">
            <p className="text-center max-md:font-light  max-md:text-[12px]  uppercase">
              Somos un salón especializado en la imágen masculina. A través de
              un enfoque único que combina técnicas vanguardistas y un profundo
              dominio teórico, asesoramos a nuestros clientes para crear estilos
              que se adapten a sus necesidades y reflejen su personalidad y
              estilo de vida.
            </p>
          </div>

          <div className="  w-full flex flex-col justify-center items-center     ">
            <a href="https://resetsalon.agendapro.com/ar" className="">
              <div className="flex  px-4 py-2 rounded-sm justify-center items-center gap-2 max-md:gap-0  bg-white/25 text-white ">
                <p className="uppercase text-lg font-bold max-md:text-md">
                  Agendá tu Turno
                </p>
                <span className=" grid  place-items-center">
                  <ArrowDropDownIcon className=" text-white " />
                </span>
              </div>
            </a>
            {/* <a href="#form" className="">
              <div className="flex  px-4 py-2 rounded-sm justify-center items-center gap-2 max-md:gap-0  bg-white/25 text-white ">
                <p className="uppercase text-lg font-bold max-md:text-md">
                  Agendá tu Turno
                </p>
                <span className=" grid  place-items-center">
                  <ArrowDropDownIcon className=" text-white " />
                </span>
              </div>
            </a> */}
          </div>
        </section>
      </div>
    </section>
  );
}
