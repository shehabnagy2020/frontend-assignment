import { Dispatch, ReactElement, SetStateAction } from "react";
import { FieldErrors, UseFormRegister, Control } from "react-hook-form";

export interface IFormInput {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  control: Control<any>;
  name: string;
  className?: string;
  icon?: ReactElement;
  placeholder: string;
  type: string;
}
