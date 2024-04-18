"use client";
import React, { useEffect, useMemo, useState } from "react";
import Input from "./Input";
import SubTitle from "./SubTitle";
import dynamic from "next/dynamic";
import TextArea from "./TextArea";
import InputImage from "./InputImage";
import CheckInput from "./CheckInput";
import Submit from "./Submit";
import { useFormContext } from "@/contexts/FormContext";
import { schema } from "@/utils/schema";
import { useFormik } from "formik";
import WrapperHour from "./WrapperHour";
import InputHourShift from "./InputHourShift";
const Form = () => {
  //traz o mapa dinamicamente do lado do cliente
  const MapNoSSR = dynamic(() => import("@/components/forForm/MapInput"), {
    ssr: false,
  });

  //extrai os estados/funções de atualização do contexto
  const { position } = useFormContext();
  const MapGetMemoizated = useMemo(() => MapNoSSR, [position]);

  /**<--------------CONF WITH FORMIK ----------------> */

  const [idLocation, setIdLocation] = useState<string>("");
  const [idOrphanage, setIdOrphanage] = useState<string>("");
  //ASYNC FUNCTIONS FOR SEND DATA
  const sendToBack = async (data: string, method: string, url: string) => {
    const requestOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    };
    const response = await fetch(url, requestOptions);
    const responseData = await response.json();
    const responseCode = response.status;
    console.log(responseCode);
    if (responseCode === 200) {
      setIdLocation(responseData.id);
    } else {
      return `${responseCode} - ${responseData}`;
    }
  };

  const sendData = async (data: string, url: string) => {
    const responseData = await sendToBack(data, method, url);
    console.log(responseData);
  };
  //URLS
  const urlOrphanage = "https://be-happy-beta.vercel.app/orphanage";
  const urlPosition = "https://be-happy-beta.vercel.app/location";
  const urlPictures = "https://be-happy-beta.vercel.app/pictures";
  const method = "post";

  const formik = useFormik({
    initialValues: {
      nome: "",
      cnpj: "",
      sobre: "",
      telefone: "",
      instrucoes: "",
      horario_visitas: { initial_hour: "", final_hour: "" },
      abrir_fim_de_semana: false,
      imagens: null,
      position: {},
    },
    validationSchema: schema,
    onSubmit: (values): void => {
      console.log("do form", position);
      sendData(JSON.stringify(position), urlPosition);
      if (idLocation) {
        values.position = idLocation;
        sendData(JSON.stringify(values), urlOrphanage);
      }
      position.lat = 0;
      position.lng = 0;
      //localStorage.setItem("active", "false");
    },
  });
  return (
    <form
      className="bg-white w-[95%] md:w-[70%] md:max-w-[44.25rem] rounded-2xl p-4 md:p-8 border-2 border-border-form flex flex-col justify-between gap-6"
      onSubmit={formik.handleSubmit}
    >
      <SubTitle subTitle="Dados" />
      <div className="w-full h-[291px]">
        <MapGetMemoizated />
      </div>
      <Input
        type="text"
        name="nome"
        label="Nome"
        value={formik.values.nome}
        handleInput={formik.handleChange}
        error={formik.errors.nome}
      />
      <Input
        type="text"
        name="cnpj"
        label="CNPJ"
        value={formik.values.cnpj}
        maxLength={18}
        handleInput={formik.handleChange}
        maskType="cnpj"
        error={formik.errors.cnpj}
      />
      <TextArea
        label="Sobre"
        name="sobre"
        value={formik.values.sobre}
        handleTextArea={formik.handleChange}
        error={formik.errors.sobre}
      />
      <Input
        type="phone"
        name="telefone"
        label="Número de whatsapp"
        value={formik.values.telefone}
        handleInput={formik.handleChange}
        maskType="phone"
        maxLength={15}
        error={formik.errors.telefone}
      />
      <InputImage
        label="Fotos"
        type="file"
        name="imagens"
        handleInput={(event) =>
          formik.setFieldValue("imagens", event.currentTarget.files)
        }
        //error={formik.errors.imagens}
      />
      <SubTitle subTitle="Visitação" />
      <TextArea
        label="Instruções"
        name="instrucoes"
        value={formik.values.instrucoes}
        handleTextArea={formik.handleChange}
        error={formik.errors.instrucoes}
      />
      <WrapperHour>
        <InputHourShift
          label="Inicial"
          name="horario_visitas.initial_hour"
          value={formik.values.horario_visitas.initial_hour}
          handleInput={formik.handleChange}
          error={formik.errors.horario_visitas?.initial_hour}
        />
        <InputHourShift
          label="Inicial"
          name="horario_visitas.final_hour"
          value={formik.values.horario_visitas.final_hour}
          handleInput={formik.handleChange}
          error={formik.errors.horario_visitas?.final_hour}
        />
      </WrapperHour>
      <CheckInput
        label="Atende fim de semana?"
        type="checkbox"
        name="abrir_fim_de_semana"
        value={formik.values.abrir_fim_de_semana.toString()}
        handleInput={formik.handleChange}
        error={formik.errors.abrir_fim_de_semana}
      />
      <Submit type="submit" name="submit" label="Confirmar" />
    </form>
  );
};

export default Form;
