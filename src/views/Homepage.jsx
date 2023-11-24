import React from "react";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import Form from "../components/Form";
import Footer from "../components/Footer";

export function Homepage() {
  return (
    <div className="">
      <Home />
      <AboutUs />
      <Form />
      <Footer />
    </div>
  );
}
