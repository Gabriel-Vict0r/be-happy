import React from "react";
import Input from "./Input";
import SubTitle from "./SubTitle";
import dynamic from "next/dynamic";
type Props = {};

const Form = (props: Props) => {
  const MapNoSSR = dynamic(() => import("@/components/forForm/MapInput"), {
    ssr: false,
  });
  return (
    <form className="bg-white w-[70%] max-w-[44.25rem] rounded-2xl p-8 border-2 border-border-form flex flex-col justify-between gap-6">
      <SubTitle subTitle="Dados" />
      <div className="w-full h-[291px]">
        <MapNoSSR />
      </div>
      <Input type="text" name="name" label="Nome"/>
    </form>
  );
};

export default Form;
