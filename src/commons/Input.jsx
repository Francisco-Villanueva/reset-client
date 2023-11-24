import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "../commons/Icons";

export default function Input({
  title,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  touched,
  selcetdColors,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : type;

  return (
    <div className={`relative  h-[95px]  `}>
      <label className="block text-dark-grey ml-2 font-sans">{title}</label>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={inputType}
        placeholder={placeholder}
        defaultValue={value}
        className={`w-full  h-14 py-2 rounded-xl border ${
          value !== "" && selcetdColors
        } ${
          error ? "border-selected" : ""
        } text-black p-4  font-sans focus:outline-none`}
      />

      {type === "password" && (
        <button
          type="button"
          className="absolute inset-y-0 right-5 top-2  h-full flex items-center mr-2"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5 text-grey " />
          ) : (
            <EyeIcon className="h-5 w-5 text-grey " />
          )}
        </button>
      )}

      {touched && error ? (
        <p className=" ml-4  text-selected text-sm  ">{error}</p>
      ) : null}
    </div>
  );
}
