import React from "react";
import logoCircular from "../images/RESET_C.png";
import Layout from "../commons/Layout";

export default function AboutUs() {
  return (
    <Layout className="bg-black h-[100vh]">
      <article className="h-full text-white flex gap-[2rem] justify-around items-center">
        <img
          src={logoCircular}
          className="object-contain w-1/6  "
          alt="resetlogo"
        />
        <div className="flex flex-col gap-4 w-1/2">
          <h2 className="text-[3rem]">QUIENES SOMOS</h2>
          <span className="  text-x  ">
            Reset Hair Studio nace como un nuevo paradigma de la peluqueria
            moderna. Surge por que entendimos que el cabello no tiene genero, y
            que la peluqueria necesitaba un refresh. que los cortes de presicion
            y los creativos pueden convivir en una misma creacion, haciendo que
            el cliente se lleve el mejor corte personalizado y mejorando su
            imagen exponencialmente. Venimos a llevar la peluqueria y la imagen
            al siguiente nivel. Tu imagen es nuestro compromiso.
          </span>
        </div>
      </article>
    </Layout>
  );
}
