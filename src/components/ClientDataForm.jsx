import React, { useEffect } from "react";
import Input from "../commons/Input";
import FormLayout from "../commons/FormLayout";
import useInput from "../hooks/useInput";
import { useStore } from "../context/BarberContext";

export default function ClientDataForm() {
  const {
    turnoData: { name, email, phone },
  } = useStore();
  const nameInput = useInput(name, "fullName");
  const mailInput = useInput(email, "email");
  const phoneInput = useInput(phone, "required");
  const { handleTurnoData } = useStore();
  useEffect(() => {
    handleTurnoData("name", !nameInput.error ? nameInput.value : "");
    handleTurnoData("email", !mailInput.error ? mailInput.value : "");
    handleTurnoData("phone", !phoneInput.error ? phoneInput.value : "");
  }, [
    nameInput.value,
    mailInput.value,
    phoneInput.value,
    nameInput.error,
    mailInput.error,
    phoneInput.error,
  ]);
  return (
    <FormLayout className="p-5 h-full flex flex-col justify-center  ">
      <div className="flex flex-col gap-2 ">
        <Input {...nameInput} title={"Nombre y Apellido"} type={"text"} />
        <Input {...mailInput} title="Email" type={"email"} />
        <Input {...phoneInput} title="Teléfono" type={"number"} />
      </div>
    </FormLayout>
  );
}
