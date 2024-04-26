import React from "react";
import Layout from "../commons/Layout";
import Navbar from "./Navbar";
import LanandingPage from "./LanandingPage";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

export default function Home() {
  return (
    <Layout className="h-[100vh] flex flex-col relative items-center   ">
      <Navbar />
      <LanandingPage />
    </Layout>
  );
}
