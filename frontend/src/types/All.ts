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