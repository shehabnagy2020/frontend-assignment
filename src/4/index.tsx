// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";
import FormInput from "./FormInput";
import IconEmail from "../util/svgs/IconEmail";
import IconPassword from "../util/svgs/IconPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("must be valid email").required(),
    password: yup.string().min(8).required(),
  })
  .required();
type formData = yup.InferType<typeof schema>;

const Task5: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    control,
    getFieldState,
    formState: { errors, isValid },
  } = useForm<formData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: formData) => {
    // If you want to do something with form submit

    alert(`Email: ${data.email} \nPassword: ${data.password}`);
  };

  return (
    <div id="task-5">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <h1 className="form-title">Login</h1>
        <p className="form-description">
          Sign in now to continue the amazing journey with us
        </p>
        <FormInput
          name="email"
          placeholder="Email"
          register={register}
          errors={errors}
          control={control}
          type="email"
          icon={<IconEmail className="form-icon" />}
        />
        <FormInput
          name="password"
          placeholder="Password"
          register={register}
          errors={errors}
          control={control}
          type="password"
          icon={<IconPassword className="form-icon" />}
        />
        <div className="forget-container">
          <button onClick={() => alert("forget password")} className="">
            forget password?
          </button>
        </div>
        <button type="submit" className="form-submit" disabled={!isValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Task5;
