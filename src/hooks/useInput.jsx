import { useState } from "react";

function validator(type) {
  const emailValidator = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.match(emailRegex)) {
      return "Enter a valid email address.";
    }
    return null;
  };

  const passwordValidator = (value) => {
    if (value.length < 6) {
      return "The password must be at least 6 characters long.";
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!regex.test(value)) {
      return "The password must contain at least one uppercase letter, one lowercase letter, and one number.";
    }

    return null;
  };

  const fullNameValidator = (value) => {
    const onlyLettersRegex = /^[a-zA-Z\s]*$/; // Expresión regular para permitir solo letras y espacios
    const containsNumbersRegex = /[0-9]/; // Expresión regular para verificar números
    const wordsRegex = /^\S+\s+\S+$/; // Expresión regular para verificar al menos dos palabras

    if (containsNumbersRegex.test(value)) {
      return "Este campo no debe contener números.";
    }

    if (!onlyLettersRegex.test(value)) {
      return "Este campo debe contener solo letras y espacios.";
    }

    if (!wordsRegex.test(value) && value.length > 2) {
      return "Por favor ingresa tanto el nombre como el apellido.";
    }

    return null;
  };

  switch (type) {
    case "fullName": {
      return fullNameValidator;
    }
    case "password": {
      return passwordValidator;
    }
    case "email": {
      return emailValidator;
    }

    default:
      return null;
  }
}

export default function useInput(initialValue, type, isOptionInput = false) {
  const validateFunction = validator(type);
  const [value, setValue] = useState(initialValue);
  const [selectedOption, setSelectedOption] = useState(initialValue);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    if (validateFunction) {
      setTouched(true);
      !isOptionInput
        ? setError(validateFunction(e.target.value))
        : setError(validateFunction(selectedOption));
    }
  };
  const handleOption = (option) => {
    setSelectedOption(option);
  };

  const onBlur = () => {
    setTouched(true);

    if (validateFunction) {
      !isOptionInput
        ? setError(validateFunction(value))
        : setError(validateFunction(selectedOption));
    }
  };

  const onFocus = () => {
    setTouched(false);
  };
  const clarInput = () => {
    setValue("");
    setSelectedOption("");
  };
  return {
    value,
    error,
    touched,
    onChange,
    onBlur,
    onFocus,
    handleOption,
    selectedOption,
    clarInput,
  };
}
