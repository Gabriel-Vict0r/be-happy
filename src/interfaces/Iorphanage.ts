import React, { ReactNode } from "react";
export interface Iorphanage {
    latitude: number | null;
    setLatitude: React.Dispatch<React.SetStateAction<number | null>>;
    longitude: number | null;
    name: string;
    about: string;
    phone: string;
    pictures: File[];
    instructions: string;
    hours_visitations: string;
    open_in_weekend: boolean;
}
export interface IorphanageProvider {
    children: ReactNode;
}