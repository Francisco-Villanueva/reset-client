import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-black text-white  h-[20vh] flex justify-center items-center flex-col gap-2">
      <a
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
      </div>
    </footer>
  );
}
