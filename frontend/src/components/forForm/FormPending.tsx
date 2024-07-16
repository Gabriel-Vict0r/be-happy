"use client";
import React, { useEffect, useMemo, useState } from "react";
import Input from "./Input";
import SubTitle from "./SubTitle";
import dynamic from "next/dynamic";
import TextArea from "./TextArea";
import CheckInput from "./CheckInput";
import Submit from "./Submit";
import { useFormContext } from "@/contexts/FormContext";
import { useFormik } from "formik";
import WrapperHour from "./WrapperHour";
import InputHourShift from "./InputHourShift";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import showSwal from "./ModalMessage";
import { useRouter } from "next/navigation";
import { IHours, IOrphonage } from "@/types/All";
import { getToken, revalidateTagAction } from "@/app/actions";

interface IOrphangeEdit {
  orphanage: IOrphonage;
}
const FormPending = ({ orphanage }: IOrphangeEdit) => {
  //console.log(orphanage);
  const SwalForm = withReactContent(Swal);
  //traz o mapa dinamicamente do lado do cliente
  const MapNoSSR = dynamic(() => import("@/components/forForm/MapInput"), {
    ssr: false,
  });
  //extrai os estados/funções de atualização do contexto
  const { position, newPos, setnewPos, setPosition, setCanSubmit, canSubmit } =
    useFormContext();
  useEffect(() => {
    setPosition!({
      lat: orphanage.location.latitude,
      lng: orphanage.location.longitude,
    });
  }, []);
  const MapGetMemoizated = useMemo(() => MapNoSSR, [position]);

  /**<--------------CONF WITH FORMIK ----------------> */

  const router = useRouter();
  const redirectPage = () => router.push("/dashboard");
  const redirectPending = () => router.push("/pending");
  const sendData = async (id: number, formData: string) => {
    const token = await getToken();
    const result = await fetch(
      `${process.env.URL_API}/update-orphanage/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: String(token),
        },
        method: "PUT",
        body: formData,
      }
    );
    const message = await result.json();
    if (!result.ok) {
      showSwal(
        "Erro ao atualizar o cadastro!",
        `${message.field} - ${message.error}`,
        "error"
      );
    } else {
      revalidateTagAction("orphanages");
      revalidateTagAction("pending");
      showSwal(
        "Tudo Ok!",
        "Cadastro atualizado com sucesso!",
        "success",
        redirectPage
      );
    }
  };
  useEffect(() => {
    if (canSubmit) {
      const values = formik.values;
      values.location = { latitude: position.lat, longitude: position.lng };
      console.log("valores", values);
      const data = JSON.stringify(values);
      sendData(orphanage.id, data);
      setnewPos(false);
      setCanSubmit(false);
    }
  }, [canSubmit]);

  type THour = {
    initial_hour: string;
    final_hour: string;
  };
  type Tlocation = {
    latitude?: number;
    longitude?: number;
  };
  interface IValues {
    name: string;
    about: string;
    phone: string;
    instructions: string;
    hours: THour;
    acept_weekend: boolean;
    position: Tlocation;
  }

  const tHours = Array(orphanage.hours)[0];
  const hour: IHours = Object(tHours)[0];

  const formik = useFormik({
    initialValues: {
      name: orphanage.name,
      about: orphanage.about,
      phone: orphanage.phone,
      instructions: orphanage.instructions,
      acepted: true,
      hours: {
        initial_hour: hour.initial_hour,
        final_hour: hour.final_hour,
      },
      acept_weekend: orphanage.acept_weekend,
      location: { latitude: 0, longitude: 0 },
    },
    //validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values) => {
      values.acept_weekend = values.acept_weekend as boolean;
      setnewPos(true);
    },
  });

  const rejectOrphanage = async () => {
    const token = await getToken();
    const reject = await fetch(
      `${process.env.URL_API}/disable-orphanage/${orphanage.id}`,
      {
        method: "PATCH",
        headers: { authorization: String(token) },
      }
    );
    if (!reject.ok) {
      const message = await reject.json();
      return showSwal(
        "Erro ao atualizar o cadastro!",
        `${message.field} - ${message.error}`,
        "error"
      );
    }
    revalidateTagAction("orphanages");
    revalidateTagAction("pending");
    return showSwal(
      "Tudo Ok!",
      "Esse cadastro foi recusado com sucesso!",
      "success",
      redirectPending
    );
  };

  return (
    <form
      className="bg-white w-[95%] md:w-[70%] md:max-w-[44.25rem] rounded-2xl p-4 md:p-8 border-2 border-border-form flex flex-col justify-between gap-6"
      onSubmit={formik.handleSubmit}
      method="POST"
    >
      <SubTitle subTitle="Dados" />
      <div className="w-full h-[291px]">
        <MapGetMemoizated />
      </div>
      <Input
        type="text"
        name="name"
        label="Nome"
        value={formik.values.name}
        handleInput={formik.handleChange}
        error={formik.errors.name}
      />
      <TextArea
        label="Sobre"
        name="about"
        value={formik.values.about}
        handleTextArea={formik.handleChange}
        error={formik.errors.about}
      />
      <Input
        type="phone"
        name="phone"
        label="Número de whatsapp"
        value={formik.values.phone}
        handleInput={formik.handleChange}
        maskType="phone"
        maxLength={15}
        error={formik.errors.phone}
      />
      <SubTitle subTitle="Visitação" />
      <TextArea
        label="Instruções"
        name="instructions"
        value={formik.values.instructions}
        handleTextArea={formik.handleChange}
        error={formik.errors.instructions}
      />
      <WrapperHour>
        <InputHourShift
          label="Inicial"
          name="hours.initial_hour"
          value={formik.values.hours.initial_hour}
          handleInput={formik.handleChange}
          error={formik.errors.hours?.initial_hour}
        />
        <InputHourShift
          label="Final"
          name="hours.final_hour"
          value={formik.values.hours.final_hour}
          handleInput={formik.handleChange}
          error={formik.errors.hours?.final_hour}
        />
      </WrapperHour>
      <CheckInput
        label="Atende fim de semana?"
        type="checkbox"
        name="acept_weekend"
        value={formik.values.acept_weekend.toString()}
        handleInput={formik.handleChange}
        error={formik.errors.acept_weekend}
      />
      <div className="w-full flex justify-between gap-3">
        <Submit
          type="submit"
          name="reject"
          label="Recusar"
          reject
          clickButton={rejectOrphanage}
        />
        <Submit type="submit" name="submit" label="Confirmar" />
      </div>
    </form>
  );
};

export default FormPending;
