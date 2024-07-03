"use client";
import React from "react";
import SubTitle from "../forForm/SubTitle";
import Input from "../forForm/Input";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import CheckInput from "../forForm/CheckInput";
import Submit from "../forForm/Submit";
import { useRouter } from "next/navigation";

type Props = {};

const Form = (props: Props) => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: "false",
    },
    onSubmit: async (values) => {
      //console.log(values);

      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (!result!.ok) {
        formik.setFieldError(
          "password",
          "Credenciais inválidas. Tente novamente."
        );
        return;
      }
      if (result?.ok) {
        router.replace("/dashboard");
      }
    },
  });
  return (
    <form
      method="POST"
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-between gap-6 "
    >
      <SubTitle subTitle="Fazer login" />
      <Input
        label="E-mail"
        name="email"
        type="email"
        handleInput={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Input
        label="Senha"
        name="password"
        type="password"
        handleInput={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
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
      <Submit label="Entrar" name="signin" type="submit" />
    </form>
  );
};

export default Form;
