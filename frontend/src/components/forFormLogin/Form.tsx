"use client";
import React from "react";
import SubTitle from "../forForm/SubTitle";
import Input from "../forForm/Input";
import { useFormik } from "formik";
import CheckInput from "../forForm/CheckInput";
import Submit from "../forForm/Submit";

type Props = {};

const Form = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: "false",
    },
    onSubmit: () => {},
  });
  return (
    <form
      action=""
      method="POST"
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-between gap-6 w-11/12"
    >
      <SubTitle subTitle="Fazer login" />
      <Input
        label="E-mail"
        name="email"
        type="email"
        handleInput={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        label="Senha"
        name="password"
        type="password"
        handleInput={formik.handleChange}
        value={formik.values.password}
      />
      <div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="remember"
            value={formik.values.remember}
            onChange={formik.handleChange}
            className="accent-green-normal"
          />
          <label
            htmlFor="remember"
            className="text-title-page font-semibold text-base"
          >
            Lembrar-me
          </label>
        </div>
      </div>
      <Submit label="Entrar" name="signin" />
    </form>
  );
};

export default Form;
