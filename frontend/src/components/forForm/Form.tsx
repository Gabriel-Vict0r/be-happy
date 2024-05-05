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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import showSwal from "./ModalMessage";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
const Form = () => {
  const SwalForm = withReactContent(Swal);
  //traz o mapa dinamicamente do lado do cliente
  const MapNoSSR = dynamic(() => import("@/components/forForm/MapInput"), {
    ssr: false,
  });

  //extrai os estados/funções de atualização do contexto
  const { position, newPos, setnewPos } = useFormContext();
  const MapGetMemoizated = useMemo(() => MapNoSSR, [position]);

  /**<--------------CONF WITH FORMIK ----------------> */

  const [idLocation, setIdLocation] = useState<string>("");
  const [idOrphanage, setIdOrphanage] = useState<string>("");
  const router = useRouter();
  //ASYNC FUNCTIONS FOR SEND DATA
  const sendToBack = async (
    data: string | any,
    method: string,
    url: string,
    files?: File[]
  ) => {
    const requestOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    };
    const requestImage = {
      method: method,
      headers: {},
      body: data,
    };
    const idType = /(\w+)$/.exec(url);
    let response: any;
    if (idType![1] === "picture") {
      console.log("header usado do picture");
      response = await fetch(url, requestImage);
    } else {
      response = await fetch(url, requestOptions);
    }
    const responseData = await response.json();
    const responseCode = response.status;
    if (responseCode === 200) {
      if (idType![1] === "location") {
        console.log(responseData.id);
        // () => setIdLocation(responseData.id);
        // console.log("localização apos envio", idLocation);
        return responseData.id;
      } else if (idType![1] === "orphanage") {
        console.log(responseData.id);
        return responseData.id;
      } else if (idType![1] == "picture") {
        return responseData;
      } else if (idType![1] == "hour") {
        const id: string = responseData.id_orphanage;
        return id;
      }
    } else {
      return showSwal(
        "Erro ao cadastrar",
        responseData.message || responseData,
        "error"
      );
    }
  };
  const sendData = async (
    data: string | any,
    url: string,
    files?: File[]
  ): Promise<void | string> => {
    //console.log("localizacao", data);
    return await sendToBack(data, method, url, files);
    //console.log(responseData);
  };
  //URLS
  const urlOrphanage = "https://be-happy-beta.vercel.app/orphanage";
  const urlPosition = "https://be-happy-beta.vercel.app/location";
  const urlPictures = "https://be-happy-beta.vercel.app/picture";
  const urlHour = "https://be-happy-beta.vercel.app/hour";
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
      imagens: [],
      position: "",
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values) => {
      if (idLocation !== "") {
        values.position = idLocation;
        values.abrir_fim_de_semana = values.abrir_fim_de_semana as boolean;
        const dataJson = JSON.stringify(values);
        const res_orph = sendData(dataJson, urlOrphanage);
        console.log(res_orph);
        setnewPos(false);
      } else {
        setnewPos(true);
        sendData(JSON.stringify(position), urlPosition)
          .then((res_position) => {
            if (res_position) {
              values.position = res_position;
              console.log("id local 103", values.position);
              console.log("idLocation = ", res_position);
              values.abrir_fim_de_semana =
                values.abrir_fim_de_semana as boolean;
              console.log(JSON.stringify(values));
              const dataJson = JSON.stringify(values);
              setnewPos(false);
              return sendData(dataJson, urlOrphanage);
            }
          })
          .then((id_orph) => {
            //setIdOrphanage();
            console.log(`id do orfanato: ${id_orph}`);
            setIdOrphanage(id_orph!);
            const hour = values.horario_visitas;
            const hourOrph = { ...hour, id_orphanage: id_orph };
            const hourJSON = JSON.stringify(hourOrph);
            console.log("horas", hourJSON);
            return sendData(hourJSON, urlHour);
          })
          .then((id_orphanage) => {
            const photosLenght = values.imagens.length;
            const formData = new FormData();
            for (let index = 0; index < photosLenght; index++) {
              formData.append("image", values.imagens[index]);
            }
            //formData.append("image", values.imagens[0]);

            console.log(id_orphanage);
            formData.append("id_orphanage", id_orphanage!);
            //const orphId = { id_orphanage: idOrphanage };
            //console.log(photos);
            console.log(formData.values);
            sendData(formData, urlPictures);
          })
          .then(() => {
            router.push("/Submited");
          })
          .catch((err) => console.log(err));
      }
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
