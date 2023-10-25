import React from "react";
import Layout from "../commons/Layout";
import Navbar from "./Navbar";
import LanandingPage from "./LanandingPage";

export default function Home() {
  return (
    <Layout className="h-[100vh] flex flex-col relative items-center  ">
      <Navbar className="h-[10vh] fixed p-2 rounded-sm shadow-2xl border-b z-10" />
      <LanandingPage className="flex-2  " />
    </Layout>
  );
}
