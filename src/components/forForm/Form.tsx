import React from "react";
import Input from "./Input";
import SubTitle from "./SubTitle";
import dynamic from "next/dynamic";
import TextArea from "./TextArea";
import InputImage from "./InputImage";
import CheckInput from "./CheckInput";
import Submit from "./Submit";
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
      <Input type="text" name="name" label="Nome" />
      <TextArea label="Sobre" name="about" />
      <Input type="phone" name="phone" label="Número de whatsapp" />
      <InputImage type="file" name="file" label="Fotos" />
      <SubTitle subTitle="Visitação" />
      <TextArea label="Instruções" name="instructions" />
      <Input type="text" name="hours" label="Horário das visitas" />
      <CheckInput
        label="Atende fim de semana?"
        type="checkbox"
        name="aceptWeekend"
      />
      <Submit type="submit" name="submit" label="Confirmar"/>
    </form>
  );
};

export default Form;
