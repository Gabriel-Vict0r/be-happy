import { useContext, createContext, useState } from "react";
import { Iorphanage, IorphanageProvider } from "@/interfaces/Iorphanage";

const formContext = createContext<Iorphanage>({
  latitude: null,
  setLatitude: () => {},
  longitude: null,
  name: "",
  about: "",
  phone: "",
  pictures: [],
  instructions: "",
  hours_visitations: "",
  open_in_weekend: false,
});

const FormProvider = ({ children }: IorphanageProvider) => {
  //states
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [pictures, setPictures] = useState<File[]>([]);
  const [instructions, setInstructions] = useState<string>("");
  const [hours_visitations, setHours_visitations] = useState<string>("");
  const [open_in_weekend, setOpen_in_weekend] = useState<boolean>(false);
  return (
    <formContext.Provider
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
        setHours_visitations,
        open_in_weekend,
        setOpen_in_weekend,
      }}
    >
      {children}
    </formContext.Provider>
  );
};
