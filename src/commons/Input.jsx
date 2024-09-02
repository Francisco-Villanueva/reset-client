import { useState } from "react";
import { CheckIcon, EyeIcon, EyeSlashIcon } from "../commons/Icons";

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
    <div className={`relative    `}>
      <label className="block text-black  font-semibold">{title}</label>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={inputType}
        placeholder={placeholder}
        defaultValue={value}
        className={`w-full  h-14 py-2 rounded-sm border border-black ${
          value !== "" && selcetdColors
        } ${
          value?.length && error ? "border-2" : ""
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
      {value?.length > 3 && !error && (
        <span className="absolute inset-y-0 right-5 top-2  h-full flex items-center mr-2">
          <CheckIcon className="w-5" />
        </span>
      )}

      {value?.length > 0 && touched && error ? (
        <p className=" ml-4  text-dark-grey text-sm  ">{error}</p>
      ) : null}
    </div>
  );
}
