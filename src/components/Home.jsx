import React from "react";
import Layout from "../commons/Layout";
import Navbar from "./Navbar";
import LanandingPage from "./LanandingPage";

export default function Home() {
  return (
    <Layout className="h-[100vh] flex flex-col  ">
      <Navbar className="h-[10%] " />
      <LanandingPage className="flex-1  " />
    </Layout>
  );
}
