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
      className=" bg-black h-[100vh]  relative   flex justify-center items-center gap-4   pt-5  "
      id={"form"}
    >
      <div className="h-full absolute w-full">
        <div className="h-[20%] bg-black"></div>
        <div className="h-[40%] bg-white "></div>
        <div className="h-[40%]  bg-black"></div>
      </div>
      <div className="h-[75%] max-md:h-[85%] w-full flex justify-center  max-md:flex-col  max-md:items-center gap-2 outline  ">
        <div className=" h-full max-md:h-1/2  max-md:hidden top-10 ">
          <BarberImage
            barber={selectedBarber ? selectedBarber : barberos[0]}
            className="h-full grayscale "
          />
        </div>
        <FormBody>
          <FormContent />
        </FormBody>
      </div>
      <AlertContent />

      <div className=" m-auto w-2/3 absolute bottom-0 max-md:w-[90%] pb-4 max-md:text-sm">
        <p className="text-center text-white font-light uppercase ">
          Nuestro compromiso por ofrecer un servicio de alta calidad nos impulsa
          a superar y redefinir los estándares de la industria. Somos reset, el
          nuevo paradigma de la peluquería moderna.
        </p>
      </div>
    </Layout>
  );
}
