import React, { ReactNode } from "react";
export interface Iorphanage {
    latitude: number | null;
    setLatitude?: React.Dispatch<React.SetStateAction<number | null>>;
    longitude: number | null;
    setLongitude?: React.Dispatch<React.SetStateAction<number | null>>;
    name: string;
    setName?: React.Dispatch<React.SetStateAction<string>>;
    about: string;
    setAbout?: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone?: React.Dispatch<React.SetStateAction<string>>;
    pictures: readonly string[];
    setPictures?: React.Dispatch<React.SetStateAction<string[]>>;
    instructions: string;
    setInstructions?: React.Dispatch<React.SetStateAction<string>>;
    hours_visitations: string;
    setHours_Visitations?: React.Dispatch<React.SetStateAction<string>>;
    open_in_weekend: string;
    setOpen_in_weekend?: React.Dispatch<React.SetStateAction<string>>;
}
export interface IorphanageProvider {
    children: ReactNode;
}