import React from "react";

import Layout from "../commons/Layout";
import FormContent from "./FormContent";
import AlertContent from "./AlertContent";
import FormBody from "./FormBody";

export default function Form() {
  return (
    <Layout
      className=" h-[100vh]    flex justify-center items-center bg-[rgba(255,255,255,.7)] pt-5  "
      id={"form"}
    >
      <FormBody>
        <FormContent />
      </FormBody>
      <AlertContent />
    </Layout>
  );
}
