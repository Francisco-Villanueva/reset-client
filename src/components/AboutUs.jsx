import React from "react";
import logoCircular from "../images/RESET_C.png";
import Layout from "../commons/Layout";

export default function AboutUs() {
  return (
    <Layout className=" h-[100vh] w-full ">
      <section className="flex gap-4 h-1/2 w-full justify-center items-center">
        <div className="flex flex-col items-start gap-2 w-[25%]">
          <img src="/RESET_C_negro.png" className="h-24 aspect-square" />
          <h2 className="uppercase font-bold">exelencia:</h2>
          <p className="font-light w-2/3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            at dignissimos! Nam fugiat totam sunt repellendus minus, unde ad
            omnis!
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 w-[25%]">
          <img src="/RESET_C_negro.png" className="h-24 aspect-square" />
          <h2 className="uppercase font-bold">exelencia:</h2>
          <p className="font-light w-2/3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            at dignissimos! Nam fugiat totam sunt repellendus minus, unde ad
            omnis!
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 w-[25%]">
          <img src="/RESET_C_negro.png" className="h-24 aspect-square" />
          <h2 className="uppercase font-bold">exelencia:</h2>
          <p className="font-light w-2/3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            at dignissimos! Nam fugiat totam sunt repellendus minus, unde ad
            omnis!
          </p>
        </div>
      </section>
      <section className="flex gap-4 h-1/2 w-full justify-center items-center bg-black"></section>
    </Layout>
  );
}
