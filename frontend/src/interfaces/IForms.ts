import { values } from "@/types/All";
import { LatLng } from "leaflet-geosearch/dist/providers/provider.js";
import React from "react";

export interface ISubTitle {
    subTitle: string;
}

export interface IInput {
    label: string;
    type?: "text" | "phone" | "file" | "checkbox" | "submit" | "time"
    name: string;
    value?: values;
    checked?: boolean;
    handleInput?: React.ChangeEventHandler<HTMLInputElement>;
    //handleDate?: React.Dispatch<SetStateAction<string | undefined>>;
    clickButton?: React.MouseEventHandler<HTMLInputElement>;
    maxLength?: number;
}
export interface ITextArea extends IInput {
    handleTextArea: React.ChangeEventHandler<HTMLTextAreaElement>
}
export interface IFields<T> {
    [index: string]: (e: T) => void;
}

export interface IPosition {
    lat: number;
    lng: number;
}
export interface IPositionLocal {
    latlng: IPosition;
}