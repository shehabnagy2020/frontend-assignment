import React, { FocusEventHandler, useRef, useState } from "react";
import { IFormInput } from "../util/interfaces/IFormInput";
import IconEye from "../util/svgs/IconEye";
import { useWatch } from "react-hook-form";

const FormInput = ({
  register,
  errors,
  control,
  name,
  className = "",
  icon,
  placeholder,
  type,
}: IFormInput) => {
  const [inputType, setInputType] = useState(type);
  const [isFocused, setIsFocused] = useState(false);
  let errorMsg = errors && errors[name];
  const val = useWatch({ name, control });
  const parentRef = useRef<any>();
  let { onBlur: oldBlur, ...inputProps } = register(name);

  //   const handleInputFocus = () => {
  //     if (parentRef?.current && parentRef?.current.classList)
  //       parentRef.current.classList.add("focused");
  //   };
  //   const handleInputBlur = async (event: FocusEventHandler) => {
  //     if (parentRef?.current && parentRef?.current.classList)
  //       parentRef.current.classList.remove("focused");
  //     await oldBlur(event);
  //   };

  return (
    <div className="form-input-container">
      <label htmlFor={name} className={`form-input-title ${val && "active"}`}>
        {placeholder}
      </label>

      <div
        ref={parentRef}
        className={`icon-input-container ${isFocused && "focused"} ${
          errorMsg && "error"
        }`}
      >
        <label htmlFor={name}>{icon}</label>
        <div className="">
          <input
            {...register(name)}
            type={inputType}
            placeholder={placeholder}
            className={`form-input ${className}`}
            id={name}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() =>
                setInputType((p) => (p === "password" ? "text" : "password"))
              }
            >
              <IconEye className="form-icon" type={inputType} />
            </button>
          )}
        </div>
      </div>
      <span className={`input-error ${errorMsg && "active"}`}>
        {errorMsg?.message?.toString() || ""}
      </span>
    </div>
  );
};

export default FormInput;
