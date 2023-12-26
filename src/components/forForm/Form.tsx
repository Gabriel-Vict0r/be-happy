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
    setPhone,
    setPictures,
    setHours_Visitations,
    setOpen_in_weekend,
    setInstructions,
  } = useFormContext();

  //estrutura de dados para executar uma função de acordo com a chave do objeto
  const setFields: IFields<string | FileList | File | boolean> = {
    name: (e) => {
      setName!(e as string);
    },
    about: (e) => {
      setAbout!(e as string);
    },
    phone: (e) => {
      setPhone!(e as string);
    },
    pictures: (e) => {
      setPictures!(e as File);
    },
    instructions: (e) => {
      setInstructions!(e as string);
    },
    visitHours: (e) => {
      setHours_Visitations!(e as string);
    },
    aceptWeekend: (e) => {
      !open_in_weekend ? setOpen_in_weekend!(true) : setOpen_in_weekend!(false);
      //setOpen_in_weekend!(!e as boolean);
      console.log(e, open_in_weekend);
    },
  };
  const receiveData = (e: React.ChangeEvent<HTMLInputElement>) => {
    //recebe o nome
    const nameField = e.currentTarget.name;

    //verifica se o tipo de dado recebido é uma string ou uma lista de arquivos
    let valueField: string | FileList;
    if (nameField === "pictures") {
      valueField = e.target.files!;
    } else {
      valueField = e.currentTarget.value;
    }

    /*verifica qual chave foi passada pelos inputs (baseada no nome do input)
    após verificar qual chave é compativel, uma função será executada com base na chave/valor do input*/
    if (setFields[nameField]) {
      setFields[nameField](valueField!);
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
        handleInput={(e) => receiveData(e)}
      />
      <InputImage
        type="file"
        name="pictures"
        label="Fotos"
        handleInput={(e) => receiveData(e)}
      />
      <SubTitle subTitle="Visitação" />
      <TextArea
        label="Instruções"
        name="instructions"
        value={instructions}
        handleTextArea={(e: any) => receiveData(e)}
      />
      <Input
        type="text"
        name="visitHours"
        label="Horário das visitas"
        value={hours_visitations}
        handleInput={(e) => receiveData(e)}
      />
      <CheckInput
        label="Atende fim de semana?"
        type="checkbox"
        name="aceptWeekend"
        value={open_in_weekend.toString()}
        handleInput={(e) => receiveData(e)}
      />
      <Submit type="submit" name="submit" label="Confirmar" />
    </form>
  );
};

export default Form;
