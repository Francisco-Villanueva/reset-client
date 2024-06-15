import React from "react";
import Layout from "../commons/Layout";
import { aboutus } from "../mocks/about.us.json";
import { AboutUsSlider, FeedbackSlider } from "./Slider";

export default function AboutUs() {
  return (
    <Layout
      className=" h-[100vh] w-full md:pt-[12vh]  bg-white relative  "
      id={"nosotros"}
    >
      <section className=" bg-white  relative  flex items-center justify-center py-8">
        <section className=" h-full w-3/4  grid grid-cols-3 gap-4     max-md:hidden  ">
          {aboutus.map((about) => (
            <div className="flex flex-col items-start gap-4   ">
              <img src={about.image} className="h-32 aspect-square " />
              <div className="flex flex-col gap-4">
                <h2 className="uppercase font-bold text-start ">
                  {about.title}
                </h2>
                <p className=" w-full text-md">{about.description}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
      <section className=" h-1/2 w-full     md:hidden">
        <AboutUsSlider />
      </section>
      <section className="flex gap-4 h-1/2 w-full   justify-center items-center bg-black">
        <FeedbackSlider />
      </section>
    </Layout>
  );
}
