import React from "react";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import Form from "../components/Form";
import Footer from "../components/Footer";

export function Homepage() {
  return (
    <div className="bg-black min-h-[100vh]">
      <Home />
      <Form />
      <AboutUs />
      <Footer />
    </div>
  );
}
