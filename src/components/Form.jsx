import Layout from "../commons/Layout";
import FormContent from "./FormContent";
import AlertContent from "./AlertContent";
import FormBody from "./FormBody";
import { useStore } from "../context/BarberContext";
import BarberImage from "../commons/BarberImage";

export default function Form() {
  const { selectedBarber, barberos } = useStore();

  return (
    <Layout
      className=" bg-black   h-[100vh]  relative   flex justify-center items-center gap-4  pt-14 max-md:pt-0   "
      id={"form"}
    >
      <div className="h-full absolute w-full z-0">
        <div className="h-[20%] bg-black"></div>
        <div className="h-[40%] bg-white "></div>
        <div className="h-[40%]  bg-black"></div>
      </div>
      <section className="flex flex-col  w-full h-full items-center ">
        <div className=" h-[85%] max-md:h-full w-full flex justify-center  max-md:flex-col  max-md:items-center gap-2  ">
          <div className=" h-full max-md:h-1/2  max-md:hidden top-10 ">
            <BarberImage
              barber={selectedBarber ? selectedBarber : barberos[0]}
              className="h-full grayscale "
            />
          </div>
          <FormBody>
            <FormContent />
          </FormBody>
          <AlertContent />
        </div>

        <div className=" m-auto w-2/3 max-md:w-[90%] max-md:text-sm z-10 ">
          <p className="text-center text-white font-light uppercase ">
            Nuestro compromiso por ofrecer un servicio de alta calidad nos
            impulsa a superar y redefinir los estándares de la industria. Somos
            reset, el nuevo paradigma de la peluquería moderna.
          </p>
        </div>
      </section>
    </Layout>
  );
}
