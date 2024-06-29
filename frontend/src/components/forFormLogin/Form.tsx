"use client";
import React from "react";
import SubTitle from "../forForm/SubTitle";
import Input from "../forForm/Input";
import { useFormik } from "formik";

type Props = {};

const Form = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
      />
    </form>
  );
};

export default Form;
