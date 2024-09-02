import React, { useState } from "react";
import { ApiServices } from "../../services";
import { message } from "antd";

const INITAL_CUSTOMER_DATA = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
};
export function CustomerForm() {
  const [data, setData] = useState(INITAL_CUSTOMER_DATA);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await ApiServices.createCustomer(data);
      message.success("Registrado existosamente!");
      setData(INITAL_CUSTOMER_DATA);
    } catch (error) {
      console.error(error.response.status === 409);
      if (error.response.status === 409) {
        message.error("El email ingresado ya se encuentra registrado!");
      } else {
        message.error("Hubo un error. Por favor, vuelva a intentar más tarde.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className=" w-full lg:w-1/3 justify-center    lg:h-full flex flex-col gap-2 max-md:text-sm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="p-4 border"
        placeholder="Nombre "
        name="name"
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="p-4 border"
        placeholder="Apellido"
        name="lastName"
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="p-4 border"
        placeholder="Numero de celular"
        name="phone"
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="p-4 border"
        placeholder="Email"
        name="email"
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-black p-4 text-white"
        disabled={isLoading}
      >
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
