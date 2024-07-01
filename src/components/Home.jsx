import React from "react";
import Layout from "../commons/Layout";
import Navbar from "./Navbar";
import LanandingPage from "./LanandingPage";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <LanandingPage />
    </Layout>
  );
}
