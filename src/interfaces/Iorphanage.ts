import { ImageList } from "@/types/All";
import React, { ReactNode } from "react";
import { IPosition } from "./IForms";

export interface Iorphanage {
    position: IPosition;
    setPosition?: React.Dispatch<React.SetStateAction<IPosition>>;
    name: string;
    setName?: React.Dispatch<React.SetStateAction<string>>;
    about: string;
    setAbout?: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone?: React.Dispatch<React.SetStateAction<string>>;
    pictures: ImageList;
    setPictures?: React.Dispatch<React.SetStateAction<ImageList>>;
    instructions: string;
    setInstructions?: React.Dispatch<React.SetStateAction<string>>;
    hours_visitations: string;
    setHours_Visitations?: React.Dispatch<React.SetStateAction<string>>;
    open_in_weekend: boolean;
    setOpen_in_weekend?: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IorphanageProvider {
    children: ReactNode;
}