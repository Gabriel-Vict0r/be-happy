"use client";
import React from "react";
import Input from "./Input";
import SubTitle from "./SubTitle";
import dynamic from "next/dynamic";
import TextArea from "./TextArea";
import InputImage from "./InputImage";
import CheckInput from "./CheckInput";
import Submit from "./Submit";
import { useFormContext } from "@/contexts/FormContext";
import { IFields } from "@/interfaces/IForms";

const Form = () => {
  //traz o mapa dinamicamente do lado do cliente
  const MapNoSSR = dynamic(() => import("@/components/forForm/MapInput"), {
    ssr: false,
  });

  //extrai os estados/funções de atualização do contexto
  const {
    name,
    pictures,
    phone,
    about,
    instructions,
    hours_visitations,
    open_in_weekend,
    setName,
    setAbout,
  } = useFormContext();

  //estrutura de dados para executar uma função de acordo com a chave do objeto
  const setFields: IFields = {
    name: (e) => {
      setName!(e);
    },
    about: (e) => {
      setAbout!(e);
    },
  };
  const receiveData = (e: React.ChangeEvent<HTMLInputElement>) => {
    //recebe o nome/valor dos inputs
    const nameField = e.currentTarget.name;
    const valueField = e.currentTarget.value;
    console.log(nameField);

    /*verifica qual chave foi passada pelos inputs
    após verificar qual chave é compativel, uma função será executada com base na chave/valor do input*/
    if (setFields[nameField]) {
      setFields[nameField](valueField);
    } else {
      throw new Error("No one of the values passed is available");
    }
  };
  return (
    <form className="bg-white w-[95%] md:w-[70%] md:max-w-[44.25rem] rounded-2xl p-4 md:p-8 border-2 border-border-form flex flex-col justify-between gap-6">
      <SubTitle subTitle="Dados" />
      <div className="w-full h-[291px]">
        <MapNoSSR />
      </div>
      <Input
        type="text"
        name="name"
        label="Nome"
        value={name}
        handleInput={(e) => receiveData(e)}
      />
      <TextArea
        label="Sobre"
        name="about"
        value={about}
        handleTextArea={(e: any) => receiveData(e)}
      />
      <Input
        type="phone"
        name="phone"
        label="Número de whatsapp"
        value={phone}
      />
      <InputImage type="file" name="file" label="Fotos" value={pictures} />
      <SubTitle subTitle="Visitação" />
      <TextArea
        label="Instruções"
        name="instructions"
        value={instructions}
        handleTextArea={(e: any) => receiveData(e)}
      />
      <Input
        type="text"
        name="hours"
        label="Horário das visitas"
        value={hours_visitations}
      />
      <CheckInput
        label="Atende fim de semana?"
        type="checkbox"
        name="aceptWeekend"
        value={open_in_weekend}
      />
      <Submit type="submit" name="submit" label="Confirmar" />
    </form>
  );
};

export default Form;
