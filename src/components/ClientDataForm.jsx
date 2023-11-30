import React, { useEffect } from "react";
import Input from "../commons/Input";
import FormLayout from "../commons/FormLayout";
import useInput from "../hooks/useInput";
import { useStore } from "../context/BarberContext";

export default function ClientDataForm() {
  const nameInput = useInput("", "required");
  const mailInput = useInput("", "required");
  const phoneInput = useInput("", "required");
  const { handleTurnoData } = useStore();
  useEffect(() => {
    handleTurnoData("clientName", nameInput.value);
    handleTurnoData("clientEmail", mailInput.value);
    handleTurnoData("clientPhone", phoneInput.value);
  }, [nameInput.value, mailInput.value, phoneInput.value]);
  return (
    <FormLayout
      className="p-5 h-full flex flex-col justify-center  "
      title={"Tus datos"}
    >
      <div className="flex flex-col gap-2 ">
        <Input
          {...nameInput}
          title={"Nombre"}
          type={"text"}
          className="text-white bg-selected"
          selcetdColors="text-white bg-selected"
        />
        <Input
          {...mailInput}
          title="Email"
          type={"email"}
          selcetdColors="text-white bg-selected"
        />
        <Input
          {...phoneInput}
          title="Telefono"
          type={"text"}
          selcetdColors="text-white bg-selected"
        />
      </div>
    </FormLayout>
  );
}
