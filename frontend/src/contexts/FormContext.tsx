"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { Iorphanage, IorphanageProvider } from "@/interfaces/Iorphanage";
import { IPosition } from "@/interfaces/IForms";
import { ImageList } from "@/types/All";
import { useMap } from "react-leaflet";

//context with the values and functions that SetValues;
const FormContext = createContext<Iorphanage>({
  position: { lat: 0, lng: 0 },
  setPosition: () => {},
  name: "",
  setName: () => {},
  cnpj: "",
  setCnpj: () => {},
  about: "",
  setAbout: () => {},
  phone: "",
  setPhone: () => {},
  pictures: null,
  setPictures: () => {},
  instructions: "",
  setInstructions: () => {},
  hours_visitations: "",
  setHours_Visitations: () => {},
  open_in_weekend: false,
  setOpen_in_weekend: () => {},
});

//wrapper the components that will use the context
const FormProvider = ({ children }: IorphanageProvider) => {
  //states
  const [position, setPosition] = useState<IPosition>({ lat: 0, lng: 0 });
  const [name, setName] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [pictures, setPictures] = useState<ImageList>(null);
  const [instructions, setInstructions] = useState<string>("");
  const [hours_visitations, setHours_Visitations] = useState<string>("");
  const [open_in_weekend, setOpen_in_weekend] = useState<boolean>(false);
  return (
    <FormContext.Provider
      value={{
        position,
        setPosition,
        name,
        setName,
        cnpj,
        setCnpj,
        about,
        setAbout,
        phone,
        setPhone,
        pictures,
        setPictures,
        instructions,
        setInstructions,
        hours_visitations,
        setHours_Visitations,
        open_in_weekend,
        setOpen_in_weekend,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

//use inside a useFormContextProvider
const useFormContext = (): Iorphanage => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used inside a formContextProvider");
  } else return context;
};

export { useFormContext, FormProvider };
