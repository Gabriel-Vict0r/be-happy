import { IHour } from "@/interfaces/IHour"

export type values = string | number | readonly string[] | undefined | string[]

export type ImageList = FileList | File | null

export type OrphType = {
    id: number;
    name: string;
    about: string;
    instructions: string;
    acept_weekend: boolean;
    phone: string;
    acepted: boolean;
    id_location: number;
    location: {
        id: number;
        latitude: number;
        longitude: number;
    }
}


export interface ILocation {
    id: number;
    latitude: number;
    longitude: number;
}
export interface IPictures {
    id: number;
    url: string;
    id_orphanage: number;
}
export interface IHours {
    id: number;
    initial_hour: string;
    final_hour: string;
    id_orphanage: string;
}
export interface IOrphonage {
    id: number;
    name: string;
    about: string;
    instructions: string;
    acept_weekend: boolean;
    phone: string;
    acepted: boolean;
    hours: IHours;
    location: ILocation;
    pictures: IPictures;
}