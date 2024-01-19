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
      <div className="absolute right-0 bottom-0 m-4">
        <a
          href="#form"
          className="bg-selected text-white rounded-full p-4 font-semibold"
        >
          Sacar Turno
          <ArrowDropDownIcon className="w-6 text-white" />
        </a>
      </div>
    </Layout>
  );
}
