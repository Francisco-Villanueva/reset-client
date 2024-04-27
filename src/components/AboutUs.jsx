import React from "react";
import logoCircular from "../images/RESET_C.png";
import Layout from "../commons/Layout";
import { aboutus } from "../mocks/about.us.json";
import { FeedbackSlider, Slider } from "./Slider";

export default function AboutUs() {
  return (
    <Layout className=" h-[100vh] w-full " id={"nosotros"}>
      <section className=" h-1/2 w-3/4 m-auto grid grid-cols-3 items-center p-10 ">
        {aboutus.map((about) => (
          <div className="flex flex-col items-start gap-4  ">
            <img src="/RESET_C_negro.png" className="h-24 aspect-square" />
            <div className="flex flex-col gap-4">
              <h2 className="uppercase font-bold text-start ">{about.title}</h2>
              <p className=" w-full">{about.description}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="flex gap-4 h-1/2 w-full justify-center items-center bg-black">
        <FeedbackSlider />
      </section>
    </Layout>
  );
}
