import React from "react";
import Layout from "../commons/Layout";
import Navbar from "./Navbar";
import LanandingPage from "./LanandingPage";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

export default function Home() {
  return (
    <Layout className="h-[100vh] flex flex-col relative items-center  ">
      <Navbar className="h-[10vh] fixed p-2 rounded-sm shadow-2xl border-b z-10" />
      <LanandingPage className="flex-2  " />
      <div className="absolute right-10 bottom-10 ">
        <a
          href="#form"
          className="bg-black transition-all duration-150 text-white rounded-xl p-3 font-semibold grid place-items-center"
        >
          <div>
            Sacar Turno
            <ArrowDropDownIcon className="w-6 text-white" />
          </div>
        </a>
      </div>
    </Layout>
  );
}
