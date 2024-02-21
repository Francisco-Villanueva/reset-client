import React, { useEffect } from "react";
import Input from "../commons/Input";
import FormLayout from "../commons/FormLayout";
import useInput from "../hooks/useInput";
import { useStore } from "../context/BarberContext";

export default function ClientDataForm() {
  const {
    turnoData: { name, email, phone },
  } = useStore();
  const nameInput = useInput(name, "required");
  const mailInput = useInput(email, "email");
  const phoneInput = useInput(phone, "required");
  const { handleTurnoData } = useStore();
  useEffect(() => {
    handleTurnoData("name", nameInput.value);
    handleTurnoData("email", mailInput.value);
    handleTurnoData("phone", phoneInput.value);
  }, [nameInput.value, mailInput.value, phoneInput.value]);
  return (
    <FormLayout
      className="p-5 h-full flex flex-col justify-center  "
      title={"Tus datos"}
    >
      <div className="flex flex-col gap-2 ">
        <Input
          {...nameInput}
          title={"Nombre y Aplledio"}
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
