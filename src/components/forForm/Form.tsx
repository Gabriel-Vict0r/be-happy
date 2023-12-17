import React from "react";
import Input from "./Input";
import SubTitle from "./SubTitle";
type Props = {};

const Form = (props: Props) => {
  return (
    <form className="bg-white w-[70%] max-w-[44.25rem] rounded-2xl p-8">
      <SubTitle subTitle="Dados" />
      <div></div>
      <Input />
    </form>
  );
};

export default Form;
