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
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IOrphonage } from "@/types/All";

interface IOrphangeEdit {
  orphanage: IOrphonage;
}
const FormEdit = ({ orphanage }: IOrphangeEdit) => {
  //console.log(orphanage);
  const SwalForm = withReactContent(Swal);
  //traz o mapa dinamicamente do lado do cliente
  const MapNoSSR = dynamic(() => import("@/components/forForm/MapInput"), {
    ssr: false,
  });
  const [imgPreview, setImgPreview] = useState(null);
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

  const sendData = async (formData: FormData) => {
    const result = await fetch(`${process.env.URL_API}/create-orphanage`, {
      headers: {},
      method: "PUT",
      body: formData,
    });
    const message = await result.json();
    if (!result.ok) {
      showSwal(
        "Erro ao realizar o cadastro!",
        `${message.field} - ${message.error}`,
        "error"
      );
    } else {
      showSwal("Tudo Ok!", "cadastro realizado com sucesso!", "success");
      formik.resetForm();
      router.push("/Submited");
    }
  };
  useEffect(() => {
    if (canSubmit) {
      const values = formik.values;
      values.location = { latitude: position.lat, longitude: position.lng };
      console.log("valores", values);
      const formData = new FormData();
      for (let index = 0; index < formik.values.pictures.length; index++) {
        formData.append("image", formik.values.pictures[index]);
      }
      formData.append("orphanage", JSON.stringify(formik.values));
      for (const value of formData.values()) {
        console.log(value);
      }
      sendData(formData);
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
    pictures: never[];
    position: Tlocation;
  }
  interface IImagePreview {
    url: string;
  }

  let arr: IImagePreview[] = [];
  console.log(arr);
  Array(orphanage.pictures).map((img) => {
    let imgTemp = { url: img.url };
    arr.push(imgTemp);
  });
  console.log("array", arr);
  const [imagePreview, setImagePreview] = useState<IImagePreview[]>([]);

  const formik = useFormik({
    initialValues: {
      name: orphanage.name,
      about: orphanage.about,
      phone: orphanage.phone,
      instructions: orphanage.instructions,
      hours: {
        initial_hour: orphanage.hours.initial_hour,
        final_hour: orphanage.hours.final_hour,
      },
      acept_weekend: orphanage.acept_weekend,
      pictures: [],
      location: { latitude: 0, longitude: 0 },
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values) => {
      values.acept_weekend = values.acept_weekend as boolean;
      setnewPos(true);
    },
  });
  const previewImage = (event: any) => {
    formik.setFieldValue("pictures", event.currentTarget.files);

    for (let index = 0; index < event.currentTarget.files.length; index++) {
      let url = URL.createObjectURL(event.currentTarget.files[index]);
      setImagePreview((imagePreview) => [...imagePreview, { url: url }]);
    }
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
      <div className="flex gap-2 w-full flex-wrap items-end">
        <InputImage
          label="Fotos"
          type="file"
          name="pictures"
          handleInput={(event) => previewImage(event)}
        />
        {imagePreview.map((img, index) => (
          <Image
            src={img!}
            alt="preview"
            className="w-24 h-24 object-cover rounded-[20px]"
            width={96}
            objectFit="cover"
            height={96}
            key={index}
          />
        ))}
      </div>
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
      <Submit type="submit" name="submit" label="Confirmar" />
    </form>
  );
};

export default FormEdit;
