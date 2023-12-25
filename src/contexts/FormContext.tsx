"use client";
import { useContext, createContext, useState } from "react";
import { Iorphanage, IorphanageProvider } from "@/interfaces/Iorphanage";

//context with the values and functions that SetValues;
const FormContext = createContext<Iorphanage>({
  latitude: null,
  setLatitude: () => {},
  longitude: null,
  setLongitude: () => {},
  name: "",
  setName: () => {},
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
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [pictures, setPictures] = useState<FileList | File | null>(null);
  const [instructions, setInstructions] = useState<string>("");
  const [hours_visitations, setHours_Visitations] = useState<string>("");
  const [open_in_weekend, setOpen_in_weekend] = useState<boolean>(false);
  return (
    <FormContext.Provider
      value={{
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        name,
        setName,
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