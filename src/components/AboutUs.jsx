import React from "react";
import Layout from "../commons/Layout";
import { aboutus } from "../mocks/about.us.json";
import { AboutUsSlider, FeedbackSlider } from "./Slider";

export default function AboutUs() {
  return (
    <Layout
      className="  w-full md:pt-[12vh] max-md:h-[100vh] bg-white relative  "
      id={"nosotros"}
    >
      <div className="flex flex-col w-full h-full">
        <section className=" bg-white max-md:hidden   relative  flex items-center justify-center py-8 ">
          <section className=" h-full w-3/4  grid grid-cols-3 gap-4     max-md:hidden  ">
            {aboutus.map((about) => (
              <div
                className="flex flex-col items-start gap-4   "
                key={about.description}
              >
                <img src={about.image} className="h-32 aspect-square " />
                <div className="flex flex-col gap-4">
                  <h2 className="uppercase font-bold text-start  ">
                    {about.title}
                  </h2>
                  <p className=" w-full text-md">{about.description}</p>
                </div>
              </div>
            ))}
          </section>
        </section>
        <section className=" w-full   max-md:h-1/2   md:hidden">
          <AboutUsSlider />
        </section>
        <section className=" max-md:h-1/2 ">
          <FeedbackSlider />
        </section>
      </div>
    </Layout>
  );
}
